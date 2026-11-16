# ViewTube Resource Library, Vault, and AI Brain — Post-Merge Branch Audit

**Date:** 2026-11-16  
**Repository:** `viewtube-dev/viewtube`  
**Target:** `master/consolidated-feature-integration`  
**Master head inspected:** `8e68004691ab84385b5f0d24fee81b789256278a`  
**10-31 recovery head inspected:** `47572b6b8f9383537895114d89cf0bd9f93bddf5`  
**Scope:** Merged PR source branches that continued receiving commits after merge, plus current Resource Library, Vault, and Brain source branches. This is a source-history audit, not a merge or runtime certification.

## 1. Executive summary

The most consequential post-merge recovery candidates are in AI Brain:

1. **PRs #1117/#1118 source branch:** eight commits after the #1118 merge add exact channel-scope enforcement before restoring a saved model-visible prompt during a retry. This protection is absent from current master. It is a high-priority privacy and cross-channel integrity fix. Port the helper, guard, and tests selectively into the current master `BrainOrchestrator`, preserving master’s newer operation identity, provider identity, trace, and provenance fields.
2. **PR #1033 source branch:** one commit after merge tightens public-channel snapshot identity matching. Current master still has the weaker pre-follow-up matcher. This is a high-priority public-evidence isolation correction. Port the matcher and add tests; retain the public-metadata/no-fabricated-performance-ranking guard that is already present in master.
3. **PRs #1041/#1045/#1049 source branches:** later profile-migration commits are not required as a wholesale port. Current master’s `aiBrainContext.ts` has since evolved to channel-scoped storage and changed-field legacy patching, and is more complete than those branch snapshots. The older branch changes are functionally superseded; preserve their migration intent and regression cases when reviewing current master tests.

Vault findings:

- **10-31 recovery branch has several selective Vault improvements not present in master:** restore authorization, use of `canMutateVaultAsset` for action eligibility, shared transcript-video-ID resolution in the Vault flow, deep-linking Brain evidence to the canonical asset route, and additional tests for version detachment, transcript resolution, Brain search links, and unavailable handoff capability.
- Do not replace the current master Vault implementation wholesale. Master has stronger protected-asset handling and direct/content-build video-ID resolution. Combine the best behaviors and preserve those master safeguards.
- The post-merge continuation of PR #336 is **not** a reason to re-add its operation store: the later master implementation from PR #429 already contains a stronger store, request-conflict detection, additional operation types, and broader tests. The #336 branch copy is stale and should not replace it.

Resource Library findings:

- The core registry/content renderer and learning/search/progress behavior are already represented in master; no separate resource registry or content store should be introduced.
- PRs #1250 and #1255 were merged into the 10-31 recovery branch, not directly into master. The 10-31 branch carries the Resource Index row and SpectrumTag completion presentation changes. These are presentation-level deltas, not missing backend services.
- Older Resource Library PR branches #228, #253, #255, and #428 have no commits ahead of their merge points. No post-merge code recovery was found on those source branches.

No implementation changes were made. No tests, typecheck, lint, build, browser, or deployment checks were run.

## 2. High-priority AI Brain post-merge recovery

### 2.1 PR #1117 and #1118 — exact channel scope for retry prompt snapshots

**Merged PRs**
- [PR #1117](https://github.com/viewtube-dev/viewtube/pull/1117) — merged 2026-10-28.
- [PR #1118](https://github.com/viewtube-dev/viewtube/pull/1118) — merged 2026-10-28.
- Shared source branch: `feature/priority-brain-context-studio-current`.
- #1118 merge commit: `2a48d2419ab0723920776d321af777a51357cbb4`.
- Current branch head: `49547b004f7747aed8067c25d51391ad1f3eae73`.
- Current source branch is eight commits ahead of the #1118 merge point. Relative to current master, the branch has eight unique commits across four paths.

**Post-merge commits of interest**
- `7195d251` — prevent cross-channel prompt snapshot restoration.
- `df63f5a3` — make retry snapshot channel scope explicit.
- `78fe7799` — require exact channel scope for retry snapshot restore.
- `e9e164c5` — test retry snapshot channel isolation.

**Missing behavior in current master**

Current master `BrainOrchestrator.ts` currently permits restoration based on the presence of a saved snapshot:

`restoreOriginalModelInput = Boolean(restoredModelInputSnapshot)`

The later branch adds an explicit helper, `isBrainModelInputSnapshotChannelCompatible`, and only restores when both saved and active channel IDs are non-empty and exactly equal. It rejects:
- a snapshot saved under another channel;
- a snapshot from a legacy/unscoped turn;
- an active retry without a channel identity.

The saved model-visible prompt can contain private creator answers and channel analytics. Restoring it into a retry for a different channel is a cross-account/context leak risk.

**Selective port recommendation — highest priority**

Port the helper, the exact-scope restore condition, and the three regression cases into master. Do not replace the branch’s older `BrainOrchestrator.ts` wholesale: the current master file is newer and contains operation identity propagation, provider identity, trace metadata, and additional lineage fields absent from the branch version. Integrate the channel-compatibility check into the current master function while preserving all those fields.

Required additional cases:
- exact same channel restores;
- different channel rejects;
- null, undefined, blank, or legacy-unscoped channel rejects;
- a saved prompt is not restored when active channel changes between original turn and retry;
- operation ID and trace lineage remain stable through a permitted retry.

### 2.2 PR #1033 — public snapshot identity guard

**Merged PR**
- [PR #1033](https://github.com/viewtube-dev/viewtube/pull/1033) — merged 2026-10-27.
- Source branch: `feat/brain-public-channel-evidence-integration-2026-10-27`.
- Merge commit: `d6d8a72a6efdd57a85f8ed5dad36c0752044c362`.
- Current branch head: `b8fb05a562be6c7fd1322dad8eee28816f8de09c`.
- One commit after merge: `Guard public evidence scope and prevent false performance rankings`.

**Finding**

The post-merge commit makes `publicSnapshotMatchesActiveChannel` stricter when no canonical channel ID is available: it compares normalized handles when both are present, otherwise normalized channel names when both are present, and does not treat a conflicting known identity as a match.

Current master still has the earlier permissive matcher. The same source branch also contains a public-evidence ranking guard, but that guard is already present in current master: `buildEvidenceRankingModule` refuses to render a performance ranking unless at least one video has an actual non-null metric.

**Selective port recommendation**

Port only the stricter public-snapshot identity matching behavior, with regression tests for:
- exact canonical ID match;
- canonical ID mismatch;
- normalized handle match/mismatch;
- normalized title match/mismatch when handles are unavailable;
- missing identity fields;
- no accidental cross-channel public snapshot reuse.

Retain master’s existing no-fabricated-performance-ranking guard; do not duplicate it.

### 2.3 PRs #1041, #1045 and #1049 — canonical creator profile migration

**Branches and post-merge history**
- [PR #1041](https://github.com/viewtube-dev/viewtube/pull/1041) and [PR #1045](https://github.com/viewtube-dev/viewtube/pull/1045) share `feat/unified-brain-channel-context-evidence-2026-10-27`.
- [PR #1049](https://github.com/viewtube-dev/viewtube/pull/1049) continues the work on `feat/unified-brain-intake-canonical-2026-10-28`.
- Current heads are respectively `1712c1995375bb7bff748edc9f2788296dfcfd80` and `c4a4efe2bde5deee564917303947909107669088`.
- The branches contain five and three commits beyond their respective merged PR heads.

**Post-merge changes inspected**
- Make the canonical channel profile authoritative across both intake save paths.
- Use canonical channel profile questions in onboarding.
- Remove the retired duplicate intake question registry.
- Preserve canonical profile fields during partial legacy saves.
- Migrate legacy answers without overwriting established canonical values.
- Preserve legacy alias fallback semantics during migration.

**Disposition: superseded by current master**

Current master `src/services/aiBrainContext.ts` is materially newer than either source branch:
- it scopes local storage by channel;
- it loads the active channel’s context;
- it preserves existing canonical fields during migration;
- it projects only legacy fields that actually changed in the current save, preventing a stale full legacy form object from overwriting newer canonical questionnaire answers;
- it retains the legacy alias fallback behavior.

The branch snapshots use an older unscoped storage shape and shorter implementation. Do not port these files wholesale. Retain the migration scenarios as acceptance tests against the current channel-scoped implementation, especially partial saves, alias fallback, and no overwrite of established canonical profile values.

### 2.4 PRs #1179/#1182 — Gemini governed caller migration continuation

**Merged PRs**
- [PR #1179](https://github.com/viewtube-dev/viewtube/pull/1179)
- [PR #1182](https://github.com/viewtube-dev/viewtube/pull/1182)
- Shared branch: `feat/p1-gemini-governance-reconciliation-2026-10-29`.
- #1182 merge commit: `63d66b29c851b08e55a2b2105e25d3b0f876a647`.
- Current branch head: `6a088032bc514d74ab5464498848eff6474d160e`.
- Eleven commits after #1182; thirty-two after #1179.

**Post-merge commit themes**
- Canonical output-event idempotent receipts.
- Removal of remaining UI dynamic Gemini imports.
- Governed SEO strategy migration for Metadata Master, SEO Generator, and Video Uploader.
- Prompt receipt and operation identity propagation.
- Stable operation identity for generated SEO assets.
- Inventory and follow-up documentation refreshes.

**Disposition: largely already integrated or superseded**

The current master comparison shows only three residual file differences:
- `docs/architecture/GEMINI_MODEL_CALLSITE_INVENTORY.md`: the branch copy is older than master’s later audit refresh and must not replace it.
- `src/views/MetadataMaster.tsx`: the only code difference is a local result-variable name (`generated.output` versus `generatedAsset.output`), not a capability.
- `src/views/SeoGenerator.tsx`: current master and branch file content inspected as identical.

The current master `GenerationWorkflow.ts` also has a stronger namespaced output event idempotency key (`generation-output:v1:`) than the older one-line branch follow-up. Do not port the old unqualified key over it.

**Decision:** no wholesale remerge. Keep master’s governed gateway and specialist strategy migrations; refresh the callsite inventory only through a current exact-head audit.

### 2.5 PR #1184 — public handle runtime follow-up

- [PR #1184](https://github.com/viewtube-dev/viewtube/pull/1184), merged 2026-10-30.
- Source branch: `feat/p1-05-brain-public-context-runtime-2026-10-30`.
- Merge commit: `10a3e44f66291b7b127234a9038c0bcf803fedab`.
- Current branch head: `6f47038c6fcd552b52e853b4f1ae958cc3da798e`.
- Five commits after merge.

The later branch commits improve resolved public identity continuity, public evidence refresh, private identity isolation, and focused BrainRuntime regression coverage. The current master comparison shows the runtime code already present; the residual difference is `package.json`, where the branch adds `src/services/brain/__tests__/BrainRuntime.test.ts` to the focused test gate.

**Decision:** do not remerge runtime code. Verify the test file exists on current master and add it to the focused test gate if still applicable. This is a test-gate recovery, not a missing runtime feature.

### 2.6 PR #1212 — forced initial evidence refresh test

- [PR #1212](https://github.com/viewtube-dev/viewtube/pull/1212), merged 2026-10-30.
- Source branch: `brain-runtime-snapshot-fix`.
- Merge commit: `8ac34ab6348a307b55fbd9bd4502b438654e93f8`.
- Current branch head: `07daf174c3e9600506439adc802b43c6b9c1c54d`.
- Two commits after merge.

The branch adds a test for forcing inventory stale even when a restored snapshot is fresh. The current master comparison identifies only `src/services/initialChannelBootstrap.test.ts`, but the inspected master and branch test contents are identical. No remerge is needed.

### 2.7 PR #1186 — generation idempotency follow-up

- [PR #1186](https://github.com/viewtube-dev/viewtube/pull/1186), merged 2026-10-30.
- Source branch: `fix/p1-gemini-idempotency-retry-2026-10-30`.
- Merge commit: `6a7defb888d824b3173cfcc2b3f4765be49768bf`.
- Current branch head: `42c0f103442fbc32ce841470b8a517df828fdc47`.
- One commit after merge.

The branch changes the request metadata field to `generationIdempotencyKey`. Current master has a later output-event-specific namespace and conflict-safe canonical receipt handling. The branch’s remaining difference is not a safe candidate to copy over the newer master implementation.

## 3. Vault post-merge and 10-31 branch reconciliation

### 3.1 PR #336 — post-merge operation-store continuation

- [PR #336](https://github.com/viewtube-dev/viewtube/pull/336), merged 2026-10-15.
- Source branch: `vault/phases-0-1-2-workbench`.
- Merge commit: `7b14a1d560fbd74cda567ab9889ac1e7213c1ceb`.
- Current branch head: `a6f5d7f98f70cf6572ce54281e979d8133a4adcd`.
- Eight commits after merge.

The branch continuation added:
- authenticated per-user operation receipt storage;
- authenticated route mounting in `server/billing-server.mjs`;
- idempotency, ownership, cancellation/retry and lifecycle tests;
- a `test:vault-operation-store` package gate;
- phase 8–10 status and recovery documentation.

**Disposition: superseded by PR #429 and current master**

Current master already contains the operation store and route through the later current-base migration [PR #429](https://github.com/viewtube-dev/viewtube/pull/429). The master implementation is stronger than the #336 branch continuation:
- it supports additional media operations (including video trim/proxy/transcode, frame extraction and audio extraction);
- it canonicalizes parameter JSON before comparing idempotent requests;
- it returns an idempotency conflict when a key is reused for a different asset/operation/parameter set;
- it has extra tests for missing authentication and conflicting idempotency reuse;
- master’s billing server and package manifest include later account/billing/public-channel changes absent from the stale #336 branch copy.

Do not remerge the old #336 server files or replace current master’s operation store. The branch’s phase status docs are also superseded by the current master audit, which correctly identifies worker execution, persistent disk configuration, race-safe claims, and deployment restart verification as remaining gates.

### 3.2 PR #80 — mobile Inspector visibility follow-up

- [PR #80](https://github.com/viewtube-dev/viewtube/pull/80), merged 2026-10-13.
- Source branch: `fix/vault-inspector-visible-all-breakpoints-2026-10-13`.
- Merge commit: `dc1e2d67be9bf010b440082b2d82592a442b05af`.
- Current branch head: `2d747491baab55eac4786c95e597df11a91e276f`.
- Two commits after merge.

The continuation adds a test and changes the mobile Inspector container from `hidden` to `block` when the mobile sheet is closed. It is a visible Vault interaction fix, not a backend capability. Keep it as a low-priority UI review item; verify it against the current Vault mobile interaction model before porting.

### 3.3 PR #173 and #429

- [PR #173](https://github.com/viewtube-dev/viewtube/pull/173): current source branch is behind its merge point; no post-merge commits.
- [PR #429](https://github.com/viewtube-dev/viewtube/pull/429): current source branch is behind its merge point; no post-merge commits.
- The #429 operation-store implementation is already the current master authority. No remerge is needed.

### 3.4 Selective Vault deltas in the 10-31 recovery branch

The current 10-31 branch is `47572b6b8f9383537895114d89cf0bd9f93bddf5`. It is substantially divergent from master, so do not merge it wholesale. The following service and test deltas are worth preserving selectively.

| Path | 10-31 delta | Master comparison / treatment |
|---|---|---|
| `src/services/vaultAdapter.ts` | Adds a `canMutateVaultAsset(existing, "restore")` guard before accepting archive/trash restore requests | Missing in master; selectively port with policy tests |
| `src/services/__tests__/vaultRecovery.test.ts` | Rejects restore requests for assets that are neither archived nor trashed | Missing in master; port with restore guard |
| `src/services/brain/BrainVaultAdapter.ts` | Links Brain evidence to `/vault?assetId=...` | Master still points to a generic toolbox route; port canonical asset deep link and test it |
| `src/services/__tests__/vaultBrainSearch.test.ts` | Tests Brain evidence opens the exact canonical Vault asset | Add to master with deep-link change |
| `src/services/__tests__/vaultTranscriptTask.test.ts` | Tests canonical YouTube ID, legacy `videoId`, `youtubeId` alias, ContentBuild fallback and invalid candidates | Shared resolver source is present; add the missing focused regression coverage |
| `src/services/__tests__/vaultVersions.test.ts` | Tests detached versions create a new canonical asset and preserve parent/version provenance | Add test coverage; preserve source asset identity |
| `src/features/vault-workbench/capabilities.test.ts` | Tests Send To is unavailable without a compatible handoff target | Add regression coverage |
| `src/views/CreatorVaultOS.laneB.test.ts` | Tests lifecycle action and compatible handoff wiring | Add/retain as acceptance coverage |
| `src/views/CreatorVaultOS.tsx` | Uses centralized `canMutateVaultAsset` eligibility and shared transcript video-ID resolver | Selectively integrate; preserve master protected-selection behavior and direct/content-build video-ID resolution |

**Important implementation reconciliation**

Master’s `CreatorVaultOS.tsx` has stronger protected-selection checks and direct/content-build video-ID resolution. The 10-31 branch uses the centralized mutation policy for archive, permanent delete, and metadata edit eligibility, requires a single compatible selected target for Send To, and uses the shared transcript-video-ID resolver. The correct outcome is a combined implementation:
- keep master’s protected/GOLDEN handling and all valid direct/content-build ID resolution;
- centralize action eligibility through `canMutateVaultAsset` where its policy matches the existing behavior;
- require exactly one compatible selected asset for the single-target handoff handler;
- use the shared resolver consistently for transcript acquisition;
- add the missing restore authorization guard;
- preserve the existing canonical Vault adapter and ContentBuild ownership.

Do not copy the 10-31 4,000-line Vault view over master.

## 4. Resource Library branch audit

### 4.1 Older Resource Library PR branches

The following merged branches were checked against their merge points:
- [PR #228](https://github.com/viewtube-dev/viewtube/pull/228) — `resource-library-content-convergence-2026-10-15`.
- [PR #253](https://github.com/viewtube-dev/viewtube/pull/253) — `resource-library-canonical-palette-2026-10-15`.
- [PR #255](https://github.com/viewtube-dev/viewtube/pull/255) — `resource-library-editorial-evidence-2026-10-15`.
- [PR #428](https://github.com/viewtube-dev/viewtube/pull/428) — `migration/resource-library-phases-6-8-current-2026-10-16`.

These branches are at or behind their merge points; no post-merge code commits were found. Their content, discovery, editorial and learning-path work is already part of the master history. Do not remerge them.

### 4.2 PRs #1250 and #1255 — merged into 10-31, not master

- [PR #1250](https://github.com/viewtube-dev/viewtube/pull/1250) — Resource Index row styling; merged into `fix/studio-controls-regression-recovery-2026-10-31`.
- [PR #1255](https://github.com/viewtube-dev/viewtube/pull/1255) — SpectrumTag completion status and primitive catalog integration; merged into the same 10-31 branch.
- Both source branches are behind their merge commits; no additional post-merge commits were found.
- These are not master-target merges. Their current result is present in the 10-31 recovery branch.

The 10-31 Resource Library row uses `StudioSplitLeftButton` with the icon rail and a static `StudioSpectrumTag` for completion. Master still uses the prior native button/card row and its original completion mark. The 10-31 CSS adds scoped split-left row geometry, category styling, and completion-tag styling.

**Disposition**
- Preserve master’s Resource Library registry, canonical content/Markdown renderer, search, category, learning-path and local progress ownership.
- Do not create a second resource registry, progress store, or content renderer.
- Treat the #1250/#1255 delta as a later presentation enhancement from 10-31. It can be ported after the backend/security work; it is not a missing backend capability.
- Keep `StudioSpectrumTag` size support and its geometry coupled; do not port the Resource Library use site without the matching primitive API and tests.
- Ensure the completion tag remains a static span within the parent row button, never a nested interactive button.

## 5. Consolidated post-merge branch disposition

| PR / branch family | Post-merge delta found? | Current master status | Action |
|---|---|---|---|
| #1117/#1118 — Brain retry scope | Yes: 8 commits after #1118 | Missing exact channel compatibility helper/guard | **High priority selective port** |
| #1033 — public evidence scope | Yes: 1 commit | Strict snapshot matcher missing; ranking guard already present | **High priority selective port** |
| #1041/#1045/#1049 — canonical profile migration | Yes: 5 / 3 commits | Current master has newer channel-scoped save/migration logic | Preserve intent/tests; no wholesale port |
| #1179/#1182 — Gemini caller migration | Yes: 32 / 11 commits | Later code largely integrated; residual docs/variable differences stale or trivial | No remerge; refresh inventory only |
| #1184 — public handle runtime | Yes: 5 commits | Runtime present; focused test-gate addition remains | Add test to focused gate if valid |
| #1212 — forced freshness | Yes: 2 commits | Regression test content already present | No port |
| #1186 — generation idempotency | Yes: 1 commit | Master has stronger namespaced output-event key | Do not port old version |
| #336 — Vault operation store | Yes: 8 commits | Superseded by stronger #429 implementation | No remerge |
| #80 — Vault Inspector | Yes: 2 commits | Mobile visibility behavior differs | Low-priority UI review |
| #173, #429, #794, #726, #466, #414, #405, #400, #1109, #1104, #1101, #1100, #1098, #1094, #1093, #1089, #1071, #1069, #1061, #1060, #1028, #1025 | No relevant post-merge code ahead, or source branch is behind | Already represented by master history | No remerge |
| #228/#253/#255/#428 Resource Library | No post-merge code ahead | Already represented by master history | No remerge |
| #1250/#1255 Resource Library | Merged into 10-31, not master | 10-31 row/tag delta not in master | Selective later UI port |

## 6. Recommended implementation order

1. **Brain retry channel isolation:** add `isBrainModelInputSnapshotChannelCompatible` and guard to current master `BrainOrchestrator`; add exact-scope and unscoped legacy tests.
2. **Public snapshot identity guard:** port the strict identity matcher from the #1033 follow-up; add mismatch/missing-identity tests.
3. **Vault restore guard:** port `canMutateVaultAsset(..., "restore")` and the no-op restore rejection test.
4. **Vault canonical linking and resolution:** port the Brain-to-Vault deep link, shared transcript ID resolver usage, and missing version/transcript/handoff regression tests while preserving master’s protected-asset logic.
5. **Brain test gate:** add the public-identity BrainRuntime test to the focused gate if it is present and not already covered.
6. **Resource Library presentation:** only after the backend changes, selectively port the 10-31 row/tag treatment with its matching primitive API and tests.

## 7. Verification and safety boundaries

- This audit used GitHub PR metadata, branch refs, merge commit comparisons, branch commit history, and file-content comparisons.
- Ahead/behind counts are ancestry comparisons, not a statement that every ahead commit is useful or safe to merge.
- A branch may contain commits already represented through a different PR. Check current master content before proposing a remerge.
- No implementation files were changed.
- No tests, typecheck, lint, build, browser verification, CI rerun, or deployment were performed.
- No PR was created, merged, closed, rebased, or force-pushed.
