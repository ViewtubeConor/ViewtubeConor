import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import {
  classifyConfirmedCatalogTitle,
  CONFIRMED_CATALOG_FAMILY_ORDER,
  CONFIRMED_CATALOG_REQUIRED_EXPORTS,
  CONFIRMED_CATALOG_MODULE_INVENTORY,
} from "./confirmedCatalogTaxonomy"

describe("confirmed catalog taxonomy phases 0–8", () => {
  it("classifies core titles into registry families and never throws", () => {
    expect(classifyConfirmedCatalogTitle("StudioCounter · Standard")).toBe("counters")
    expect(classifyConfirmedCatalogTitle("StudioDoubleSplitSlider · Standard")).toBe("steppers-sliders")
    expect(classifyConfirmedCatalogTitle("Arrow / Side / Double Side / Bar Toggles")).toBe("choice-toggles")
    expect(classifyConfirmedCatalogTitle("Studio Text Input · Standard")).toBe("text-fields")
    expect(classifyConfirmedCatalogTitle("Studio Icon Rail Text Inputs · Non-Interactive")).toBe("split-text-fields")
    for (const title of ["StudioSplitTextInput · Left / Right / Double · Five Sizes", "StudioSplitLeftTextInput · Five Sizes", "StudioSplitRightTextInput · Five Sizes", "StudioDoubleSplitTextInput · Five Sizes"]) expect(classifyConfirmedCatalogTitle(title)).toBe("split-text-fields")
    expect(classifyConfirmedCatalogTitle("Split-left Button · Standard")).toBe("buttons")
    expect(classifyConfirmedCatalogTitle("StudioInterModule · Standard")).toBe("modules-frames")
    expect(classifyConfirmedCatalogTitle("Publishing Card · Standard")).toBe("compositions")
    expect(classifyConfirmedCatalogTitle("SpectrumTag · Standard")).toBe("tags-status")
    expect(classifyConfirmedCatalogTitle("Unknown Widget")).toBe("unsorted")
  })
  it("keeps a stable ordered family registry", () => {
    expect(CONFIRMED_CATALOG_FAMILY_ORDER[0]).toBe("text-fields")
    expect(CONFIRMED_CATALOG_MODULE_INVENTORY.length).toBeGreaterThan(10)
  })
  it("requires required production exports to appear in the confirmed catalog source", () => {
    const catalog = readFileSync(resolve(process.cwd(), "src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx"), "utf8")
    for (const name of CONFIRMED_CATALOG_REQUIRED_EXPORTS) {
      expect(catalog.includes(name) || catalog.includes(`data-vt-library-component="${name}"`), name).toBe(true)
    }
  })
})
