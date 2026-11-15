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
- PR #1253 is merged (documentation/registry reconciliation). PR #1256 is merged (learning-evidence resolution). PR #1254 is closed with `merged_at=null`; despite a populated merge-commit field in one connector response, it must be treated as not proven merged until ancestry/current-source verification resolves the discrepancy.
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
3. Resolve PR #1254's merge-state discrepancy using current commit ancestry and target file contents.
4. Inspect complete source/test diffs for canonical profile, unified context/evidence, channel scope, creator evidence continuity, composer and Gemini callers.
5. Refresh the target baseline in existing audit documents; the previous `a279e52e...` pin is stale.
6. Verify current target implementation and call paths for all evidence owners, provider/key flows, runtime traces, retries, saved turns and composer actions.
7. Search the repository's documentation registry before deciding the remaining document destinations.
8. Only after these gates, freeze the feature-preservation matrix and choose independent, dependency-safe recovery slices.
