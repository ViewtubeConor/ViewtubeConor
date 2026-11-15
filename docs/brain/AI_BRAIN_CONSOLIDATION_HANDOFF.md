# AI Brain Consolidation — Handoff

**Date:** 2026-11-14  
**Repository:** `viewtube-dev/viewtube`  
**Primary target:** `master/consolidated-feature-integration`  
**Target baseline:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**Studio reference:** `fix/studio-controls-regression-recovery-2026-10-31` @ `d95eff55dde5939cdde8d51805c2ebeb55f9c372`  
**Audit branch:** `audit/ai-brain-consolidation-2026-11-14`  
**State:** Discovery and documentation checkpoint; product code not changed; no PR opened.

## 1. Mission and safety boundary

Consolidate unique AI Brain, evidence, context, Gemini and creator-intelligence behavior into one canonical target implementation. Do not merge whole divergent branches. Preserve unique functionality, tests, integrations and provenance. Keep October 31 branch reference-only. Do not merge PR #1243 wholesale. No destructive Git or consequential PR actions.

## 2. Work completed in this session

- Verified exact target and October 31 reference HEADs.
- Searched 343 branch names matching “brain” and additional gemini/evidence/context/creator branch sets.
- Inspected current PRs #1241, #1253, #1254 and #1256, plus a wider set of historical closed/merged/unmerged Brain and Gemini PRs.
- Compared the named donor branches against current target.
- Inspected the Evidence Explorer donor component/test and confirmed target absence.
- Inspected Composer target/donor and draft-store implementations.
- Verified identical draft-store source and identical tagSuggestions strategy source.
- Verified PR #1254 evidence completeness behavior and PR #1256 canonical evidence resolution are present in current target ancestry/source.
- Verified current target contains later canonical profile patch protection, scoped creator-answer evidence and saved creator-evidence manifest validation.
- Inspected the eight requested Gemini caller files at the current target at import/call-surface level.
- Updated existing Phase 0/1 evidence-context audit and Gemini call-site inventory on the audit branch.
- Created the consolidation inventory, source reconciliation matrix, and test/verification report on the audit branch.

## 3. Important current decisions

1. **Do not duplicate Brain runtime, context broker, evidence store, evidence identity, or Gemini gateway.**
2. **Evidence Explorer:** recover as a thin UI projection over analytics-canon, EvidenceIntelligenceResolver, EvidenceRecord and BrainUserControls. Its donor imports existing canonical owners.
3. **Learning validation:** PR #1254 and #1256 behavior is already represented in current target ancestry/source. Preserve the explicit browser-local BrainTrace durability limitation.
4. **Creator context/evidence:** old PRs #1087/#1084/#1083/#1079 overlap; current target already has the later canonical profile protection and scoped creator evidence. Do not replay older versions wholesale.
5. **Composer:** preserve the one target component; draft store source is identical. Compare donor test assertions and bounded auto-resize behavior before selective migration. Keep Studio catalog/audit changes out of this Brain work.
6. **Gemini:** target and donor tagSuggestions source are identical; no replay. The target key-validation contract uses model-list discovery rather than a guessed generation model. PR #1125's generation fallback helper is not automatically required.
7. **PR #1241:** selectively review exact context manifest, required-section provenance, safe failure classification, retry snapshot continuity, trace and runtime-panel changes. Its branch is stale/divergent and its head release-gates workflow currently reports failure. Live Gemini browser proof remains unverified.

## 4. Repository artifacts

Created on `audit/ai-brain-consolidation-2026-11-14`:

- `docs/brain/AI_BRAIN_CONSOLIDATION_INVENTORY.md`
- `docs/brain/AI_BRAIN_SOURCE_RECONCILIATION_MATRIX.md`
- `docs/brain/AI_BRAIN_CONSOLIDATION_TEST_AND_VERIFICATION_REPORT.md`
- `docs/brain/AI_BRAIN_CONSOLIDATION_HANDOFF.md`

Updated on the audit branch:

- `tasks/system-convergence/AI-BRAIN-PHASE-0-1-RECONCILIATION-2026-11-11.md`
- `docs/architecture/GEMINI_MODEL_CALLSITE_INVENTORY.md`

Canonical architecture equivalent remains `docs/domains/BRAIN.md`; do not create a competing architecture authority. The evidence/context map is maintained in the Phase 0/1 reconciliation audit. Gemini caller migration status is maintained in the existing call-site inventory.

## 5. Current audit branch commits

- Inventory initial: `ec1b4601d8e2c1b19f724115c277e7b113f19c6b`
- Matrix initial: `e8083007a503fe3af04867482965a5d571fdf51d`
- Learning ancestry update: `bc0fad9b5135d734cf44461c0846894572e55c91`
- Expanded discovery update: `72ae0df17fba273b9b2530009fc5eb85afa8815d`
- Matrix expanded update: `bf9fe3f4cb472be8b6b330feed1e4288f5386aa7`
- Evidence/context audit refresh: `35366e42ca1143aa1dff3a371d80ac13f7f29e11`
- Gemini caller inventory refresh: `2f58aaa5741004ada0937bc66d0c7b08dfea1ab0`

Additional verification-report and handoff commits will be recorded after creation.

## 6. Known blockers

- GitHub connector permits source/metadata inspection and documentation commits, but this pass has no executable repository checkout/test runner. No Vitest, typecheck, lint, source governance, build, browser or live Gemini test is claimed.
- Branch and PR discovery is not exhaustive. There are hundreds of historical Brain-related branches and PRs; candidate filtering, SHA capture, exact diffs and dispositions remain in progress.
- Current target workflow lookup returned no runs for its SHA.
- PR #1241 head release-gates workflow is failed; job-level cause still needs inspection.
- Evidence owners Project/ContentBuild, Vault, Publishing receipts, YouTube-read, Comments, Transcripts, Research, Outcomes and Experiments still need owner-by-owner runtime and permission tracing.
- Durable server-side BrainTrace persistence, fresh-session hydration, authorization and idempotency remain open.

## 7. Next execution sequence

1. Complete branch/PR inventory and ancestry review, prioritizing the remaining high-value divergent donors and closed/unmerged PRs.
2. Finish exact file-level reconciliation of canonical profile, context continuity, evidence identity, Gemini callers and Composer.
3. Freeze the feature matrix and source-to-destination decisions.
4. Recover Evidence Explorer with focused regression tests and existing canonical service contracts.
5. Selectively recover PR #1241 context manifest/provenance work after comparing target/current source and resolving test failures.
6. Verify all Gemini callers individually; preserve shared gateway authority and avoid replaying identical code.
7. Reconcile Composer auto-resize/clear/handoff behavior and tests; keep draft store canonical.
8. Obtain executable checkout and run focused tests, full suite, static checks, build and approved browser verification.
9. Open a focused draft PR only after diff and tests are reviewed; do not merge automatically.

## 8. Final status

This is a durable handoff of the verified discovery work, not a claim that consolidation is complete. No product code was changed, no PR was opened, and no tests were run in this checkpoint.


## 9. New findings from the continued 2026-11-14 pass

- Branch-name discovery is now paged to completion for brain (343 matches) and evidence (71 matches); gemini (29) and context (39) searches also completed. These overlapping name results still require per-branch ancestry/diff classification.
- PR #1241 is 48 commits behind the current target, despite its earlier PR-body claim of 0 behind. Its single unique commit contains potentially valuable context-manifest and runtime-provenance behavior, but also Studio contract changes. Selectively forward-port only Brain-owned logic.
- Current target lacks the PR's exact requested/included context section capture, trace scope/generation metadata, and runtime trace summary/UI projection. Target already has generation/fallback locals and model-input snapshots, so migration should extend canonical contracts rather than add another runtime or snapshot store.
- Target and donor BrainComposerDock TSX/CSS are byte-identical; no component/style port is needed there.
- PR #1241 exact-head CI: Brain quality-loop, Gemini governance, production build and local smoke passed; source-governance, focused-contracts, conversation-handoff-contract, full-suite and static-quality failed. Studio catalog/control/typecheck failures dominate retrieved failure detail.

## 10. Next execution sequence

1. Finish remaining PR/branch ancestry and unique-diff classification, including the complete creator/Gemini caller branch families.
2. Inspect current-target evidence-owner coverage and the Evidence Explorer donor; finalize the source-owner matrix.
3. Selectively recover PR #1241 context manifest/trace/snapshot/UI fields on the audit branch, with focused tests and explicit legacy behavior.
4. Recover Evidence Explorer as a read-only UI over canonical owners; do not create a second evidence store.
5. Reconcile Gemini callsites and Composer tests; skip identical Composer TSX/CSS.
6. Obtain a runnable checkout/test environment before claiming test results or opening a code PR.
