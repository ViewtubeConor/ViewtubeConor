import React from "react"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { renderToStaticMarkup } from "react-dom/server"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import ResourceLibrary from "./ResourceLibrary"
import { StudioResourceSplitButton, StudioSpectrumTag } from "../../studio-ui"

describe("Resource Library production reader", () => {
  it("restores the original Resource Index row treatment while keeping a square canonical split-left rail", () => {
    const html = renderToStaticMarkup(
      <MemoryRouter initialEntries={["/resources?resource=youtube-recommendations-discovery"]}>
        <ResourceLibrary />
      </MemoryRouter>,
    )
    const css = readFileSync(resolve(process.cwd(), "src/features/resource-library/resource-library.css"), "utf8")

    expect(html).toContain('data-vt-library-component="StudioSplitLeftButton"')
    expect(html).toContain('data-vt-studio-split="left"')
    expect(html).toContain('data-rail="start"')
    expect(html).toContain("vt-studio-resource-split-button__copy")
    expect(html).toContain("vt-studio-resource-split-button__category")
    expect(html).toContain("YouTube Strategy")
    const primitiveCss = readFileSync(resolve(process.cwd(), "src/styles/studio-control-system.css"), "utf8")
    expect(primitiveCss).toContain("button.vt-studio-resource-split-button[data-vt-studio-button=\"true\"]")
    expect(primitiveCss).toContain("min-height: 76px")
    expect(primitiveCss).toContain("width: var(--vt-studio-control-height, 44px)")
    expect(primitiveCss).toContain("aspect-ratio: 1 / 1")
    expect(css).not.toContain(".vt-resource-card[data-vt-studio-button")
  })

  it("uses the canonical Spectrum tag for completed document status", () => {
    const html = renderToStaticMarkup(
      <StudioSpectrumTag label="COMPLETED" spectrumKey="completed" className="vt-resource-complete-tag" />,
    )

    expect(html).toContain("COMPLETED")
    expect(html).toContain("vt-resource-complete-tag")
    expect(html).toContain('data-vt-studio-exception="vault-spectrum-tag"')
  })

  it("renders the creator-first recommendations guide through Toolbox document modules", () => {
    const html = renderToStaticMarkup(
      <MemoryRouter
        initialEntries={[
          "/resources?resource=youtube-recommendations-discovery",
        ]}
      >
        <ResourceLibrary />
      </MemoryRouter>,
    )

    expect(html).toContain("RESOURCE LIBRARY")
    expect(html).toContain("How YouTube Finds Viewers for Your Videos")
    expect(html).toContain("The Creator Mental Model")
    expect(html).toContain("Diagnose a Video in ViewTube")
    expect(html).toContain("vt-resource-table")
    expect(html).toContain("vt-resource-checklist")
    expect(html).toContain("vt-resource-flow")
  })

  it("renders the creator-first analytics guide with practical analytics modules", () => {
    const html = renderToStaticMarkup(
      <MemoryRouter
        initialEntries={[
          "/resources?resource=youtube-metrics-dimensions-glossary",
        ]}
      >
        <ResourceLibrary />
      </MemoryRouter>,
    )

    expect(html).toContain("How to Read YouTube Analytics")
    expect(html).toContain("Metrics, Dimensions, Filters and Time Windows")
    expect(html).toContain("Answer Creator Questions by Combining Data")
    expect(html).toContain("vt-resource-table")
    expect(html).toContain("vt-resource-checklist")
    expect(html).toContain("vt-resource-flow")
  })
  it("renders the creator-first Shorts vs long-form guide", () => {
    const html = renderToStaticMarkup(
      <MemoryRouter
        initialEntries={[
          "/resources?resource=shorts-vs-long-form-signals",
        ]}
      >
        <ResourceLibrary />
      </MemoryRouter>,
    )

    expect(html).toContain("Shorts vs Long-Form: Different Systems, Different Signals")
    expect(html).toContain("Same Goal, Different Viewing Experience")
    expect(html).toContain("What Counts as a View in 2026")
    expect(html).toContain("Diagnose Shorts vs Long-Form in ViewTube")
    expect(html).toContain("vt-resource-table")
    expect(html).toContain("vt-resource-checklist")
    expect(html).toContain("vt-resource-flow")
  })

})


describe("StudioResourceSplitButton primitive", () => {
  it("owns its resource-index anatomy without requiring page-level layout classes", () => {
    const html = renderToStaticMarkup(
      <StudioResourceSplitButton icon={<span>R</span>} category="GUIDE" title="CREATOR STRATEGY" meta="8 MIN · BEGINNER" />,
    )
    expect(html).toContain('data-vt-library-component="StudioSplitLeftButton"')
    expect(html).toContain("CREATOR STRATEGY")
    expect(html).toContain("GUIDE")
    expect(html).toContain("8 MIN · BEGINNER")
    expect(html).toContain("vt-studio-resource-split-button")
  })
})
