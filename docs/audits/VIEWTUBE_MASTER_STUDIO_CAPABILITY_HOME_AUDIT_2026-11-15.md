# ViewTube Master–Studio Reconciliation: Capability-Home Audit 02

**Date:** 2026-11-15  
**Branch:** `integration/reconciled-master-studio-2026-11-15`  
**Master snapshot:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**10-31 snapshot:** `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`  
**Scope:** Vault, Resource Library, Calendar primitives/contracts, Analytics Visual Context, and Brain Composer.

## 1. Executive result

The capability-home audit confirms that these areas are not wholly absent from master. Most already have active implementation homes on both snapshots. The reconciliation question is therefore which 10-31 refinements add a missing behavior, stronger safety contract, or reusable primitive, and which are older presentation choices that master has already replaced.

**No feature implementation was ported in this audit.** This document records source-level comparison and preliminary dispositions only.

## 2. Capability matrix

| Capability | Master snapshot | 10-31 snapshot | Preliminary decision |
|---|---|---|---|
| Resource Library reader | Present | Present | Keep master reader foundation; selectively review 10-31 Studio card/tag treatment and its tests |
| Resource Library registry/content | Present | Present; registry blob identical in inspected source | Do not duplicate registry/content |
| Creator Vault workspace | Present | Present | Preserve master base; selectively port stronger mutation eligibility and restore safeguards from 10-31 |
| Vault adapter/workspace state | Present | Present | Workspace state identical; adapter differs and needs a focused semantic diff |
| Brain Vault retrieval adapter | Present | Present | Same read-only canonical adapter; source route differs; reconcile navigation destination |
| Calendar Studio primitives | Base event chip + media rail | Adds mini chip, multi-day bar, thumbnail event chip | Candidate additive port after owner/consumer audit |
| Calendar event projection contract | Not present at this master path | Present | Candidate port as read-model contract; verify current owning domain contracts before adoption |
| Analytics Visual Context | Present | Present with metric icon/split-left rail additions | Preserve master width-stability behavior; selectively evaluate icon rail |
| Brain Composer Dock | Present | Present, substantially richer composition | Preserve master integration/Studio ownership; selectively restore missing UX behavior where still required |

## 3. Resource Library

### Existing master capability

Master already contains:

- `src/features/resource-library/ResourceLibrary.tsx`
- `src/features/resource-library/resourceLibraryRegistry.ts`
- `src/features/resource-library/ResourceDocumentRenderer.tsx`
- `src/features/resource-library/resource-library.css`
- `src/features/resource-library/ResourceLibrary.contract.test.tsx`

The inspected registry file has the same blob SHA on both frozen snapshots, so the resource catalog and registry implementation at that path do not need to be copied from 10-31.

Master also has the creator-first recommendations and analytics guide render tests.

### 10-31 additions/differences

10-31 imports `StudioSplitLeftButton` into the Resource Library reader and uses the shared Studio split-left component for resource index rows. Its CSS explicitly preserves a square 44px rail and a full-row card treatment. Its Resource Library contract test adds assertions for the split-left rail and canonical Spectrum tag treatment.

The master version instead uses its own 48px icon column and associated card markup/styles. The 10-31 renderer also imports `StudioSpectrumTag`, while the master renderer does not.

### Disposition

**Keep master registry, content, renderer architecture, and existing guide tests. Investigate selective port of the 10-31 Studio component treatment.**

Before porting, verify:

- `StudioSplitLeftButton` remains an approved active public primitive on the reconciliation branch.
- The 44px rail matches the current 44px Standard geometry and catalog rules.
- The card's full-row width and mobile behavior remain correct.
- The completed-state Spectrum tag is a documented exception, not an undocumented custom skin.
- The 10-31 CSS does not conflict with master card hover/focus or accessible hit-area behavior.

Do not copy the registry or duplicate guide documents.

## 4. Creator Vault and Vault services

### Existing master capability

Both snapshots contain the main Vault workspace and the shared service homes:

- `src/views/CreatorVaultOS.tsx`
- `src/services/vaultAdapter.ts`
- `src/services/vaultWorkspaceState.ts`
- `src/services/vaultMutationPolicy.ts`
- `src/services/brain/BrainVaultAdapter.ts`

The workspace state and mutation-policy files have identical blob SHAs in both snapshots. The core Vault adapter exists in both but differs.

### Vault UI differences

The 10-31 `CreatorVaultOS.tsx` uses `canMutateVaultAsset` for selected-record action eligibility, including archive, permanent delete, metadata edit, and compatible tool handoff.

Master uses its own local selection/protection checks and adds separate handling for all-selected/any-selected trashed states, plus additional direct/content-build video ID resolution. These master behaviors should not be lost.

The 10-31 Lane B test additionally asserts metadata-based archive/trash visibility, policy gating, compatible tool targets, and transcript-video ID resolution. The master Lane B test has a smaller set of assertions and does not include all those checks.

### Vault adapter safety difference

The inspected 10-31 `vaultAdapter.ts` explicitly checks `canMutateVaultAsset(existing, "restore")` before restoring archived/trashed state.

The inspected master adapter checks eligibility for archive and trash, but the corresponding restore guard was not present in the audited `setVaultAssetState` section.

This is a concrete candidate safety regression to investigate and cover with tests. The shared mutation policy already defines a restore action, so the preferred repair is to use that existing policy rather than invent another policy layer.

### Disposition

**Preserve master Vault workspace and its additional video-ID resolution. Port or reapply the 10-31 policy-based UI eligibility and restore guard selectively, with tests.**

Required tests:

- Protected/GOLDEN asset behavior.
- Archive eligibility.
- Trash eligibility.
- Restore eligibility and lifecycle restoration.
- Permanent delete only from trash and only when unprotected.
- Metadata edit eligibility.
- Mixed selections with protected/trashed/active assets.
- Compatible tool handoff.
- Existing video-ID and transcript resolution.
- Workspace state persistence and filters.

Do not replace the entire 3,999-line Vault view with the 10-31 file. The two files are close in size but contain different behavior on both sides.

### Brain Vault Adapter

Both snapshots contain the same read-only metadata/provenance adapter shape. The 10-31 version creates a deep-link evidence route to `/vault?assetId=...`; master uses the generic toolbox route.

**Disposition:** Preserve the read-only adapter and reconcile its route with the current canonical Vault asset-selection URL. Do not expose raw file data or provider IDs through Brain evidence.

## 5. Calendar primitives and projection contract

### Existing master capability

Master contains:

- `src/studio-ui/primitives/StudioCalendarPrimitives.tsx`
- `src/studio-ui/primitives/studio-calendar-primitives.css`

The master component provides the base calendar event chip and media rail.

### 10-31 additive components

10-31 expands the same component module with:

- Mini event-chip presentation.
- `StudioCalendarMultiDayBar` with single/start/middle/end segments.
- `StudioCalendarThumbnailEventChip`.
- Mini segment and size types.
- Additional matching CSS for these representations.

These are additive capabilities rather than a separate calendar implementation.

### Calendar projection contract

10-31 adds `src/services/calendar/calendarEventContract.ts`, defining a read-model projection with explicit ownership for Projects, Publisher/ContentBuild, Asset Engine, and Analytics.

The contract explicitly says it is a projection, not a persistence model. It prohibits creating calendar-local records and prevents inventing project start/end ranges from a publish date.

Master does not contain this file at the audited path.

### Disposition

**Candidate port the additional primitives and read-model contract, subject to a consumer and owner-contract audit.**

Before porting:

- Search master for existing calendar projections or event normalization contracts under other names.
- Confirm the calendar page/feature actually needs mini, multi-day, and thumbnail event renderers.
- Verify that segment boundaries are derived from owner-supplied dates.
- Verify that schedule status is never inferred without a verified publisher timestamp.
- Keep writes with Projects, Publisher, Asset Engine, and Analytics owners.
- Do not introduce a calendar-owned persistence table or duplicate project date fields.

### Calendar CSS concern

The master calendar stylesheet contains a field-fill fallback that mixes primary with transparent. That conflicts with the current 50%-white/50%-primary Studio rule. The 10-31 stylesheet uses the white/primary mix in its mini-chip rules but also includes a broad `!important` animation/transition suppression selector.

**Disposition:** Reconcile individual declarations to the current Studio contract; do not wholesale copy either stylesheet.

## 6. Analytics Visual Context

### Existing master capability

Master has `src/components/analyticsVisualContextBar.tsx` and its test, with consumers including:

- `UnifiedAnalyticsVisualModule.tsx`
- `SubToolboxChartModule.tsx`
- `DataVisuals/ChartModule.tsx`

Master includes a label/value width reservation contract so metric changes do not unexpectedly resize stat cards and squeeze adjacent titles.

### 10-31 additions

10-31 adds:

- `iconKey` to the stat shape.
- Metric-label-to-icon resolution.
- `AnalyticsVisualIcon`.
- A `StudioSplitLeftButton` presentation for metric cards.
- Reserved width calculations for the split icon rail.

Master removes the icon rail but has a more general label/value width reservation implementation that supports caller-declared candidate labels and values.

### Disposition

**Preserve master width stability and existing consumers. Investigate the 10-31 metric icon rail as a presentation enhancement, not a replacement implementation.**

If the icon rail is restored:

- Keep the master label/value reservation behavior.
- Derive icon semantics from explicit metric metadata where possible; avoid fragile label substring heuristics.
- Use the canonical Studio split-left primitive.
- Verify compact widths and long localized labels.
- Preserve active/clickable states and accessible names.
- Extend tests for all current consumers.

Do not restore the older component wholesale.

## 7. Brain Composer Dock

### Existing master capability

Master contains the dock, CSS, and focused tests:

- `src/components/brain/BrainComposerDock.tsx`
- `src/components/brain/BrainComposerDock.css`
- `src/components/brain/BrainComposerDock.test.tsx`
- `src/components/brain/BrainComposerDock.contract.test.ts`

Master composes the field and actions using current Studio primitives and uses an inline-actions layout. Its tests cover the dominant textarea, Prompts/Send actions, and send disabled/enabled state.

### 10-31 richer interaction contract

The 10-31 dock includes a larger set of behaviors and tests:

- Clear draft action.
- Draft-source badge and clear-source action.
- Idle keyboard hint and truthful busy status.
- Prompts, Tools, Context, and Journal entry points.
- Responsive tool row based on the dock container width.
- Accessible names for icon-led actions.
- A bounded textarea growth contract (default maximum 144px).
- A defined reading/action order.
- Explicit layout-only CSS ownership tests.

Its tests cover many more interaction and responsive layout cases.

### Master improvements to preserve

Master is the newer component source in this reconciliation. It uses current primitive APIs including `StudioButton` and `StudioSplitLeftButton`, and its field contract test specifically checks the black outer border, persistent primary inset, focus text/glyph treatment, and outline ratio.

### Disposition

**Do not replace the master Brain composer with the 10-31 component. Preserve master primitive and field ownership, then compare the 10-31 interaction requirements against the current Brain page capabilities.**

Restore only missing user-facing behavior that remains required and is not already supplied by the parent page or current dock:

- Clear draft.
- Draft-source visibility and clear action.
- Journal and context access.
- Responsive entry-point availability.
- Keyboard hint and status behavior.
- Bounded textarea growth, if the current Studio dock does not already own it.

If these are still needed, port them as focused additions to master and expand tests. Avoid reviving old primitive imports or component geometry that the newer master design intentionally replaced.

## 8. File-level preliminary preservation ledger

| Path / family | Preliminary disposition | Reason |
|---|---|---|
| Resource Library registry and Markdown resources | Preserve master | Existing registry blob identical in audited snapshots |
| Resource Library main reader | Preserve master; selectively port UI | Master reader exists; 10-31 adds Studio split-row treatment |
| Resource Library renderer | Preserve master; selectively port tag use | Core parser exists on both; source adds Studio tag |
| Resource Library contract tests | Reconcile | Master guide-render coverage; source adds card/tag assertions |
| CreatorVaultOS | Preserve master; selectively port policy gates | Master has extra video resolution; source has stronger policy-based eligibility |
| vaultAdapter.ts | Reconcile / port restore guard | Source explicitly enforces restore policy |
| vaultMutationPolicy.ts | Preserve | Identical blob SHA |
| vaultWorkspaceState.ts | Preserve | Identical blob SHA |
| BrainVaultAdapter.ts | Reconcile route | Same core read-only adapter; different evidence deep link |
| StudioCalendarPrimitives.tsx | Candidate additive port | Source adds mini/multi-day/thumbnail renderers |
| studio-calendar-primitives.css | Reconcile | Source adds styles; master contains outdated transparent color fallback |
| calendarEventContract.ts | Candidate port after owner audit | Explicit non-persistent, owner-scoped projection contract |
| analyticsVisualContextBar.tsx | Preserve master + selective enhancement | Master has stronger width reservation; source adds icon rail |
| AnalyticsVisualIcon.tsx | Investigate consumers | Source icon primitive may be unique and reusable |
| BrainComposerDock.tsx | Preserve master + selective behavior port | Master uses current primitives; source has richer UX and tests |
| BrainComposerDock.css | Preserve master; compare layout requirements | Source layout differs substantially |
| BrainComposerDock tests | Reconcile | Source has broader behavior coverage; master has newer field contract coverage |

## 9. Next implementation-ready tasks

Recommended order:

1. **Vault restore safety:** Add a regression test proving archived/trashed assets cannot bypass the existing restore policy; then selectively restore the guard if confirmed absent in the full master function.
2. **Vault action eligibility:** Port policy-based selection gating while retaining master video-ID resolution and existing workspace behavior.
3. **Calendar contract audit:** Search for equivalent master contracts and actual consumers; if absent, add the read-only projection contract and focused tests.
4. **Calendar primitives:** Port mini/multi-day/thumbnail primitives additively, then fix color and motion ownership against current Studio tokens.
5. **Resource Library cards:** Integrate the approved Studio split-left row treatment if it remains consistent with the current primitive catalog.
6. **Analytics icon rail:** Reintroduce only if the current analytics UI still needs it; retain master width reservation.
7. **Brain composer UX:** Reconcile feature parity with the current Brain page and add only missing interactions to the master dock.

## 10. Verification boundary

This is a read-only source audit. No runtime tests, typecheck, lint, build, browser tests, or accessibility checks were run. The preliminary decisions must be confirmed with regression tests on the reconciliation branch before any production implementation is claimed.

The reconciliation branch remains documentation-only at this point.
