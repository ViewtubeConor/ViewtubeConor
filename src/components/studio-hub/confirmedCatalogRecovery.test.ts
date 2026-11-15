import { describe, expect, it } from "vitest"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import {
  CONFIRMED_CATALOG_MODULE_INVENTORY,
  CONFIRMED_CATALOG_REQUIRED_EXPORTS,
  classifyConfirmedCatalogTitle,
} from "./confirmedCatalogTaxonomy"

const catalogSource = readFileSync(resolve(process.cwd(), "src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx"), "utf8")

describe("Confirmed Primitive Library recovery", () => {
  it("registers restored public primitives in the canonical inventory", () => {
    const expected = [
      "StudioSideTextCounter", "StudioSideTextCounterIcon", "StudioInlineStepper", "StudioSplitStepper",
      "StudioPanelAccordion", "StudioSpectrumIcon", "StudioIconBadge", "StudioMetricIcon",
      "StudioAccentRailModule", "StudioIconTitleModule", "StudioVideoModule", "StudioVideoSelector",
      "StudioResponseMetaRow", "StudioChatResponseShell", "StudioCalendarMultiDayBar", "StudioCalendarThumbnailEventChip",
    ]
    for (const name of expected) expect(CONFIRMED_CATALOG_REQUIRED_EXPORTS).toContain(name)
  })

  it("classifies every restored family under its canonical category", () => {
    expect(classifyConfirmedCatalogTitle("StudioSideTextCounter · Editable Text + Numeric Stepper · Five Sizes")).toBe("split-text-fields")
    expect(classifyConfirmedCatalogTitle("StudioSideTextCounterIcon · Editable Text + Single Icon Rail · Five Sizes")).toBe("split-text-fields")
    expect(classifyConfirmedCatalogTitle("Studio Numeric Steppers · Inline + Split")).toBe("steppers-sliders")
    expect(classifyConfirmedCatalogTitle("Panel Accordion · StudioPanelAccordion · Standard + Compact")).toBe("accordions-layout")
    expect(classifyConfirmedCatalogTitle("Chat Response Shell + Response Metadata Row")).toBe("chat-meta")
    expect(classifyConfirmedCatalogTitle("Calendar Event Chips + Multi-day Bars + Thumbnail Events")).toBe("calendar")
    expect(classifyConfirmedCatalogTitle("Studio Spectrum + Metric Icons · Semantic Icon System")).toBe("tags-status")
    expect(classifyConfirmedCatalogTitle("Accent Rail + Icon Title Information Modules")).toBe("modules-frames")
    expect(classifyConfirmedCatalogTitle("Studio Video Module · Thumbnail + Text Anatomy")).toBe("modules-frames")
    expect(classifyConfirmedCatalogTitle("Studio Video Selector · Searchable Split-left Menu")).toBe("dropdowns")
  })

  it("keeps the restored representatives and family specimens in the active nested catalog", () => {
    for (const name of [
      "StudioSideTextCounter", "StudioSideTextCounterIcon", "StudioInlineStepper", "StudioSplitStepper",
      "StudioPanelAccordion", "StudioSpectrumIcon", "StudioMetricIcon", "StudioAccentRailModule",
      "StudioIconTitleModule", "StudioVideoModule", "StudioVideoSelector", "StudioResponseMetaRow",
      "StudioChatResponseShell", "StudioCalendarMultiDayBar", "StudioCalendarThumbnailEventChip",
    ]) {
      expect(catalogSource).toContain(name)
    }
    expect(CONFIRMED_CATALOG_MODULE_INVENTORY.some(item => item.title.includes("Studio Numeric Steppers"))).toBe(true)
  })

  it("does not re-register the intentionally retired split-text-input family", () => {
    expect(CONFIRMED_CATALOG_MODULE_INVENTORY.some(item => /StudioSplit(?:Left|Right)?TextInput/.test(item.title))).toBe(false)
  })
})
