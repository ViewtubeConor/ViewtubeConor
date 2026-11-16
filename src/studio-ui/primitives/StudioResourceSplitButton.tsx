import React from "react"
import type { StudioControlSize } from "../tokens"
import "../../styles/studio-control-entry.css"
import { StudioSpectrumTag } from "./StudioControls"

export interface StudioResourceSplitButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: React.ReactNode
  category: string
  title: string
  meta?: string
  completed?: boolean
  sizeVariant?: StudioControlSize
}

/**
 * Resource Library row primitive. The page supplies resource data and palette
 * pairs only; split geometry, typography, and all five size tiers are owned here.
 */
export const StudioResourceSplitButton = React.forwardRef<HTMLButtonElement, StudioResourceSplitButtonProps>(
  (
    {
      icon,
      category,
      title,
      meta,
      completed = false,
      sizeVariant = "standard",
      className,
      type = "button",
      ...buttonProps
    },
    ref,
  ) => (
    <button
      {...buttonProps}
      ref={ref}
      type={type}
      data-vt-studio-button="true"
      data-vt-studio-control="true"
      data-vt-studio-split="left"
      data-vt-library-component="StudioResourceSplitButton"
      data-size={sizeVariant}
      className={["vt-studio-resource-split-button", className].filter(Boolean).join(" ")}
    >
      <span data-vt-studio-button-face>
        <span data-vt-studio-split-rail data-rail="start" aria-hidden="true">
          {icon}
        </span>
        <span data-vt-studio-split-label>
          <span className="vt-studio-resource-split-button__copy">
            <span className="vt-studio-resource-split-button__category">{category}</span>
            <span className="vt-studio-resource-split-button__title">{title}</span>
            {meta ? <span className="vt-studio-resource-split-button__meta">{meta}</span> : null}
            {completed ? <StudioSpectrumTag label="COMPLETED" spectrumKey="completed" className="vt-studio-resource-complete-tag" /> : null}
          </span>
        </span>
      </span>
    </button>
  ),
)
StudioResourceSplitButton.displayName = "StudioResourceSplitButton"
