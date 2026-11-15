# AI Brain Consolidation Inventory

**Audit date:** 2026-11-14  
**Repository:** `viewtube-dev/viewtube`  
**Audit branch:** `audit/ai-brain-consolidation-2026-11-14`  
**Primary target:** `master/consolidated-feature-integration`  
**Primary target HEAD at audit start:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**Studio reference HEAD:** `d95eff55dde5939cdde8d51805c2ebeb55f9c372`  
**Audit state:** Read-only discovery in progress; no product code changed. This is a verified checkpoint, not a claim that every branch, PR, or runtime path has been exhaustively audited.

## 1. Executive findings

- The current primary target self-compare resolves to `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`.
- The October 31 Studio recovery reference resolves to `d95eff55dde5939cdde8d51805c2ebeb55f9c372`. It remains reference-only for this Brain work.
- The target already contains the canonical Brain architecture, a typed analytics evidence path, creator context resolution, a shared Brain model gateway, the Brain composer, and a channel-scoped local composer draft store.
- `BrainEvidenceExplorerPanel.tsx` and its test are present on the explorer donor but return 404 on the primary target. The donor implementation is therefore a genuine candidate for selective recovery, subject to dependency and runtime verification.
- The explorer is a presentation layer over existing `analytics-canon`, `EvidenceIntelligenceResolver`, `EvidenceRecord`, and `BrainUserControls` contracts. It does not itself establish a new evidence store.
- Composer source differs between target and the Phase 4 donor. The draft-store implementation blob is identical (`ab5c419b172ff4103553e46c648dd5a91f76274a`); the draft-store tests differ. The donor includes a bounded textarea auto-resize path. Target CSS and donor CSS are materially different and require behavior-level reconciliation.
- The Gemini follow-up donor's `tagSuggestions.ts` blob is exactly the same on target and donor (`f2e4edc0368c33ed45d6600b3cbd5fa4321dbd11`); do not replay or duplicate it.
- PR #1241 remains open and unmerged. Its own description explicitly leaves live authenticated Gemini browser verification and current-head release gates incomplete.
- PR #1253 is merged (documentation/registry reconciliation). PR #1256 is merged (learning-evidence resolution). PR #1254 is closed with `merged_at=null`, but its head commit is an ancestor of the current target (compare: 0 ahead / 44 behind; merge base equals PR head SHA), and the target contains its evidence-completeness gate. Its behavior is integrated even though the PR itself has no merged timestamp.
- Existing Phase 0/1 audit documentation is present, but its recorded target SHA (`a279e52e63e816c0409a02e2feb4807f20c56e4b`) is stale relative to this audit's target SHA. Refresh its baseline before relying on its status assertions.

## 2. Exact branch snapshot

| Ref | HEAD SHA | Comparison to current primary target | Initial disposition |
|---|---|---:|---|
| `master/consolidated-feature-integration` | `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d` | baseline | Primary target |
| `fix/studio-controls-regression-recovery-2026-10-31` | `d95eff55dde5939cdde8d51805c2ebeb55f9c372` | reference only | Do not merge into Brain consolidation |
| `feat/brain-canonical-profile-evidence-controls-2026-10-28` | `d8778a9a082062e0706c11c495a4440533098f7e` | 7 ahead / 1,788 behind | Divergent donor; inspect exact behavior |
| `feat/brain-evidence-explorer-2026-10-30` | `78ff7905df59bce538b07ede1698cda45b253e47` | 10 ahead / 302 behind | Donor-only explorer candidate |
| `feat/brain-unified-context-evidence-2026-10-28` | `e46305477a08b8b87a7ab680696fb7fd028de702` | 4 ahead / 1,734 behind | Divergent context/evidence donor |
| `fix/brain-channel-profile-scope-continuity-2026-10-28` | `d17df9450e0170dade5d780d71dc64f53c174f02` | 6 ahead / 1,651 behind | Divergent scope donor |
| `consolidated/brain-workspace-phase4-fresh-2026-10-28` | `723b38a1753636271f3b2e177dab83863f31af14` | 14 ahead / 1,623 behind | Composer/workspace donor |
| `fix/brain-creator-evidence-continuity-rebased-2026-10-28` | `65754125a8640f5d8e5f862a62fba616896b3a59` | 0 ahead / 1,651 behind | Same HEAD as consolidated/unmerged Studio donor; no unique commits vs target shown |
| `consolidated/unmerged-brain-studio-work-2026-10-28` | `65754125a8640f5d8e5f862a62fba616896b3a59` | 0 ahead / 1,651 behind | Same HEAD as creator-evidence continuity branch |
| `docs/brain-recovery-source-reconciliation-2026-11-13` | `03c1efee408abc185e14c75cb22c928ac3aada18` | 0 ahead / 17 behind | Ancestor/reference; no unique commits relative to target |
| `feat/p1-gemini-followup-callers-2026-10-30` | `aeb3f5f2b70253bf68b58536aa0646095613d234` | 18 ahead / 960 behind | Divergent caller donor; inspect each call site |
| `fix/brain-gemini-context-grounding-phases-2-5-rebased` | `b339f5e8d2253c6109e1a431ce1edbf0bcb6b986` | 1 ahead / 48 behind | PR #1241 donor; selective review only |

Branch search also found `-v2` variants for unified-context, channel-scope continuity, and unmerged Brain/Studio work. Those variants are not yet separately diff-audited and remain in the discovery queue.

## 3. Pull-request status snapshot

| PR | Title | GitHub state | Merge status | Initial finding |
|---|---|---|---|---|
| [#1241](https://github.com/viewtube-dev/viewtube/pull/1241) | Add exact context provenance to Brain Gemini turns | Open | Unmerged | 1 commit, 35 changed files, head `b339f5e8...`; current base SHA in PR metadata is stale (`a279e52e...`). Preserve provenance changes selectively; live authenticated browser proof and current-head release gates are explicitly incomplete. |
| [#1253](https://github.com/viewtube-dev/viewtube/pull/1253) | docs(brain): reconcile evidence and context phases 0–1 | Closed | Merged 2026-11-11 | 9 commits, 6 files; documentation/registry evidence. Verify current docs and ancestry rather than replaying. |
| [#1254](https://github.com/viewtube-dev/viewtube/pull/1254) | Validate evidence lineage before Brain learning promotion | Closed | Not proven merged (`merged_at=null`) | 4 commits, 4 files. Connector metadata showed a merge SHA despite GitHub list reporting no merge timestamp; resolve by ancestry and source verification before disposition. |
| [#1256](https://github.com/viewtube-dev/viewtube/pull/1256) | feat(brain): validate and resolve learning evidence before promotion | Closed | Merged 2026-11-12 | 17 commits, 6 files. Adds canonical trace-record resolution and fail-closed checks; explicitly does not prove durable cross-session BrainTrace storage, server authorization, or global idempotency. |

Additional related PRs discovered in the first all-state PR page include #1233, #1230, #1228, #1226, #1222, #1220, #1219, #1217, #1213, #1212, #1211, #1198, #1197, #1196, #1195, #1194, #1193, #1192, #1191, #1190, #1189, #1188, #1187, #1186, #1185, #1184, #1182, #1179, #1176, #1174, and #1173. Their complete state/diff/ancestry review remains outstanding; PR list pagination beyond the first page is also outstanding.

## 4. Verified feature footholds

### Canonical Brain and context

The target contains the current Brain authority documents:
- `docs/domains/BRAIN.md`
- `docs/brain/AI_BRAIN_QUICK_WINS_MASTER_IMPLEMENTATION_PLAN.md`
- `docs/brain/AI_BRAIN_FEATURE_MASTER_AND_IMPLEMENTATION_READINESS.md`
- `docs/brain/VIEWTUBE_AI_SYSTEMS_MASTER_RESOURCE.md`
- `tasks/system-convergence/AI-BRAIN-PHASE-0-1-RECONCILIATION-2026-11-11.md`

The Phase 0/1 reconciliation describes an existing analytics-canon → `EvidenceIntelligenceResolver` → `EvidenceRecord` → `BrainContextBroker` → rendered model-input path, plus a separately governed Creator Context envelope. It explicitly says not all evidence owners are yet proven to be turn-bound EvidenceRecords. Refresh its pinned SHA and verify each claim against current code before using it as current certification.

The target's gateway is `src/services/brain/runtime/BrainModelGateway.ts` (not a top-level `src/services/brain/BrainModelGateway.ts`). The target runtime exports it from `src/services/brain/runtime/index.ts`. This is the canonical model gateway foothold; do not add a competing gateway.

### Evidence Explorer donor

Donor-only files:
- `src/components/brain/BrainEvidenceExplorerPanel.tsx` — blob `3b254df420f46bdea7d2a271cf5b989d78f9e278`
- `src/components/brain/BrainEvidenceExplorerPanel.test.tsx` — blob `53b02d5bbac54b2d3a2654625d0ff467369df36e`

The component imports existing analytics-canon manifests/windows/statuses, `resolveEvidenceIntelligence`, `EvidenceRecord`, channel controls, Studio primitives, and React Router. Its helpers filter canonical datasets and records and render missing values as “Unknown,” not zero. The donor also changes `BrainPageTabs.tsx`, `AIBrainCommandInterface.tsx`, and evidence-explorer coverage docs. Target absence of the component is confirmed; complete import/API compatibility and full behavior are not yet verified.

### Composer and drafts

- Target `BrainComposerDock.tsx` blob: `37316b847a97e21ad9e02faf0d5538e067edb8ef`.
- Phase 4 donor `BrainComposerDock.tsx` blob: `03c634949d915c1220e78f37316a26f6675849e7`.
- Target `BrainComposerDock.css` blob: `c7a8bcbbdb3ef15807add1f31f905e73cd63ab02`.
- Donor `BrainComposerDock.css` blob: `384812face6fc47d8d4754bac32379a496872ddf`.
- Target `BrainComposerDraftStore.ts` blob: `ab5c419b172ff4103553e46c648dd5a91f76274a`.
- Donor `BrainComposerDraftStore.ts` blob: `ab5c419b172ff4103553e46c648dd5a91f76274a` (identical).
- Target draft-store test blob: `32bae1ca735c1f82f87a49af8a8d1cb0de50592a`.
- Donor draft-store test blob: `dac38b398c901dd180470ae6865eb7a5f09cdcff`.

The target already exposes Context, prompts, capabilities and Journal in the component contract. The donor includes bounded auto-resize and related composer experience CSS; the target has a different component/CSS implementation. The donor draft-store tests include channel scoping, empty-draft deletion, malformed payload handling, and size/no-channel constraints; compare those assertions against target tests before porting any missing coverage.

### Gemini caller inventory

The target and donor `src/services/brain/assetStrategies/tagSuggestions.ts` files are byte-identical at blob SHA `f2e4edc0368c33ed45d6600b3cbd5fa4321dbd11`. The donor's broader diff touches:
- `.github/workflows/release-gates.yml`
- `docs/architecture/GEMINI_MODEL_CALLSITE_INVENTORY.md`
- `src/services/asset-engine/GenerationWorkflow.ts`
- `src/services/brain/creatorAssets.ts`
- `src/views/MetadataMaster.tsx`
- `src/views/SeoGenerator.tsx`
- `src/views/VideoManager.tsx`
- `src/views/dashboard/widgets/TagGeneratorWidget.tsx`
- `src/views/dashboard/widgets/TitleRewriterWidget.tsx`
- `src/views/dashboard/widgets/VideoUploaderWidget.tsx`
- Gemini governance plan and tag-suggestion tests.

The call-site inventory already exists on target and donor with different blob SHAs. Its presence is not proof that every call site is governed. Each caller still needs current-target inspection, gateway/resolver tracing, and test verification.

## 5. Existing canonical documents and duplicate check

The target already contains substantial canonical equivalents for architecture, feature readiness, Gemini call-site inventory, and Phase 0/1 evidence/context reconciliation. The requested seven filenames were searched and no exact-name matches were returned. Before creating the remaining requested documents, inspect the document registry and canonical authorities to determine whether each should be an update, a new cross-cutting audit, or a link/appendix to an existing owner.

## 6. Explicit evidence-owner status

| Owner | Current evidence from this checkpoint | Status |
|---|---|---|
| Analytics-canon | Existing resolver/record path documented in target Phase 0/1 audit; explorer donor consumes it | Existing canonical path; current behavior needs fresh source/test verification |
| Creator/channel profile | Canonical profile and context donor branches exist; target has governed Creator Context | Partial / branch reconciliation required |
| Project / ContentBuild | Phase 0/1 audit identifies as next source-owner slice after analytics/creator-confirmed evidence | Partial / inspect canonical source and Brain projection |
| Vault | Listed as next owner in PR #1241; exact adapter/reachability not audited here | Unverified |
| Verified Publishing receipts | Listed as next owner in PR #1241; exact adapter/reachability not audited here | Unverified |
| YouTube-read | Explicitly unaudited/unwired in PR #1241 description | Not yet wired/proven |
| Comments | Explicitly unaudited/unwired in PR #1241 description | Not yet wired/proven |
| Transcripts | Explicitly unaudited/unwired in PR #1241 description | Not yet wired/proven |
| Research | Explicitly unaudited/unwired in PR #1241 description | Not yet wired/proven |
| Outcomes | Explicitly unaudited/unwired in PR #1241 description | Not yet wired/proven |
| Experiments | Explicitly unaudited/unwired in PR #1241 description | Not yet wired/proven |

This table records the evidence available in this discovery pass; it is not a substitute for owner-by-owner API, permission, scope, stable-ID, freshness, UI, and test inspection.

## 7. Verification boundary

No repository checkout or executable test environment was available through this GitHub read-only discovery pass. Therefore:
- No Vitest, typecheck, lint, source-governance, production build, browser, or live Gemini verification is claimed.
- No code migration has been performed.
- No PR has been opened, merged, closed, or retargeted.
- No branch has been deleted or force-pushed.
- The audit branch was created from the exact target SHA to hold reviewable documentation without writing directly to the primary branch.

## 8. Remaining Phase 1 discovery gates

1. Exhaust all branch-search cursors and all relevant `-v2`/related branch variants; record every matching head SHA.
2. Enumerate all relevant PRs across every page, including closed/unmerged, merged, superseded and abandoned PRs; fetch exact diffs and ancestry.
3. PR #1254 merge-state discrepancy resolved at source level: its head is an ancestor of target and the target contains the evidence gate. Preserve this as landed-via-ancestry, not as a merged PR event.
4. Inspect complete source/test diffs for canonical profile, unified context/evidence, channel scope, creator evidence continuity, composer and Gemini callers.
5. Refresh the target baseline in existing audit documents; the previous `a279e52e...` pin is stale.
6. Verify current target implementation and call paths for all evidence owners, provider/key flows, runtime traces, retries, saved turns and composer actions.
7. Search the repository's documentation registry before deciding the remaining document destinations.
8. Only after these gates, freeze the feature-preservation matrix and choose independent, dependency-safe recovery slices.


## 9. Follow-up verification — learning evidence PR ancestry (2026-11-14)

- PR #1254 head `8a81f2dd25b4388fe6a02b90394ec03c86c2e9bc` is the merge-base commit when comparing its branch to the current target; compare reports 0 commits ahead and 44 behind. Current target `AlgorithmLearningCandidates.ts` contains the per-decisive-event evidence completeness gate. The behavior is present on target even though PR metadata reports closed with no `merged_at`.
- PR #1256 head `a12059eed1b2f3e09b3d6539cb914fa399688070` is likewise an ancestor of current target (0 ahead / 31 behind). Current target `AlgorithmLearningProfilePromotion.ts` imports `listBrainTraces`, `isEvidenceRecord`, and resolves candidate evidence only from canonical channel-scoped records actually returned on candidate traces.
- Current target `BrainTrace.ts` still explicitly documents that the default sink is browser-local, capped, per-device, and not the durable server-side destination. Cross-session persistence and server authorization remain open, not solved by the merged promotion resolver.
- Workflow lookup returned no runs for current target SHA `52c6e90f...`; PR #1241 head `b339f5e8...` has a completed release-gates workflow with conclusion `failure`. This does not identify the failing job details, and no test pass is claimed for the current target.


## 10. Expanded branch and PR discovery checkpoint (2026-11-14)

Branch search was expanded beyond the initial candidate list:

- Query `brain`: 343 matching branch names.
- Query `gemini`: 29 matching branch names.
- Query `evidence`: 71 matching branch names.
- Query `context`: 39 matching branch names.
- Query `creator`: 37 matching branch names.
- The union of the latter four result sets contains 159 names (queries overlap; this is not a count of unique candidate workstreams).
- Many creator matches are unrelated Creator Workbench branches and must be excluded after scope classification. These counts are search-result counts, not completed branch audits.

Additional high-relevance candidate branches discovered include:

- Evidence/context lineage: `brain-phase-0-2-evidence-context`, `brain-phase-0-2-evidence-context-reconciled`, `feat/brain-evidence-unification-runtime`, `feat/brain-evidence-provenance-phase2-2026-10-19`, `feat/brain-evidence-phases-6-8-2026-10-15`, `feat/brain-turn-evidence-continuity-phase-3-2026-10-28`, `feat/brain-public-channel-evidence-integration-2026-10-27`, `feat/brain-live-attribution-project-context-2026-10-15`, `feat/brain-durable-learning-persistence-current-base-2026-10-15`, `feat/brain-durable-learning-persistence-integration-2026-10-15`, `feat/brain-durable-learning-persistence-phase13-2026-10-15`.
- Context/profile continuity: `fix/brain-context-autosave-evidence-unification-2026-10-28`, `fix/brain-context-evidence-local-storage-2026-10-28`, `fix/brain-unified-context-evidence-current-base-2026-10-28`, `feat/brain-context-correction-governance-rebased-2026-10-22`, `fix/brain-project-context-current-base-2026-10-27`, `fix/brain-project-context-handoff-2026-10-27`, `fix/brain-project-context-identity-isolation-2026-10-15`, `fix/brain-required-context-truncation-2026-10-17`, `fix/brain-retry-active-context-2026-10-27`.
- Gemini/provider: `feat/gemini-canonical-registry-phase-1-2-3`, `feat/gemini-governance-phases-0-3-reconciled-2026-10-28`, `feat/gemini-phase-4-secure-fallback-observability`, `feat/gemini-provider-execution-convergence-phase-4`, `feat/p1-gemini-governed-callers-final-2026-10-30`, `feat/p1-gemini-governance-expanded-callers-2026-10-30`, `fix/gemini-model-discovery-validation`, `fix/gemini-key-validation-model`.
- Composer/workspace: `ai-brain-composer-redesign-2026-10-26`, `codex/ai-brain-mobile-composer-viewport-2026-10-24`, `feat/brain-composer-dock`, `feat/brain-local-composer-draft-recovery-2026-10-28`, `feat/brain-studio-workspace-phase3-reconciled-2026-10-28`, `fix/brain-composer-style-ownership-2026-10-29`, `fix/brain-composer-max-height-contract`.

The branch-name search results are not a substitute for exact HEAD SHA capture or compare/diff review. Candidate branch SHA and PR ancestry capture remains in progress.

### Additional PR discoveries

The all-state PR listing was paged beyond the first page. Additional relevant PRs include:

- **Gemini/provider:** #1168, #1145, #1142, #1134, #1131, #1126, #1125, #1124, #1123, #1120, #1116, #1109, #1197, #1196, #1195, #1194, #1192, #1191.
- **Brain evidence/context/profile:** #1118, #1117, #1104, #1094, #1093, #1089, #1087, #1086, #1084, #1083, #1079, #1071, #1069, #1061, #1060, #1053, #1049, #1048, #1045, #1041, #1038, #1034, #1033, #1028, #1026, #1025, #1024, #1022, #1020.
- **Composer/workspace/UI contracts:** #1161, #1157, #1148, #1147, #1103, #1101, #1100, #1098, #1096, #1095, #1017, #1015, #1014, #1012, #1011, #1009, #1007, #1004, #1001, #999, #997, #996, #995, #994.

The first two PR pages contain numerous merged predecessors. Closed/unmerged PRs are not assumed to have no value; compare and source inspection is required. Several candidate branches are ancestors of current target even though their PRs are marked closed/unmerged. In particular, target source inspection confirms canonical profile patching, scoped creator evidence, and persisted creator-answer evidence validation are present.

### Newly confirmed disposition details

- PR #1096 is closed/unmerged and contains 17 commits / 14 files. Its donor adds composer draft attachment/clear behavior, handoff labels, bounded auto-resize, and workspace discovery behavior, but also modifies Studio primitive catalog/audit files. Do not port the whole branch. Current target composer already exposes Context and Journal and contains a Clear draft affordance; the draft store is byte-identical. Bounded textarea auto-resize remains a candidate behavior gap requiring exact UI/runtime verification.
- PRs #1087, #1084, #1083 and #1079 are closed/unmerged divergent context/evidence attempts. Their patches overlap heavily. Current target already contains the later stale-profile protection in `aiBrainContext.ts`, scoped creator-answer evidence in `CreatorAnswerEvidence.ts`, and creator-answer snapshot validation in `PromptEvidenceIntegrity.ts`. Do not replay older variants wholesale. Verify current tests and edge cases before marking the behavior certified.
- PR #1053 is closed/unmerged and contains canonical profile migration/persistence changes; current target source already has the later canonical profile patch behavior. Review the remaining unique tests/notification behavior before disposition.
- PR #1197 is closed/unmerged but its head is an ancestor of current target; it is already represented by target history.
- PR #1196 is closed/unmerged; its branch source for `src/services/gemini.ts` is byte-identical to target at blob `56df81588d936a99d9423f41d54eef9d494b7c92`. The target also has the governed tag strategy and migrated tag callers. No replay of identical code.
- PR #1125's model-list/generation fallback helper is absent from target. However, target key validation already uses model-list discovery and explicitly separates credential acceptance from a guessed generation model. The donor fallback helper is not automatically required and appears superseded by the safer model-list validation contract; preserve the distinction and do not transplant it without a proven gap.
- PR #1126 targets `main`, not the requested integration target; treat it as a separate-base donor and inspect only if it contains behavior not already represented by the target's current key-validation contract.
