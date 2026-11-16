import React from "react"
import type { StudioControlSize } from "../tokens"
import "../../styles/studio-control-entry.css"
import "./studio-daily-oracle-module.css"

export type StudioDailyOracleModuleProps = {
  title: string
  body: React.ReactNode
  /** Accent rail color (spectrum / semantic). Defaults to secondary. */
  railColor?: string
  /** Right-side square icon button action. */
  actionIcon?: React.ReactNode
  onAction?: () => void
  actionAriaLabel?: string
  size?: Extract<StudioControlSize, "standard" | "compact">
  className?: string
  style?: React.CSSProperties
}

/**
 * Full-width expandable information module with colored accent rail that
 * touches the outer module stroke, title + body, and a square icon button
 * on the right for the primary action. Matches the intended Daily Oracle /
 * status/action module look from the Studio design specimens.
 */
export function StudioDailyOracleModule({
  title,
  body,
  railColor,
  actionIcon,
  onAction,
  actionAriaLabel = "Take action",
  size = "standard",
  className,
  style,
}: StudioDailyOracleModuleProps) {
  return (
    <article
      className={["vt-studio-daily-oracle", className].filter(Boolean).join(" ")}
      data-vt-studio-control="true"
      data-vt-studio-control-kind="daily-oracle"
      data-size={size}
      style={
        {
          ...style,
          ...(railColor ? { "--vt-oracle-rail": railColor } : {}),
        } as React.CSSProperties
      }
    >
      <div className="vt-studio-daily-oracle__rail" aria-hidden="true" />
      <div className="vt-studio-daily-oracle__content">
        <h3 className="vt-studio-daily-oracle__title">{title}</h3>
        <div className="vt-studio-daily-oracle__body">{body}</div>
      </div>
      {actionIcon || onAction ? (
        <button
          type="button"
          className="vt-studio-daily-oracle__action"
          aria-label={actionAriaLabel}
          onClick={onAction}
        >
          <span className="vt-studio-daily-oracle__action-icon" aria-hidden="true">
            {actionIcon}
          </span>
        </button>
      ) : null}
    </article>
  )
}

StudioDailyOracleModule.displayName = "StudioDailyOracleModule"
