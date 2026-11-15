# ViewTube Analytics Visual Context Bar / Metric Rail Reconciliation Audit

**Date:** 2026-11-15  
**Branch:** `integration/reconciled-master-studio-2026-11-15`  
**Master snapshot:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**10-31 source:** `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`  
**Diagnostic PR:** [#1271](https://github.com/viewtube-dev/viewtube/pull/1271)

## 1. Decision

**Preserve the master stat-width reservation and metric-tone resolution contracts. Treat the 10-31 Studio split-left metric rail as a candidate presentation enhancement, not a wholesale replacement. Prefer explicit metric icon metadata; do not make substring inference the canonical identity system.**

The source changes the stat-card presentation from a single button with stacked value/label to a StudioSplitLeftButton with a square icon rail and compact text pane. It also adds optional `iconKey` to the stat contract.

## 2. Master behavior to preserve

The master `analyticsVisualContextBar.tsx` already provides:
- Canonical metric label normalization.
- Direct metric color resolution and explicit aliases.
- Per-item value-tone override.
- Dark-stat neutral fallback when a metric has no resolved color.
- Configurable standard/expanded/none context-bar height.
- `minWidth`, `compact`, `labelWidthValues`, and `valueWidthValues` support.
- A width-reservation helper that reserves the widest declared label/value candidate so changing a metric or value does not resize the stat card unexpectedly.

This width-stability contract is important to the analytics visuals. Keep it intact even if the internal button markup changes.

## 3. 10-31 split-left contribution

The source adds:
- Optional `iconKey` to `AnalyticsVisualStat`.
- `AnalyticsVisualIcon` as the rail icon renderer.
- `StudioSplitLeftButton` as the stat control.
- A 16px icon with a compact square rail.
- A width reservation helper that considers current label/value and declared future label/value candidates, then reserves additional room for the icon rail.
- A test asserting the rendered Studio split-left structure and `width:auto`.

This is a plausible additive presentation upgrade and aligns the metric control with the shared Studio primitive system.

## 4. Important source limitation: inferred icon keys

When `item.iconKey` is absent, the source derives an icon by checking substrings in the label (for example, labels containing “view”, “watch”, “subscriber”, “revenue”, or “traffic”).

This is fragile:
- Localized labels may not match.
- Similar words may map to the wrong icon.
- Abbreviations and aliases may be inconsistent with metric identity.
- A display label change can unexpectedly change the icon.

**Recommendation:** preserve `iconKey` as an optional explicit metadata field and prefer caller-supplied values. For a fallback, use the canonical metric identifier/alias registry if one exists, not label substring heuristics. If no stable identity is available, use the generic analytics icon.

Do not force all current callers to supply icons until the metric contract and caller inventory are complete.

## 5. Width and layout reconciliation

The master contract reserves the widest declared label/value candidates. The source split version also considers the current label and value and adds rail width.

A safe reconciliation should:
1. Reuse master `statReservedWidth` logic as the source of text-width reservation.
2. Add the exact split-rail width and separators as a separate, explicit term.
3. Preserve `minWidth`, compact floor, `labelWidthValues`, and `valueWidthValues`.
4. Ensure `width:auto` and `flex: 0 0 auto` prevent unwanted equal stretching.
5. Verify no card grows or shrinks when a visual changes from a short label/value to its widest declared alternative.
6. Test narrow containers and long/localized labels for overflow or clipping.

Avoid replacing master width logic with a parallel heuristic. If the rail geometry changes, update one canonical reservation helper and its tests.

## 6. Consumer and test requirements

The master component is consumed by multiple visual surfaces (including the shared chart/visual modules). Before porting, inventory every caller of `AnalyticsActiveStats` and `AnalyticsVisualStat` and check whether each supplies explicit width candidates, compact/min-width settings, custom tones, click behavior, and dark-stat mode.

Tests required:
1. Master label normalization and metric-tone tests remain unchanged.
2. Explicit `iconKey` selects the intended icon.
3. Missing `iconKey` falls back deterministically without fragile label substring inference.
4. Width reservation includes current label/value, all declared future labels/values, minimum width, and rail/separator width.
5. Long labels, localized labels, large values, and changing metrics do not resize or clip cards unexpectedly.
6. Clickable and disabled states retain correct native button semantics.
7. Selected state is exposed accessibly if it represents a selected metric.
8. Light and dark stat modes preserve text contrast and per-item tone overrides.
9. All known callers render correctly at compact and expanded widths.

The source adds a focused split-left render test to the existing test file. Preserve that test intent, but expand beyond string checks to behavior and computed geometry.

## 7. Implementation sequence

1. Inventory all consumers and their stat configurations.
2. Keep master normalization, tone resolution, and width-candidate contract.
3. Port the split-left visual using the canonical Studio primitive.
4. Add/retain optional explicit `iconKey`; map from stable metric IDs where available.
5. Consolidate width reservation into one helper that accounts for the rail.
6. Add tests for the full caller matrix and mobile/compact geometry.
7. Run Analytics visual tests, Studio primitive tests, typecheck, build, and browser checks.

## 8. Verification boundary

Reviewed frozen master/source versions of:
- `src/components/analyticsVisualContextBar.tsx`
- `src/components/analyticsVisualContextBar.test.tsx`
- `src/components/AnalyticsVisualIcon.tsx` from the source snapshot
- `src/components/DataVisuals/ChartModule.tsx` in master
- the previously identified visual consumers from the capability audit.

The exact PR #1271 patches for the analytics component and its test were inspected.

No implementation files were changed. No tests, typecheck, build, browser, or accessibility runs were performed. This is a source audit and selective-port recommendation, not a completed implementation.
