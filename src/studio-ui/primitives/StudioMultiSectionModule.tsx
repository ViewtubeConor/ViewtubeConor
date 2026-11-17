/**
 * StudioMultiSectionModule
 *
 * Vertical multi-section module from the Studio Controls standalone catalog
 * ("Split Accordion" specimen: Overview / Schedule / Metadata).
 *
 * Distinct from:
 * - StudioSplitAccordion (horizontal train expand)
 * - StudioPanelAccordion (icon-rail panel switcher)
 * - StudioCollapsingSplitModule (single collapsing shell)
 *
 * Behavior: every section header stays visible when collapsed; panels open
 * independently (multi-open), matching the catalog HTML `data-accordion`.
 *
 * Path: src/studio-ui/primitives/StudioMultiSectionModule.tsx
 * Branch: fix/studio-controls-regression-recovery-2026-10-31
 */

import React, { useCallback, useId, useMemo, useState } from "react"
import type { StudioControlSize } from "../tokens"
import "../../styles/studio-control-entry.css"
import "../../styles/studio-multi-section-module.css"

export type StudioMultiSectionModuleSize = StudioControlSize

export type StudioMultiSectionModuleItem = {
  id?: string
  label: string
  icon: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
  defaultOpen?: boolean
}

export type StudioMultiSectionModuleProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  items: readonly StudioMultiSectionModuleItem[]
  sizeVariant?: StudioMultiSectionModuleSize
  /** Controlled set of open section indices */
  openIndices?: readonly number[]
  defaultOpenIndices?: readonly number[]
  onOpenIndicesChange?: (indices: number[]) => void
  /** When true, only one section may be open at a time */
  exclusive?: boolean
  disabled?: boolean
  accessibleLabel?: string
}

function initialOpen(
  items: readonly StudioMultiSectionModuleItem[],
  defaults?: readonly number[],
): number[] {
  if (defaults && defaults.length) {
    return defaults.filter((i) => i >= 0 && i < items.length && !items[i]?.disabled)
  }
  const fromItems = items
    .map((item, index) => (item.defaultOpen && !item.disabled ? index : -1))
    .filter((i) => i >= 0)
  if (fromItems.length) return fromItems
  // Catalog default: first section open
  for (let i = 0; i < items.length; i += 1) {
    if (!items[i]?.disabled) return [i]
  }
  return []
}

export const StudioMultiSectionModule = React.forwardRef<
  HTMLDivElement,
  StudioMultiSectionModuleProps
>(function StudioMultiSectionModule(
  {
    items,
    sizeVariant = "standard",
    openIndices: controlled,
    defaultOpenIndices,
    onOpenIndicesChange,
    exclusive = false,
    disabled = false,
    accessibleLabel = "Multi section module",
    className,
    ...rest
  },
  ref,
) {
  const reactId = useId().replace(/:/g, "")
  const isControlled = controlled !== undefined
  const [uncontrolled, setUncontrolled] = useState(() =>
    initialOpen(items, defaultOpenIndices),
  )
  const openSet = useMemo(() => {
    const list = isControlled ? [...(controlled ?? [])] : uncontrolled
    return new Set(list.filter((i) => i >= 0 && i < items.length))
  }, [controlled, isControlled, items.length, uncontrolled])

  const setOpen = useCallback(
    (next: number[]) => {
      const cleaned = next.filter((i) => i >= 0 && i < items.length && !items[i]?.disabled)
      if (!isControlled) setUncontrolled(cleaned)
      onOpenIndicesChange?.(cleaned)
    },
    [isControlled, items, onOpenIndicesChange],
  )

  const toggle = useCallback(
    (index: number) => {
      if (disabled || items[index]?.disabled) return
      const isOpen = openSet.has(index)
      if (exclusive) {
        setOpen(isOpen ? [] : [index])
        return
      }
      if (isOpen) setOpen([...openSet].filter((i) => i !== index))
      else setOpen([...openSet, index].sort((a, b) => a - b))
    },
    [disabled, exclusive, items, openSet, setOpen],
  )

  const rootClass = useMemo(
    () => ["vt-studio-multi-section-module", className].filter(Boolean).join(" "),
    [className],
  )

  return (
    <div
      ref={ref}
      className={rootClass}
      data-vt-studio-control="true"
      data-vt-studio-control-family="module"
      data-vt-studio-control-kind="studio-multi-section-module"
      data-vt-library-component="StudioMultiSectionModule"
      data-size={sizeVariant}
      data-exclusive={exclusive ? "true" : "false"}
      role="region"
      aria-label={accessibleLabel}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {items.map((item, index) => {
        const key = item.id ?? `${reactId}-${index}`
        const isOpen = openSet.has(index)
        const headerId = `${reactId}-header-${index}`
        const panelId = `${reactId}-panel-${index}`
        return (
          <div
            key={key}
            className="vt-studio-msm__section"
            data-open={isOpen ? "true" : "false"}
            data-disabled={item.disabled || disabled ? "true" : "false"}
          >
            <button
              type="button"
              id={headerId}
              className="vt-studio-msm__header"
              aria-expanded={isOpen}
              aria-controls={panelId}
              disabled={item.disabled || disabled}
              onClick={() => toggle(index)}
            >
              <span className="vt-studio-msm__rail" aria-hidden="true">
                {item.icon}
              </span>
              <span className="vt-studio-msm__label">{item.label}</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="vt-studio-msm__panel"
              data-open={isOpen ? "true" : "false"}
              aria-hidden={isOpen ? undefined : true}
            >
              <div className="vt-studio-msm__panel-inner">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
})

StudioMultiSectionModule.displayName = "StudioMultiSectionModule"

export default StudioMultiSectionModule
