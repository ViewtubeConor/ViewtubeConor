import type {
  CalendarDateKey,
  CalendarEventProjection,
} from "./calendarEventContract"

export interface ProjectCalendarTaskSource {
  id: string
  text?: string | null
  dueDate?: string | Date | number | null
  completed?: boolean
}

export interface ProjectCalendarProjectSource {
  id: string
  name?: string | null
  videoTitle?: string | null
  publishDate?: string | Date | number | null
  tasks?: ProjectCalendarTaskSource[] | null
}

const toCalendarDateKey = (value?: string | Date | number | null): CalendarDateKey | null => {
  if (value == null || value === "") return null

  let year: number
  let month: number
  let day: number

  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return null
    year = value.getFullYear()
    month = value.getMonth() + 1
    day = value.getDate()
  } else if (typeof value === "number") {
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return null
    year = date.getFullYear()
    month = date.getMonth() + 1
    day = date.getDate()
  } else {
    const match = /^(\d{4})-(\d{2})-(\d{2})(?:$|T)/.exec(value.trim())
    if (match) {
      year = Number(match[1])
      month = Number(match[2])
      day = Number(match[3])
      const validation = new Date(year, month - 1, day)
      if (
        validation.getFullYear() !== year ||
        validation.getMonth() !== month - 1 ||
        validation.getDate() !== day
      ) return null
    } else {
      const date = new Date(value)
      if (Number.isNaN(date.getTime())) return null
      year = date.getFullYear()
      month = date.getMonth() + 1
      day = date.getDate()
    }
  }

  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

const projectTitle = (project: ProjectCalendarProjectSource) =>
  project.videoTitle?.trim() || project.name?.trim() || "Untitled project"

/**
 * Read-only projection of existing Project and Project.tasks records.
 *
 * This adapter never creates calendar-owned records and never mutates its
 * inputs. Schedule/task changes must continue to be written through the
 * existing Projects owner APIs.
 */
export const projectProjectsToCalendarEvents = (
  projects: readonly ProjectCalendarProjectSource[],
): CalendarEventProjection[] => {
  const events: CalendarEventProjection[] = []

  for (const project of projects) {
    const publishDate = toCalendarDateKey(project.publishDate)
    if (publishDate) {
      events.push({
        id: `projects:${project.id}:publish`,
        source: {
          owner: "projects",
          recordType: "project",
          recordId: project.id,
          projectId: project.id,
        },
        kind: "publish",
        title: projectTitle(project),
        status: "scheduled",
        startDate: publishDate,
      })
    }

    for (const task of project.tasks ?? []) {
      const dueDate = toCalendarDateKey(task.dueDate)
      if (!dueDate) continue

      events.push({
        id: `projects:${task.id}:task`,
        source: {
          owner: "projects",
          recordType: "project_task",
          recordId: task.id,
          projectId: project.id,
        },
        kind: "task",
        title: task.text?.trim() || "Untitled task",
        status: task.completed ? "completed" : "planned",
        startDate: dueDate,
      })
    }
  }

  return events
}
