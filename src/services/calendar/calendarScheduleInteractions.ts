export type ProjectCalendarSchedulePatch = {
  publishDate: string
  updatedAt: number
}

export type ProjectCalendarScheduleUpdater = (
  projectId: string,
  patch: ProjectCalendarSchedulePatch,
) => unknown

const isValidCalendarDate = (value: string): boolean => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return false
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const date = new Date(year, month - 1, day)
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
}

/**
 * Move a Project publication date through the existing Projects owner callback.
 * This deliberately does not create calendar records or write range fields.
 */
export const moveProjectToCalendarDate = ({
  projectId,
  date,
  updateProject,
  updatedAt = Date.now(),
}: {
  projectId: string
  date: string
  updateProject: ProjectCalendarScheduleUpdater
  updatedAt?: number
}): boolean => {
  if (!projectId.trim() || !isValidCalendarDate(date)) return false
  updateProject(projectId, { publishDate: date, updatedAt })
  return true
}
