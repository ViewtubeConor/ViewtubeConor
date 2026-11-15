import { describe, expect, it, vi } from "vitest"
import { moveProjectToCalendarDate } from "./calendarScheduleInteractions"

describe("moveProjectToCalendarDate", () => {
  it("persists a dropped project date through the existing Projects owner callback", () => {
    const updateProject = vi.fn()
    const moved = moveProjectToCalendarDate({
      projectId: "project-1",
      date: "2026-11-18",
      updatedAt: 123,
      updateProject,
    })

    expect(moved).toBe(true)
    expect(updateProject).toHaveBeenCalledOnce()
    expect(updateProject).toHaveBeenCalledWith("project-1", {
      publishDate: "2026-11-18",
      updatedAt: 123,
    })
  })

  it("rejects invalid dates and missing project identity without writing", () => {
    const updateProject = vi.fn()
    expect(moveProjectToCalendarDate({ projectId: "", date: "2026-11-18", updateProject })).toBe(false)
    expect(moveProjectToCalendarDate({ projectId: "project-1", date: "2026-02-30", updateProject })).toBe(false)
    expect(moveProjectToCalendarDate({ projectId: "project-1", date: "", updateProject })).toBe(false)
    expect(updateProject).not.toHaveBeenCalled()
  })

  it("does not mutate or require a calendar-owned record", () => {
    const updateProject = vi.fn()
    const input = { projectId: "project-1", date: "2026-11-18", updatedAt: 456, updateProject }
    expect(moveProjectToCalendarDate(input)).toBe(true)
    expect(input).toEqual({ projectId: "project-1", date: "2026-11-18", updatedAt: 456, updateProject })
  })
})
