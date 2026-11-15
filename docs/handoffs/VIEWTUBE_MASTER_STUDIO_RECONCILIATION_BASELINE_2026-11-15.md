# ViewTube Master–Studio Reconciliation Baseline

**Date:** 2026-11-15  
**Repository:** `viewtube-dev/viewtube`  
**Reconciliation branch:** `integration/reconciled-master-studio-2026-11-15`  
**Baseline commit:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**10-31 source snapshot:** `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`

## Purpose

This document freezes the starting point and complete changed-path inventory for the selective reconciliation of master and the 2026-10-31 Studio recovery source. It is an inventory, not an assertion that any source-side change has already been ported or validated.

## 1. Branch creation

Created the independent branch:

`integration/reconciled-master-studio-2026-11-15`

It was created directly from the exact recorded master commit SHA:

`52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`

This deliberately uses the frozen master snapshot recorded by the two diagnostic experiments. It does not assert that the live target branch still points to this SHA. The reconciliation baseline is reproducible against the frozen source.

No original source branch or diagnostic experiment branch was modified by branch creation.

## 2. Diagnostic PRs retained

### PR #1271 — 10-31 Studio into master duplicate

- URL: https://github.com/viewtube-dev/viewtube/pull/1271
- Base: `integration-lab/master-target-2026-11-15`
- Head: `integration-lab/1031-source-2026-11-15`
- Draft, open, unmerged
- 93 changed paths
- 493 commits represented
- GitHub mergeability: `dirty`

### PR #1272 — master into 10-31 duplicate

- URL: https://github.com/viewtube-dev/viewtube/pull/1272
- Base: `integration-lab/1031-target-2026-11-15`
- Head: `integration-lab/master-source-2026-11-15`
- Draft, open, unmerged
- 28 changed paths
- 50 commits represented
- GitHub mergeability: `dirty`

Keep both PRs as diagnostic records. Do not merge them.

## 3. Inventory summary

| Inventory | Count |
|---|---:|
| PR #1271 changed paths | 93 |
| PR #1272 changed paths | 28 |
| Shared/overlapping paths | 8 |
| PR #1271-only paths | 85 |
| PR #1272-only paths | 20 |
| Distinct paths across both PRs | 113 |

These are changed-path counts, not counts of unique features or independently validated changes.

## 4. Shared paths requiring explicit reconciliation

These eight paths occur in both diagnostic PR file lists:

1. `docs/README.md`
2. `docs/ui/STUDIO_CONTROLS_GLOBAL_DEFAULTS_AND_EXCEPTION_INDEX.md`
3. `docs/ui/STUDIO_HUB_COMPONENT_LIBRARY_SOURCE_OF_TRUTH.md`
4. `docs/ui/STUDIO_VALUES_TOKENS_STYLES_SETTINGS_HIERARCHY.md`
5. `src/studio-ui/primitives/StudioPanelAccordion.tsx`
6. `src/styles/studio-control-value-toggles.css`
7. `src/styles/studio-panel-accordion.css`
8. `studio-control-system.css`

Do not wholesale-select either side. Compare both versions, identify the intended contract, preserve unique behavior, and add regression coverage.

## 5. PR #1271-only paths (10-31 → master experiment)

### Repository and quarantine
- `.github/workflows/release-gates.yml`
- `_quarantine/studio-split-text-inputs/README.md`
- `package.json`

### Documentation and plans
- `docs/plans/VIEWTUBE_COMPONENT_STANDARDIZATION_PHASES_0_3_2026-11-11.md`
- `docs/plans/VIEWTUBE_STUDIO_CALENDAR_INTEGRATION_PLAN_2026-10-29.md`
- `docs/ui/STUDIO_DESIGN_INTELLIGENCE_AND_PRIMITIVE_REGISTRY.md`
- `docs/vault/VAULT_PHASE_0_1_2_TARGET_BRANCH_AUDIT_2026-11-11.md`

### Audit scripts and tests
- `scripts/audit/confirmed-catalog-coverage.mjs`
- `scripts/audit/confirmed-library-layout.test.mjs`
- `scripts/audit/studio-control-css-ownership.test.mjs`
- `scripts/audit/studio-control-parity.test.mjs`
- `scripts/audit/studio-controls-system-audit.test.mjs`
- `scripts/audit/studio-counter-dropdown-regression.test.mjs`
- `scripts/audit/studio-counter-primitives.test.mjs`
- `scripts/audit/studio-double-split-slider.test.mjs`
- `scripts/audit/studio-dropdown-counter-slider-contract.test.mjs`
- `scripts/audit/studio-dropdown-shared-menu.test.mjs`
- `scripts/audit/studio-field-style-ownership.test.mjs`
- `scripts/audit/studio-floating-input-typography.test.mjs`
- `scripts/audit/studio-focus-double-toggle-slider-contract.test.mjs`
- `scripts/audit/studio-input-token-ownership.test.mjs`
- `scripts/audit/studio-primitive-registry.mjs`
- `scripts/audit/studio-primitive-registry.test.mjs`
- `scripts/audit/studio-public-export-catalog-matrix.test.mjs`
- `scripts/audit/studio-split-text-input-geometry.test.mjs`
- `scripts/emit-studio-control-vars.mjs`

### Components and feature work
- `src/components/StudioHubConfirmedPrimitiveCatalog.tsx`
- `src/components/analyticsVisualContextBar.test.tsx`
- `src/components/analyticsVisualContextBar.tsx`
- `src/components/brain/BrainComposerDock.contract.test.ts`
- `src/components/brain/BrainComposerDock.css`
- `src/components/brain/BrainComposerDock.test.tsx`
- `src/components/brain/BrainComposerDock.tsx`
- `src/components/studio-hub/ConfirmedCatalogChrome.tsx`
- `src/components/studio-hub/ConfirmedCatalogModules.tsx`
- `src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.test.tsx`
- `src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx`
- `src/components/studio-hub/StudioHubConfirmedSplitTextInputCatalog.tsx`
- `src/components/studio-hub/confirmedCatalogTaxonomy.test.ts`
- `src/components/studio-hub/confirmedCatalogTaxonomy.ts`
- `src/features/resource-library/ResourceDocumentRenderer.tsx`
- `src/features/resource-library/ResourceLibrary.contract.test.tsx`
- `src/features/resource-library/ResourceLibrary.tsx`
- `src/features/resource-library/resource-library.css`
- `src/features/resource-library/resourceLibrarySpectrumTag.contract.test.ts`
- `src/features/vault-workbench/capabilities.test.ts`
- `src/services/__tests__/vaultBrainSearch.test.ts`
- `src/services/__tests__/vaultRecovery.test.ts`
- `src/services/__tests__/vaultTranscriptTask.test.ts`
- `src/services/__tests__/vaultVersions.test.ts`
- `src/services/brain/BrainVaultAdapter.ts`
- `src/services/calendar/calendarEventContract.ts`
- `src/services/vaultAdapter.ts`
- `src/views/CreatorVaultOS.laneB.test.ts`
- `src/views/CreatorVaultOS.tsx`
- `src/views/vault/VaultImageWorkbench.tsx`

### Studio exports, primitives, and tests
- `src/studio-ui/index.ts`
- `src/studio-ui/primitives/StudioCalendarPrimitives.tsx`
- `src/studio-ui/primitives/StudioControls.migration.test.tsx`
- `src/studio-ui/primitives/StudioControls.test.tsx`
- `src/studio-ui/primitives/StudioControls.tsx`
- `src/studio-ui/primitives/StudioIconRailTextInput.tsx`
- `src/studio-ui/primitives/StudioSliderCenterStyleContract.test.ts`
- `src/studio-ui/primitives/StudioSplitTextInput.test.tsx`
- `src/studio-ui/primitives/StudioSplitTextInput.tsx`
- `src/studio-ui/primitives/StudioTextInput.tsx`
- `src/studio-ui/primitives/StudioValueToggles.test.tsx`
- `src/studio-ui/primitives/StudioValueToggles.tsx`

### Stylesheets and style tests
- `src/studio-ui/primitives/studio-calendar-primitives.css`
- `src/studio-ui/primitives/studio-icon-rail-text-input.css`
- `src/studio-ui/primitives/studio-split-text-input.css`
- `src/styles/studio-chat-composer-dock.css`
- `src/styles/studio-confirmed-catalog-modules.css`
- `src/styles/studio-control-core.css`
- `src/styles/studio-control-distill-overrides.css`
- `src/styles/studio-control-fields.css`
- `src/styles/studio-control-recovery-overrides.css`
- `src/styles/studio-control-split.css`
- `src/styles/studio-control-system.css`
- `src/styles/studio-control-vars.generated.css`
- `src/styles/studio-inter-module.css`
- `src/styles/studio-module-bottom-stroke.test.ts`
- `src/styles/studio-text-input.css`

### Tokens and tasks
- `src/studio-ui/tokens.ts`
- `tasks/viewtube-vault/todo.md`

## 6. PR #1272-only paths (master → 10-31 experiment)

### Documentation and knowledge base
- `docs/VIEWTUBE_MASTER_KNOWLEDGE_BASE.md`
- `docs/audits/AUDIT_PLANNING_IDEAS_CONVERSATION_AUDIT_2026-11-14.md`
- `docs/audits/VIEWTUBE_SOURCE_RECONCILIATION_LEDGER_2026-11-13.md`
- `docs/brain/BRAIN_GEMINI_CONTEXT_GROUNDING_AUDIT_AND_FIX_PLAN.md`
- `docs/handoffs/AUDIT_PLANNING_IDEAS_MASTER_HANDOFF_2026-11-14.md`
- `docs/partnerships/VIEWTUBE_MASTER_PARTNER_INTELLIGENCE_AND_PITCH_PLANNING.md`
- `docs/partnerships/VIEWTUBE_PRIORITY_PARTNER_PITCH_PACK_2026-11.md`
- `docs/registry.json`
- `docs/research/VIEWTUBE_PRODUCT_STRATEGY_COMPETITIVE_PARTNERSHIP_AND_TECHNICAL_DOSSIER.md`

### Brain implementation and tests
- `src/context/GeminiKeyContext.test.ts`
- `src/services/brain/AlgorithmLearningCandidates.test.ts`
- `src/services/brain/AlgorithmLearningCandidates.ts`
- `src/services/brain/AlgorithmLearningProfilePromotion.ts`
- `src/services/brain/__tests__/AlgorithmLearningProfilePromotion.test.ts`

### Integration planning and system-convergence tasks
- `tasks/p1-canonical-system-integration/plan.md`
- `tasks/p1-canonical-system-integration/workstreams/studio-controls/README.md`
- `tasks/system-convergence/AI-BRAIN-PHASE-0-1-RECONCILIATION-2026-11-11.md`
- `tasks/system-convergence/AI-BRAIN-PHASE-2-3-EXECUTION-2026-11-11.md`
- `tasks/system-convergence/CREATOR-CONTEXT-REACHABILITY.md`
- `tasks/system-convergence/EVIDENCE-INTELLIGENCE-AUDIT.md`

## 7. Preliminary disposition guidance

This is a starting classification for review, not a final acceptance decision.

| Area | Preliminary disposition | Required review |
|---|---|---|
| Brain evidence promotion and candidate lineage | Preserve master | Inspect implementation and tests; do not downgrade provenance checks |
| Gemini key context tests | Preserve master | Confirm compatibility with current context implementation |
| Studio token and primitive architecture | Port/reconcile from 10-31 | Verify canonical ownership and all size tiers |
| Three canonical Studio design documents | Reconcile | Merge requirements, exceptions, and source-of-truth decisions |
| Legacy split text input | Quarantine | Do not re-export or reintroduce duplicate active styles without a new design decision |
| StudioPanelAccordion | Reconcile | Fix ARIA relationships and add interaction/accessibility tests |
| Bar/double-side toggle styles | Reconcile | Repair tooltip DOM/CSS mismatch; verify 75% bar height and focus behavior |
| Vault and Resource Library | Investigate, then selectively port | Verify master capability homes, data contracts, and test coverage |
| Calendar primitives | Investigate, then selectively port | Check existing master implementations before adding |
| Analytics Visual Context | Investigate, then selectively port | Check for newer analytics architecture and avoid duplicate ownership |
| Brain Composer Dock | Investigate | Confirm current Brain composer architecture and avoid parallel docks |
| CI workflow/package changes | Investigate | Understand exact behavioral and dependency impact before porting |
| Docs, audits, and task plans | Preserve/reconcile selectively | Retain unique decisions and update obsolete guidance |

## 8. Known review findings carried forward

### Split text input
The 10-31 source marks `src/studio-ui/primitives/StudioSplitTextInput.tsx` as quarantined and removes its public barrel export. Preserve that quarantine unless a replacement is designed around the canonical Studio text-field primitive.

### Bar toggle
The inspected 10-31 JSX moves the percentage tooltip outside individual bars, while CSS selectors still expect it inside the bars. This likely prevents the intended tooltip display. Existing bar height is 65%, while the target requirement is 75%. Placement must be based on the highest filled bar and tested for keyboard focus.

### Panel accordion
The inspected accordion uses `aria-controls` references for each rail, while only the active panel is rendered. Inactive controls may point to missing panel elements. Add stable panel relationships and tests for keyboard navigation, controlled/uncontrolled operation, disabled items, and geometry.

### Master Brain evidence promotion
Preserve the master implementation's canonical EvidenceRecord resolution, channel-scope checks, trace lineage validation, duplicate-conflict rejection, sample validation, and provenance metadata. Do not replace it with weaker source logic.

## 9. Studio design contract

Use these source documents as the design authority after their divergent versions have been reconciled:

- `docs/ui/STUDIO_CONTROLS_GLOBAL_DEFAULTS_AND_EXCEPTION_INDEX.md`
- `docs/ui/STUDIO_HUB_COMPONENT_LIBRARY_SOURCE_OF_TRUTH.md`
- `docs/ui/STUDIO_VALUES_TOKENS_STYLES_SETTINGS_HIERARCHY.md`

Size ladder:

| Tier | Height | Stroke | Radius | Content |
|---|---:|---:|---:|---:|
| Supreme | 60px | 3px | 6px | ~52px |
| Standard | 44px | 3px | 6px | 38px |
| Compact | 28px | 2px | 4px | 24px |
| Mini | 20px | 1.5px | 3px | 17.5px |
| Micro | 12px | 1px | 2px | 10px |

Other binding requirements:

- Default: primary fill with black text.
- A 50% primary/secondary treatment means 50% white mixed with that color, not transparent.
- Text inputs, textareas, and text boxes: black outer border plus always-visible primary inset stroke.
- Resting text/stroke: primary. Focused text/stroke: black, with primary inset retained.
- Focus fill: primary 15%; focus outline: secondary, width = stroke × 0.65, offset 0.
- Focus fade synchronizes character and stroke fade.
- Full-row auto width is default; content-width exceptions are limited to documented exceptions: `spectrumTag`, `closeableBadge`, `wordToggle`, `tagEditorTag`.
- Avoid a second token hierarchy, undocumented overrides, duplicate CSS ownership, and unnecessary `!important`.

## 10. Verification status and constraints

The previously inspected branch-head Vercel checks failed due to a reported build-rate-limit/upgrade restriction. This is not evidence of a code regression and is not a successful build.

No local checkout or authorized coding workspace was available during the diagnostic phase. No typecheck, lint, production build, full test suite, browser test, or accessibility suite is claimed as passing.

The reconciliation branch has only been created from the frozen master SHA at this stage. No implementation changes have been ported in this commit.

## 11. Next work sequence

1. Verify the new branch's actual head and tree against the frozen master SHA.
2. Inspect the current target branch head separately; do not silently move the frozen baseline.
3. Retrieve and review all 113 distinct changed paths and the relevant source files.
4. Build a file-by-file preservation ledger with final dispositions: Preserve, Port, Reconcile, Quarantine, Superseded, or Investigate.
5. Protect master Brain/evidence/auth contracts.
6. Port only verified unique 10-31 functionality, checking for existing master capability homes first.
7. Reconcile the eight overlapping files individually.
8. Implement fixes with regression tests; do not add parallel components or cascade overrides.
9. Run and record real verification against the exact candidate SHA.
10. Open a draft integration PR only after actual changes and evidence exist.

## 12. Safety and landing rules

- Keep original branches and PRs #1271/#1272 untouched.
- Do not merge diagnostic PRs.
- Do not force-push or rewrite history.
- Do not use Codespaces.
- Do not use arbitrary GitHub file writes as a substitute for local implementation and testing.
- Preserve provenance for every accepted change.
- Do not claim unrun tests or unverified deployment results.
- Follow repository Mergify workflow.
- `scripts/pr_land.py` is the sole authorized landing mutation path.
- Any eventual merge requires explicit approval tied to the current PR head SHA and readiness policy digest.

**Handoff:** Continue from this frozen reconciliation branch and inventory. The next substantive task is the preservation ledger and source-by-source capability audit, not a wholesale merge.
