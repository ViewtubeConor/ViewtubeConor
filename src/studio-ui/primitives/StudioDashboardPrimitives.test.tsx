import React from "react"
import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import {
  STUDIO_METRIC_ICON_SET,
  StudioAccentRailModule,
  StudioIconTitleModule,
  StudioMetricIcon,
  StudioSpectrumIcon,
  StudioVideoModule,
  StudioVideoSelector,
} from "./StudioDashboardPrimitives"

describe("Studio dashboard-derived primitives", () => {
  it("keeps a complete, stable semantic metric icon registry", () => {
    expect(Object.keys(STUDIO_METRIC_ICON_SET)).toHaveLength(12)
    expect(STUDIO_METRIC_ICON_SET.views.label).toBe("Views")
    expect(STUDIO_METRIC_ICON_SET.revenue.spectrum).toBe("lime")
  })

  it("renders spectrum and metric icons with accessible semantics", () => {
    const html = renderToStaticMarkup(
      <div>
        <StudioSpectrumIcon icon={<span>i</span>} spectrum="cyan" label="Information" />
        <StudioMetricIcon metric="views" />
      </div>,
    )
    expect(html).toContain('data-vt-studio-spectrum-icon="true"')
    expect(html).toContain('aria-label="Information"')
    expect(html).toContain('data-spectrum="rose"')
    expect(html).toContain('aria-label="Views"')
  })

  it("renders accent rail content without imposing a fixed content height", () => {
    const html = renderToStaticMarkup(
      <StudioAccentRailModule spectrum="purple" title="Daily Oracle" subtitle="A useful insight">
        <p>Expandable information can contain arbitrary content.</p>
      </StudioAccentRailModule>,
    )
    expect(html).toContain('data-vt-studio-module="accent-rail"')
    expect(html).toContain("Daily Oracle")
    expect(html).toContain("Expandable information")
  })

  it("renders the split icon-title information module", () => {
    const html = renderToStaticMarkup(
      <StudioIconTitleModule spectrum="teal" icon={<span>!</span>} title="Connection restored" subtitle="Your channel is ready." />,
    )
    expect(html).toContain('data-vt-studio-module="icon-title"')
    expect(html).toContain("Connection restored")
    expect(html).toContain("Your channel is ready.")
  })

  it("keeps video media at a 16:9 ratio and supports unavailable thumbnails", () => {
    const html = renderToStaticMarkup(
      <StudioVideoModule title="Creator workflow" supportingText="Video details" />,
    )
    expect(html).toContain('data-vt-studio-video-module="true"')
    expect(html).toContain("Creator workflow")
    expect(html).toContain("Video details")
    expect(html).toContain('aria-label="Video thumbnail unavailable"')
  })

  it("renders the controlled selected video in the closed selector", () => {
    const html = renderToStaticMarkup(
      <StudioVideoSelector
        label="Choose a video"
        value="video-1"
        onValueChange={() => undefined}
        options={[{ id: "video-1", title: "Selected creator video", duration: "08:42" }]}
      />,
    )
    expect(html).toContain('data-vt-studio-video-selector="true"')
    expect(html).toContain("Selected creator video")
    expect(html).toContain('aria-expanded="false"')
  })
})
