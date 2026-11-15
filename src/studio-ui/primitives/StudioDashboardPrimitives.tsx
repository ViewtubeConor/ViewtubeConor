import React from "react"
import {
  Activity, BarChart3, Bookmark, CalendarDays, Check, Clock3, DollarSign,
  Eye, Heart, MessageCircle, MousePointerClick, Play, Share2, ThumbsUp,
  Timer, TrendingUp, Users, Video, type LucideIcon,
} from "lucide-react"
import type { StudioControlSize } from "../tokens"
import { StudioSquareIconButton } from "./StudioControls"
import "../../styles/studio-control-entry.css"
import "../../styles/studio-dashboard-primitives.css"

export type StudioSpectrumName =
  | "rose" | "coral" | "orange" | "yellow" | "lime" | "green"
  | "teal" | "cyan" | "royal" | "purple" | "magenta" | "pink"

export const STUDIO_SPECTRUM_COLORS: Readonly<Record<StudioSpectrumName, string>> = {
  rose: "#FA618A", coral: "#FF7F6B", orange: "#FFA85C", yellow: "#FFDA47",
  lime: "#C0F240", green: "#3FEE56", teal: "#4EE4BE", cyan: "#36E0F6",
  royal: "#528FFA", purple: "#A467F4", magenta: "#F55EFC", pink: "#FF7AC8",
}

export type StudioMetricKey =
  | "views" | "engagedViews" | "watchTime" | "subscribers" | "revenue"
  | "comments" | "avp" | "avd" | "likes" | "rpm" | "shares" | "playlistSaves"

export const STUDIO_METRIC_ICON_SET: Readonly<Record<StudioMetricKey, {
  label: string
  spectrum: StudioSpectrumName
  icon: LucideIcon
}>> = {
  views: { label: "Views", spectrum: "rose", icon: Eye },
  engagedViews: { label: "Engaged views", spectrum: "coral", icon: Activity },
  watchTime: { label: "Watch time", spectrum: "orange", icon: Clock3 },
  subscribers: { label: "Subscribers", spectrum: "yellow", icon: Users },
  revenue: { label: "Revenue", spectrum: "lime", icon: DollarSign },
  comments: { label: "Comments", spectrum: "green", icon: MessageCircle },
  avp: { label: "Average percentage viewed", spectrum: "teal", icon: TrendingUp },
  avd: { label: "Average view duration", spectrum: "cyan", icon: Timer },
  likes: { label: "Likes", spectrum: "royal", icon: ThumbsUp },
  rpm: { label: "Revenue per mille", spectrum: "purple", icon: BarChart3 },
  shares: { label: "Shares", spectrum: "magenta", icon: Share2 },
  playlistSaves: { label: "Playlist saves", spectrum: "pink", icon: Bookmark },
}

export interface StudioSpectrumIconProps {
  icon: React.ReactNode
  spectrum: StudioSpectrumName
  size?: StudioControlSize
  shape?: "square" | "circle" | "plain"
  label?: string
  className?: string
}

export function StudioSpectrumIcon({
  icon, spectrum, size = "standard", shape = "square", label, className,
}: StudioSpectrumIconProps) {
  return (
    <span
      className={["vt-studio-spectrum-icon", className].filter(Boolean).join(" ")}
      data-vt-studio-spectrum-icon="true"
      data-spectrum={spectrum}
      data-size={size}
      data-shape={shape}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span aria-hidden="true">{icon}</span>
    </span>
  )
}

export interface StudioIconBadgeProps extends StudioSpectrumIconProps {
  children?: React.ReactNode
}

export function StudioIconBadge({ children, ...props }: StudioIconBadgeProps) {
  return (
    <span className="vt-studio-icon-badge" data-vt-studio-icon-badge="true">
      <StudioSpectrumIcon {...props} />
      {children ? <span className="vt-studio-icon-badge__label">{children}</span> : null}
    </span>
  )
}

export interface StudioMetricIconProps {
  metric: StudioMetricKey
  size?: StudioControlSize
  shape?: "square" | "circle" | "plain"
  label?: string
  className?: string
}

export function StudioMetricIcon({
  metric, size = "standard", shape = "square", label, className,
}: StudioMetricIconProps) {
  const definition = STUDIO_METRIC_ICON_SET[metric]
  const Icon = definition.icon
  return (
    <StudioSpectrumIcon
      icon={<Icon aria-hidden="true" />}
      spectrum={definition.spectrum}
      size={size}
      shape={shape}
      label={label ?? definition.label}
      className={className}
    />
  )
}

export interface StudioModuleAction {
  icon: React.ReactNode
  label: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export interface StudioAccentRailModuleProps extends React.HTMLAttributes<HTMLElement> {
  spectrum: StudioSpectrumName
  title?: React.ReactNode
  subtitle?: React.ReactNode
  action?: StudioModuleAction
  collapsible?: boolean
  defaultExpanded?: boolean
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  size?: StudioControlSize
  children?: React.ReactNode
}

export function StudioAccentRailModule({
  spectrum, title, subtitle, action, collapsible = false, defaultExpanded = true,
  expanded, onExpandedChange, size = "standard", children, className, ...props
}: StudioAccentRailModuleProps) {
  const [localExpanded, setLocalExpanded] = React.useState(defaultExpanded)
  const isExpanded = expanded ?? localExpanded
  const setExpanded = (next: boolean) => {
    if (expanded === undefined) setLocalExpanded(next)
    onExpandedChange?.(next)
  }
  return (
    <section
      {...props}
      className={["vt-studio-accent-rail-module", className].filter(Boolean).join(" ")}
      data-vt-studio-module="accent-rail"
      data-spectrum={spectrum}
      data-size={size}
      aria-label={typeof title === "string" ? title : undefined}
    >
      <span className="vt-studio-accent-rail-module__rail" aria-hidden="true" />
      <div className="vt-studio-accent-rail-module__main">
        {(title || subtitle) ? (
          <div className="vt-studio-accent-rail-module__heading">
            {title ? <strong>{title}</strong> : null}
            {subtitle ? <span>{subtitle}</span> : null}
          </div>
        ) : null}
        {children && (!collapsible || isExpanded) ? (
          <div className="vt-studio-accent-rail-module__content">{children}</div>
        ) : null}
      </div>
      {(action || collapsible) ? (
        <div className="vt-studio-accent-rail-module__actions">
          {action ? (
            <StudioSquareIconButton
              icon={action.icon}
              label={action.label}
              sizeVariant={size}
              disabled={action.disabled}
              onClick={action.onClick}
            />
          ) : null}
          {collapsible ? (
            <button
              type="button"
              className="vt-studio-module-disclosure"
              aria-label={isExpanded ? "Collapse information" : "Expand information"}
              aria-expanded={isExpanded}
              onClick={() => setExpanded(!isExpanded)}
            >
              <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
            </button>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}

export interface StudioIconTitleModuleProps extends React.HTMLAttributes<HTMLElement> {
  spectrum: StudioSpectrumName
  icon: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  action?: React.ReactNode
  size?: StudioControlSize
}

export function StudioIconTitleModule({
  spectrum, icon, title, subtitle, action, size = "standard", className, ...props
}: StudioIconTitleModuleProps) {
  return (
    <section
      {...props}
      className={["vt-studio-icon-title-module", className].filter(Boolean).join(" ")}
      data-vt-studio-module="icon-title"
      data-spectrum={spectrum}
      data-size={size}
    >
      <span className="vt-studio-icon-title-module__icon" aria-hidden="true">
        <StudioSpectrumIcon icon={icon} spectrum={spectrum} size={size} shape="square" />
      </span>
      <span className="vt-studio-icon-title-module__copy">
        <strong>{title}</strong>
        {subtitle ? <span>{subtitle}</span> : null}
      </span>
      {action ? <span className="vt-studio-icon-title-module__action">{action}</span> : null}
    </section>
  )
}

export interface StudioVideoModuleProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title: React.ReactNode
  thumbnailUrl?: string | null
  thumbnailAlt?: string
  eyebrow?: React.ReactNode
  supportingText?: React.ReactNode
  metadata?: React.ReactNode
  footer?: React.ReactNode
  selected?: boolean
  loading?: boolean
  onSelect?: () => void
}

export function StudioVideoModule({
  title, thumbnailUrl, thumbnailAlt = "", eyebrow, supportingText, metadata, footer,
  selected = false, loading = false, onSelect, className, ...props
}: StudioVideoModuleProps) {
  const content = (
    <>
      {eyebrow ? <div className="vt-studio-video-module__eyebrow">{eyebrow}</div> : null}
      <div className="vt-studio-video-module__title">{title}</div>
      <div className="vt-studio-video-module__media">
        {loading ? <span className="vt-studio-video-module__placeholder" aria-label="Loading video" /> :
          thumbnailUrl ? <img src={thumbnailUrl} alt={thumbnailAlt} loading="lazy" /> :
            <span className="vt-studio-video-module__placeholder" aria-label="Video thumbnail unavailable"><Video aria-hidden="true" /></span>}
        {selected ? <span className="vt-studio-video-module__selected"><Check aria-hidden="true" /> Selected</span> : null}
      </div>
      {supportingText ? <div className="vt-studio-video-module__supporting">{supportingText}</div> : null}
      {metadata ? <div className="vt-studio-video-module__metadata">{metadata}</div> : null}
      {footer ? <div className="vt-studio-video-module__footer">{footer}</div> : null}
    </>
  )
  if (onSelect) {
    return (
      <button
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        type="button"
        className={["vt-studio-video-module", "is-selectable", className].filter(Boolean).join(" ")}
        data-vt-studio-video-module="true"
        data-selected={selected ? "true" : "false"}
        onClick={onSelect}
      >
        {content}
      </button>
    )
  }
  return (
    <article
      {...props}
      className={["vt-studio-video-module", className].filter(Boolean).join(" ")}
      data-vt-studio-video-module="true"
      data-selected={selected ? "true" : "false"}
    >
      {content}
    </article>
  )
}

export interface StudioVideoOption {
  id: string
  title: string
  thumbnailUrl?: string | null
  duration?: string
  metadata?: string
  status?: string
}

export interface StudioVideoSelectorProps {
  label: string
  options: readonly StudioVideoOption[]
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  disabled?: boolean
  loading?: boolean
  emptyMessage?: string
  size?: Extract<StudioControlSize, "standard" | "compact">
  className?: string
}

export function StudioVideoSelector({
  label, options, value, onValueChange, placeholder = "Select a video",
  searchPlaceholder = "Search videos", disabled = false, loading = false,
  emptyMessage = "No videos found", size = "standard", className,
}: StudioVideoSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const searchId = React.useId()
  const selected = options.find(option => option.id === value)
  const filtered = options.filter(option =>
    option.title.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()),
  )
  const choose = (id: string) => {
    onValueChange(id)
    setOpen(false)
    setQuery("")
  }
  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault()
      setOpen(false)
      return
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>("[role=option]"))
      if (!buttons.length) return
      event.preventDefault()
      const activeIndex = buttons.indexOf(document.activeElement as HTMLButtonElement)
      const nextIndex = event.key === "ArrowDown"
        ? Math.min(buttons.length - 1, activeIndex + 1)
        : Math.max(0, activeIndex < 0 ? buttons.length - 1 : activeIndex - 1)
      buttons[nextIndex]?.focus()
    }
  }
  return (
    <div className={["vt-studio-video-selector", className].filter(Boolean).join(" ")}
      data-vt-studio-video-selector="true" data-size={size}>
      <span className="vt-studio-video-selector__label">{label}</span>
      <div className="vt-studio-video-selector__control">
        {selected ? (
          <span className="vt-studio-video-selector__thumb">
            {selected.thumbnailUrl ? <img src={selected.thumbnailUrl} alt="" /> : <Video aria-hidden="true" />}
          </span>
        ) : null}
        <button
          type="button"
          className="vt-studio-video-selector__trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={searchId + "-list"}
          disabled={disabled}
          onClick={() => setOpen(current => !current)}
        >
          <span className="vt-studio-video-selector__selected-title">{selected?.title ?? placeholder}</span>
          <span className="vt-studio-video-selector__chevron" aria-hidden="true">⌄</span>
        </button>
        {open ? (
          <div className="vt-studio-video-selector__menu" onKeyDown={handleMenuKeyDown}>
            <label className="vt-studio-video-selector__search" htmlFor={searchId}>
              <span aria-hidden="true">⌕</span>
              <input id={searchId} type="search" value={query} placeholder={searchPlaceholder}
                onChange={event => setQuery(event.currentTarget.value)} autoComplete="off" />
            </label>
            <div id={searchId + "-list"} className="vt-studio-video-selector__options"
              role="listbox" aria-label={label} aria-busy={loading}>
              {loading ? <div className="vt-studio-video-selector__empty" role="status">Loading videos…</div> :
                filtered.length ? filtered.map(option => (
                  <button key={option.id} type="button" role="option"
                    aria-selected={option.id === value}
                    className="vt-studio-video-selector__option"
                    onClick={() => choose(option.id)}>
                    <span className="vt-studio-video-selector__option-thumb">
                      {option.thumbnailUrl ? <img src={option.thumbnailUrl} alt="" /> : <Video aria-hidden="true" />}
                    </span>
                    <span className="vt-studio-video-selector__option-copy">
                      <strong>{option.title}</strong>
                      <small>{[option.duration, option.metadata, option.status].filter(Boolean).join(" · ")}</small>
                    </span>
                    {option.id === value ? <Check aria-label="Selected" /> : null}
                  </button>
                )) : <div className="vt-studio-video-selector__empty">{emptyMessage}</div>}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export const STUDIO_DASHBOARD_MIGRATION_PRIMITIVES = {
  spectrumIcon: StudioSpectrumIcon,
  iconBadge: StudioIconBadge,
  metricIcon: StudioMetricIcon,
  accentRailModule: StudioAccentRailModule,
  iconTitleModule: StudioIconTitleModule,
  videoModule: StudioVideoModule,
  videoSelector: StudioVideoSelector,
} as const
