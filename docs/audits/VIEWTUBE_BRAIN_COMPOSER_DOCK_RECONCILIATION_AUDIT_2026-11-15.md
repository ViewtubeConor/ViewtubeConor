# ViewTube Brain Composer Dock Reconciliation Audit

**Date:** 2026-11-15  
**Branch:** integration/reconciled-master-studio-2026-11-15  
**Master snapshot:** 52c6e90f416aaac7d3690581e1faab9e4cfb0b1d  
**10-31 source:** 7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49  
**Diagnostic PR:** [#1271](https://github.com/viewtube-dev/viewtube/pull/1271)

## 1. Decision

**Preserve master Brain page integration, current Studio primitive ownership, inline-actions behavior, and field styling contract. Selectively restore the source's missing clear-draft safety, optional Tools/Journal entry points, responsive tool-row behavior, and bounded textarea growth after checking actual page callbacks and layout consumers. Do not wholesale replace the master dock.**

Master is the more integrated composition in the frozen snapshot:
- Uses StudioButton, StudioSplitLeftButton, StudioTextArea, StudioLedBadgeTab, and StudioChatComposerDock.
- Uses layout="inline-actions".
- Has a standard-size textarea and visually dominant message field.
- Provides Prompts and Context entry points beside the field.
- Shows a draft-source badge, Clear source, Clear draft, truthful busy status, and Enter/Shift+Enter guidance.
- Preserves an existing dedicated field styling contract test.

The 10-31 source adds useful interactions and a different toolbar composition, but also replaces the master button composition and changes the textarea tier/layout. That change needs current page-level review before adoption.

## 2. Source behaviors worth recovering

### 2.1 Clear draft safety

The source keeps Clear draft in the action rail even when the draft is empty (disabled), and disables it while Brain is busy. The master currently renders Clear draft only when text exists and does not disable it while busy.

**Recommended selective port:** keep a persistent, disabled-when-empty Clear action and disable it during an in-flight request. Preserve the page's existing draft ownership and onChange callback.

### 2.2 Optional Brain Tools and AI Journal

The source renders:
- Prompts
- Brain Tools, only when onOpenCapabilities is supplied
- Channel Context
- AI Journal, only when onOpenJournal is supplied

It uses labelled split-two-line controls on wider docks and an icon-only Journal fallback at narrow dock widths.

The master prop type already declares onOpenCapabilities and onOpenJournal, but the master render does not use them. The source tests verify that optional actions appear only when callbacks are supplied.

**Recommended selective port:** reconnect these optional entry points only after confirming the owning Brain page provides real callbacks and the intended destinations/actions. Do not add dead buttons or invent a Journal route. Keep the source's conditional-rendering rule.

### 2.3 Bounded textarea growth

The source adds a default 144px cap, uses an isomorphic layout effect to measure scroll height, and grows the field up to the cap before internal scrolling.

This can improve writing comfort, but it changes layout behavior and the minimum field geometry. Verify the actual dock width, mobile viewport, virtual keyboard behavior, and any parent page height constraints before adoption. Preserve the page-supplied maxFieldPx override and avoid layout shifts during hydration.

### 2.4 Responsive tools row

The source uses container queries at 388px and 520px to adapt the labelled Journal and optional Brain Tools controls to the dock's own width. This is preferable to viewport-only assumptions for a dock that may appear in a narrow panel.

Retain the source's wrapper-only show/hide strategy; do not hide the Studio button itself or override primitive display behavior.

## 3. Preserve master integration and contracts

1. Keep page ownership of send, prompt selection, context, busy state, and draft value.
2. Keep the master current Studio primitive API unless an API-specific test proves a required additive change.
3. Keep the master Brain field CSS contract: black outer border, always-visible primary inset, black focus text/stroke, retained inset, secondary focus outline, and zero outline offset.
4. Preserve the master current status badge behavior and source badge.
5. Keep the onSend callback as the only send action; do not duplicate submit state inside the dock.
6. Keep composition CSS layout-only. Source tests explicitly forbid control styling, primitive-internal selectors, raw Brain-only colors, and !important.
7. Do not add a second Brain composer implementation or another runtime/controller.

## 4. Layout trade-off: inline-actions vs toolbar-actions

Master uses inline-actions, placing Prompts/Context and Send beside the textarea. The source uses toolbar-actions, placing a dedicated vertical Clear/Send rail beside the field and a separate full-width tool tray below.

These are meaningfully different interaction layouts, not a small CSS patch. The source layout offers a clearer writing order and additional tools but consumes more vertical space. The master layout is more compact and currently integrated.

Before selecting one:
- Inspect every page embedding the dock and the width/height of its parent.
- Confirm the intended phone layout and keyboard behavior.
- Check whether the prompt/context launchers need to remain beside the field.
- Confirm the user-facing hierarchy: field → Send → Prompts/Tools/Context/Journal.
- Validate focus order matches visual order.

Do not change the layout mode without a page-level acceptance decision and responsive browser evidence.

## 5. Tests to add or reconcile

Preserve the master BrainComposerDock.contract.test.ts field ownership/focus tests. Preserve master interaction tests and port source tests for:
1. Clear draft always rendered and disabled when empty.
2. Clear draft disabled while busy.
3. Clear source appears only when a prompt source exists.
4. Optional Tools/Journal render only when callbacks exist.
5. Journal labelled/icon variant changes at the dock container's width thresholds.
6. Textarea grows up to the configured cap and then scrolls internally.
7. Keyboard Enter/Shift+Enter behavior, including IME composition.
8. Focus order follows the selected visual layout.
9. Accessible names for all icon-led actions.
10. The dock remains layout-only and does not style Studio control internals.
11. Current field default/focus contract remains intact.
12. Parent page callback wiring is real and tested, not inferred from prop declarations.

Static markup tests cannot prove container-query layout, dynamic height, keyboard behavior, or focus movement. Add browser/component interaction coverage for those behaviors.

## 6. Implementation order

1. Inventory all master BrainComposerDock callers and callback availability.
2. Port Clear draft disabled/busy semantics.
3. Restore Tools/Journal only where the page provides supported callbacks.
4. Decide inline-actions versus toolbar-actions with actual page constraints.
5. If toolbar-actions is selected, adopt container-query responsive behavior and bounded textarea growth together.
6. Preserve master field CSS ownership and add/retain source contract tests.
7. Run Brain composer tests, Studio primitive tests, typecheck, build, and mobile browser verification.

## 7. Verification boundary

Reviewed frozen master/source versions and the exact PR #1271 patches for:
- BrainComposerDock.tsx
- BrainComposerDock.css
- BrainComposerDock.test.tsx
- BrainComposerDock.contract.test.ts

The source tests were inspected for action order, primitive composition, palette use, accessible names, busy/empty states, conditional Tools/Journal, responsive Journal fallback, and max field height. Master-specific field contract tests were retained as a requirement.

No implementation files were changed. No tests, typecheck, build, browser, or accessibility runs were performed. This is a source audit and selective-port plan, not an implementation or verification claim.
