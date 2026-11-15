import React from "react"
import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { StudioPanelAccordion } from "./StudioPanelAccordion"

const items = [
  { icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" /></svg>, label: "Left", content: "Left content" },
  { icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" /></svg>, label: "Middle", content: "Middle content" },
  { icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" /></svg>, label: "Right", content: "Right content" },
] as const

describe("StudioPanelAccordion", () => {
  it("renders three square-rail panel selectors and one active panel", () => {
    const html = renderToStaticMarkup(<StudioPanelAccordion items={items} defaultActiveIndex={1} />)
    expect((html.match(/vt-studio-panel-accordion__rail/g) || []).length).toBe(3)
    expect(html).toContain('data-active-index="1"')
    expect(html).toContain('aria-expanded="true"')
    expect(html).toContain("Middle")
  })

  it("supports compact Studio sizing", () => {
    const html = renderToStaticMarkup(<StudioPanelAccordion items={items} size="compact" />)
    expect(html).toContain('data-size="compact"')
  })
})


describe("StudioPanelAccordion textbox contract", () => {
  it("renders its active content through the canonical StudioTextBox primitive", () => {
    const html = renderToStaticMarkup(<StudioPanelAccordion items={items} defaultActiveIndex={1} />);
    expect(html).toContain('data-vt-studio-text-box="true"');
    expect(html).toContain('data-vt-library-component="StudioTextBox"');
  });

  it("keeps a single vertical separator between the icon rail and text panel", () => {
    const css = readFileSync(resolve(process.cwd(), "src/styles/studio-panel-accordion.css"), "utf8");
    expect(css).toContain(".vt-studio-panel-accordion__textbox");
    const fields = readFileSync(resolve(process.cwd(), "src/styles/studio-control-fields.css"), "utf8");
    expect(fields).toContain("border: var(--vt-studio-control-stroke, 3px) solid #000");
    expect(fields).toContain("box-shadow: inset 0 0 0 var(--vt-studio-control-stroke, 3px)");
  });
});
