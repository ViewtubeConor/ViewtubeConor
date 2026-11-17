# ViewTube Reconciliation Audits

This index groups the source-of-truth audits and implementation handoff prepared for the 2026-11-15/16 reconciliation.

## Studio source and preservation

- [Master Studio reconciliation baseline](../handoffs/VIEWTUBE_MASTER_STUDIO_RECONCILIATION_BASELINE_2026-11-15.md)
- [Master Studio source audit](VIEWTUBE_MASTER_STUDIO_RECONCILIATION_SOURCE_AUDIT_2026-11-15.md)
- [Master Studio capability-home audit](VIEWTUBE_MASTER_STUDIO_CAPABILITY_HOME_AUDIT_2026-11-15.md)
- [113-path preservation ledger](VIEWTUBE_MASTER_STUDIO_113_PATH_PRESERVATION_LEDGER_2026-11-15.md)

## Product and surface reconciliation

- [Calendar projection and primitive audit](VIEWTUBE_CALENDAR_PROJECTION_AND_PRIMITIVE_RECONCILIATION_AUDIT_2026-11-15.md)
- [Resource Library Studio row audit](VIEWTUBE_RESOURCE_LIBRARY_STUDIO_ROW_RECONCILIATION_AUDIT_2026-11-15.md)
- [Analytics metric rail audit](VIEWTUBE_ANALYTICS_METRIC_RAIL_RECONCILIATION_AUDIT_2026-11-15.md)
- [Brain Composer Dock audit](VIEWTUBE_BRAIN_COMPOSER_DOCK_RECONCILIATION_AUDIT_2026-11-15.md)

## Backend, Vault, and operational safety

- [Vault lifecycle restore-guard audit](VIEWTUBE_VAULT_LIFECYCLE_RESTORE_GUARD_AUDIT_2026-11-15.md)
- [Resource, Vault, and Brain post-merge branch audit](VIEWTUBE_RESOURCE_VAULT_BRAIN_POST_MERGE_BRANCH_AUDIT_2026-11-16.md)
- [Backend and operational reconciliation audit](VIEWTUBE_BACKEND_AND_OPERATIONAL_RECONCILIATION_AUDIT_2026-11-16.md)

## Landing boundary

These documents preserve source comparisons, decisions, and implementation requirements. They do not certify runtime behavior or passing tests. Runtime changes require test-first implementation and exact-head verification; landing must follow the repository's authorized `scripts/pr_land.py` / Mergify workflow.
