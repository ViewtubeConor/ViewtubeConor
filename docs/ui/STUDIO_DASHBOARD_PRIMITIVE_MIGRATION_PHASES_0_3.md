# Studio dashboard primitive migration — phases 0–3

**Target branch:** `fix/studio-controls-regression-recovery-2026-10-31`  
**Scope:** Dashboard Widget primitives → native Studio UI primitives.  
**Status:** Phase 0 audited; phases 1–3 implementation in progress.

## Ownership and guardrails

- Studio Controls and Studio UI remain the implementation authority for Studio consumers.
- Dashboard Widget components are read-only donors. Do not import `src/views/dashboard/**`, `WidgetPrimitives`, `widgetPrimitiveSystem`, dashboard CSS, or dashboard palette helpers from Studio.
- Keep the canonical Studio five-tier size contract (Supreme 60px, Standard 44px, Compact 28px, Mini 20px, Micro 12px), global stroke/radius/focus behavior, flat interaction policy, and full-row defaults.
- Reuse existing Studio controls such as `StudioSquareIconButton`; do not create competing button, dropdown, or field primitives.
- Register production-backed examples in `StudioHubConfirmedPrimitiveCatalog.tsx`, not the legacy migration catalog or a catalog-only implementation.
- Keep the checklist out of this execution: it is Phase 4 in the approved roadmap.

## Phase 0 — source audit and migration map

| Dashboard donor | Native Studio destination | Migration boundary |
|---|---|---|
| `WidgetAccentRailModule` | `StudioAccentRailModule` | Rebuild using Studio palette roles, size tokens, and Studio square icon action |
| `WidgetIconTitleModule` | `StudioIconTitleModule` | Rebuild monochromatic split-left anatomy with semantic icon color |
| `WidgetTinySpectrumIcon` + `WIDGET_TINY_ICON_SET` | `StudioSpectrumIcon` / `StudioIconBadge` | Preserve icon registry concept; own Studio spectrum mapping |
| `WIDGET_METRIC_ICON_SET` | `StudioMetricIcon` / `STUDIO_METRIC_ICON_SET` | Preserve semantic metric-to-glyph/color identity; no dashboard imports |
| `WidgetVideoMiniCard` | `StudioVideoModule` | Rebuild title/media/metadata anatomy with responsive media frame |
| `WidgetVideoSelect` | `StudioVideoSelector` | Rebuild controlled searchable selection with keyboard support and video rows |
| `WidgetChecklistProgress` | Phase 4, deferred | Do not implement in phases 0–3 |

### Inspected source files

- `src/views/dashboard/WidgetPrimitiveExtensions.tsx`
- `src/views/dashboard/WidgetPrimitives.tsx`
- `src/views/dashboard/widgetPrimitiveSystem.css`
- `src/views/dashboard/widgets/UIReferenceLibraryWidget.tsx`
- `src/styles/toolboxPalette.ts` (donor metric ordering and palette only)
- `src/studio-ui/tokens.ts`
- `src/studio-ui/palette.ts`
- `src/studio-ui/index.ts`
- `src/studio-ui/primitives/StudioControls.tsx`
- `src/styles/studio-control-entry.css`
- `src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx`
- `docs/ui/STUDIO_HUB_COMPONENT_LIBRARY_SOURCE_OF_TRUTH.md`

### Audit findings

1. The dashboard already has production implementations for the first five donor systems; the migration should preserve their useful API/behavioral concepts, not copy dashboard classes or CSS.
2. The active Studio library is `StudioHubConfirmedPrimitiveCatalog.tsx`. `ToolboxUIReferenceLibrary.tsx` is its shell/route selector; legacy catalogs are not the confirmed registry.
3. Studio has a five-tier size contract and existing square icon-button primitive. New modules must use those instead of widget-specific 18/24/32/38px sizing.
4. Existing Studio palette bridge delegates to the Toolbox palette. New migrated components must not import Dashboard Widget code or its palette helpers; semantic spectrum colors are declared in the Studio migration family stylesheet/API.
5. Video selection must remain controlled by the consuming workflow; this component owns presentation, local query state, and menu interaction only. It must not fetch channel data or invent video metadata.
6. Dashboard checklist progress is intentionally deferred to Phase 4.

## Phases 1–3 acceptance criteria

### Phase 1 — Spectrum and metric icons
- Export `StudioSpectrumIcon`, `StudioIconBadge`, and `StudioMetricIcon`.
- Export a typed metric registry with stable semantic keys and colors.
- Support accessible labels, decorative mode, square/circle/plain treatments, and canonical size tiers.
- No dashboard imports.

### Phase 2 — Information modules
- Export `StudioAccentRailModule` and `StudioIconTitleModule`.
- Accent rail module supports arbitrary-height content, title/subtitle, optional expansion, and an optional canonical square Studio icon action.
- Icon-title module supports monochromatic split-left anatomy, title/subtitle, semantic icon, and optional action.
- Preserve full-width default and avoid fixed content height.

### Phase 3 — Video modules and selector
- Export `StudioVideoModule` and `StudioVideoSelector`.
- Preserve 16:9 thumbnails, optional upper/lower text, metadata, selection, loading/empty states, and missing-thumbnail fallback.
- Selector supports controlled selection, searchable menu, keyboard navigation, Escape dismissal, and accessible listbox/option semantics.
- No data fetching; caller supplies video options and image URLs.

## Verification record

Tests/build/typecheck are not recorded as passed until executed against this branch. The GitHub connector used for this audit can inspect and commit repository files but does not provide a local checkout or a test runner. Do not mark phases complete based on static inspection alone.
