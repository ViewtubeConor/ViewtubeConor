import React from "react"
import type { StudioControlSize } from "../tokens"
import "../../styles/studio-control-entry.css"
import "../../styles/studio-spectrum-surface.css"

export type StudioSpectrumSurfaceProps = {
  title: string
  children?: React.ReactNode
  showSpectrumDivider?: boolean
  size?: Extract<StudioControlSize, "standard" | "compact">
  className?: string
  style?: React.CSSProperties
}

/**
 * Full-bleed gradient panel + optional spectrum divider line.
 * Gradient reaches every module edge; divider spans left-to-right.
 */
export function StudioSpectrumSurface({
  title,
  children,
  showSpectrumDivider = true,
  size = "standard",
  className,
  style,
}: StudioSpectrumSurfaceProps) {
  return (
    <section
      className={["vt-studio-spectrum-surface", className].filter(Boolean).join(" ")}
      data-vt-studio-control="true"
      data-vt-studio-control-kind="spectrum-surface"
      data-size={size}
      style={style}
    >
      <div className="vt-studio-spectrum-surface__inner">
        <h3 className="vt-studio-spectrum-surface__title">{title}</h3>
        {children ? (
          <div className="vt-studio-spectrum-surface__body">{children}</div>
        ) : null}
      </div>
      {showSpectrumDivider ? (
        <div className="vt-studio-spectrum-surface__divider" aria-hidden="true" />
      ) : null}
    </section>
  )
}

StudioSpectrumSurface.displayName = "StudioSpectrumSurface"
