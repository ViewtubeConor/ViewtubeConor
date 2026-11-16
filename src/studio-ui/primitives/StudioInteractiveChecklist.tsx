import React, { useMemo } from "react"
import type { StudioControlSize } from "../tokens"
import "../../styles/studio-control-entry.css"
import "../../styles/studio-interactive-checklist.css"

export type StudioChecklistBadgeTone = "high" | "medium" | "today" | "urgent" | "neutral"

export type StudioChecklistItem = {
  id: string
  label: string
  description?: string
  badge?: string
  badgeTone?: StudioChecklistBadgeTone
  checked?: boolean
  disabled?: boolean
}

export type StudioInteractiveChecklistProps = {
  items: readonly StudioChecklistItem[]
  onItemChange?: (id: string, checked: boolean) => void
  controlled?: boolean
  size?: Extract<StudioControlSize, "standard" | "compact">
  className?: string
  style?: React.CSSProperties
  title?: string
}

/**
 * Interactive checklist with per-row checkbox + label + optional badge and a
 * bottom progress bar whose fill is driven by the percentage of checked rows.
 */
export function StudioInteractiveChecklist({
  items,
  onItemChange,
  controlled = false,
  size = "standard",
  className,
  style,
  title,
}: StudioInteractiveChecklistProps) {
  const [localChecked, setLocalChecked] = React.useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {}
    for (const item of items) init[item.id] = Boolean(item.checked)
    return init
  })

  React.useEffect(() => {
    if (controlled) return
    setLocalChecked((prev) => {
      const next = { ...prev }
      for (const item of items) {
        if (!(item.id in next)) next[item.id] = Boolean(item.checked)
      }
      return next
    })
  }, [items, controlled])

  const isChecked = (item: StudioChecklistItem) =>
    controlled ? Boolean(item.checked) : Boolean(localChecked[item.id])

  const { percent } = useMemo(() => {
    const total = items.length
    const completed = items.filter((i) => isChecked(i)).length
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100)
    return { percent }
  }, [items, localChecked, controlled])

  const toggle = (item: StudioChecklistItem) => {
    if (item.disabled) return
    const next = !isChecked(item)
    if (!controlled) {
      setLocalChecked((prev) => ({ ...prev, [item.id]: next }))
    }
    onItemChange?.(item.id, next)
  }

  return (
    <section
      className={["vt-studio-checklist", className].filter(Boolean).join(" ")}
      data-vt-studio-control="true"
      data-vt-studio-control-kind="interactive-checklist"
      data-size={size}
      style={style}
    >
      {title ? <header className="vt-studio-checklist__header">{title}</header> : null}
      <ul className="vt-studio-checklist__list" role="list">
        {items.map((item) => {
          const checked = isChecked(item)
          return (
            <li
              key={item.id}
              className="vt-studio-checklist__row"
              data-checked={checked ? "true" : "false"}
              data-disabled={item.disabled ? "true" : "false"}
            >
              <button
                type="button"
                className="vt-studio-checklist__check"
                aria-pressed={checked}
                aria-label={item.label}
                disabled={item.disabled}
                onClick={() => toggle(item)}
              >
                {checked ? (
                  <span className="vt-studio-checklist__mark" aria-hidden="true">
                    ×
                  </span>
                ) : null}
              </button>
              <div className="vt-studio-checklist__copy">
                <span className="vt-studio-checklist__label">{item.label}</span>
                {item.description ? (
                  <span className="vt-studio-checklist__desc">{item.description}</span>
                ) : null}
              </div>
              {item.badge ? (
                <span
                  className="vt-studio-checklist__badge"
                  data-tone={item.badgeTone ?? "neutral"}
                >
                  {item.badge}
                </span>
              ) : null}
            </li>
          )
        })}
      </ul>
      <div
        className="vt-studio-checklist__progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label={`Completion ${percent}%`}
      >
        <div
          className="vt-studio-checklist__progress-fill"
          style={{ width: `${percent}%` }}
        />
        <span className="vt-studio-checklist__progress-label">
          COMPLETION {percent}%
        </span>
      </div>
    </section>
  )
}

StudioInteractiveChecklist.displayName = "StudioInteractiveChecklist"
