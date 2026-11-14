import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import { BrainComposerDock } from "./BrainComposerDock"

const renderComposer = (overrides: Partial<React.ComponentProps<typeof BrainComposerDock>> = {}) =>
  renderToStaticMarkup(
    <BrainComposerDock
      value=""
      onChange={vi.fn()}
      onSend={vi.fn()}
      onOpenPrompts={vi.fn()}
      onOpenCapabilities={vi.fn()}
      onOpenContext={vi.fn()}
      onOpenJournal={vi.fn()}
      {...overrides}
    />,
  )

const at = (html: string, needle: string) => {
  const index = html.indexOf(needle)
  expect(index, `${needle} should be rendered`).toBeGreaterThanOrEqual(0)
  return index
}

/** The opening tag through the closing tag of the button that carries `needle`. */
const buttonOf = (html: string, needle: string) => {
  const start = at(html, needle)
  return html.slice(start, html.indexOf("</button>", start))
}

describe("BrainComposerDock", () => {
  it("reads in writing order: field, Send, labelled entry points, then the Journal", () => {
    const html = renderComposer({ value: "Review my latest video" })

    expect(html).toContain('aria-label="Brain message composer"')
    expect(html).toContain('data-vt-composer-layout="toolbar-actions"')

    const field = at(html, 'aria-label="Message to ViewTube Brain"')
    const send = at(html, 'data-vt-brain-component="BrainComposerSendAction"')
    const prompts = at(html, 'data-vt-brain-component="BrainComposerPromptLibraryAction"')
    const tools = at(html, 'data-vt-brain-component="BrainComposerCapabilitiesAction"')
    const context = at(html, 'data-vt-brain-component="BrainComposerContextAction"')
    const journal = at(html, 'data-vt-brain-component="BrainComposerJournalAction"')

    expect(field).toBeLessThan(send)
    expect(send).toBeLessThan(prompts)
    expect(prompts).toBeLessThan(tools)
    expect(tools).toBeLessThan(context)
    expect(context).toBeLessThan(journal)
  })

  it("builds the field and entry points from Studio primitives at the intended tiers", () => {
    const html = renderComposer({ value: "Review my latest video" })

    // Writing surface: compact Studio textarea (14px type, 92px multiline minimum).
    expect(html).toMatch(/<textarea[^>]*data-vt-studio-field-kind="textarea"/)
    expect(html).toMatch(/<textarea[^>]*data-size="compact"/)
    expect(html).toContain('class="vt-brain-composer-input w-full min-w-0 resize-none"')

    // Send is the one standard-tier control and wears the black V4 face.
    const send = buttonOf(html, 'data-vt-brain-component="BrainComposerSendAction"')
    expect(send).toContain('data-control-size="standard"')
    expect(send).toContain('data-icon-variant="v4"')
    expect(send).toContain('data-vt-studio-button-variant="v4"')

    // The action rail is two standard 44px squares: 44 + 4 + 44 = the textarea's 92px minimum.
    const clear = buttonOf(html, 'data-vt-brain-part="clear-composer-draft"')
    expect(clear).toContain('data-control-size="standard"')
    expect(clear).toContain('data-icon-variant="v2"')

    // Entry points are compact two-line split buttons, so labels stay whole on a 360px phone.
    for (const [component, first, second] of [
      ["BrainComposerPromptLibraryAction", "PROMPT", "LIBRARY"],
      ["BrainComposerCapabilitiesAction", "BRAIN", "TOOLS"],
      ["BrainComposerContextAction", "CHANNEL", "CONTEXT"],
      ["BrainComposerJournalAction", "AI", "JOURNAL"],
    ] as const) {
      const button = buttonOf(html, `data-vt-brain-component="${component}"`)
      expect(button).toContain('data-vt-library-component="StudioSplitTwoLineButton"')
      expect(button).toContain('data-size="compact"')
      expect(button).toContain(`data-vt-studio-button-line="first">${first}<`)
      expect(button).toContain(`data-vt-studio-button-line="second">${second}<`)
    }
  })

  it("colours the entry points from the shared palette instead of Brain-only hex", () => {
    const html = renderComposer()

    expect(html).toContain("--vt-studio-control-accent:#FF7AC8")
    expect(html).toContain("--vt-studio-control-accent:#36E0F6")
    expect(html).toContain("--vt-studio-control-accent:#3FEE56")
    expect(html).toContain("--vt-studio-control-accent:#A467F4")
  })

  it("keeps accessible names on every icon-led action", () => {
    const html = renderComposer({ value: "Draft", activePromptTitle: "Analyze channel niche" })

    for (const label of [
      "Send message",
      "Clear message draft",
      "Clear draft source label",
      "Open prompt library",
      "Open Brain tools",
      "Open channel context",
      "Open AI Journal",
    ]) {
      expect(html).toContain(`aria-label="${label}"`)
    }
    expect(html).toContain('aria-label="Draft source: Analyze channel niche"')
  })

  it("does not enable send for an empty or whitespace-only draft", () => {
    for (const html of [renderComposer(), renderComposer({ value: "   " })]) {
      expect(buttonOf(html, 'data-vt-brain-component="BrainComposerSendAction"')).toContain('disabled=""')
    }
  })

  it("enables send for a non-empty draft and disables it while Brain is working", () => {
    const ready = renderComposer({ value: "Review my latest video" })
    const busy = renderComposer({ value: "Review my latest video", busy: true })

    const readySend = buttonOf(ready, 'data-vt-brain-component="BrainComposerSendAction"')
    expect(readySend).toContain('aria-label="Send message"')
    expect(readySend).not.toContain('disabled=""')

    const busySend = buttonOf(busy, 'data-vt-brain-component="BrainComposerSendAction"')
    expect(busySend).toContain('aria-label="Sending message"')
    expect(busySend).toContain('disabled=""')
    expect(busy).toContain("Working")
    // The draft cannot be wiped out from under an in-flight request.
    expect(buttonOf(busy, 'data-vt-brain-part="clear-composer-draft"')).toContain('disabled=""')
  })

  it("shows the keyboard hint while idle and the truthful status while working", () => {
    const idle = renderComposer()
    const busy = renderComposer({ busy: true })

    expect(idle).toContain("Enter to send")
    expect(idle).toContain("Shift+Enter for a new line")
    expect(busy).not.toContain("vt-brain-composer-hint")
    expect(busy).toContain("Working")
  })

  it("keeps Clear draft in the rail at all times, enabled only when there is a draft", () => {
    const empty = renderComposer()
    const drafting = renderComposer({ value: "Review my shorts", activePromptTitle: "Analyze channel niche" })

    expect(buttonOf(empty, 'data-vt-brain-part="clear-composer-draft"')).toContain('disabled=""')
    expect(buttonOf(drafting, 'data-vt-brain-part="clear-composer-draft"')).not.toContain('disabled=""')
  })

  it("shows the draft-source badge and its clear control only while a source is active", () => {
    const empty = renderComposer()
    const sourced = renderComposer({ value: "Review my shorts", activePromptTitle: "Analyze channel niche" })

    expect(empty).not.toContain('data-vt-brain-part="composer-attachments"')
    expect(sourced).toContain('data-vt-brain-part="composer-attachments"')
    expect(sourced).toContain('data-vt-brain-part="clear-composer-source"')
    expect(sourced).toContain("Analyze channel niche")
  })

  it("pairs the labelled Journal button with a compact icon fallback for narrow docks", () => {
    const html = renderComposer()

    expect(html).toContain('class="vt-brain-composer-journal-labelled"')
    expect(html).toContain('class="vt-brain-composer-journal-icon"')
    const icon = buttonOf(html, 'data-vt-brain-component="BrainComposerJournalCompactAction"')
    expect(icon).toContain('data-control-size="compact"')
    expect(icon).toContain('aria-label="Open AI Journal"')
  })

  it("only renders entry points the page actually provides", () => {
    const html = renderComposer({ onOpenCapabilities: undefined, onOpenJournal: undefined })

    expect(html).not.toContain('data-vt-brain-component="BrainComposerCapabilitiesAction"')
    expect(html).not.toContain('data-vt-brain-component="BrainComposerJournalAction"')
    expect(html).not.toContain('data-vt-brain-component="BrainComposerJournalCompactAction"')
    expect(html).toContain('data-vt-brain-component="BrainComposerPromptLibraryAction"')
    expect(html).toContain('data-vt-brain-component="BrainComposerContextAction"')
  })

  it("caps the field growth and honours the page-supplied limit", () => {
    expect(renderComposer()).toContain("max-height:144px")
    expect(renderComposer({ maxFieldPx: 200 })).toContain("max-height:200px")
  })
})
