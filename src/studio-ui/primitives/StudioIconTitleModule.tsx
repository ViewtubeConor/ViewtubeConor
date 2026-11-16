import React from "react"
import type { StudioControlSize } from "../tokens"
import "../../styles/studio-control-entry.css"
import "./studio-icon-title-module.css"

export type StudioIconTitleTone =
  | "brain"
  | "analytics"
  | "quick-action"
  | "control"
  | "custom"

export type StudioIconTitleModuleProps = {
  icon: React.ReactNode
  title: string
  subtitle?: string
  tone?: StudioIconTitleTone
  /** Optional override for the left bay fill. */
  bayColor?: string
  size?: Extract<StudioControlSize, "standard" | "compact">
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const TONE_CLASS: Record<StudioIconTitleTone, string> = {
  brain: "vt-studio-icon-title--brain",
  analytics: "vt-studio-icon-title--analytics",
  "quick-action": "vt-studio-icon-title--quick-action",
  control: "vt-studio-icon-title--control",
  custom: "",
}

/**
 * Tall monochromatic split-left icon + title module for toast / information
 * surfaces. Left square icon bay + title + optional subtitle. Four spectrum
 * presets match the intended Studio Hub specimens.
 */
export function StudioIconTitleModule({
  icon,
  title,
  subtitle,
  tone = "brain",
  bayColor,
  size = "standard",
  className,
  style,
  onClick,
}: StudioIconTitleModuleProps) {
  const Tag = onClick ? "button" : "div"
  return (
    <Tag
      type={onClick ? "button" : undefined}
      className={[
        "vt-studio-icon-title",
        TONE_CLASS[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-vt-studio-control="true"
      data-vt-studio-control-kind="icon-title-module"
      data-size={size}
      data-tone={tone}
      style={
        {
          ...style,
          ...(bayColor ? { "--vt-icon-title-bay": bayColor } : {}),
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      <span className="vt-studio-icon-title__bay" aria-hidden="true">
        <span className="vt-studio-icon-title__icon">{icon}</span>
      </span>
      <span className="vt-studio-icon-title__copy">
        <span className="vt-studio-icon-title__title">{title}</span>
        {subtitle ? (
          <span className="vt-studio-icon-title__subtitle">{subtitle}</span>
        ) : null}
      </span>
    </Tag>
  )
}

StudioIconTitleModule.displayName = "StudioIconTitleModule"
