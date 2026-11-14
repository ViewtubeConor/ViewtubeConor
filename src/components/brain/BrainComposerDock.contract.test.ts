import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const styles = readFileSync(new URL("./BrainComposerDock.css", import.meta.url), "utf8")
const source = readFileSync(new URL("./BrainComposerDock.tsx", import.meta.url), "utf8")

/** Declarations only, with comments stripped, so prose in a comment can never satisfy or break a rule. */
const declarations = styles.replace(/\/\*[\s\S]*?\*\//g, "")

describe("Brain composer Studio contract", () => {
  it("is layout-only: Studio Controls own fill, border, type, focus and motion", () => {
    for (const property of [
      "background",
      "background-color",
      "border",
      "border-color",
      "border-radius",
      "box-shadow",
      "outline",
      "font-family",
      "transition",
      "animation",
      "transform",
      "-webkit-text-stroke",
    ]) {
      expect(declarations, `${property} must stay with the Studio primitive`).not.toMatch(
        new RegExp(`(^|[\\s{;])${property}\\s*:`, "m"),
      )
    }
  })

  it("never reaches into primitive internals or restyles controls with !important", () => {
    expect(declarations).not.toContain("!important")
    expect(declarations).not.toContain("data-vt-studio-button-face")
    expect(declarations).not.toContain("data-vt-studio-split-")
    expect(declarations).not.toContain("vt-studio-split-")
    expect(declarations).not.toContain("vt-studio-square-icon-button")
  })

  it("carries no raw colours except the dock's black text and the muted hint tone", () => {
    const colours = declarations.match(/#[0-9a-fA-F]{3,8}\b/g) ?? []
    expect([...new Set(colours.map((value) => value.toLowerCase()))].sort()).toEqual(["#000", "#5b6268"])
  })

  it("puts the draft-source row and the field row on the same two tracks: flexible main + one 44px rail", () => {
    expect(declarations).toContain("--brain-composer-rail: 44px")
    expect(declarations).toContain("--brain-composer-gap: 4px")
    const twoTrack = declarations.match(/grid-template-columns:\s*minmax\(0, 1fr\) var\(--brain-composer-rail\)/g) ?? []
    expect(twoTrack.length).toBeGreaterThanOrEqual(2)
    expect(declarations).toContain("grid-template-columns: minmax(0, 1fr);")
  })

  it("makes the action rail exactly as tall as the field: stretch the row, pin Clear to the top and Send to the bottom", () => {
    const field = declarations.slice(
      declarations.indexOf(".vt-brain-composer-dock .vt-brain-composer-field {"),
      declarations.indexOf(".vt-brain-composer-dock .vt-brain-composer-field >"),
    )
    expect(field).toContain("align-items: stretch")
    const rail = declarations.slice(
      declarations.indexOf(".vt-brain-composer-dock .vt-brain-composer-send-column {"),
      declarations.indexOf("/* Tools row"),
    )
    expect(rail).toContain("flex-direction: column")
    expect(rail).toContain("justify-content: space-between")
    // Two standard 44px squares + one 4px gap = the textarea's 92px minimum.
    expect(source.match(/sizeVariant="standard"/g)?.length).toBe(2)
  })

  it("lets the tools row share the full width and never clips a focus ring", () => {
    const tray = declarations.slice(
      declarations.indexOf(".vt-studio-chat-composer-dock__tray {"),
      declarations.indexOf(".vt-studio-chat-composer-dock__tray > *"),
    )
    expect(tray).toContain("display: flex")
    expect(tray).toContain("align-items: stretch")
    expect(tray).toContain("overflow: visible")
    expect(declarations).toContain("flex: 1 1 0")
  })

  it("adapts the tools row to the dock's own width, not the viewport, by showing and hiding wrappers", () => {
    expect(declarations).toContain("container-type: inline-size")
    expect(declarations).toContain("@container brain-composer (min-width: 388px)")
    expect(declarations).toContain("@container brain-composer (min-width: 520px)")
    expect(source).toContain('<div className="vt-brain-composer-wide-only">')
    expect(source).toContain('<div className="vt-brain-composer-journal-labelled">')
    expect(source).toContain('<div className="vt-brain-composer-journal-icon">')
    // The Studio button skin owns each button's display, so only wrappers may be hidden.
    expect(declarations).not.toMatch(/vt-brain-composer-tool[^{]*\{[^}]*display:\s*none/)
    // The keyboard hint is the only viewport-driven rule left.
    const viewport = declarations.match(/@media[^{]+\{/g) ?? []
    expect(viewport).toEqual(["@media (max-width: 639px) {", "@media (max-width: 420px) {"])
  })

  it("composes only approved Studio primitives and palette faces", () => {
    expect(source).toContain('from "../../studio-ui"')
    expect(source).toContain("StudioTextArea")
    expect(source).toContain("StudioSplitTwoLineButton")
    expect(source).toContain("StudioSquareIconButton")
    expect(source).toContain("StudioChatComposerDock")
    expect(source).toContain("TOOLBOX_PALETTE")
    expect(source).not.toMatch(/<textarea[\s>]/)
    expect(source).not.toMatch(/<button[\s>]/)
    expect(source).not.toMatch(/#[0-9a-fA-F]{6}\b/)
  })

  it("uses the compact textarea tier so the field is a writing surface, not a hero", () => {
    expect(source).toContain('sizeVariant="compact"')
    expect(source).toContain("rows={2}")
    expect(source).toContain('className="vt-brain-composer-input w-full min-w-0 resize-none"')
  })
})
