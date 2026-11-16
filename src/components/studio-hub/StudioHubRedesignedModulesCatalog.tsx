import React from "react"
import { Brain, BarChart3, Zap, Settings2, CloudUpload, ArrowRight } from "lucide-react"
import {
  StudioDailyOracleModule,
  StudioToneIconTitleModule,
  StudioInteractiveChecklist,
  StudioSpectrumSurface,
  StudioAccentRailModule,
  StudioVideoModule,
  StudioVideoSelector,
  StudioMetricIcon,
  StudioSpectrumIcon,
  STUDIO_METRIC_ICON_SET,
  type StudioMetricKey,
  type StudioChecklistItem,
} from "../../studio-ui"
import { ConfirmedFamilyModule, ConfirmedPrimitiveModule } from "./ConfirmedCatalogModules"

const CHECKLIST_DEMO: StudioChecklistItem[] = [
  {
    id: "1",
    label: "Revise weak thumbnail",
    description: "CTR fell below baseline.",
    badge: "HIGH",
    badgeTone: "high",
    checked: false,
  },
  {
    id: "2",
    label: "Reply to questions",
    description: "Three include video ideas.",
    badge: "MEDIUM",
    badgeTone: "medium",
    checked: true,
  },
  {
    id: "3",
    label: "Finish script section",
    description: "Project is 74% complete.",
    badge: "TODAY",
    badgeTone: "today",
    checked: true,
  },
  {
    id: "4",
    label: "Approve sponsor deliverables",
    description: "Deadline tomorrow.",
    badge: "URGENT",
    badgeTone: "urgent",
    checked: false,
  },
]

const VIDEO_OPTIONS = [
  {
    id: "v1",
    title: "How we grew 10k subs in 30 days",
    thumbnailUrl: null,
    duration: "12:41",
    metadata: "Published · 48k views",
  },
  {
    id: "v2",
    title: "Studio controls redesign walkthrough",
    thumbnailUrl: null,
    duration: "8:05",
    metadata: "Draft",
  },
  {
    id: "v3",
    title: "Audience signal deep dive",
    thumbnailUrl: null,
    duration: "15:22",
    metadata: "Scheduled",
  },
] as const

/**
 * Confirmed catalog specimens for the redesigned dashboard → Studio modules.
 * Renders the intended look from the design images (accent rail, icon+title,
 * checklist progress, spectrum surface, metric icons, video module/selector).
 *
 * Place at: src/components/studio-hub/StudioHubRedesignedModulesCatalog.tsx
 * Mount in StudioHubConfirmedPrimitiveCatalog (or Complete catalog) as:
 *   import { StudioHubRedesignedModulesCatalog } from "./StudioHubRedesignedModulesCatalog"
 *   <StudioHubRedesignedModulesCatalog />
 */
export function StudioHubRedesignedModulesCatalog() {
  const [videoId, setVideoId] = React.useState("v1")
  const [checklist, setChecklist] = React.useState(CHECKLIST_DEMO)

  return (
    <ConfirmedFamilyModule title="Redesigned modules · dashboard → Studio" defaultOpen>
      <ConfirmedPrimitiveModule title="Daily Oracle · accent rail information" defaultOpen>
        <div style={{ display: "grid", gap: 12 }}>
          <StudioDailyOracleModule
            title="Publish cadence needs attention"
            body="The color rail touches the outer module stroke. Review the latest audience signals before planning the next release."
            railColor="#ff4d6d"
            actionIcon={<CloudUpload aria-hidden="true" />}
            actionAriaLabel="Open publish cadence"
          />
          <StudioDailyOracleModule
            title="Audience signal found"
            body="Use the rail color for a meaningful category or status."
            railColor="#36e0f6"
            actionIcon={<ArrowRight aria-hidden="true" />}
            actionAriaLabel="Review audience signal"
          />
          <StudioAccentRailModule
            spectrum="purple"
            title="Daily Oracle"
            subtitle="A creator insight based on the latest available signals."
            action={{
              icon: <Settings2 aria-hidden="true" />,
              label: "Open insight",
              onClick: () => undefined,
            }}
          >
            Your recent uploads are building a stronger returning-viewer pattern.
            Review the latest audience signals before planning the next release.
          </StudioAccentRailModule>
        </div>
      </ConfirmedPrimitiveModule>

      <ConfirmedPrimitiveModule title="Icon + Title · monochromatic split-left" defaultOpen>
        <div style={{ display: "grid", gap: 10 }}>
          <StudioToneIconTitleModule
            tone="brain"
            icon={<Brain aria-hidden="true" />}
            title="Channel Brain"
            subtitle="Context, memory, and recommendations"
          />
          <StudioToneIconTitleModule
            tone="analytics"
            icon={<BarChart3 aria-hidden="true" />}
            title="Analytics"
            subtitle="Canonical channel performance data"
          />
          <StudioToneIconTitleModule
            tone="quick-action"
            icon={<Zap aria-hidden="true" />}
            title="Quick Action"
            subtitle="One-tap creator workflow handoff"
          />
          <StudioToneIconTitleModule
            tone="control"
            icon={<Settings2 aria-hidden="true" />}
            title="Control"
            subtitle="Preferences and system configuration"
          />
        </div>
      </ConfirmedPrimitiveModule>

      <ConfirmedPrimitiveModule title="Interactive checklist · progress bar" defaultOpen>
        <StudioInteractiveChecklist
          title="Interactive checklist progress"
          items={checklist}
          onItemChange={(id, checked) => {
            setChecklist((rows) =>
              rows.map((row) => (row.id === id ? { ...row, checked } : row)),
            )
          }}
        />
      </ConfirmedPrimitiveModule>

      <ConfirmedPrimitiveModule title="Spectrum surface · full-bleed gradient" defaultOpen>
        <StudioSpectrumSurface title="ViewTube spectrum surface">
          Gradient reaches every module edge; the divider spans left to right.
        </StudioSpectrumSurface>
      </ConfirmedPrimitiveModule>

      <ConfirmedPrimitiveModule title="Canonical metric icons · 12 spectrum colors" defaultOpen>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
            gap: 12,
          }}
        >
          {(Object.keys(STUDIO_METRIC_ICON_SET) as StudioMetricKey[]).map((key) => (
            <div
              key={key}
              style={{
                display: "grid",
                justifyItems: "center",
                gap: 6,
                textAlign: "center",
              }}
            >
              <StudioMetricIcon metric={key} size="standard" />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 1000,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                {STUDIO_METRIC_ICON_SET[key].label}
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
          <StudioSpectrumIcon
            spectrum="cyan"
            size="compact"
            shape="circle"
            icon={<Brain aria-hidden="true" />}
            label="Circle brain"
          />
          <StudioSpectrumIcon
            spectrum="rose"
            size="compact"
            shape="square"
            icon={<Zap aria-hidden="true" />}
            label="Square zap"
          />
          <StudioSpectrumIcon
            spectrum="lime"
            size="mini"
            shape="plain"
            icon={<BarChart3 aria-hidden="true" />}
            label="Plain analytics"
          />
        </div>
      </ConfirmedPrimitiveModule>

      <ConfirmedPrimitiveModule title="Video module + video selector" defaultOpen>
        <div style={{ display: "grid", gap: 14 }}>
          <StudioVideoModule
            title="How we grew 10k subs in 30 days"
            eyebrow="Published"
            supportingText="A full walkthrough of the growth loop."
            metadata="12:41 · 48k views"
            selected
          />
          <StudioVideoSelector
            label="Videos"
            options={[...VIDEO_OPTIONS]}
            value={videoId}
            onValueChange={setVideoId}
            searchPlaceholder="Search videos"
          />
        </div>
      </ConfirmedPrimitiveModule>
    </ConfirmedFamilyModule>
  )
}

StudioHubRedesignedModulesCatalog.displayName = "StudioHubRedesignedModulesCatalog"
