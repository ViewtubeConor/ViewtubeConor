import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const source = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8")

describe("Studio split-module bottom-stroke regression", () => {
  it("keeps the module shell perimeter and its header/body ownership", () => {
    const css = source("src/styles/studio-control-system.css")

    expect(css).toContain("details.vt-studio-collapsing-split-module,")
    expect(css).toContain("border: var(--vt-top-split-stroke, var(--vt-studio-control-stroke, 3px)) solid #000;")
    expect(css).toContain(".vt-studio-top-split-module__body,")
    expect(css).toContain("border-top: 0 !important;")
  })

  it("places the expanded divider at the base of the colored rail cells", () => {
    const css = source("src/styles/studio-control-system.css")

    expect(css).toContain(".vt-studio-collapsing-split-module__head {")
    expect(css).toContain("border-bottom: var(--vt-top-split-stroke, var(--vt-studio-control-stroke, 3px)) solid transparent;")
    expect(css).toContain(".vt-studio-collapsing-split-module__head::after")
    expect(css).toContain("bottom: calc(-1 * var(--vt-top-split-stroke, var(--vt-studio-control-stroke, 3px)));")
    expect(css).toContain("details.vt-studio-collapsing-split-module:not([open]) > .vt-studio-collapsing-split-module__head::after")
  })

  it("keeps collapsed double-split headers badge-shaped with square rails and centered text", () => {
    const css = source("src/styles/studio-control-system.css")
    const controls = source("src/studio-ui/primitives/StudioControls.tsx")

    expect(css).toContain('.vt-studio-collapsing-split-module > .vt-studio-collapsing-split-module__head[data-split="double"]')
    expect(css).toContain("height: var(--vt-top-split-size, var(--vt-studio-control-height, 44px));")
    expect(css).toContain("aspect-ratio: 1 / 1;")
    expect(css).toContain("align-self: center;")
    expect(css).toContain("justify-content: center;")
    expect(controls).toContain('split = "double"')
    expect(controls).toContain("vt-studio-top-split-module__rail")
  })

  it("uses a borderless bar-toggle tooltip body and a filled triangular pointer", () => {
    const css = source("src/styles/studio-control-value-toggles.css")

    expect(css).toContain(".vt-studio-value-toggle__bar-tooltip {")
    expect(css).toContain("border: 0;")
    expect(css).toContain(".vt-studio-value-toggle__bar-tooltip::after")
    expect(css).toContain("border-top: var(--vt-tooltip-spout, 6px) solid")
    expect(css).toContain(".vt-studio-value-toggle__bar-tooltip::before { content: none; }")
  })
})
