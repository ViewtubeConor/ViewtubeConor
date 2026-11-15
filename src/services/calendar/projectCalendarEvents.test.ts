import { describe, expect, it } from "vitest"
import { projectProjectsToCalendarEvents } from "./projectCalendarEvents"

describe("projectProjectsToCalendarEvents", () => {
  it("projects scheduled projects as stable, source-owned publish events", () => {
    const [event] = projectProjectsToCalendarEvents([{
      id: "project-1",
      name: "Episode outline",
      videoTitle: "The finished episode",
      publishDate: "2026-11-18",
      tasks: [],
    }])

    expect(event).toMatchObject({
      id: "projects:project-1:publish",
      source: { owner: "projects", recordType: "project", recordId: "project-1", projectId: "project-1" },
      kind: "publish",
      title: "The finished episode",
      status: "scheduled",
      startDate: "2026-11-18",
    })
    expect(event.endDate).toBeUndefined()
  })

  it("projects dated tasks with their owning project and completion status", () => {
    const events = projectProjectsToCalendarEvents([{
      id: "project-2",
      name: "Campaign",
      publishDate: "",
      tasks: [
        { id: "task-open", text: "Edit video", dueDate: "2026-11-19", completed: false },
        { id: "task-done", text: "Approve thumbnail", dueDate: "2026-11-20", completed: true },
      ],
    }])

    expect(events).toHaveLength(2)
    expect(events[0]).toMatchObject({
      id: "projects:task-open:task",
      source: { owner: "projects", recordType: "project_task", recordId: "task-open", projectId: "project-2" },
      kind: "task",
      title: "Edit video",
      status: "planned",
      startDate: "2026-11-19",
    })
    expect(events[1]).toMatchObject({
      id: "projects:task-done:task",
      status: "completed",
      startDate: "2026-11-20",
    })
  })

  it("rejects impossible dates and ignores unscheduled records", () => {
    const events = projectProjectsToCalendarEvents([{
      id: "project-3",
      name: "Invalid dates",
      publishDate: "2026-02-30",
      tasks: [
        { id: "bad", text: "Bad date", dueDate: "2026-02-30", completed: false },
        { id: "none", text: "No due date", completed: false },
      ],
    }])

    expect(events).toEqual([])
  })

  it("uses a stable fallback title and does not mutate project input", () => {
    const project = {
      id: "project-4",
      name: "Untitled project",
      publishDate: "2026-11-21T18:00:00.000Z",
      tasks: [],
    }
    const before = structuredClone(project)
    const events = projectProjectsToCalendarEvents([project])

    expect(events[0].title).toBe("Untitled project")
    expect(events[0].startDate).toBe("2026-11-21")
    expect(project).toEqual(before)
  })
})
