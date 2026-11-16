import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { StudioCalendarEventChip, StudioCalendarMediaRail, StudioCalendarMultiDayBar, StudioCalendarThumbnailEventChip } from "../../studio-ui/primitives/StudioCalendarPrimitives"

describe("Studio Calendar control compositions", () => {
  it("renders event chips with semantic event identity and accessible action", () => {
    const html = renderToStaticMarkup(
      <StudioCalendarEventChip
        label="Publish episode"
        kind="publish"
        status="scheduled"
        selected
        onClick={() => undefined}
      />,
    )
    expect(html).toContain('data-vt-calendar-event="true"')
    expect(html).toContain('data-event-kind="publish"')
    expect(html).toContain('aria-pressed="true"')
    expect(html).toContain("PUBLISH EPISODE")
  })

  it("supports landscape and portrait media rails without changing the project data owner", () => {
    const html = renderToStaticMarkup(
      <>
        <StudioCalendarMediaRail aspectRatio="16:9" label="Landscape thumbnail" />
        <StudioCalendarMediaRail aspectRatio="9:16" label="Shorts thumbnail" />
      </>,
    )
    expect(html).toContain('data-aspect-ratio="16:9"')
    expect(html).toContain('data-aspect-ratio="9:16"')
    expect(html).toContain('aria-label="Landscape thumbnail"')
    expect(html).toContain('aria-label="Shorts thumbnail"')
    expect(html).toContain("vt-studio-calendar-media-rail")
  })
  it("integrates the shared Studio primitives without creating a parallel calendar store", () => {
    const calendar = readFileSync(resolve(process.cwd(), "src/components/projects/ProjectPlannerCalendar.tsx"), "utf8")
    const styles = readFileSync(resolve(process.cwd(), "src/components/projects/ProjectPlannerCalendar.css"), "utf8")
    expect(calendar).toContain('import "./ProjectPlannerCalendar.css"')
    expect(calendar).toContain("StudioCalendarEventChip")
    expect(calendar).toContain("StudioCalendarMediaRail")
    expect(calendar).toContain("StudioCloseableBadge")
    expect(calendar).toContain("StudioCheckbox")
    expect(calendar).toContain("updateProject(projectId, { tasks, updatedAt: Date.now() })")
    expect(calendar).toContain("StudioSplitLeftButton")
    expect(calendar).toContain("StudioSquareIconButton")
    expect(calendar).toContain("StudioDropdown")
    const catalog = readFileSync(resolve(process.cwd(), "src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx"), "utf8")
    expect(catalog).toContain("Calendar Event & Media Rails")
    expect(catalog).toContain("StudioCalendarEventChip")
    expect(catalog).toContain("StudioCalendarMediaRail")
    expect(calendar).toContain("updateProject(project.id, { publishDate: selectedDate")
    expect(calendar).toContain("project.tasks")
    expect(calendar).toContain("getContentBuild(project.contentBuildId)")
    expect(calendar).toContain("getProjectCalendarPublicationBadge")
    expect(calendar).toContain("StudioCheckbox")
    expect(calendar).not.toContain("localStorage")
    expect(calendar).not.toContain("<style>")
    expect(styles).toContain("grid-template-columns:repeat(7,minmax(0,1fr))")
    expect(styles).toContain("@media (max-width: 420px)")
  })

})


describe("calendar global Mini-tier alignment", () => {
  it("uses Mini token geometry, typography, icon sizing, and solid pair fills for events and bars", () => {
    const html = renderToStaticMarkup(
      <>
        <StudioCalendarEventChip label="TASK" kind="task" sizeVariant="mini" />
        <StudioCalendarMultiDayBar label="CAMPAIGN" segment="single" channelWide />
        <StudioCalendarThumbnailEventChip label="PUBLISH" thumbnail={<svg viewBox="0 0 16 9"><rect width="16" height="9" fill="var(--pair-a)" /></svg>} />
      </>,
    );
    expect((html.match(/data-size="mini"/g) || []).length).toBe(3);
    expect(html).toContain("<svg");
    const css = readFileSync(resolve(process.cwd(), "src/studio-ui/primitives/studio-calendar-primitives.css"), "utf8");
    expect(css).toContain("var(--vt-studio-mini-height, 20px)");
    expect(css).toContain("var(--vt-studio-mini-stroke, 1.5px)");
    expect(css).toContain("var(--vt-studio-mini-radius, 3px)");
    expect(css).toContain("var(--vt-studio-mini-font-size, 17.5px)");
    expect(css).toContain("var(--vt-studio-mini-icon-size, 17.5px)");
    expect(css).toContain('data-channel-wide="true"');
    expect(css).not.toContain("border-style: dashed");
  });

  it("renders thumbnail artwork and a standalone Panel Accordion in the Confirmed library", () => {
    const catalog = readFileSync(resolve(process.cwd(), "src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx"), "utf8");
    expect(catalog).toContain('data-vt-library-component="StudioCalendarThumbnailEventChip"');
    expect(catalog).toContain('aria-label="Creator video thumbnail artwork"');
    expect(catalog).toContain('title="Panel Accordion"');
    expect(catalog).toContain('title="Calendar Event Chips & Multi-day Bars · Mini Representatives"');
  });

  it("uses Mini event chips and date markers throughout Project Planner", () => {
    const calendar = readFileSync(resolve(process.cwd(), "src/components/projects/ProjectPlannerCalendar.tsx"), "utf8");
    const miniWidget = readFileSync(resolve(process.cwd(), "src/components/MiniCalendarWidget.tsx"), "utf8");
    expect(calendar).toContain('data-vt-studio-control="true" data-size="mini"');
    expect(calendar).toContain('sizeVariant="mini"');
    expect(miniWidget).toContain("data-vt-studio-control=\"true\"");
    expect(miniWidget).toContain("var(--vt-studio-control-height, 20px)");
    expect(miniWidget).toContain("var(--vt-studio-control-stroke, 1.5px)");
  });
});
