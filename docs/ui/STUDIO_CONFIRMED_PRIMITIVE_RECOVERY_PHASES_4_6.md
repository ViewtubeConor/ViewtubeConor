# Confirmed Primitive Library recovery — phases 4–6

**Target branch:** `fix/studio-controls-regression-recovery-2026-10-31`  
**Scope:** Restore missing Studio primitive representatives into the active nested Confirmed Primitive Library.  
**Recovery source:** the preserved root-level `src/components/StudioHubConfirmedPrimitiveCatalog.tsx`, compared against the active `src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx`. The root file is used only as a donor; the active nested catalog remains authoritative.

## Phase 4 — Representative inventory and recovery

The active catalog had drifted from the preserved donor. This recovery restores:

- Side Text Counter and Side Text Counter Icon, using the current SideTextCounter-based field architecture.
- Inline and split numeric steppers (Standard and Compact only).
- Semantic spectrum icons, icon badges, and the stable metric icon registry.
- Daily Oracle Accent Rail and split-left Icon + Title information modules.
- 16:9 video module and searchable split-left video selector.
- Panel Accordion.
- Chat Response Shell and Response Metadata Row.
- Calendar multi-day bars and thumbnail event chips.
- Full five-tier StudioLeftCounter specimen coverage.

The old `StudioSplitTextInput`, `StudioSplitLeftTextInput`, `StudioSplitRightTextInput`, and `StudioDoubleSplitTextInput` catalog families were deliberately not restored. They conflict with the prior removal decision to use SideTextCounter-based replacements. `StudioSimpleDropdown` remains excluded from the public Confirmed inventory because it is not exported from the public Studio barrel; the canonical dropdown family remains `StudioDropdown` / `StudioSplitLeftDropdown`.

## Phase 5 — Technical and visual audit boundary

Static source review confirms that restored examples reference production Studio components and their owning stylesheets. The following still require runtime verification:

- TypeScript and lint checks.
- Focus, keyboard navigation, accessible names, and state changes for steppers, accordion, and video selector.
- Responsive layout at mobile portrait, mobile landscape, tablet, and desktop widths.
- Computed size, stroke, radius, focus outline, and token behavior across supported size tiers.
- Browser screenshots of the active Confirmed catalog, including opened dropdown/selector panels.

No browser visual certification or build/test pass is claimed by this document.

## Phase 6 — Findings and remediation

1. Keep the nested `src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx` as the only active Confirmed catalog.
2. Treat the root-level duplicate as a historical donor, not a second runtime registry.
3. Keep the taxonomy inventory, required-export list, classifier rules, and rendered Family specimens in parity.
4. Retain the SideTextCounter-based replacement; do not reintroduce the retired split-text-input implementations.
5. Resolve the `StudioSimpleDropdown` public/internal ownership conflict before considering it a public primitive.
6. Run the focused recovery test, `npm run typecheck`, and `npm run build`; capture responsive browser screenshots before marking Phase 5 certified.

## Verification record

The recovery test is added but has not been executed in this connector session. No build, typecheck, or visual-browser certification is claimed.
