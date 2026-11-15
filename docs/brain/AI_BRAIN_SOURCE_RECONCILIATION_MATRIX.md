# AI Brain Source Reconciliation Matrix

**Audit date:** 2026-11-14  
**Repository:** `viewtube-dev/viewtube`  
**Primary target:** `master/consolidated-feature-integration` @ `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**Reference:** `fix/studio-controls-regression-recovery-2026-10-31` @ `d95eff55dde5939cdde8d51805c2ebeb55f9c372`  
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
