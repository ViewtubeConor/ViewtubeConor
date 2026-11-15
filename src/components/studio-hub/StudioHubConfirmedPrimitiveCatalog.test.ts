import { describe, expect, it } from "vitest"
import fs from "node:fs"
import path from "node:path"

const read = (file: string) => fs.readFileSync(path.resolve(process.cwd(), file), "utf8")
const readStudioControlCss = () => [
  "studio-control-system.css", "studio-control-core.css", "studio-control-split.css", "studio-control-fields.css",
].map((file) => read("src/styles/" + file)).join("\n")

describe("confirmed Studio button primitive library", () => {
  it("uses real StudioButton and StudioSplitLeftButton exports", () => {
    const catalog = read("src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx")
    expect(catalog).toContain('import { StudioButton, StudioSplitLeftButton } from "../../studio-ui"')
    expect(catalog).toContain('title="StudioButton"')
    expect(catalog).toContain('title="StudioSplitLeftButton"')
    expect(catalog).toContain('sizeVariant="standard"')
    expect(catalog).toContain('sizeVariant="compact"')
    expect(catalog).not.toContain("heightVariant=")
  })

  it("defines matching typography and 44px/28px production variants", () => {
    const controls = read("src/studio-ui/primitives/StudioControls.tsx")
    const css = readStudioControlCss()
    expect(controls).toContain('heightVariant?: "44" | "28"')
    expect(controls).toContain('sizeVariant = "standard"')
    expect(controls).toContain("StudioSplitLeftBadge")
    expect(css).toContain(".vt-studio-split-left-badge")
    expect(css).toContain("box-shadow: none !important")
    expect(css).toContain("transition: none !important")
    expect(css).toContain('data-size="micro"')
    expect(css).toContain("border-radius: 44px")
    expect(css).toContain("height: 44px")
    expect(css).toContain(".vt-studio-44-choice.is-checkbox { border-radius: 44px; }")
    expect(css).toContain('data-height-variant="44"')
    expect(css).toContain('data-height-variant="28"')
    expect(css).toContain('font-size: 14px !important')
    expect(css).toContain('data-height-variant="28"] [data-vt-studio-split-rail]')
  })

  it("mounts a third confirmed-primitives toolbox without changing the other tracks", () => {
    const library = read("src/components/ToolboxUIReferenceLibrary.tsx")
    expect(library).toContain('track="hardcoded"')
    expect(library).toContain('track="primitive"')
    expect(library).toContain('track="confirmed"')
    expect(library).toContain("StudioHubConfirmedPrimitiveCatalog")
  })

  it("places split-left badge specimens in the confirmed primitive library", () => {
    const catalog = read("src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx")
    expect(catalog).toContain("StudioSplitLeftBadge")
    expect(catalog).toContain('title="Split-left Badges"')
    expect(catalog).toContain("STANDARD · FULL ROW")
    expect(catalog).toContain("STANDARD · HALF ROW")
    expect(catalog).toContain("STANDARD · QUARTER ROW · 4×1")
    expect(catalog).toContain("COMPACT · QUARTER ROW · 4×1")
    expect(catalog).toContain("MICRO · LEFT HALF ONLY · 1×1 / 2×1 / 4×1")
    expect(catalog).toContain('tsx="src/studio-ui/primitives/StudioControls.tsx"')
    expect(catalog).toContain('css="src/styles/studio-control-system.css"')
  })

  it("documents source paths, token settings and importing files", () => {
    const catalog = read("src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx")
    for (const value of [
      "src/studio-ui/primitives/StudioControls.tsx",
      "src/styles/studio-control-system.css",
      "src/components/CommunityPostGenerator.tsx",
      "src/views/VideoDirector.tsx",
      "44px / 28px",
      "3px black stroke",
    ]) expect(catalog).toContain(value)
  })

  it("enforces the global size, palette, badge shape, and field focus contract", () => {
    const controls = read("src/studio-ui/primitives/StudioControls.tsx")
    const tokens = read("src/studio-ui/tokens.ts")
    const css = readStudioControlCss()
    expect(controls).toContain('sizeVariant?: "standard" | "compact" | "micro"')
    expect(controls).toContain('globalRuleException: false')
    expect(controls).toContain('focusOutlineWidth: "65% of border width: 1.95px standard / 1.3px compact / 0.65px micro"')
    expect(tokens).toContain('textAlign: "left"')
    expect(tokens).toContain('focusOutlineWidth: "65% of border width"')
    expect(css).toContain("Canonical primitive + text-field token contract (2026-10-17)")
    expect(css).toContain('height: var(--vt-studio-control-height, 44px)')
    expect(css).toContain('border-radius: var(--vt-studio-control-radius, 6px)')
    expect(css).toContain('text-align: left')
    expect(css).toContain('color-mix(in srgb, var(--vt-field-primary) var(--vt-studio-control-focus-fill-opacity), transparent)')
    expect(css).toContain('outline: calc(var(--vt-studio-control-stroke, 3px) * .65) solid var(--vt-field-secondary')
    expect(css).not.toMatch(/\.vt-studio-closeable-badge\s*\{[^}]*height:\s*20px;[^}]*border-radius:\s*999px/s)
  })


  it("documents fixed-ratio control defaults and enforces heavy badge typography", () => {
    const controls = read("src/studio-ui/primitives/StudioControls.tsx")
    const css = readStudioControlCss()
    for (const rule of ["fixedRatioDefaults:", "radioButtons:", "squareIconButtons:", "circleIconButtons:", "splitIconRailColor:", "badgeTypography:"]) {
      expect(controls).toContain(rule)
    }
    expect(css).toContain("Global fixed-ratio contract")
    expect(css).toContain("font-weight: 1000 !important")
    expect(css).toContain("aspect-ratio: 1 / 1")
    expect(css).toContain("place-items: center")
    expect(css).toContain("Canonical split-left label centering rule")
    expect(css).toContain("justify-content: center;")
  })

})

describe("confirmed specimen tier contract", () => {
  it("keeps all five canonical size tiers available to the specimen grid", () => {
    const grid = read("src/components/studio-hub/ConfirmedSpecimenGrid.tsx")
    const tokens = read("src/studio-ui/tokens.ts")
    expect(grid).toContain('export type SpecimenTier = "supreme" | "standard" | "compact" | "mini" | "micro"')
    expect(grid).toContain('const SPECIMEN_TIERS = ["supreme", "standard", "compact", "mini", "micro"] as const')
    for (const tier of ["supreme", "standard", "compact", "mini", "micro"]) {
      expect(tokens).toContain(tier)
      expect(grid).toContain(tier)
    }
  })
})


describe("Confirmed Panel Accordion module", () => {
  it("renders Panel Accordion as its own accordions-family module, not only a representative", () => {
    const catalog = read("src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx")
    const additional = catalog.indexOf("const useConfirmedAdditionalPrimitiveSections")
    const panel = catalog.indexOf('title="Panel Accordion"')
    const representatives = catalog.indexOf('data-vt-representatives="true"')
    expect(panel).toBeGreaterThan(additional)
    expect(panel).toBeGreaterThan(representatives)
    expect(catalog).not.toContain("Panel Accordion · STANDARD")
    expect(catalog).toContain('data-vt-library-component="StudioPanelAccordion"')
  })
})

describe("Studio field text and stroke contracts", () => {
  it("uses black textarea text and glyph stroke in focus mode for every tier", () => {
    const css = read("src/styles/studio-control-fields.css")
    expect(css).toContain("-webkit-text-stroke: var(--vt-studio-textarea-glyph-stroke, 0.5px) #000")
    expect(css).toContain('--vt-studio-textarea-glyph-stroke: var(--vt-studio-textarea-compact-text-stroke, 0.35px)')
    expect(css).toContain('--vt-studio-textarea-glyph-stroke: var(--vt-studio-textarea-mini-text-stroke, 0.4px)')
  })

  it("keeps TextBox black text and black glyph stroke at all five global size tiers", () => {
    const css = read("src/styles/studio-control-fields.css")
    expect(css).toContain("-webkit-text-stroke: var(--vt-studio-control-text-stroke, 1px) #000")
    expect(css).toContain("box-shadow: inset 0 0 0 var(--vt-studio-control-stroke, 3px)")
    expect(css).not.toContain(".vt-studio-text-box[data-vt-studio-control=\"true\"]:is(:focus")
  })

  it("registers split text inputs as left-aligned exceptions to centered split labels", () => {
    const controls = read("src/studio-ui/primitives/StudioControls.tsx")
    expect(controls).toContain("splitTextInputAlignment")
    expect(controls).toContain('alignment: "left"')
    expect(controls).toContain("same font family, size tier, weight, glyph stroke, color state, and field fill as StudioTextInput")
  })

  it("leaves Arrow Toggle text paint to global defaults and left-aligns split text fields", () => {
    const toggles = read("src/styles/studio-control-value-toggles.css")
    const fields = read("src/styles/studio-control-fields.css")\n    const textInput = read("src/styles/studio-text-input.css")
    expect(toggles).not.toContain(".vt-studio-value-toggle--arrow .vt-studio-value-toggle__face")
    expect(textInput).toContain("text-align: left")
  })

  it("draws a bottom divider on expanded collapsing split icon rails", () => {
    const css = readStudioControlCss()
    expect(css).toContain('.vt-studio-collapsing-split-module[open] > .vt-studio-collapsing-split-module__head')
    expect(css).toContain("inset 0 calc(-1 * var(--vt-top-split-stroke, 3px)) 0 #000")
  })
})


describe("Resource Split Button and compact module headers", () => {
  it("lists Resource Split Button as an independent buttons-family primitive", () => {
    const catalog = read("src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx")
    const resource = catalog.indexOf('title="Resource Split Button"')
    const representatives = catalog.indexOf('title="Primitive Representatives"')
    expect(resource).toBeGreaterThan(representatives)
    expect(catalog).toContain('data-vt-library-component="StudioResourceSplitButton"')
    expect(read("src/components/studio-hub/confirmedCatalogTaxonomy.ts")).toContain('{ title: "Resource Split Button", family: "buttons" }')
  })

  it("keeps module headings concise rather than appending size matrices and variant inventories", () => {
    const catalog = read("src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx")
    for (const title of ["StudioTextInput", "StudioTextArea", "StudioTextBox", "Arrow Toggle", "Side Toggle", "Double Side Toggle", "Bar Toggle", "Panel Accordion", "Calendar Event Chips"]) {
      expect(catalog).toContain('title="' + title + '"')
    }
    expect(catalog).not.toContain('title="Arrow Toggle · Five Sizes')
    expect(catalog).not.toContain('title="Studio Text Box · Supreme')
  })
})
