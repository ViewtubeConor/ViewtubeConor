# ViewTube Backend and Operational Reconciliation Audit

**Date:** 2026-11-16  
**Repository:** `viewtube-dev/viewtube`  
**Reconciliation branch:** `integration/reconciled-master-studio-2026-11-15`  
**Frozen master snapshot:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**Frozen 10-31 snapshot:** `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`  
**Scope:** Backend behavior, service contracts, persistence/safety boundaries, evidence lineage, tests, release gates, and operational integrity. Studio presentation work is intentionally deprioritized.

## 1. Executive decision

Do not merge either branch wholesale. The frozen snapshots show complementary strengths:

- **Keep master as the authority for Brain learning/evidence promotion.** Its candidate derivation requires supporting evidence for every decisive sample, and its promotion path resolves canonical evidence records from channel-scoped traces before writing durable profile memory.
- **Selectively recover the 10-31 Vault restore authorization guard and its regression coverage.** The source snapshot rejects restore requests unless the asset is actually archived or trashed; frozen master lacks this guard in `setVaultAssetState`.
- **Keep master Vault workspace and content-build/video-ID resolution behavior.** Do not replace the larger Creator Vault view or service with the 10-31 version wholesale.
- **Do not treat 10-31 release-gate changes as a backend feature.** The workflow adds the primitive-registry test; package changes expand Studio test coverage. No dependency version changes were found in the compared package manifests.
- **Treat the calendar event contract as a separate additive read-model proposal**, not persistence or a backend owner. Its integration requires explicit source adapters and real consumers before it can be called complete.

This is a source-difference audit, not a runtime verification. No implementation files were changed and no tests, typecheck, lint, build, browser checks, or deployment were run.

## 2. Snapshot comparison facts

The exact frozen commit comparison reports:

| Direction | Ahead | Behind | Changed paths in compare response |
|---|---:|---:|---:|
| 10-31 source relative to master | 493 | 50 | 93 |
| Master relative to 10-31 | 50 | 493 | 28 |

The snapshots diverged from merge base `9fda11d2bf49f25158fa9bdb6652f7690d7dca51`. Commit counts are not a measure of implementation quality or merge priority.

The 10-31-side changed-path set is dominated by Studio presentation/catalog work. Backend-relevant changes are concentrated in Vault policy/recovery, the calendar contract, and their supporting tests. The master-only application-code changes in this compare are concentrated in Algorithm learning candidate/evidence promotion and its tests.

## 3. Brain learning, evidence and provenance — preserve master

### 3.1 Candidate derivation

Master `src/services/brain/AlgorithmLearningCandidates.ts` adds a hard evidence-completeness condition:

- Only decisive positive/negative evaluation rows count toward sample size.
- Every decisive row must carry at least one nonblank evidence reference.
- A positive aggregate rate cannot hide a decisive row with missing evidence.
- A candidate is emitted only when the sample threshold, positive-rate threshold, and evidence-completeness condition all pass.

The 10-31 version shown in the frozen snapshot uses the sample and positive-rate thresholds but does not enforce evidence completeness before marking a candidate eligible.

**Decision:** Preserve the master implementation and its candidate tests. Do not port the weaker 10-31 candidate derivation over it.

### 3.2 Durable profile promotion

Master `src/services/brain/AlgorithmLearningProfilePromotion.ts` adds a canonical evidence-resolution stage before durable promotion:

- Deduplicates requested evidence IDs.
- Restricts lookup to the candidate's referenced traces and requested channel.
- Requires trace channel identity to match.
- Requires each record to pass `isEvidenceRecord`.
- Requires the evidence ID to appear in the trace's returned-evidence list.
- Detects conflicting records with the same ID and excludes them from promotion.
- Reports missing and conflicting evidence IDs for explicit handling.

The 10-31 snapshot's corresponding implementation is shorter and does not contain this canonical trace-bound resolution stage.

**Decision:** Keep master promotion logic and its expanded test coverage as the source of truth. Preserve creator approval, learning-enabled checks, governance approval, idempotency, source lineage, channel scope, and provenance metadata. Never simplify this path merely to reduce code size.

### 3.3 Backend merge gate

Before any future Brain changes, verify the full chain rather than only this final adapter:

1. Evaluation event creation and outcome measurement.
2. Evidence record creation and trace membership.
3. Candidate grouping and threshold calculation.
4. Governance review and approval.
5. Creator approval at promotion time.
6. Channel-scoped canonical evidence resolution.
7. Idempotent durable memory write.
8. Promotion event lineage and auditability.

Required regression cases include missing evidence, malformed evidence, cross-channel records, records not returned by the trace, conflicting duplicate IDs, repeated promotion, disabled learning, absent creator approval, and rejected governance status.

## 4. Vault lifecycle and mutation safety — selective 10-31 recovery

### 4.1 Confirmed source delta

Both snapshots share the same underlying `vaultMutationPolicy` and workspace-state modules according to the earlier blob comparison. The material service difference in `src/services/vaultAdapter.ts` is the source-only restore guard inside `setVaultAssetState`:

```ts
const restoreRequested = (input.archived === false && input.trashed !== true)
  || (input.trashed === false && input.archived !== true)
if (restoreRequested && !canMutateVaultAsset(existing, "restore")) return null
```

The frozen master function checks authorization for archive and trash transitions, but does not check the `restore` policy before processing `archived: false` or `trashed: false`.

The source test `src/services/__tests__/vaultRecovery.test.ts` adds a regression assertion that restore requests against an active, non-archived, non-trashed asset return `null` and leave lifecycle state unchanged.

### 4.2 Recommended selective port

Port the restore eligibility guard and its regression test into the master-based implementation, after confirming the complete `canMutateVaultAsset` policy semantics and adding explicit cases for:

- Archived asset restored.
- Trashed asset restored.
- Active asset cannot be "restored" as a no-op mutation.
- Protected/GOLDEN asset restore policy.
- Combined archive/trash inputs and contradictory transition requests.
- Previous lifecycle is preserved and restored.
- Asset identity and unrelated metadata remain unchanged.

Do not change the existing archive/trash/permanent-delete policy behavior as part of this narrow patch.

### 4.3 Preserve master Vault behavior

The earlier source audit identified additional master-side behavior worth retaining:

- Master CreatorVaultOS has stronger direct/content-build video-ID resolution.
- Master has broader workspace behavior and should not be replaced with the 10-31 view.
- BrainVaultAdapter remains a read-only metadata/provenance adapter over the canonical Vault adapter; it must not create a second asset index or expose raw files/Drive IDs.
- Vault search and transcript acquisition must continue to resolve canonical IDs and preserve parent asset/task provenance.

The 10-31 Lane B contract test also records useful safety expectations: archive/permanent-delete policy checks, compatible tool-target checks, and transcript video-ID resolution. Keep those as behavioral acceptance criteria, not as a reason to wholesale replace the master UI.

### 4.4 Persistence boundary still requiring investigation

The inspected `vaultAdapter.ts` uses browser localStorage for the local asset index. This audit does not establish that localStorage is the production persistence authority or that all server-backed operation stores are wired to this adapter. Before claiming Vault lifecycle convergence, trace:

- local Vault adapter and any server Vault operation store;
- account/creator scoping and cross-session persistence;
- conflict behavior when local and server state differ;
- task retry/recovery semantics;
- deletion/restore durability and audit history;
- backup/export/import behavior.

Do not invent a second persistence layer to fill an unverified gap.

## 5. Release gates and package scripts

### 5.1 Workflow difference

The compared `.github/workflows/release-gates.yml` files are otherwise line-identical in the inspected content, with one source-only addition:

`npm run test:studio-primitive-registry`

This is a useful source-governance gate, but it is not a backend runtime capability. It may be retained as a low-risk CI addition when the Studio registry implementation is adopted.

### 5.2 Package manifest difference

The package manifests contain no dependency-version differences in the comparison. Source-only script changes are Studio-focused:

- Adds the primitive registry audit/test scripts.
- Extends the confirmed-library layout test command.
- Expands the Studio-controls test command with more Studio-specific tests.

No backend test command or backend dependency change was identified in this package diff.

### 5.3 Operational checks still required

A successful merge must preserve and actually execute the appropriate non-UI gates, including:

- Brain/evidence governance and runtime snapshot contracts.
- Gemini caller/key validation and provider boundary tests.
- Production-stack and account-store fallback tests.
- Vault operation-store, lifecycle, recovery, transcript, and version tests.
- Publish transaction and ContentBuild repository contracts.
- Privacy/source governance and architecture checks.
- Typecheck, runtime lint, production build, and local smoke tests.

The workflow definition is evidence of intended checks, not evidence that they passed. The earlier CI failures attributed to the Vercel build-rate-limit page remain inconclusive.

## 6. Calendar contract — additive read model only

The 10-31 `src/services/calendar/calendarEventContract.ts` is a type/read-model contract, not a complete backend integration. It does not by itself provide source adapters, runtime validation, date normalization, stable event identity, persistence, source fetching, or consumer wiring.

**Decision:** Keep calendar as a separate later work package. Preserve existing owners:

- Projects own project publish dates and task due dates.
- Publisher/ContentBuild owns verified scheduled publication state.
- Asset Engine owns generation/build artifacts.
- Analytics owns observed performance facts.

A calendar projection may read these owners, but must not introduce a competing event database or infer multi-day spans without explicit owner start/end values. Before porting, locate every consumer and validate date-only parsing, timezone boundaries, stale verified publication data, invalid dates, stable event identity, and source-specific update semantics.

## 7. Dependency-ordered backend reconciliation plan

| Priority | Work package | Current decision | Required evidence before implementation |
|---:|---|---|---|
| 1 | Brain candidate/evidence promotion | Preserve master | Keep master implementation/tests; run focused evidence and promotion suite on the exact target SHA |
| 2 | Vault restore authorization | Selectively port 10-31 | Add failing tests first; verify policy behavior for active, archived, trashed, protected, and GOLDEN assets |
| 3 | Vault persistence and account scoping | Investigate | Trace local adapter, server operation store, account boundaries, recovery, and conflict semantics |
| 4 | Provider/Gemini governance | Preserve master baseline; audit gaps | Enumerate every provider caller, key validation path, retry/error behavior, and server/client boundary |
| 5 | Publishing and ContentBuild transactions | Preserve master baseline; audit gaps | Trace create/update/publish/rollback, idempotency keys, transaction state, and YouTube reconciliation |
| 6 | Background tasks and recovery | Audit both snapshots and history | Inventory task stores, queue ownership, retries, leases, stale-job recovery, and duplicate execution handling |
| 7 | Calendar projection | Additive proposal | Identify source adapters and consumers; do not add persistence |
| 8 | Release/operational gates | Retain useful source test gate | Execute workflow on the candidate merge commit; distinguish infrastructure failures from code failures |

## 8. Cross-cutting merge rules

1. Preserve the strongest implementation per capability, not the newest or largest branch.
2. Keep one canonical owner for every state domain, service, queue, registry, and durable writer.
3. Preserve data lineage and provenance across adapters and transformations.
4. Require explicit authorization for every destructive, restorative, publishing, and durable-learning mutation.
5. Make retries safe: idempotency, duplicate detection, and replay behavior must be tested.
6. Keep failure states observable and recoverable; do not turn errors into silent empty results or success-shaped fallbacks.
7. Preserve contract tests and add regression tests before changing behavior.
8. Audit all consumers before changing service signatures or state ownership.
9. Reconcile schema/data migrations and rollback compatibility before integrating persistence changes.
10. Do not claim implementation, test, build, CI, or deployment success without recorded evidence from the exact commit.

## 9. Current status

- Documentation-only audit created on the reconciliation branch.
- No runtime source files modified.
- No PR opened, merged, or deployed.
- No tests, typecheck, lint, build, browser checks, or live-service checks executed.
- Diagnostic PRs #1271 and #1272 remain separate and unmerged.
