# ViewTube Master–Studio Reconciliation: 113-Path Preservation Ledger

**Date:** 2026-11-15  
**Branch:** `integration/reconciled-master-studio-2026-11-15`  
**Master baseline:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**10-31 source:** `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`  
**Diagnostic PRs:** [#1271](https://github.com/viewtube-dev/viewtube/pull/1271) and [#1272](https://github.com/viewtube-dev/viewtube/pull/1272)

## 1. Inventory integrity

The file lists were freshly retrieved from GitHub for both diagnostic PRs. The first draft omitted the eight overlapping paths from its table; this corrected version includes all eight explicitly.

| Measure | Verified count |
|---|---:|
| PR #1271 changed paths | 93 |
| PR #1272 changed paths | 28 |
| Paths changed by both | 8 |
| Unique paths across both | 113 |

The eight overlaps are explicitly marked **RECONCILE BOTH**. They must not be resolved by blindly selecting one branch's version.

## 2. Disposition vocabulary

- **PRESERVE MASTER:** Keep the frozen master implementation as the base.
- **PRESERVE MASTER + SELECTIVE PORT:** Retain master architecture and add only source behaviors that are still needed.
- **PORT SELECTIVELY / RECONCILE:** Candidate 10-31 contribution, subject to API, ownership, consumer, and test verification.
- **RECONCILE BOTH:** Inspect both patches and reconcile against current canonical contracts.
- **QUARANTINE / PRESERVE HISTORY:** Keep source for history/rollback but do not activate or export it.
- **INVESTIGATE / RECONCILE:** High-impact infrastructure or uncertain ownership; no adoption decision until exact diff review.
- **REVIEW / PRESERVE KNOWLEDGE:** Keep useful decisions while verifying freshness and links.
- **PRESERVE / RECONCILE TESTS:** Preserve test intent, adapt to master behavior, and execute.
- **CANDIDATE ADDITIVE PORT / AUDIT:** Additive candidate requiring owner and consumer checks first.

These are preliminary source dispositions, not implementation approvals. “Port” does not mean copy the whole file.

## 3. Summary by disposition

- **QUARANTINE / PRESERVE HISTORY:** 7
- **INVESTIGATE / RECONCILE:** 2
- **PRESERVE MASTER / REVIEW:** 9
- **REVIEW / PRESERVE KNOWLEDGE:** 3
- **RECONCILE SAFETY CONTRACTS:** 12
- **INVESTIGATE:** 2
- **PORT / RECONCILE TEST COVERAGE:** 22
- **RECONCILE TOKEN PIPELINE:** 3
- **PRESERVE MASTER + SELECTIVE PORT:** 11
- **PORT SELECTIVELY / RECONCILE:** 20
- **PRESERVE MASTER:** 9
- **CANDIDATE ADDITIVE PORT / AUDIT:** 3
- **PRESERVE MASTER + UPDATE:** 2

## 4. Complete path-by-path ledger

| Exact path | Source list | Initial disposition | Decision / required check |
|---|---|---|---|
| `_quarantine/studio-split-text-inputs/README.md` | PR #1271 / 10-31 | **QUARANTINE / PRESERVE HISTORY** | Legacy split-input family is explicitly quarantined by newer master docs; do not reactivate public exports or active CSS. |
| `.github/workflows/release-gates.yml` | PR #1271 / 10-31 | **INVESTIGATE / RECONCILE** | Build/release configuration can affect the whole repo; compare exact changes and scripts before adopting. |
| `docs/audits/AUDIT_PLANNING_IDEAS_CONVERSATION_AUDIT_2026-11-14.md` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `docs/audits/VIEWTUBE_SOURCE_RECONCILIATION_LEDGER_2026-11-13.md` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `docs/brain/BRAIN_GEMINI_CONTEXT_GROUNDING_AUDIT_AND_FIX_PLAN.md` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `docs/handoffs/AUDIT_PLANNING_IDEAS_MASTER_HANDOFF_2026-11-14.md` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `docs/partnerships/VIEWTUBE_MASTER_PARTNER_INTELLIGENCE_AND_PITCH_PLANNING.md` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `docs/partnerships/VIEWTUBE_PRIORITY_PARTNER_PITCH_PACK_2026-11.md` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `docs/plans/VIEWTUBE_COMPONENT_STANDARDIZATION_PHASES_0_3_2026-11-11.md` | PR #1271 / 10-31 | **REVIEW / PRESERVE KNOWLEDGE** | Check freshness and source-of-truth status; retain useful decisions and link to current plans. |
| `docs/plans/VIEWTUBE_STUDIO_CALENDAR_INTEGRATION_PLAN_2026-10-29.md` | PR #1271 / 10-31 | **REVIEW / PRESERVE KNOWLEDGE** | Check freshness and source-of-truth status; retain useful decisions and link to current plans. |
| `docs/registry.json` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `docs/research/VIEWTUBE_PRODUCT_STRATEGY_COMPETITIVE_PARTNERSHIP_AND_TECHNICAL_DOSSIER.md` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `docs/ui/STUDIO_DESIGN_INTELLIGENCE_AND_PRIMITIVE_REGISTRY.md` | PR #1271 / 10-31 | **REVIEW / PRESERVE KNOWLEDGE** | Check freshness and source-of-truth status; retain useful decisions and link to current plans. |
| `docs/vault/VAULT_PHASE_0_1_2_TARGET_BRANCH_AUDIT_2026-11-11.md` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `docs/VIEWTUBE_MASTER_KNOWLEDGE_BASE.md` | PR #1272 / master-only | **PRESERVE MASTER / REVIEW** | Master-only knowledge, audit, strategy, registry, or handoff material; validate freshness and links, do not overwrite with 10-31. |
| `package.json` | PR #1271 / 10-31 | **INVESTIGATE / RECONCILE** | Build/release configuration can affect the whole repo; compare exact changes and scripts before adopting. |
| `scripts/audit/confirmed-catalog-coverage.mjs` | PR #1271 / 10-31 | **INVESTIGATE** | Inspect full patch and consumers before assigning final disposition. |
| `scripts/audit/confirmed-library-layout.test.mjs` | PR #1271 / 10-31 | **INVESTIGATE** | Inspect full patch and consumers before assigning final disposition. |
| `scripts/audit/studio-control-css-ownership.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-control-parity.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-controls-system-audit.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-counter-dropdown-regression.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-counter-primitives.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-double-split-slider.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-dropdown-counter-slider-contract.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-dropdown-shared-menu.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-field-style-ownership.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-floating-input-typography.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-focus-double-toggle-slider-contract.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-input-token-ownership.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-primitive-registry.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-primitive-registry.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-public-export-catalog-matrix.test.mjs` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `scripts/audit/studio-split-text-input-geometry.test.mjs` | PR #1271 / 10-31 | **QUARANTINE / PRESERVE HISTORY** | Legacy split-input family is explicitly quarantined by newer master docs; do not reactivate public exports or active CSS. |
| `scripts/emit-studio-control-vars.mjs` | PR #1271 / 10-31 | **RECONCILE TOKEN PIPELINE** | Compare generated output and emitter; one canonical token source, no duplicate token hierarchy. |
| `src/components/analyticsVisualContextBar.test.tsx` | PR #1271 / 10-31 | **PRESERVE / RECONCILE TESTS** | Retain master metric tone and width-stability tests; add split-left DOM, explicit icon identity, rail width, localization, and compact-layout tests. |
| `src/components/analyticsVisualContextBar.tsx` | PR #1271 / 10-31 | **PRESERVE MASTER + SELECTIVE PORT** | Preserve master metric normalization, tones, and declared width reservations; selectively add split-left icon rail, explicit iconKey metadata, and rail-aware width reservation. Avoid label-substring icon inference. |
| `src/components/brain/BrainComposerDock.contract.test.ts` | PR #1271 / 10-31 | **PRESERVE MASTER CONTRACT + EXTEND** | Retain master black outer border, primary inset, focus stroke/outline, and dock separator ownership tests; preserve source layout-only CSS constraints. |
| `src/components/brain/BrainComposerDock.css` | PR #1271 / 10-31 | **RECONCILE BOTH** | Keep CSS layout-only and master field styling ownership; evaluate source container-query toolbar layout against actual dock widths before changing inline-actions. |
| `src/components/brain/BrainComposerDock.test.tsx` | PR #1271 / 10-31 | **PRESERVE / RECONCILE TESTS** | Preserve master send/status behavior and add source clear-draft safety, optional Tools/Journal, keyboard, responsive, and accessibility coverage. |
| `src/components/brain/BrainComposerDock.tsx` | PR #1271 / 10-31 | **PRESERVE MASTER + SELECTIVE PORT** | Keep master page/Studio integration and field contract; selectively recover clear-draft busy safety, real optional Tools/Journal callbacks, and bounded growth after caller/layout review. See Brain Composer audit. |
| `src/components/studio-hub/ConfirmedCatalogChrome.tsx` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/components/studio-hub/ConfirmedCatalogModules.tsx` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/components/studio-hub/confirmedCatalogTaxonomy.test.ts` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `src/components/studio-hub/confirmedCatalogTaxonomy.ts` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.test.tsx` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `src/components/studio-hub/StudioHubConfirmedPrimitiveCatalog.tsx` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/components/studio-hub/StudioHubConfirmedSplitTextInputCatalog.tsx` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/components/StudioHubConfirmedPrimitiveCatalog.tsx` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/context/GeminiKeyContext.test.ts` | PR #1272 / master-only | **PRESERVE MASTER** | Master-specific Gemini key context regression coverage. |
| `src/features/resource-library/resource-library.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Keep row layout CSS scoped to Resource Library; verify 44px rail, 76px row, full-width mobile behavior, palette variable ownership, and actual Studio button slots. |
| `src/features/resource-library/ResourceDocumentRenderer.tsx` | PR #1271 / 10-31 | **PRESERVE MASTER + SELECTIVE PORT** | Keep canonical Markdown rendering; adopt SpectrumTag metadata/topic tags only after master SpectrumTag gains the verified proportional 20px API. |
| `src/features/resource-library/ResourceLibrary.contract.test.tsx` | PR #1271 / 10-31 | **PRESERVE / RECONCILE TESTS** | Retain guide-rendering coverage and add DOM/behavior assertions for the split-left row, nested controls, progress, and responsive truncation. |
| `src/features/resource-library/ResourceLibrary.tsx` | PR #1271 / 10-31 | **PRESERVE MASTER + SELECTIVE PORT** | Keep master registry/search/learning-path/progress architecture; selectively adopt full-width StudioSplitLeftButton rows and scoped CSS after verifying DOM slots and mobile width. See Resource Library audit. |
| `src/features/resource-library/resourceLibrarySpectrumTag.contract.test.ts` | PR #1271 / 10-31 | **PORT / UPDATE TESTS** | Port only with the canonical SpectrumTag 15px/20px API and CSS; source test currently assumes a size prop absent from frozen master. |
| `src/features/vault-workbench/capabilities.test.ts` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/services/__tests__/vaultBrainSearch.test.ts` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/services/__tests__/vaultRecovery.test.ts` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/services/__tests__/vaultTranscriptTask.test.ts` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/services/__tests__/vaultVersions.test.ts` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/services/brain/__tests__/AlgorithmLearningProfilePromotion.test.ts` | PR #1272 / master-only | **PRESERVE MASTER** | Master Brain candidate/evidence implementation and regression coverage are authoritative; retain provenance and channel-scope safeguards. |
| `src/services/brain/AlgorithmLearningCandidates.test.ts` | PR #1272 / master-only | **PRESERVE MASTER** | Master Brain candidate/evidence implementation and regression coverage are authoritative; retain provenance and channel-scope safeguards. |
| `src/services/brain/AlgorithmLearningCandidates.ts` | PR #1272 / master-only | **PRESERVE MASTER** | Master Brain candidate/evidence implementation and regression coverage are authoritative; retain provenance and channel-scope safeguards. |
| `src/services/brain/AlgorithmLearningProfilePromotion.ts` | PR #1272 / master-only | **PRESERVE MASTER** | Master Brain candidate/evidence implementation and regression coverage are authoritative; retain provenance and channel-scope safeguards. |
| `src/services/brain/BrainVaultAdapter.ts` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/services/calendar/calendarEventContract.ts` | PR #1271 / 10-31 | **CANDIDATE ADDITIVE PORT / AUDIT** | Review owner-scoped projection and additive calendar primitives; search for equivalent contracts and real consumers first. |
| `src/services/vaultAdapter.ts` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/studio-ui/index.ts` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/studio-ui/primitives/studio-calendar-primitives.css` | PR #1271 / 10-31 | **CANDIDATE ADDITIVE PORT / AUDIT** | Review owner-scoped projection and additive calendar primitives; search for equivalent contracts and real consumers first. |
| `src/studio-ui/primitives/studio-icon-rail-text-input.css` | PR #1271 / 10-31 | **QUARANTINE / PRESERVE HISTORY** | Legacy split-input family is explicitly quarantined by newer master docs; do not reactivate public exports or active CSS. |
| `src/studio-ui/primitives/studio-split-text-input.css` | PR #1271 / 10-31 | **QUARANTINE / PRESERVE HISTORY** | Legacy split-input family is explicitly quarantined by newer master docs; do not reactivate public exports or active CSS. |
| `src/studio-ui/primitives/StudioCalendarPrimitives.tsx` | PR #1271 / 10-31 | **CANDIDATE ADDITIVE PORT / AUDIT** | Review owner-scoped projection and additive calendar primitives; search for equivalent contracts and real consumers first. |
| `src/studio-ui/primitives/StudioControls.migration.test.tsx` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `src/studio-ui/primitives/StudioControls.test.tsx` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `src/studio-ui/primitives/StudioControls.tsx` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/studio-ui/primitives/StudioIconRailTextInput.tsx` | PR #1271 / 10-31 | **QUARANTINE / PRESERVE HISTORY** | Legacy split-input family is explicitly quarantined by newer master docs; do not reactivate public exports or active CSS. |
| `src/studio-ui/primitives/StudioSliderCenterStyleContract.test.ts` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `src/studio-ui/primitives/StudioSplitTextInput.test.tsx` | PR #1271 / 10-31 | **QUARANTINE / PRESERVE HISTORY** | Legacy split-input family is explicitly quarantined by newer master docs; do not reactivate public exports or active CSS. |
| `src/studio-ui/primitives/StudioSplitTextInput.tsx` | PR #1271 / 10-31 | **QUARANTINE / PRESERVE HISTORY** | Legacy split-input family is explicitly quarantined by newer master docs; do not reactivate public exports or active CSS. |
| `src/studio-ui/primitives/StudioTextInput.tsx` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/studio-ui/primitives/StudioValueToggles.test.tsx` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `src/studio-ui/primitives/StudioValueToggles.tsx` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/studio-ui/tokens.ts` | PR #1271 / 10-31 | **RECONCILE TOKEN PIPELINE** | Compare generated output and emitter; one canonical token source, no duplicate token hierarchy. |
| `src/styles/studio-chat-composer-dock.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-confirmed-catalog-modules.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-control-core.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-control-distill-overrides.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-control-fields.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-control-recovery-overrides.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-control-split.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-control-system.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-control-vars.generated.css` | PR #1271 / 10-31 | **RECONCILE TOKEN PIPELINE** | Compare generated output and emitter; one canonical token source, no duplicate token hierarchy. |
| `src/styles/studio-inter-module.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/styles/studio-module-bottom-stroke.test.ts` | PR #1271 / 10-31 | **PORT / RECONCILE TEST COVERAGE** | Use tests as acceptance contract only after updating them to current master API and quarantine decisions. |
| `src/styles/studio-text-input.css` | PR #1271 / 10-31 | **PORT SELECTIVELY / RECONCILE** | Candidate Studio work; verify public export, active consumer, canonical CSS ownership, tier geometry, and mobile behavior. |
| `src/views/CreatorVaultOS.laneB.test.ts` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/views/CreatorVaultOS.tsx` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `src/views/vault/VaultImageWorkbench.tsx` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |
| `tasks/p1-canonical-system-integration/plan.md` | PR #1272 / master-only | **PRESERVE MASTER + UPDATE** | Master integration plan/workstream is the current baseline; reconcile with audit findings. |
| `tasks/p1-canonical-system-integration/workstreams/studio-controls/README.md` | PR #1272 / master-only | **PRESERVE MASTER + UPDATE** | Master integration plan/workstream is the current baseline; reconcile with audit findings. |
| `tasks/system-convergence/AI-BRAIN-PHASE-0-1-RECONCILIATION-2026-11-11.md` | PR #1272 / master-only | **PRESERVE MASTER** | Master Brain/evidence architecture and execution plans; cross-link new audit. |
| `tasks/system-convergence/AI-BRAIN-PHASE-2-3-EXECUTION-2026-11-11.md` | PR #1272 / master-only | **PRESERVE MASTER** | Master Brain/evidence architecture and execution plans; cross-link new audit. |
| `tasks/system-convergence/CREATOR-CONTEXT-REACHABILITY.md` | PR #1272 / master-only | **PRESERVE MASTER** | Master Brain/evidence architecture and execution plans; cross-link new audit. |
| `tasks/system-convergence/EVIDENCE-INTELLIGENCE-AUDIT.md` | PR #1272 / master-only | **PRESERVE MASTER** | Master Brain/evidence architecture and execution plans; cross-link new audit. |
| `tasks/viewtube-vault/todo.md` | PR #1271 / 10-31 | **RECONCILE SAFETY CONTRACTS** | Keep master workspace/resolution behavior; selectively restore source policy-gated action eligibility/restore guard with tests. |

### 4.1 The eight overlapping paths

| Exact path | Source list | Initial disposition | Decision / required check |
|---|---|---|---|
| `docs/README.md` | BOTH PRs | **RECONCILE BOTH** | Reconcile index/navigation and current source-of-truth links; do not select either copy without checking links. |
| `docs/ui/STUDIO_CONTROLS_GLOBAL_DEFAULTS_AND_EXCEPTION_INDEX.md` | BOTH PRs | **RECONCILE BOTH** | Master contains newer quarantine, dropdown, counter, and slider contracts; retain them while reconciling older source additions. |
| `docs/ui/STUDIO_HUB_COMPONENT_LIBRARY_SOURCE_OF_TRUTH.md` | BOTH PRs | **RECONCILE BOTH** | Preserve master 2026-11-14 quarantine and current catalog/export claims; selectively recover only verified source additions. |
| `docs/ui/STUDIO_VALUES_TOKENS_STYLES_SETTINGS_HIERARCHY.md` | BOTH PRs | **RECONCILE BOTH** | Preserve master hierarchy and clarify the 12/1/2/10 Micro contract; reconcile source-only notes. |
| `src/studio-ui/primitives/StudioPanelAccordion.tsx` | BOTH PRs | **RECONCILE BOTH** | Resolve shared implementation; fix invalid inactive `aria-controls` targets and add keyboard/controlled-state tests. |
| `src/styles/studio-control-value-toggles.css` | BOTH PRs | **RECONCILE BOTH** | Merge only current divider, rail, tooltip, and focus behavior; fix tooltip DOM/CSS mismatch and tier geometry under canonical tokens. |
| `src/styles/studio-panel-accordion.css` | BOTH PRs | **RECONCILE BOTH** | Reconcile CSS ownership and accessible tooltip/focus treatment; avoid duplicate split-rail patterns. |
| `studio-control-system.css` | BOTH PRs | **INVESTIGATE / RECONCILE** | Root-level stylesheet is distinct from imported `src/styles` system; identify every consumer before editing or removal. |

## 4.2 Follow-on source audits

- [Calendar projection and primitive audit](VIEWTUBE_CALENDAR_PROJECTION_AND_PRIMITIVE_RECONCILIATION_AUDIT_2026-11-15.md)
- [Resource Library Studio row audit](VIEWTUBE_RESOURCE_LIBRARY_STUDIO_ROW_RECONCILIATION_AUDIT_2026-11-15.md)
- [Analytics metric rail audit](VIEWTUBE_ANALYTICS_METRIC_RAIL_RECONCILIATION_AUDIT_2026-11-15.md)
- [Brain Composer Dock audit](VIEWTUBE_BRAIN_COMPOSER_DOCK_RECONCILIATION_AUDIT_2026-11-15.md)

## 5. Cross-cutting preservation rules

1. Keep the master Brain evidence/provenance promotion implementation and its tests. Do not weaken trace membership, channel scope, source lineage, canonical EvidenceRecord validation, or conflict rejection.
2. Keep master Studio's 2026-11-14 legacy split text-input quarantine. The 10-31 legacy components and styles remain rollback/reference material, not active public primitives.
3. Preserve the single canonical token source and generated-variable pipeline. Do not create a second token hierarchy or add cascade overrides as a substitute for fixing ownership.
4. Preserve master Vault workspace behavior and video-ID resolution. Selectively reconcile policy-based eligibility and the missing restore guard against the existing shared mutation policy.
5. Preserve master Analytics width reservation and Brain Composer current primitive ownership. Recover only still-needed 10-31 behaviors.
6. Treat the calendar projection as a read model, not a new persistence system. Event ownership remains with Projects, Publisher/ContentBuild, Asset Engine, and Analytics.
7. Preserve Resource Library registry/content; do not duplicate the registry.
8. No PR merge, force-push, original-branch mutation, or production deployment is authorized by this ledger.

## 6. Implementation order after ledger review

| Order | Work package | Gate before implementation |
|---:|---|---|
| 1 | Vault restore guard and selection eligibility | Confirm full master function behavior; add failing regression tests first |
| 2 | Calendar projection contract | Search equivalent master contracts and all consumers; validate ownership boundaries |
| 3 | Calendar primitives | Confirm consumers, token/CSS ownership, and event date semantics |
| 4 | Resource Library rows | Verify current split-left primitive, mobile geometry, tags, focus and accessibility |
| 5 | Analytics metric icon rail | Preserve master width reservation; use explicit metadata and tests |
| 6 | Brain Composer missing interactions | Compare parent page and dock responsibilities; add only missing features |
| 7 | Studio catalog and primitive gaps | Verify exports, registry, representative specimens, all five tiers, and CSS ownership |
| 8 | Infrastructure and documentation reconciliation | Resolve package/workflow changes and update authoritative docs without duplication |

## 7. Required evidence before any implementation is called complete

- Exact branch and commit SHA.
- Full source patch reviewed for each changed file.
- Tests added/updated before behavior changes.
- Relevant unit/contract/audit tests executed.
- Typecheck, lint, and production build results.
- Browser/mobile verification for layout and interaction changes.
- Accessibility verification for keyboard, focus, and ARIA relationships.
- No unexplained duplicate CSS owners or undocumented overrides.
- A final PR diff containing only approved implementation and supporting tests/docs.

## 8. Current boundary

This ledger is based on exact changed paths from PR #1271 and PR #1272 and the prior source audits. It does not assert that every path's complete patch has been reviewed line-by-line. The path dispositions are a structured first pass; high-risk files still require exact patch and consumer review.

The reconciliation branch remains documentation-only. The two experimental PRs remain open, draft, diagnostic-only, and unmerged. No test suite has been run in this workflow.
