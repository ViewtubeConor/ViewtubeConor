# ViewTube Vault Lifecycle Reconciliation: Restore Guard Audit

**Date:** 2026-11-15  
**Branch:** `integration/reconciled-master-studio-2026-11-15`  
**Master snapshot:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**10-31 source:** `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`  
**Related diagnostic PR:** [#1271](https://github.com/viewtube-dev/viewtube/pull/1271)

## 1. Executive finding

The 10-31 patch adds a narrowly scoped restore eligibility check inside `setVaultAssetState`. The master version already checks archive, trash, and permanent-delete eligibility in the existing mutation policy, but the inspected master `setVaultAssetState` does not call the policy for restore transitions.

The source patch is a strong candidate for selective adoption. It must not be copied without tests because the generic update API and combined state transitions also need explicit contract coverage.

No runtime code has been changed by this audit.

## 2. Exact source delta

The 10-31 patch adds:

```ts
const restoreRequested = (input.archived === false && input.trashed !== true)
  || (input.trashed === false && input.archived !== true)
if (restoreRequested && !canMutateVaultAsset(existing, "restore")) return null
```

This is added after the existing archive/trash guards and before metadata mutation.

The shared policy's `restore` case allows the operation only when the current asset has an archive/trash marker or ARCHIVED/TRASHED lifecycle state:

```ts
case "restore":
  return Boolean(metadata.archivedAt || metadata.trashedAt || lifecycle === "ARCHIVED" || lifecycle === "TRASHED")
```

This does not reject protected assets from restoration. That is consistent with the policy's distinction between restoring an asset's lifecycle and modifying/deleting protected content; confirm this is the intended product rule and test it explicitly.

## 3. Master behavior and source behavior

| Behavior | Master snapshot | 10-31 snapshot |
|---|---|---|
| Archive guard | Present | Present |
| Trash guard | Present | Present |
| Restore guard in `setVaultAssetState` | Missing | Present |
| Permanent-delete guard | Present | Present |
| Restore eligibility policy | Defined in shared policy | Defined in shared policy and invoked by state setter |
| Restore lifecycle recovery tests | Present | Present in inherited test file |
| Explicit policy-denial regression tests | Not found in inspected test file | Not added by the shown PR patch |

The 10-31 PR patch also changes the Vault view's selection eligibility:

- Archive requires every selected asset to pass `canMutateVaultAsset(asset, "archive")`.
- Permanent delete requires every selected asset to pass `canMutateVaultAsset(asset, "permanent-delete")`.
- Metadata editing requires exactly one eligible selected asset.
- Send-to-tool requires exactly one selected asset with at least one compatible registered target.

These are sensible local UI eligibility checks. They do not replace server/account authorization, which the policy comment explicitly says must be enforced separately.

## 4. Important adjacent risk: generic update path

The master adapter's `updateVaultAsset` accepts a general metadata patch. Its protected-content check treats `lifecycle` and `contentHash` as protected metadata keys, but it does not include `archivedAt`, `trashedAt`, or `previousLifecycle` in that protected-key list.

Therefore, the restore check in `setVaultAssetState` is not by itself proof that every exported adapter path enforces lifecycle transitions. A caller that invokes `updateVaultAsset` directly may be able to change lifecycle markers without passing through the restore policy, subject to the protected-asset checks and exact patch shape.

Before changing this, inventory all callers of `updateVaultAsset`, `setVaultAssetLifecycle`, and `setVaultAssetState`. Decide whether lifecycle marker changes must be exclusively owned by the state/lifecycle APIs. Avoid breaking legitimate metadata edits or migration code.

## 5. Required test-first plan

Add focused adapter tests before changing implementation:

1. **Valid archive restore:** archived asset restores to its previous lifecycle, preserving ID and clearing archive markers.
2. **Valid trash restore:** trashed asset restores to its previous lifecycle, preserving ID and clearing trash markers.
3. **Reject restore on active asset:** `{ archived: false, trashed: false }` on an ordinary active asset returns `null` and does not update timestamps/state.
4. **Reject malformed partial restore:** `{ archived: false }` on a non-archived asset and `{ trashed: false }` on a non-trashed asset are rejected.
5. **Allow protected asset recovery:** if product policy confirms restore is allowed for protected/GOLDEN assets, prove it restores without permitting content edits or permanent deletion.
6. **Reject restore of permanent-delete-ineligible states:** preserve the existing rule that protected assets cannot be permanently deleted, including after restore attempts.
7. **Combined state transitions:** archive-to-trash, trash-to-archive, and restore-to-favorite combinations have deterministic results and do not bypass eligibility.
8. **Generic update bypass:** test direct attempts to clear `archivedAt`/`trashedAt` or alter lifecycle through `updateVaultAsset`; define and enforce the intended ownership contract.
9. **UI action parity:** single and mixed selections show only actions allowed by the shared policy; multi-selection send-to-tool remains unavailable if the handler supports only one asset.
10. **Authorization boundary:** document and test the separate server/account authorization layer; client-side policy is not authorization.

Use the existing `vaultRecovery.test.ts` and Vault view contract tests as starting points, but prefer behavior tests over string-presence assertions for the new policy.

## 6. Implementation decision

**Recommended:** port the restore eligibility guard into master, but only after the tests above clarify the intended state transition contract and generic update ownership.

Keep master-only video/transcript ID resolution. Keep the existing shared mutation policy rather than creating a second lifecycle policy. Selectively port the 10-31 policy-based selection gates, retaining master behavior not contradicted by the policy.

Do not replace the full Vault workspace file.

## 7. Verification boundary

The exact PR #1271 patches for `vaultAdapter.ts`, `CreatorVaultOS.tsx`, and `CreatorVaultOS.laneB.test.ts` were inspected, along with frozen master/source versions of the adapter, policy, and recovery tests.

No tests were executed. No implementation changes were made. This is a source-level audit and implementation gate, not a test pass or authorization to merge.
