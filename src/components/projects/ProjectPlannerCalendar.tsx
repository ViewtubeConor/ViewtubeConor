import React, { useMemo, useState } from "react"
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
} from "lucide-react"
import { useBrain } from "../../context/useBrain"
import { getContentBuild } from "../../services/asset-engine/ContentBuildRepository"
import { getProjectCalendarPublicationBadge } from "./projectCalendarPublicationState"
import { projectProjectsToCalendarEvents } from "../../services/calendar/projectCalendarEvents"
import type { CalendarEventProjection } from "../../services/calendar/calendarEventContract"
import type { DayTask, Project } from "../../types"
import { SubToolboxSection, SubToolboxStack } from "../subtoolbox/SubToolboxLayouts"
import { StudioButton, StudioCheckbox, StudioCloseableBadge, StudioDropdown, StudioSplitLeftButton, StudioSquareIconButton, StudioCalendarEventChip, StudioCalendarMediaRail, StudioCalendarThumbnailEventChip, StudioCalendarMultiDayBar } from "../../studio-ui"
import "../../styles/toolbox-entry.css"
import "./ProjectPlannerCalendar.css"

type ProjectPlannerCalendarProps = {
  onOpenProject?: (projectId: string) => void
}

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())
const addDays = (date: Date, amount: number) => {
  const next = new Date(date)
  next.setDate(next.getDate() + amount)
  return startOfDay(next)
}
const dateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
const parseDate = (value?: string | Date | number | null) => {
  if (value == null || value === "") return null
  // Prefer local calendar parsing for date-only ISO strings so timezone offsets
  // cannot shift a scheduled publish date to the previous/next day.
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : startOfDay(value)
  }
  if (typeof value === "number") {
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) ? null : startOfDay(parsed)
  }
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:$|T)/.exec(value.trim())
  if (match) {
    const year = Number(match[1])
    const month = Number(match[2])
    const day = Number(match[3])
    const parsed = new Date(year, month - 1, day)
    // Reject impossible dates rather than silently normalizing them.
    if (parsed.getFullYear() !== year || parsed.getMonth() !== month - 1 || parsed.getDate() !== day) return null
    return startOfDay(parsed)
  }
  // Legacy project records may contain parseable date strings in a display format.
  const fallback = new Date(value)
  return Number.isNaN(fallback.getTime()) ? null : startOfDay(fallback)
}
const dateLabel = (date: Date) =>
  date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" })
const monthLabel = (date: Date) =>
  date.toLocaleDateString(undefined, { month: "long", year: "numeric" })
const projectTitle = (project: Project) => project.videoTitle || project.name

const ProjectPlannerCalendar: React.FC<ProjectPlannerCalendarProps> = ({ onOpenProject }) => {
  const { brain, updateProject } = useBrain()
  const projects = useMemo(() => Array.isArray(brain.projects) ? brain.projects : [], [brain.projects])
  const [cursor, setCursor] = useState(() => startOfDay(new Date()))
  const [selectedDate, setSelectedDate] = useState(() => dateKey(new Date()))
  const [quickAddProjectId, setQuickAddProjectId] = useState("")
  const [scheduleFeedback, setScheduleFeedback] = useState("")
  const todayKey = dateKey(new Date())

  const publicationBadgeForProject = (project: Project) => {
    const plannedDate = parseDate(project.publishDate)
    try {
      const binding = project.contentBuildId ? getContentBuild(project.contentBuildId)?.youtube ?? null : null
      const remoteDate = binding?.scheduledAt ? parseDate(binding.scheduledAt) : null
      return getProjectCalendarPublicationBadge({
        binding,
        plannedDateKey: plannedDate ? dateKey(plannedDate) : null,
        remoteScheduledDateKey: remoteDate ? dateKey(remoteDate) : null,
      })
    } catch {
      return project.contentBuildId
        ? getProjectCalendarPublicationBadge({
            binding: null,
            plannedDateKey: plannedDate ? dateKey(plannedDate) : null,
            remoteScheduledDateKey: null,
            stateUnavailable: true,
          })
        : null
    }
  }

  const calendarEvents = useMemo(() => projectProjectsToCalendarEvents(projects), [projects])
  const projectById = useMemo(() => new Map(projects.map(project => [project.id, project])), [projects])
  const scheduledProjects = useMemo(
    () => projects.filter(project => calendarEvents.some(event => event.source.recordType === "project" && event.source.recordId === project.id)),
    [projects, calendarEvents],
  )
  const unscheduledProjects = useMemo(
    () => projects.filter(project => !calendarEvents.some(event => event.source.recordType === "project" && event.source.recordId === project.id)),
    [projects, calendarEvents],
  )
  const eventsForDate = (key: string) => calendarEvents.filter(event => event.startDate === key || (event.endDate != null && event.startDate <= key && event.endDate >= key))
  const projectsForDate = (key: string) => eventsForDate(key)
    .filter(event => event.source.recordType === "project")
    .map(event => projectById.get(event.source.recordId))
    .filter((project): project is Project => Boolean(project))
  const tasksForDate = (key: string) => eventsForDate(key)
    .filter(event => event.source.recordType === "project_task")
    .flatMap(event => {
      const project = event.source.projectId ? projectById.get(event.source.projectId) : undefined
      const task = project?.tasks?.find(item => item.id === event.source.recordId)
      return project && task ? [{ ...task, projectId: project.id, projectTitle: projectTitle(project) }] : []
    })
  const selectedProjects = useMemo(() => projectsForDate(selectedDate), [calendarEvents, selectedDate, projectById])
  const selectedTasks = useMemo(() => tasksForDate(selectedDate), [calendarEvents, selectedDate, projectById])
  const days = useMemo(() => {
    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1)
    const gridStart = addDays(first, -first.getDay())
    return Array.from({ length: 42 }, (_, index) => addDays(gridStart, index))
  }, [cursor])

  const scheduleSelectedProject = () => {
    const project = projects.find(item => item.id === quickAddProjectId)
    const scheduledDate = parseDate(selectedDate)
    if (!project || !scheduledDate) {
      setScheduleFeedback("Choose a project to schedule it for this date.")
      return
    }

    // Keep workflow status (active/completed/archived) independent from schedule status.
    updateProject(project.id, { publishDate: selectedDate, updatedAt: Date.now() })
    setCursor(new Date(scheduledDate.getFullYear(), scheduledDate.getMonth(), 1))
    setScheduleFeedback(projectTitle(project) + " scheduled for " + dateLabel(scheduledDate))
    setQuickAddProjectId("")
  }
  const toggleProjectTask = (projectId: string, taskId: string) => {
    const project = projects.find(item => item.id === projectId)
    if (!project) return
    const tasks = (project.tasks || []).map((task: DayTask) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    )
    updateProject(projectId, { tasks, updatedAt: Date.now() })
  }

  const clearSchedule = (projectId: string) => {
    updateProject(projectId, { publishDate: "", updatedAt: Date.now() })
    const project = projects.find(item => item.id === projectId)
    setScheduleFeedback(project ? projectTitle(project) + " removed from the publishing calendar." : "Schedule cleared.")
  }

  return (
    <SubToolboxStack density="comfortable" className="vt-project-planner-calendar">

      <div className="vt-project-planner-calendar__shell">
          <section className="vt-project-planner-calendar__detail" aria-label="Selected date details">
            <header className="vt-project-planner-calendar__detail-head">
              <div className="vt-project-planner-calendar__selected-label"><CalendarDays size={17} /><strong>Schedule for</strong></div>
              <h2 className="vt-project-planner-calendar__selected-date">{dateLabel(parseDate(selectedDate) || new Date())}</h2>
              <div className="vt-project-planner-calendar__selected-count">{selectedProjects.length} scheduled project{selectedProjects.length === 1 ? "" : "s"} · {selectedTasks.length} task{selectedTasks.length === 1 ? "" : "s"}</div>
            </header>

            <div>
              {selectedProjects.length ? selectedProjects.map(project => (
                <div key={project.id} className="vt-project-planner-calendar__project-row">
                  <StudioCalendarMediaRail aspectRatio={project.plan?.format === "short" || project.plan?.videoFormat === "short" ? "9:16" : "16:9"} split="double" thumbnailSrc={project.thumbnailUrl} label={projectTitle(project)} leftLabel="VIDEO" rightLabel="PUBLISH" className="vt-project-planner-calendar__media-rail" />
                  <StudioCalendarThumbnailEventChip label={projectTitle(project)} thumbnailSrc={project.thumbnailUrl} thumbnailAlt={`${projectTitle(project)} thumbnail`} kind="publish" status="scheduled" />
                  <button type="button" className="vt-project-planner-calendar__project-open" onClick={() => onOpenProject?.(project.id)}>
                    <span className="vt-project-planner-calendar__project-title">{projectTitle(project)}</span>
                    <span className="vt-project-planner-calendar__project-meta">{project.status || "Project"} · View project</span>
                    {(() => { const badge = publicationBadgeForProject(project); return badge ? <StudioCalendarEventChip label={badge.label} kind={badge.kind} status={badge.status} /> : null })()}
                  </button>
                  <StudioCloseableBadge label="UNSCHEDULE" entering={false} onClose={() => clearSchedule(project.id)} className="vt-project-planner-calendar__unschedule" />
                </div>
              )) : null}
              {selectedTasks.map(task => (
                <div key={`${task.projectId}-${task.id}`} className="vt-project-planner-calendar__project-row">
                  <StudioCheckbox checked={Boolean(task.completed)} sizeVariant="compact" aria-label={`${task.completed ? "Mark incomplete" : "Mark complete"}: ${task.text}`} onClick={() => toggleProjectTask(task.projectId, task.id)} />
                  <StudioCalendarEventChip label="TASK" kind="task" status={task.completed ? "done" : "open"} />
                  <div className="vt-project-planner-calendar__project-open">
                    <span className="vt-project-planner-calendar__project-title">{task.text}</span>
                    <span className="vt-project-planner-calendar__project-meta">{task.projectTitle} · {task.completed ? "Completed" : "Not completed"}</span>
                  </div>
                  <StudioCalendarEventChip label={task.completed ? "DONE" : "OPEN"} kind={task.completed ? "milestone" : "task"} />
                </div>
              ))}
              {!selectedProjects.length && !selectedTasks.length ? <div className="vt-project-planner-calendar__empty">Nothing planned for this day yet. Choose a project below to schedule it.</div> : null}
            </div>

            <div className="vt-project-planner-calendar__quick-add">
              <SubToolboxSection label="Schedule a project">
                <StudioDropdown value={quickAddProjectId} onChange={value => { setQuickAddProjectId(value); setScheduleFeedback("") }} ariaLabel="Choose project to schedule or move" placeholder="CHOOSE A PROJECT" options={[{ value: "", label: "Choose a project" }, ...projects.map(project => { const existingDate = parseDate(project.publishDate); return { value: project.id, label: `${project.name}${existingDate ? ` · scheduled ${dateKey(existingDate)}` : " · not scheduled"}` } })]} />
              </SubToolboxSection>
              <StudioSplitLeftButton sizeVariant="standard" tone="accent" icon={<Clock3 size={14} />} disabled={!quickAddProjectId} onClick={scheduleSelectedProject}>
                {projects.some(project => project.id === quickAddProjectId && parseDate(project.publishDate)) ? "Move project here" : "Schedule project here"}
              </StudioSplitLeftButton>
              {scheduleFeedback ? <div role="status" aria-live="polite" className="vt-project-planner-calendar__feedback">{scheduleFeedback}</div> : null}
              {!projects.length ? <StudioCalendarEventChip label="NO PROJECTS AVAILABLE" kind="reminder" status="create a project first" /> : null}
            </div>
          </section>

        <header className="vt-project-planner-calendar__toolbar">
          <div className="vt-project-planner-calendar__month-nav">
            <StudioSquareIconButton label="Previous month" icon={<ChevronLeft size={15} />} sizeVariant="compact" onClick={() => setCursor(date => new Date(date.getFullYear(), date.getMonth() - 1, 1))} />
            <div className="vt-project-planner-calendar__month-title" aria-live="polite">{monthLabel(cursor)}</div>
            <StudioSquareIconButton label="Next month" icon={<ChevronRight size={15} />} sizeVariant="compact" onClick={() => setCursor(date => new Date(date.getFullYear(), date.getMonth() + 1, 1))} />
          </div>
          <StudioButton sizeVariant="compact" tone="neutral" onClick={() => { const today = startOfDay(new Date()); setCursor(today); setSelectedDate(dateKey(today)); setScheduleFeedback("") }}>Today</StudioButton>
        </header>

        <div className="vt-project-planner-calendar__body">
          <main className="vt-project-planner-calendar__main">
            <div className="vt-project-planner-calendar__weekdays" aria-hidden="true">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <div className="vt-project-planner-calendar__weekday" key={day}>{day}</div>)}
            </div>
            <div className="vt-project-planner-calendar__days">
              {days.map(day => {
                const key = dateKey(day)
                const dayProjects = projectsForDate(key)
                const dayTasks = tasksForDate(key)
                const dayItems = eventsForDate(key).map(event => ({
                  event,
                  id: event.id,
                  label: event.title,
                  type: event.kind === "publish" ? "project" as const : "task" as const,
                  status: event.status,
                }))
                const currentMonth = day.getMonth() === cursor.getMonth()
                return (
                  <section key={key} className={`vt-project-planner-calendar__day-wrap`} style={{ minWidth: 0 }}>
                    <button
                      type="button"
                      className={`vt-project-planner-calendar__day ${currentMonth ? "" : "is-muted"} ${selectedDate === key ? "is-selected" : ""}`}
                      aria-label={dateLabel(day)}
                      aria-pressed={selectedDate === key}
                      onClick={() => {
                        setSelectedDate(key)
                        // Keep the month heading and selected date in sync when a
                        // user chooses a leading/trailing day from the adjacent month.
                        if (!currentMonth) setCursor(new Date(day.getFullYear(), day.getMonth(), 1))
                        setScheduleFeedback("")
                      }}
                    >
                      <span className={`vt-project-planner-calendar__day-number ${key === todayKey ? "is-today" : ""}`}>{day.getDate()}</span>
                      <span className="vt-project-planner-calendar__markers" aria-hidden="true">
                        {dayItems.slice(0, 2).map(item => {
                          const hasRange = Boolean(item.event.endDate && item.event.endDate > item.event.startDate)
                          if (hasRange) {
                            const segment = key === item.event.startDate ? "start" : key === item.event.endDate ? "end" : "middle"
                            return <StudioCalendarMultiDayBar key={item.id} label={item.label} kind={item.event.kind === "publish" ? "publish" : "task"} status={item.status} segment={segment} className="vt-project-planner-calendar__marker" />
                          }
                          const project = item.event.source.projectId ? projectById.get(item.event.source.projectId) : projectById.get(item.event.source.recordId)
                          return item.type === "project"
                            ? <StudioCalendarThumbnailEventChip key={item.id} label={item.label} thumbnailSrc={project?.thumbnailUrl} kind="publish" status={item.status} className="vt-project-planner-calendar__marker" />
                            : <StudioCalendarEventChip key={item.id} label={item.label} kind="task" status={item.status} sizeVariant="mini" className="vt-project-planner-calendar__marker" />
                        })}
                        {dayItems.length > 2 ? <StudioCalendarEventChip label={`+${dayItems.length - 2} MORE`} kind="reminder" className="vt-project-planner-calendar__marker" /> : null}
                      </span>
                    </button>
                  </section>
                )
              })}
            </div>
          </main>


        </div>

        <footer className="vt-project-planner-calendar__footer">
          <span>{scheduledProjects.length} scheduled</span>
          <span>{unscheduledProjects.length} unscheduled</span>
          <span>Schedule changes save to the project</span>
        </footer>
      </div>
    </SubToolboxStack>
  )
}

export default ProjectPlannerCalendar
