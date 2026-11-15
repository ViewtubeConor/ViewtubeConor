# AI Brain Source Reconciliation Matrix

**Audit date:** 2026-11-15  
**Repository:** `viewtube-dev/viewtube`  
**Primary target:** `master/consolidated-feature-integration` @ `ee4f527e2c763c12f91569ca0df5f1bce934e0e8`  
**Reference:** `fix/studio-controls-regression-recovery-2026-10-31` @ `c26396aa7cb0c27ceb5bbd0d79c07207eca25989`  
**Status:** Initial verified matrix; detailed file-level and behavior-level reconciliation remains open.

## Classification key

- **Already integrated:** target has the same implementation or verified equivalent.
- **Equivalent implementation exists:** same capability is owned elsewhere on target; donor replay is unnecessary.
- **Partially integrated:** some behavior exists, but a distinct behavior/dependency/test is missing or unverified.
- **Unique missing functionality:** donor-only capability absent from target.
- **Divergent implementation requiring reconciliation:** target and donor both implement the feature differently.
- **Superseded:** newer canonical implementation replaces the donor behavior.
- **Blocked:** evidence or dependency is insufficient for safe migration.

## Source-to-destination matrix

| Feature / workstream | Donor branch / PR | Exact source evidence | Target implementation | Unique behavior / conflict | Decision | Destination |
|---|---|---|---|---|---|---|
| Canonical Brain orchestration and runtime | Canonical profile, unified context, Gemini context branches; PR #1241 | `BrainOrchestrator.ts`, runtime gateway, context broker/resolution, trace/snapshot diffs | Existing `BrainRuntime`, `BrainOrchestrator`, `BrainContextBroker`, runtime gateway | PR #1241 adds exact selected/required context manifest, safe failure class, retry snapshot lineage and richer provenance; target ancestry must be checked against current HEAD | Divergent implementation requiring reconciliation | Existing Brain runtime/orchestrator and trace owners only |
| Canonical profile / channel identity | `feat/brain-canonical-profile-evidence-controls-2026-10-28` | 7 commits ahead, 1,788 behind; 6 changed files including context, orchestrator, answer evidence, controls UI | Existing context and creator profile owners | Donor is highly divergent; behavior and data contracts not yet diff-reviewed | Blocked pending source-level comparison | Existing profile/context owners |
| Unified context + evidence | `feat/brain-unified-context-evidence-2026-10-28` | 4 commits ahead, 1,734 behind; 4 files | Existing Creator Context and evidence resolver/broker | Distinct behavior may be present despite shared files; exact assertions not yet inspected | Divergent implementation requiring reconciliation | Existing Context Resolver / BrainContextBroker / EvidenceRecord |
| Channel profile scope continuity | `fix/brain-channel-profile-scope-continuity-2026-10-28` | 6 commits ahead, 1,651 behind; context rail, context service, tests, controls | Existing context and channel scope | Need to verify cross-channel isolation, project/content-build scope and UI continuity | Partially integrated / review pending | Existing channel/context owners |
| Brain Evidence Explorer | `feat/brain-evidence-explorer-2026-10-30` | Donor-only component + test; 249-line component, 82-line test; target fetch 404 | Existing canonical analytics/evidence services; no explorer component on target | Dataset/record filters, status states, provenance, scope, missingness and source links; imports existing canonical owners | Unique missing functionality | Add one explorer panel and wire into existing Brain tabs/entry point |
| Evidence identity/provenance and retry continuity | PR #1241 | 35-file PR; trace, snapshot, orchestrator, evidence ribbon, runtime panel, tests | Existing trace/snapshot/evidence ribbon | Donor adds manifest and exact lineage; live browser proof incomplete; PR base is stale | Divergent implementation requiring reconciliation | Existing BrainTrace, retry snapshot and runtime snapshot |
| Learning evidence validation | PR #1254 | Closed, 4 commits, 4 files; head is ancestor of current target (0 ahead / 44 behind) | Target `AlgorithmLearningCandidates.ts` contains `hasCompleteEvidence` gate | Decisive outcomes without their own evidence refs keep cohort insufficient | Already integrated via target ancestry; PR metadata has no merged timestamp | Existing learning candidate derivation and tests |
| Learning evidence resolution before promotion | PR #1256 | Merged 2026-11-12; head is ancestor of current target (0 ahead / 31 behind) | Target `AlgorithmLearningProfilePromotion.ts` imports `listBrainTraces` and `isEvidenceRecord`; canonical trace resolver present | Fail-closed scope/returned-set checks; browser-local trace limitation remains | Already integrated and source-verified | Existing learning governance and BrainTrace |
| Evidence owner adapters | PR #1241 / Phase 0–1 audit | Project/ContentBuild, Vault and Publishing next; YouTube-read, Comments, Transcripts, Research, Outcomes, Experiments unaudited/unwired | Canonical domain owners exist or are expected; adapters not fully proven | Must preserve permission, scope, stable IDs, freshness and source snapshots | Partially integrated / blocked per owner | Read-only projections over each canonical owner |
| Gemini gateway and model selection | Gemini governance PRs #1174/#1176/#1182/#1198; current gateway | Target `src/services/brain/runtime/BrainModelGateway.ts` exists | Existing gateway and provider layer | Ensure all caller routes use shared resolver; don't create a second gateway | Equivalent implementation exists; caller coverage incomplete | Existing gateway/provider owner |
| Gemini follow-up callers | `feat/p1-gemini-followup-callers-2026-10-30` | 18 commits ahead, 960 behind; 13 changed files | Target has call-site inventory; caller-specific state not fully verified | Each caller requires individual gateway, key, readiness, error and output contract check | Partially integrated / divergent | Existing provider gateway and generation services |
| Tag suggestion strategy | Gemini follow-up donor | Target and donor blob SHA both `f2e4edc0368c33ed45d6600b3cbd5fa4321dbd11` | Same source already present | Replaying creates no value and risks churn | Already integrated | No change |
| Gemini key readiness / safe provider failures | PR #1241; predecessor PR #1145 | PR #1241 documents reactive key readiness and safe error classification | Existing key vault/settings/provider contracts | Must confirm current target contains the exact events, classifications and redaction tests | Partially integrated pending source checks | Existing key vault, Gemini settings context and Brain trace |
| Brain Composer UI | `consolidated/brain-workspace-phase4-fresh-2026-10-28`; PRs #1228/#1230 and related | Target and donor component blobs differ; CSS blobs differ | Target composer has Context and Journal actions; donor includes additional layout/auto-resize details | Do not select one version wholesale; reconcile Context, Tools, Journal, prompt/capability actions, focus, resize and mobile behavior | Divergent implementation requiring reconciliation | One `BrainComposerDock` |
| Composer draft store | Phase 4 donor | Target and donor store blob SHA identical: `ab5c419b172ff4103553e46c648dd5a91f76274a` | Existing channel-scoped local draft store | No implementation migration needed | Already integrated | No change |
| Composer draft-store tests | Phase 4 donor | Donor test SHA `dac38b...`; target test SHA `32bae1...` | Target tests already include jsdom annotation and related assertions | Compare exact test cases; port only missing assertions | Partially integrated | Existing draft-store test file |
| Composer regression tests | PR #1241 / Phase 4 donor | Target test differs from donor; PR #1241 updates contracts | Existing component tests and runtime surface contract | Preserve tests for all actions and interaction states | Divergent implementation requiring reconciliation | Existing composer test suite |
| Docs recovery source branch | `docs/brain-recovery-source-reconciliation-2026-11-13` | 0 ahead / 17 behind target | Existing canonical docs and phase audit | Branch adds no unique commits relative to current target according to compare | Superseded/ancestor | No code migration; inspect document content/history only |
| Creator evidence continuity / unmerged Studio work | Two branches share HEAD `65754125...` | Both compare 0 ahead / 1,651 behind target | Target has later source history | No unique commit delta shown; exact old PRs/branch ancestry still to be inventoried | Superseded/ancestor pending PR audit | No migration unless a unique file-level behavior is found |
| October 31 Studio recovery | Reference branch only | SHA `d95eff55...` | Not a Brain donor target | Studio primitives may inform component use; no unrelated Studio history | Reference only | No direct integration |

## PR disposition ledger

| PR | Initial state | Initial disposition |
|---|---|---|
| #1241 | Open, unmerged | Inspect full patch and current-base conflicts; selectively reconcile; do not merge as-is |
| #1253 | Merged | Verify target ancestry/docs; do not replay merged documentation |
| #1254 | Closed, merge timestamp absent | Verify ancestry and exact source before classifying |
| #1256 | Merged | Verify target source/tests and retain explicit durability/auth limitations |
| #1233, #1230, #1228, #1226, #1222, #1220, #1219, #1217, #1213, #1212, #1211, #1198, #1197, #1196, #1195, #1194, #1193, #1192, #1191, #1190, #1189, #1188, #1187, #1186, #1185, #1184, #1182, #1179, #1176, #1174, #1173 | Found in first all-state PR page | Status/diff/ancestry review pending |

## Safe migration order

1. Target SHA refreshed; PR #1253/#1256 are merged and PR #1254's head is verified as an ancestor of target. Verify #1253 documentation ancestry and exact target contents.
2. Finish evidence-owner and context/provenance source-to-runtime map.
3. Recover the Evidence Explorer as a thin projection over canonical owners, after import/permission/scope checks and focused tests.
4. Reconcile canonical profile/channel scope and exact context manifest lineage.
5. Audit and migrate Gemini callers individually; skip the byte-identical tag strategy.
6. Reconcile Composer behavior and tests while retaining the identical draft store.
7. Run full test, governance, type, build and browser checks in an executable checkout; report baseline failures separately.

No migration is authorized by this matrix alone. Each row requires a final file-level decision and regression evidence before code changes.


## Follow-up verification — learning evidence ancestry (2026-11-14)

- PR #1254 head `8a81f2dd25b4388fe6a02b90394ec03c86c2e9bc` is an ancestor of current target. The target's `AlgorithmLearningCandidates.ts` contains the decisive-row evidence completeness gate. Classify the feature as integrated even though the PR itself has no merged timestamp.
- PR #1256 head `a12059eed1b2f3e09b3d6539cb914fa399688070` is an ancestor of current target. The target promotion service resolves evidence from canonical, channel-scoped records actually returned on candidate traces.
- Target `BrainTrace.ts` still states that the default sink is browser-local and capped; durable server-side trace storage, fresh-session hydration, server authorization and global idempotency remain separate gaps.
- Workflow lookup returned no runs for current target SHA `52c6e90f...`; PR #1241 head has a completed release-gates workflow with conclusion `failure`. The failed job details were not inspected and no test pass is claimed for current target.


## Additional source checks — 2026-11-14

| Donor / PR | Target-side source verification | Decision |
|---|---|---|
| PR #1096 / workspace Phase 4 v2 | Target composer already has Context, Journal and a Clear draft action; target draft store is byte-identical to donor. Donor includes a bounded textarea resize callback and additional handoff behavior; target does not contain the same resize callback. | Preserve unique behavior only after component-level tests and mobile verification. Exclude Studio catalog/audit edits from this Brain migration. |
| PR #1087 / #1084 / #1083 / #1079 | Target `aiBrainContext.ts` contains `legacyPatch` + `preserveExisting`; `CreatorAnswerEvidence.ts` contains `buildScopedCreatorAnswerEvidenceRecords`; `PromptEvidenceIntegrity.ts` contains `readCreatorAnswerEvidenceRecords`. | Core behavior already present. Compare assertions and edge cases; do not replay duplicated variants. |
| PR #1053 | Target canonical context source has the later stale-profile patch logic. | Likely superseded in code; review any unique tests and event-notification semantics. |
| PR #1197 | Head SHA `51d8f3957ab804b9d085ce7fd15c8afdf11ab455` is the compare merge-base and target is 0 commits ahead of that branch (branch is an ancestor). | Already represented in target history; verify active caller state rather than replaying. |
| PR #1196 | Target and donor `src/services/gemini.ts` blob SHA both `56df81588d936a99d9423f41d54eef9d494b7c92`; target `creatorAssets.ts` and tag callers use governed asset generation. | Equivalent implementation exists; no replay of identical source. |
| PR #1125 | Donor adds model-specific generation fallback validation. Target instead validates the credential through `models.list()`, classifies credential rejection separately, and saves locally on transient/model-catalog failures. | Donor helper is not automatically required; current target contract is intentionally model-independent. |
| PR #1126 | PR base is `main`, not the requested integration target. | Separate-base reference only; no direct merge or cherry-pick. |

### Gemini caller surface checkpoint

The following requested target files were fetched from the current target:

- `GenerationWorkflow.ts`: ContentBuild generation request/receipt orchestration; no direct provider SDK call found in the fetched source.
- `creatorAssets.ts`: governed AssetGenerator strategy entry points exist, including tag strategy.
- `MetadataMaster.tsx`: calls `generateVideoPublisherSeoPackage` from canonical `creatorAssets.ts`.
- `SeoGenerator.tsx`: calls the same governed video-publisher SEO service.
- `VideoManager.tsx`: calls `generateGovernedTagSuggestions`.
- `TagGeneratorWidget.tsx`: calls `generateGovernedTagSuggestions`.
- `TitleRewriterWidget.tsx`: imports `defaultBrainModelGateway`.
- `VideoUploaderWidget.tsx`: calls governed tag, timestamp and SEO generation services.

This is an import/call-surface check only. It does not yet prove all internal helpers use the canonical resolver, nor does it certify every execution path or release-gate job.


## PR #1241 selective reconciliation against target SHA 52c6e90f

The PR is a single-commit donor but is 48 commits behind current target (merge base a279e52e). Do not merge or cherry-pick the commit wholesale.

| Area | Current target | PR #1241 donor | Disposition |
|---|---|---|---|
| Context budget | No exact included/requested section manifest on BrainContextBroker budget | Adds includedSections and requestedSections | Candidate for selective recovery; inspect section-selection semantics and budget tests |
| Brain trace contract | No sectionsRequested, context project/build scope, generation-path/fallback/validation fields in trace type | Adds these fields | Candidate; retain backward compatibility for legacy traces |
| Orchestrator | Already has generation/fallback locals and model-input snapshot persistence | Adds exact selected/requested section capture, scope identity, retry snapshot restoration metadata | Candidate; verify actual original/retry input parity and no invented provenance for legacy snapshots |
| Runtime snapshot | Current trace summary omits exact context manifest and generation/evidence detail fields | Adds section manifest, scope, model/provider, generation path, fallback, validation, evidence IDs and output ref | Candidate; ensure values derive from canonical trace and absent data remains explicitly unavailable |
| Runtime UI | No equivalent creator-facing full “How this answer was produced” disclosure found in current target | Adds collapsed provenance disclosure | Candidate after snapshot contract is proven; keep creator-facing, not debug-panel-first |
| Evidence ribbon | Target already has evidence integrity status path | Donor adjusts identity wording and additional statuses | Compare exact status semantics and preserve fail-closed handling; do not replace current component wholesale |
| Composer TSX/CSS | Same blob content at target and donor | Same blob content | No migration; identical source already exists |
| Composer tests/contracts | Target assertions differ from donor | Donor updates CSS ownership/layout expectations | Review each changed assertion; only carry assertions that describe current canonical Studio primitives and live behavior |

### PR #1241 CI interpretation

The exact-head workflow run passed Brain quality-loop, Gemini governance, production build and local smoke. It failed source-governance, focused-contracts, conversation-handoff-contract, full-suite and static-quality. The first two failures are explicitly Studio catalog/control contracts; static-quality includes missing Studio exports/files, invalid size variants and a missing test dependency. Treat those as cross-domain blockers requiring exact-target reconciliation, not as evidence that the context-manifest code itself failed. The PR remains unsuitable for wholesale merge.


## Canonical evidence-owner coverage in current target

The current target defines an EvidenceRecord owner union broader than the records currently projected by the shared EvidenceIntelligenceResolver. The distinction between a declared owner type and an integrated typed projection is important:

| Owner | Current inspected source | Current integration into EvidenceIntelligenceResolver / Evidence Explorer | Disposition |
|---|---|---|---|
| analytics-canon | analytics-canon bundle; projectCanonicalEvidenceRecords; BrainEvidenceQuality | Implemented. Stable IDs include snapshot/dataset/metric; scope mismatch fails closed; missing metrics are explicit MISSING records, never zero. | Canonical source for current Explorer panel. |
| creator-confirmed | CreatorAnswerEvidence.ts; scoped builder and merge into Brain evidence pack | Typed EvidenceRecord projections are used in prompt/turn-specific evidence, but are not merged into resolver envelope.evidenceRecords. | Preserve turn-bound identity; do not imply Explorer currently shows these records. |
| project | BrainProjectContext.ts; Projects/ContentBuild identity and lifecycle | Project context is a separate AlgorithmProjectContext projection, not an EvidenceRecord stream in the shared resolver. | Adapter/projection work remains. |
| vault | BrainVaultAdapter.ts over canonical vaultAdapter | Read-only adapter returns BrainEvidenceItem metadata; not typed EvidenceRecord in the shared resolver. | Keep Vault as source owner; no shadow file store. |
| publishing | BrainPublicationOutcomeBridge.ts over AlgorithmIntelligenceEventLedger | Verified publication identity receipt is stored in the existing event ledger; not currently an EvidenceRecord projection in the resolver. | Project/ContentBuild and approved snapshot lineage remain authoritative. |
| outcomes / experiment | BrainOutcomeLedger.ts and AlgorithmIntelligenceEventLedger.ts | Existing outcome/evaluation/learning event contracts exist; no unified typed EvidenceRecord projection was verified in the resolver. | Extend existing ledgers via projections, not a new evidence ledger. |
| youtube-read / comments / transcript / research | Owner values exist in EvidenceRecord.ts; separate YouTube, comments, transcript and research services exist | No adapter from these owners into resolver.envelope.evidenceRecords was verified in this pass. | Continue owner-by-owner source and permission audit before claiming Explorer coverage. |

### Evidence Explorer donor disposition

Branch feat/brain-evidence-explorer-2026-10-30 compares 10 commits ahead / 302 behind current target, with six changed files and no associated PR found. It adds BrainEvidenceExplorerPanel.tsx + tests, an Evidence tab in BrainPageTabs, and one route-state/render branch in AIBrainCommandInterface. The panel reads resolveEvidenceIntelligence and envelope.evidenceRecords; it does not create a new store. The current target does not contain the component or Evidence tab.

The donor UI correctly distinguishes unscoped, restricted, error and unavailable states; preserves available/partial/stale/failed/unavailable dataset statuses; and renders missing values as Unknown rather than zero. It explicitly says rechecking the view does not refresh upstream data and that current snapshot records are not necessarily the records used by a past answer.

**Required adaptation before port:** the panel currently exposes only analytics-canon records because that is all the resolver returns. Its heading/copy must say so, or a clear owner-coverage notice must be added. Do not label it a universal evidence explorer until creator-confirmed, project, Vault, publishing, YouTube-read, comments, transcript, research, outcome and experiment projections are integrated. Review native select/button controls against the target Studio primitive contract and add scope/permission/status/accessibility tests.

## Live-target reconciliation addendum — 2026-11-15

| Workstream | Current-target finding | Disposition |
|---|---|---|
| Required context gate | Target lacks `getBrainContextBlockingIssues` and does not gate provider dispatch on missing required evidence/sections. PR #522 and the codex donor carry a small tested gate. | Selectively recover the helper, orchestrator guard and focused tests after checking the current omission-ID contract. |
| Context manifest and provenance | PR #1241 adds required/included/omitted section IDs, channel/project/build scope, generation/fallback/validation fields, provider failure classification, evidence returned/missing IDs, prompt versions and retry snapshot continuity. Current target does not yet expose the full manifest projection. | Recover canonical contract fields selectively; avoid duplicate trace/snapshot stores. Review duplicated provenance disclosure placement in the donor runtime panel. |
| Evidence Explorer | Donor component is absent on target; it reads analytics-canon through EvidenceIntelligenceResolver and uses EvidenceRecord/BrainUserControls. | Recover as a read-only analytics-backed panel, not a universal evidence browser; replace raw native controls/custom styling with canonical Studio primitives. |
| Creator context | Current target has canonical profile patch preservation and scoped CreatorAnswerEvidence/PromptEvidenceIntegrity. Older branches are divergent and stale. | No wholesale replay; test active-channel identity and retry/restore parity. |
| Composer | Latest source check found target and donor Composer TSX/CSS byte-identical; draft-store source is identical. | No source/style port; preserve target owner and only recover independently proven test gaps. |
| Gemini caller governance | Selected target callers use governed asset strategies or BrainModelGateway; target/donor tagSuggestions and PR #1196 gemini.ts blobs are identical. | Do not replay identical files. Complete fresh exact-head caller artifact and classify remaining direct SDK paths. |
| Learning promotion | PR #1254/#1256 behavior is present in current target ancestry/source. | Preserve canonical evidence resolution; no duplicate evidence or learning store. |

The live target SHA and branch comparisons supersede earlier ancestry counts. The old branch inventory remains historical evidence; it is not a merge base.
