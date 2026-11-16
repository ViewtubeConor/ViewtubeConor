# ViewTube Beta Launch Readiness — Master Resource & Living Progress Reference

**Production Date:** 2026-11-16  
**Last Edited:** 2026-11-16  
**Class:** REFERENCE  
**Status:** ACTIVE — INITIAL BASELINE / RECONCILIATION IN PROGRESS  
**Concern:** beta-launch-readiness-reference  
**Owner:** Integrated Application Program  
**Registry ID:** DOC-REF-BETA-LAUNCH-READINESS  
**Last Audited Main SHA:** NOT_AUDITED — this initial resource was prepared from `master/consolidated-feature-integration` at `8e68004691ab84385b5f0d24fee81b789256278a`; it is not a claim that the production `main` branch was audited.  
**Related Authorities:** `docs/governance/DOCUMENTATION.md`; `docs/governance/TASK_AUTHORITY.md`; `docs/governance/VERIFICATION.md`; `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`; `docs/programs/INTEGRATED_APPLICATION.md`; `docs/architecture/capabilities.json`

> This is a living reference and evidence index for the 40 beta-launch initiatives. It is not a second Task Index, capability registry, billing ledger, branch ledger, or source of product truth. Canonical task identity/status remains governed by Task Authority; capability ownership remains in Product Architecture and `capabilities.json`; implementation truth comes from current code, tests, runtime and deployment evidence.

## 1. Mission and outcome

Make ViewTube a coherent, secure, demonstrably functional creator platform for public beta and partner evaluation. The target creator loop is: account and YouTube connection → canonical channel data/VT-SYNC → analytics and evidence → Brain/creator context → project and ContentBuild → generation/assets/Vault → Editor/Remotion/export → approved publishing → post-publication analytics/outcomes → account plans, credits and billing.

Beta scope is not equivalent to finishing every long-term roadmap idea. A feature may be invite-only, limited, deferred or explicitly unsupported. No feature may be marketed as complete without evidence appropriate to its claim.

## 2. Repository baseline and initial discoveries

- Repository: [`viewtube-dev/viewtube`](https://github.com/viewtube-dev/viewtube).
- Working source branch: `master/consolidated-feature-integration`.
- Baseline commit observed through open PR #208: `8e68004691ab84385b5f0d24fee81b789256278a`.
- PR #208 is an open PR from `master/consolidated-feature-integration` to `main`; do not confuse the PR's head branch with its base.
- Default branch reported by GitHub: `main`. This resource was deliberately branched from the integration branch, not committed directly to `main`.
- Existing architecture establishes six canonical convergence systems: Creator Context & Knowledge; Evidence & Intelligence; Project/Content/Asset Graph; Creator Operations & Generation; Outcomes/Evaluation/Learning; Brain Runtime & Experience.
- Existing capability IDs include `CAP-CREATOR-CONTEXT`, `CAP-EVIDENCE-INTELLIGENCE`, `CAP-PROJECT-CONTENT-IDENTITY`, `CAP-ASSET-LINEAGE`, `CAP-CREATOR-OPERATIONS`, `CAP-OUTCOME-LEARNING`, `CAP-BRAIN-EXPERIENCE`, `CAP-ANALYTICS-CANON`, `CAP-EDITOR-RENDER`, and `CAP-PUBLISH`.
- Important current code landmarks observed: `src/services/auth-canon/`; `src/services/youtube/`; `src/services/analytics-canon/`; `src/services/brain/`; `src/services/asset-engine/`; `src/services/vault*`; `src/services/editorEngine.ts`; `server/account-auth.mjs`; `server/account-store.mjs`; `server/account-schema.sql`; `server/billing-server.mjs`; `server/account-credit-reservations.test.mjs`; `src/services/gemini.ts`; `src/services/geminiModelGovernance.ts`.
- Existing recent PR evidence includes #1276 (account entitlements and Gemini credit reservations, merged to integration); #1256 and #1254 (Brain learning evidence); #1241 (Brain Gemini context provenance, open at the observed PR snapshot); #1206 (publishing ambiguous-outcome recovery); #1201 (Render startup fallback); #1262 and #1263 (partner planning/pitch documentation).
- Calendar PRs #1278 and #1280 were merged into `fix/studio-controls-regression-recovery-2026-10-31`, not directly into the master integration branch at the observed snapshot. They require selective migration review before being treated as integrated.
- Existing `ViewTube Ideas Curator` skill, `ideas/registry.json`, `ideas/MASTER_IDEAS.md`, and `npm run generate:ideas-master` already govern idea intake/consolidation. Reuse them; do not create a parallel idea generator or ideas registry.
- Codelit Product Plan and Plan & Ship templates were consulted as planning aids. They are templates only and do not execute, save or deploy work.

### What is not yet verified

- The 40 initiatives have not each received a complete current-branch code/PR/branch audit.
- A branch name, document, PR merge or component presence is not proof of a complete workflow.
- The current `main` branch was not used as the source baseline for this initial document.
- Per-initiative completion percentages are intentionally `NOT ASSESSED` until acceptance criteria and evidence are reviewed. Do not invent progress percentages.

## 3. How to maintain this living resource

1. Read `AGENTS.md`, `docs/governance/DOCUMENTATION.md`, `docs/registry.json`, `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`, `docs/architecture/PRODUCT_ARCHITECTURE.md`, `docs/programs/INTEGRATED_APPLICATION.md`, `docs/governance/TASK_AUTHORITY.md`, `docs/governance/VERIFICATION.md`, and the owning Domain Authority before making a material update.
2. For each initiative, resolve existing CAP IDs and capability homes, inspect `governance/convergence/plan-families.json`, `governance/convergence/code-ownership.json`, `ideas/registry.json`, Task Index, active missions, PRs, branches, current code and tests.
3. Prefer `EXTEND → COMBINE → MERGE → GENERALIZE → ADAPT → CREATE_REVIEW`. Reuse existing implementation; do not create parallel owners.
4. Record exact repo paths, branch names, PR numbers, commit SHAs, source conversation titles/dates, official URLs and evidence references. Mark unverified references as candidates, not facts.
5. Append progress log entries with ISO date, observed discovery/change, exact refs, test/runtime evidence, blocker and next action. Never rewrite history to make a previous estimate look accurate.
6. Task lifecycle and maturity axes are controlled by Task Authority. This reference may show a dated, evidence-backed progress estimate as a convenience, but it must not become an authoritative task state or replace Task Index.
7. A completion estimate must explain its denominator and evidence. Suggested non-authoritative estimate: verified acceptance checks ÷ total acceptance checks, rounded to nearest 5%, with a confidence label. If the acceptance set is not stable or evidence is missing, show `NOT ASSESSED`.
8. Do not mark DONE because code exists, a PR merged, a build passed or a document says complete. Follow `docs/governance/VERIFICATION.md` and attach the evidence appropriate to the workflow.
9. Update this reference and `docs/registry.json` in the same documentation change when metadata or source relationships materially change. Update Task Authority only through its governed mutation path.
10. Preserve older progress entries, decisions, conflicts and superseded links. Do not delete donor branches, conversations or documents as part of updating this reference.

## 4. Standard dossier fields used by every initiative

Every numbered initiative below uses the following record structure. The first five sections are the user's requested core sections; the ten additional sections make each dossier executable, reviewable and operational:

**Core sections:** (1) start/continue/complete prompt; (2) related files, code, folders, documents, conversations, branches and PRs; (3) progress log; (4) skills, workflows, developer tools, plugins and useful external repositories; (5) important knowledge links.

**Ten additional sections:**
1. Scope and explicit non-goals.
2. Canonical owner, capability ID and data/API contracts.
3. Dependencies, predecessor work and critical path.
4. Observable acceptance criteria and definition of done.
5. Verification matrix and evidence required.
6. Security, privacy, compliance, API scopes and quotas.
7. Risks, assumptions and unresolved constraints.
8. Decisions, alternatives and open questions.
9. Operational readiness, monitoring and recovery.
10. Next action, handoff and responsible workstream.

**Progress record fields:** date; source/branch/commit; change or discovery; evidence; tests/runtime; bugs/blockers; decision; next action; contributor/owner if explicitly known.

**Conversation references:** use exact conversation title and date when available. Add a ChatGPT conversation URL only when the actual URL is available; never fabricate one. The initial reference includes conversation titles/dates in the global intake log where known, and per-entry conversation inventories remain open until audited.

**Repository references:** file/folder paths below are verified to exist on the observed integration branch unless explicitly labelled `search target`. Branch/PR links are verified snapshots, not proof of merged functionality. External docs are starting references; verify current endpoint availability, scopes, terms and versions when executing.

## 5. The 40 beta-launch initiatives

### 1. Google Cloud infrastructure and production environment

**Priority:** P0 — foundation  
**Canonical owner / capability:** Platform / Infrastructure; one canonical deployment and secrets owner; Cross-cutting infrastructure; map to existing platform authority before task promotion.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Inspect the exact integration-branch deployment and runtime configuration, then finish the minimum secure Google Cloud and hosting foundation required by the accepted beta journeys. Reuse existing cloud projects, service adapters, environment conventions, and deployment providers; document every required API, secret, quota, domain, environment, health check, and rollback path. Do not create a second cloud configuration or commit credentials.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/deployment/VIEWTUBE_DEPLOYMENT_RELEASE_MASTER_RESOURCE.md`; `docs/architecture/PRODUCT_ARCHITECTURE.md`; `AGENTS.md`; `.env.billing.example`; `vercel.json` / `render.yaml` if present.
- **Code / folders:** Repository root deployment manifests; `.github/workflows/`; `server/`; existing provider/configuration modules; search `GOOGLE_`, `GCP_`, `CLOUD_`, `STORAGE_`, `RENDER`, `VERCEL`.
- **Known PRs:** #1201 (Render startup fallback; inspect scope).
- **Known branches:** `fix/render-production-no-database-fallback` (PR #1201).
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube Document System; repository understanding; technical research; code review; secure-code; GitHub connector. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google Cloud documentation](https://cloud.google.com/docs); [Google Cloud IAM](https://cloud.google.com/iam/docs); [Secret Manager](https://cloud.google.com/secret-manager/docs); [Vercel docs](https://vercel.com/docs); [Render docs](https://render.com/docs).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Do not assume a Google Cloud project or billing account is configured. Never paste secret values into docs, issues, logs or prompts. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Platform / Infrastructure; one canonical deployment and secrets owner. Cross-cutting infrastructure; map to existing platform authority before task promotion. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Account identity, OAuth, database, storage, provider credentials, deployment runtime. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Staging and production configurations are reproducible; secrets stay server-side; required APIs are enabled; health checks, quotas, alerts, backups and rollback are documented and tested.

#### J. Verification matrix and evidence required

Environment contract checks; secret scan; deployment build/start; health endpoint; staging smoke test; rollback rehearsal. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Do not assume a Google Cloud project or billing account is configured. Never paste secret values into docs, issues, logs or prompts. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which cloud services are actually selected for compute, database, object storage, queues and secrets? Are there existing project IDs and approved domains?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Document service owner, alert routing, budget/quota thresholds, backup cadence and incident runbook.

#### O. Next action and handoff

Inventory current deploy manifests and environment-variable references; compare staging/production drift. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 2. Google login, OAuth authorization, scopes and account linking

**Priority:** P0 — foundation  
**Canonical owner / capability:** Auth Canon / Account Identity; Account identity and YouTube authorization; resolve canonical owner in capability registry.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace the current Google sign-in and YouTube OAuth flows end to end. Consolidate on the canonical Auth Canon contract; complete secure callback/state validation, session restoration, token encryption/refresh/revocation, incremental scope consent, account linking and failure recovery. Keep login scopes separate from optional YouTube scopes and verify every protected action against the connected account.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/SIMPLE_AUTH_V1.md`; `docs/architecture/YOUTUBE_AUTH_API_SIMPLIFICATION_PLAN.md`; `docs/architecture/VIEWTUBE_AUTH_API_STABILIZATION_REFERENCE.md`; `src/services/auth-canon/README.md`.
- **Code / folders:** `src/services/auth-canon/`; `src/services/auth/`; `server/account-auth.mjs`; `server/simple-auth-route.mjs`; `src/services/youtube/`.
- **Known PRs:** #1193 auth/provider-boundary audit; #1217 Gemini key persistence is adjacent credential governance; inspect exact diffs.
- **Known branches:** `audit/brain-public-provider-boundaries-2026-10-30`; auth-related branches discovered by current PR/branch search still require complete census.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; secure-code; repository understanding; TDD; GitHub connector. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2); [Google Identity Services](https://developers.google.com/identity/gsi/web); [OAuth 2.0 Security BCP](https://datatracker.ietf.org/doc/html/rfc9700).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Google verification and sensitive/restricted-scope rules; account takeover; token leakage; consent fatigue. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Auth Canon / Account Identity. Account identity and YouTube authorization; resolve canonical owner in capability registry. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Google Cloud project, canonical user/account model, session persistence, API scope registry. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

New user can sign in, restore session, connect/disconnect a YouTube channel, refresh or revoke authorization, and receive accurate permission-denied states without leaking tokens.

#### J. Verification matrix and evidence required

OAuth state/CSRF tests; refresh/expiry/revocation tests; multi-account isolation; authenticated staging flow; scope review. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Google verification and sensitive/restricted-scope rules; account takeover; token leakage; consent fatigue. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which exact Google scopes are required for beta read, analytics, upload, comment and channel operations? Which require verification or restricted-scope assessment?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Record OAuth client IDs by environment (never secrets), consent screen state, authorized origins/redirects, verification status and token incident procedure.

#### O. Next action and handoff

Map every sign-in, callback, session and YouTube consent route to Auth Canon. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 3. Canonical account, user identity and creator profile backend

**Priority:** P0 — foundation  
**Canonical owner / capability:** Auth Canon + Creator Context & Knowledge; `CAP-CREATOR-CONTEXT`; account identity is a prerequisite contract.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace user, account, creator, connected Google identity and YouTube channel records across the repository. Define and preserve one canonical identity graph; migrate or adapt consumers without creating parallel user tables. Verify account ownership, multi-channel association, profile edits, data export/deletion and recovery.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/capabilities/creator-context.md`; `docs/domains/BRAIN.md`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`.
- **Code / folders:** `server/account-schema.sql`; `server/account-store.mjs`; `server/account-auth.mjs`; `src/services/auth-canon/`; creator context resolver and profile consumers.
- **Known PRs:** #1193 (provider/account boundary audit); #1276 (account entitlements and usage foundation; inspect identity linkage).
- **Known branches:** `feat/account-entitlement-usage-foundation-2026-11-15`; `audit/brain-public-provider-boundaries-2026-10-30`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; repository understanding; domain modeling; secure-code; code review. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/); [Google user data policy](https://developers.google.com/terms/api-services-user-data-policy).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Duplicate identities, stale profile copies, account/channel confusion, destructive deletion side effects. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Auth Canon + Creator Context & Knowledge. `CAP-CREATOR-CONTEXT`; account identity is a prerequisite contract. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

OAuth, persistence, account authorization, Creator Context. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

All domains resolve the same account/user identity; a creator can manage multiple channels without identity collisions; cross-account reads/writes fail closed.

#### J. Verification matrix and evidence required

Identity contract tests; tenant-isolation tests; account lifecycle tests; migration tests; authenticated end-to-end flows. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Duplicate identities, stale profile copies, account/channel confusion, destructive deletion side effects. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which user/account schema and IDs are canonical on this branch? Is creator profile persisted separately from channel profile?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Maintain account recovery, export/delete audit, data retention and support lookup procedures.

#### O. Next action and handoff

Map schema, identity resolver, all account consumers and duplicate-profile stores. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 4. Database, persistence, migrations and backend consolidation

**Priority:** P0 — foundation  
**Canonical owner / capability:** Backend platform + individual domain authorities; Cross-cutting; no new database owner without architecture decision.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Inventory every persistence adapter, schema, migration, fallback store and data owner used by the 40 initiatives. Establish the real production database path and reconcile drift, idempotency, backup/restore and migration ordering. Preserve domain ownership and consolidate adapters rather than flattening every domain into one model.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`; `docs/governance/WORK_OBJECTS.md`; `docs/governance/VERIFICATION.md`.
- **Code / folders:** `server/*schema.sql`; `server/*store*.mjs`; repository/migration folders; `src/services/asset-engine/`; `src/services/analytics-canon/`; account and billing stores.
- **Known PRs:** #1201 (Render production no-database fallback); #1276 (account/entitlement persistence).
- **Known branches:** `fix/render-production-no-database-fallback`; `feat/account-entitlement-usage-foundation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; repository understanding; database/data-quality analysis; TDD; secure-code. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[PostgreSQL docs](https://www.postgresql.org/docs/); [Prisma docs](https://www.prisma.io/docs) (only if Prisma is actually used); [OWASP database security](https://cheatsheetseries.owasp.org/).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Legacy fallbacks may mask production data loss; schema changes can break donor branches; avoid claiming persistence from localStorage alone. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Backend platform + individual domain authorities. Cross-cutting; no new database owner without architecture decision. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Account identity, domain schemas, storage, background jobs. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

All critical beta records persist across sessions/restarts; migrations are ordered and repeatable; backups restore; no hidden in-memory-only production dependency remains.

#### J. Verification matrix and evidence required

Migration dry-run; schema validation; persistence/reload; backup restore; concurrency/idempotency; production-like DB integration. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Legacy fallbacks may mask production data loss; schema changes can break donor branches; avoid claiming persistence from localStorage alone. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

What database is canonical in production today, and which stores are still local-only or fallback-only?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Document backup RPO/RTO, migration rollback/forward strategy, retention, data repair and incident owner.

#### O. Next action and handoff

Produce a persistence ownership map and classify each store as canonical, adapter, projection, local draft or legacy. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 5. YouTube Data API, Analytics API and channel connection foundation

**Priority:** P0 — foundation  
**Canonical owner / capability:** YouTube provider adapter + VT-SYNC / analytics-canon; `CAP-ANALYTICS-CANON`, `CAP-PUBLISH`, `CAP-CREATOR-CONTEXT`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Audit every YouTube client, proxy, OAuth scope and endpoint already present. Consolidate a single authenticated provider adapter with typed read/write contracts, quota accounting, pagination, retries, freshness and permission-aware channel selection. Prioritize the beta vertical slice: connect channel, retrieve channel/video metadata, retrieve authorized analytics and publish through the same account context.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/analytics/VIEWTUBE_ANALYTICS_VT_SYNC_MASTER_RESOURCE.md`; `docs/architecture/YOUTUBE_API_STABILIZATION_V1_TRACKER.md`; `docs/architecture/YOUTUBE_AUTH_API_SIMPLIFICATION_PLAN.md`; `docs/capabilities/analytics-canon.md`; `docs/capabilities/publish.md`.
- **Code / folders:** `src/services/youtube/`; `src/services/analytics-canon/`; `src/services/youtube/apiCapabilityRegistry.ts`; Google proxy transports and channel adapters.
- **Known PRs:** #1193 auth/provider audit; #1241 Brain Gemini context is adjacent, not YouTube API proof; search all YouTube-related PRs before coding.
- **Known branches:** `brain/canonical-analytics-consumers-2026-10-17`; `audit/brain-public-provider-boundaries-2026-10-30`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; technical research; repository understanding; secure-code; TDD. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Data API v3](https://developers.google.com/youtube/v3); [YouTube Analytics API](https://developers.google.com/youtube/analytics); [YouTube API quota calculator](https://developers.google.com/youtube/v3/determine_quota_cost).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. API quota, restricted scopes, policy compliance, private metric availability and endpoint deprecations. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

YouTube provider adapter + VT-SYNC / analytics-canon. `CAP-ANALYTICS-CANON`, `CAP-PUBLISH`, `CAP-CREATOR-CONTEXT`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

OAuth, Google Cloud API enablement, account/channel identity, quota and sync infrastructure. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Connected channel operations share one provider identity; API errors/scopes/quotas are handled truthfully; no fake private analytics or unauthorized writes.

#### J. Verification matrix and evidence required

API contract tests; authenticated staging read; pagination; quota/error/retry tests; channel switching and permission denial. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

API quota, restricted scopes, policy compliance, private metric availability and endpoint deprecations. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which YouTube API operations are currently available through the app proxy versus direct client code? What scopes are already approved?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Maintain endpoint/scope/ quota registry, provider health and deprecation review.

#### O. Next action and handoff

Generate endpoint-to-caller inventory from `src/services/youtube/` and server routes. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 6. VT-SYNC, analytics ingestion and canonical data synchronization

**Priority:** P0 — foundation  
**Canonical owner / capability:** VT-SYNC + analytics-canon; `CAP-ANALYTICS-CANON`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace VT-SYNC from authenticated source through fetch, normalize, persist, checkpoint and downstream consumer. Finish reliable initial and incremental synchronization with correct date windows, idempotency, missingness, retries and freshness. Ensure Brain, analytics dashboards and reports consume canonical records instead of independent fetch pipelines.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/analytics/VIEWTUBE_ANALYTICS_VT_SYNC_MASTER_RESOURCE.md`; `docs/analytics/YOUTUBE_ANALYTICS_DATASET_EXPANSION_PLAN.md`; `docs/capabilities/analytics-canon.md`; `src/services/analytics-canon/README.md`.
- **Code / folders:** `src/services/analytics-canon/`; `src/services/youtube/coreLifetimeSync.ts`; `src/services/youtube/analyticsReportMatrix.ts`; `src/services/analytics/`.
- **Known PRs:** #1241 (context provenance consumer); #1253 (Brain evidence/context reconciliation; inspect consumer links).
- **Known branches:** `brain/canonical-analytics-consumers-2026-10-17`; `audit/ai-brain-consolidation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Data quality; data product analysis; repository understanding; TDD; ViewTube convergence governance. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Analytics API](https://developers.google.com/youtube/analytics); [Google API errors](https://cloud.google.com/apis/design/errors).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Historical backfill limitations, quota starvation, delayed data, timezone/window mismatch. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

VT-SYNC + analytics-canon. `CAP-ANALYTICS-CANON`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

YouTube provider, account/channel identity, canonical DB, job queue. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

First sync and incremental sync complete repeatably; checkpoints survive restarts; duplicate events are idempotent; missing data is not coerced to zero.

#### J. Verification matrix and evidence required

Fixture-backed ingestion; replay/idempotency; freshness/window checks; sync failure/retry; row-level reconciliation. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Historical backfill limitations, quota starvation, delayed data, timezone/window mismatch. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

What dataset coverage and refresh schedule are currently implemented? Which metrics are private, public or unavailable?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Sync lag, failure alerts, checkpoint repair, quota budget and reprocessing runbook.

#### O. Next action and handoff

Audit all ingestion jobs and analytics tables against `analytics-canon` contracts. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 7. YouTube MCP/tool registry and channel operations

**Priority:** P0 — foundation  
**Canonical owner / capability:** Creator Operations + YouTube provider adapters; `CAP-CREATOR-OPERATIONS`, `CAP-PUBLISH`, `CAP-BRAIN-EXPERIENCE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Inventory all existing YouTube MCP tools and app capability registrations, then map each to official API support, OAuth scopes, account entitlement, input schema, side-effect class and evidence receipt. Complete missing eligible tools by extending the current registry; never create a second MCP server or imply unsupported YouTube features are available.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/creator-operations.md`; `docs/capabilities/publish.md`; `docs/architecture/capabilities.json`; `docs/architecture/PRODUCT_ARCHITECTURE.md`.
- **Code / folders:** `src/services/youtube/apiCapabilityRegistry.ts`; Brain tool registry/runtime; `src/services/youtube/`; server API routes.
- **Known PRs:** #1211 Brain capability runtime audit; #1220 operation identity propagation; #1206 publish recovery.
- **Known branches:** `audit/brain-capability-runtime-verification-2026-10-30`; `feat/brain-operation-identity-propagation-20261030`; `publish-ambiguous-outcome-recovery`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; secure-code; API research; code review; TDD. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Data API](https://developers.google.com/youtube/v3); [MCP specification](https://modelcontextprotocol.io/specification); [Google API design guide](https://cloud.google.com/apis/design).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. External side effects, quota, API limitations, unsafe agent actions and duplicate tool definitions. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Creator Operations + YouTube provider adapters. `CAP-CREATOR-OPERATIONS`, `CAP-PUBLISH`, `CAP-BRAIN-EXPERIENCE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

OAuth scopes, canonical provider, BrainRuntime, entitlements, operation receipts. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Every exposed tool has validated schema, scope/entitlement enforcement, canonical provider execution, audit receipt and accurate unsupported/error state.

#### J. Verification matrix and evidence required

Tool schema tests; permissions; idempotent side effects; provider contract tests; tool invocation runtime traces. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

External side effects, quota, API limitations, unsafe agent actions and duplicate tool definitions. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which operations are first-party MCP, app-specific tools or simple REST wrappers? Which are write-capable?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Maintain tool catalog with owner, API mapping, scope, quota cost, side-effect tier and deprecation status.

#### O. Next action and handoff

Build a machine-readable inventory of all YouTube tools and map them to `apiCapabilityRegistry`. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 8. Security, authorization, tenant isolation and audit controls

**Priority:** P0 — foundation  
**Canonical owner / capability:** Security + Auth Canon + domain owners; Cross-cutting release requirement.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Threat-model the beta creator journey and audit every account-scoped read, write, tool call, asset URL, background job and payment action. Centralize server-side authorization, tenant isolation, token/secret handling, rate limits, validation and audit events. Fix high-risk gaps with regression tests before public access.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/governance/VERIFICATION.md`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`; `docs/architecture/SIMPLE_AUTH_V1.md`; `docs/governance/DOCUMENTATION.md`.
- **Code / folders:** `server/account-auth.mjs`; `server/simple-auth-route.mjs`; `src/services/auth-canon/`; API routes; storage signed URL services; billing and job handlers.
- **Known PRs:** #1193; #1206; #1276 (inspect exact security changes).
- **Known branches:** `audit/brain-public-provider-boundaries-2026-10-30`; `feat/account-entitlement-usage-foundation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

secure-code; systematic debugging; code review; TDD; ViewTube document system. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/); [OWASP API Security Top 10](https://owasp.org/www-project-api-security/); [OAuth Security BCP](https://datatracker.ietf.org/doc/html/rfc9700).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Account compromise, insecure direct object references, token leakage, prompt/tool injection and payment abuse. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Security + Auth Canon + domain owners. Cross-cutting release requirement. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Auth, canonical account IDs, provider scopes, billing entitlements, asset permissions. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

No cross-account access; all protected endpoints enforce server-side policy; tokens are never exposed; high-risk actions are logged and recoverable.

#### J. Verification matrix and evidence required

Tenant-isolation matrix; auth bypass tests; secret scanning; signed URL expiry; webhook signature tests; rate-limit tests. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Account compromise, insecure direct object references, token leakage, prompt/tool injection and payment abuse. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which routes still rely on frontend checks or local identity? Are security headers and CSP configured?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Security incident response, credential rotation, audit retention, abuse monitoring and vulnerability disclosure.

#### O. Next action and handoff

Run an endpoint/resource authorization census and prioritize P0 findings. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 9. Production deployment, runtime health and release operations

**Priority:** P0 — foundation  
**Canonical owner / capability:** Platform / Release Engineering; Release infrastructure; cross-cutting.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Verify the exact branch builds, starts, serves API routes, connects to the production-like database and survives restarts. Reconcile scripts, runtime versions, host allowlists, environment variables, preview/production differences, health checks and rollback. Resolve known startup failures based on observed logs, not assumptions.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/deployment/VIEWTUBE_DEPLOYMENT_RELEASE_MASTER_RESOURCE.md`; `AGENTS.md`; `docs/governance/VERIFICATION.md`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`.
- **Code / folders:** `package.json`; `render.yaml`; `vercel.json`; `.github/workflows/`; `server/`; `src/server/`; `scripts/`.
- **Known PRs:** #1201 (Render startup fallback); #208 (integration branch PR to main; current branch baseline).
- **Known branches:** `fix/render-production-no-database-fallback`; `master/consolidated-feature-integration`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Vercel deployment/CI skill; repository understanding; verification-before-completion; incident triage. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[GitHub Actions](https://docs.github.com/actions); [Vercel deployments](https://vercel.com/docs/deployments); [Render deploys](https://render.com/docs/deploys).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Build-success/runtime-failure gap; stale environment; wrong start script; missing allowed host; hidden fallback mode. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Platform / Release Engineering. Release infrastructure; cross-cutting. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Cloud environment, database, secrets, health endpoints, release gates. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Production deploy is reproducible; service starts with correct command; health and critical API smoke tests pass; rollback is proven.

#### J. Verification matrix and evidence required

Lockfile install; typecheck; test/build; start command; HTTP smoke; database check; preview/staging browser checks. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Build-success/runtime-failure gap; stale environment; wrong start script; missing allowed host; hidden fallback mode. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which host is authoritative for beta (Render, Vercel or split)? What is current production deployment SHA?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Release runbook, deployment alert, rollback, migration ordering, maintenance window and incident owner.

#### O. Next action and handoff

Run current target SHA through deployment verification and record logs/URLs. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 10. Onboarding, initial dashboard and connected creator workspace

**Priority:** P0 — foundation  
**Canonical owner / capability:** Product surfaces over canonical account and creator capabilities; `CAP-CREATOR-CONTEXT` plus dashboard/workspace capabilities.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace signup through first authenticated dashboard and first YouTube connection. Complete a concise guided onboarding that establishes account, channel, data-sync status and first useful creator action. Reuse existing dashboard and workspace surfaces; do not add another onboarding database or duplicate channel context.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/programs/INTEGRATED_APPLICATION.md`; `docs/capabilities/creator-context.md`; `docs/user-guide-v2/VIEWTUBE_USER_GUIDE_V2_MASTER_RESOURCE.md`.
- **Code / folders:** Dashboard routes/components; onboarding routes; `src/services/auth-canon/`; creator context resolver; feature entitlement surfaces.
- **Known PRs:** #1193 auth/settings audit; #1211 Brain capability audit (adjacent onboarding/tool access).
- **Known branches:** `audit/brain-public-provider-boundaries-2026-10-30`; inspect current dashboard branches and PRs before editing.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube UI coverage audit; product-design audit (installed); repository understanding; accessibility. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google Identity Services](https://developers.google.com/identity/gsi/web); [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Confusing login and channel connection; overlong onboarding; stale/fake dashboard values. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Product surfaces over canonical account and creator capabilities. `CAP-CREATOR-CONTEXT` plus dashboard/workspace capabilities. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Auth, channel OAuth, sync status, entitlement, responsive design system. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

A new creator can sign up, connect a channel, understand sync/permissions and reach a first meaningful workflow on mobile and desktop.

#### J. Verification matrix and evidence required

New-user E2E; disconnected/empty/error states; mobile portrait/landscape; keyboard/accessibility; persisted onboarding state. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Confusing login and channel connection; overlong onboarding; stale/fake dashboard values. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which dashboard is the beta landing page and which onboarding state is already persisted?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Track activation funnel, onboarding failure reasons and support entry points.

#### O. Next action and handoff

Capture the existing signup-to-dashboard path and list the missing user-visible states. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 11. Unified AI Brain runtime and creator-facing experience

**Priority:** P1 — creator intelligence  
**Canonical owner / capability:** Brain Runtime; `CAP-BRAIN-EXPERIENCE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Reconcile current BrainRuntime, BrainModelGateway, tool registry, chat history, creator context and UI surfaces against `docs/domains/BRAIN.md`. Finish the existing runtime path and remove only proven duplicate routes after parity. Do not introduce a second BrainRuntime, orchestrator, context broker or evidence store.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/domains/BRAIN.md`; `docs/brain/AI_BRAIN_MASTER_RESOURCE.md`; `docs/brain/VIEWTUBE_AI_SYSTEMS_MASTER_RESOURCE.md`; `docs/capabilities/brain-experience.md`; `docs/architecture/VIEWTUBE_AI_BRAIN_CONSOLIDATED_FEATURE_MASTER_AND_IMPLEMENTATION_READINESS.md`.
- **Code / folders:** `src/services/brain/`; BrainRuntime/BrainModelGateway call sites; chat route and conversation persistence; tool registry.
- **Known PRs:** #1253 Brain evidence/context docs; #1256 learning evidence; #1241 context provenance (open at snapshot); #1211 runtime verification.
- **Known branches:** `audit/ai-brain-consolidation-2026-11-14`; `audit/ai-brain-consolidation-2026-11-15`; `codex/brain-context-gate-and-evidence-explorer-2026-11-14`; `fix/brain-gemini-context-grounding-phases-2-5-rebased`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube Ideas Curator; ViewTube convergence governance; AI engineering; harden LLM integration; TDD; code review. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Gemini API](https://ai.google.dev/gemini-api/docs); [MCP specification](https://modelcontextprotocol.io/specification).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Duplicate orchestration, stale context, unsupported claims, long-task UI freezes, unsafe tool invocation. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Brain Runtime. `CAP-BRAIN-EXPERIENCE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Auth, Gemini gateway, creator context, evidence, capabilities, conversation persistence. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Brain can answer creator questions using permitted context, invoke authorized tools, preserve conversations and expose honest missing/disconnected/error states.

#### J. Verification matrix and evidence required

Golden conversations; context fixtures; tool-call traces; streaming/error recovery; mobile runtime and authenticated end-to-end. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Duplicate orchestration, stale context, unsupported claims, long-task UI freezes, unsafe tool invocation. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which runtime and experience contracts are authoritative on this branch? Which legacy provider callsites remain reachable?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Model latency/cost, tool failures, context freshness, conversation error rates and prompt/version rollback.

#### O. Next action and handoff

Read Brain domain authority and latest 2026-11-14/15 audit branches; reconcile all changes into a single code map. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 12. Evidence, provenance, freshness and claim-grounding system

**Priority:** P1 — creator intelligence  
**Canonical owner / capability:** Evidence & Intelligence; analytics-canon remains analytics truth; `CAP-EVIDENCE-INTELLIGENCE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace evidence creation, normalization, retrieval, context injection and claim rendering. Finish one evidence contract with source, timestamp, scope, freshness, missingness, confidence and lineage, then ensure Brain and specialists cite only evidence actually available. Preserve the distinction between measured facts, deterministic signals and model interpretation.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/evidence-intelligence.md`; `docs/brain/EVIDENCE_UNIFICATION_PLAN.md`; `docs/brain/BRAIN_GEMINI_CONTEXT_GROUNDING_AUDIT_AND_FIX_PLAN.md`; `tasks/system-convergence/EVIDENCE-RECORD-DERIVED-SIGNAL-CONTRACT.md`.
- **Code / folders:** `src/services/analytics-canon/intelligenceEvidence.ts`; `src/services/asset-engine/EvidenceLineageDiagnostics.ts`; `src/services/brain/`; evidence contracts and adapters.
- **Known PRs:** #1254 evidence validation; #1256 canonical evidence resolution; #1241 context provenance; #1253 documentation reconciliation.
- **Known branches:** `feat/brain-learning-evidence-validation-phase-2b-2026-11-11`; `feat/brain-learning-canonical-evidence-resolution-phase-2c-2026-11-11`; `codex/brain-context-gate-and-evidence-explorer-2026-11-14`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube Ideas Curator; data quality; AI engineering; research; TDD; code review. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Gemini grounding concepts](https://ai.google.dev/gemini-api/docs/grounding); [YouTube Analytics API](https://developers.google.com/youtube/analytics).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. False certainty, public/private source conflation, stale evidence, duplicate evidence stores. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Evidence & Intelligence; analytics-canon remains analytics truth. `CAP-EVIDENCE-INTELLIGENCE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Analytics canon, creator context, channel profile, source connectors, Brain runtime. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Every material claim can be traced to permitted source evidence or explicitly labelled inference; stale/missing/contradictory evidence is surfaced.

#### J. Verification matrix and evidence required

Evidence contract tests; freshness tests; source identity tests; claim-evidence golden tests; privacy scope tests. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

False certainty, public/private source conflation, stale evidence, duplicate evidence stores. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Is `EvidenceRecord` canonical and are all consumers migrated? Which public-handle resolver rules apply to logged-out users?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Evidence freshness monitoring, source failure alerts, provenance retention and correction workflows.

#### O. Next action and handoff

Compare current EvidenceRecord contract with latest branch diffs and enumerate all consumers. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 13. Channel profile and channel intelligence

**Priority:** P1 — creator intelligence  
**Canonical owner / capability:** Creator Context & Knowledge + Channel Intelligence specialist; `CAP-CREATOR-CONTEXT`; evidence consumed from `CAP-EVIDENCE-INTELLIGENCE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Complete the canonical channel profile by combining authorized YouTube metadata, canonical analytics, public channel observations and validated creator-entered facts. Keep channel identity separate from creator identity; attach provenance/freshness to each field and support refresh, multiple channels and public-only mode.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/creator-context.md`; `docs/brain/AI_BRAIN_MASTER_RESOURCE.md`; `docs/analytics/VIEWTUBE_ANALYTICS_VT_SYNC_MASTER_RESOURCE.md`; `docs/architecture/PRODUCT_ARCHITECTURE.md`.
- **Code / folders:** ChannelProfile adapters/resolvers; `src/services/youtube/`; `src/services/analytics-canon/`; `src/services/brain/` channel intelligence modules.
- **Known PRs:** #1253; #1241; #1211 (related Brain/context evidence work; exact profile PRs need discovery).
- **Known branches:** `brain/canonical-analytics-consumers-2026-10-17`; `audit/ai-brain-consolidation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; AI engineering; data quality; technical research. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Channels API](https://developers.google.com/youtube/v3/docs/channels/list); [YouTube Analytics API](https://developers.google.com/youtube/analytics).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Confusing creator and channel; unsupported subscriber/audience metrics; channel switching leakage. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Creator Context & Knowledge + Channel Intelligence specialist. `CAP-CREATOR-CONTEXT`; evidence consumed from `CAP-EVIDENCE-INTELLIGENCE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

OAuth/channel ID, analytics canon, evidence, creator context resolver. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Each connected channel has one profile with field-level source and freshness; public-only mode never fabricates private metrics.

#### J. Verification matrix and evidence required

Multi-channel fixtures; refresh/TTL; public/private scope; stale/missing field behavior; Brain context integration. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Confusing creator and channel; unsupported subscriber/audience metrics; channel switching leakage. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which profile fields are API-authorized, public-only, creator-entered or model-derived?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Refresh schedules, failed resolver retry, source freshness display and manual correction.

#### O. Next action and handoff

Inventory channel profile schema/adapters and compare public-handle resolver behavior. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 14. Creator profile, preferences, voice and persistent creator context

**Priority:** P1 — creator intelligence  
**Canonical owner / capability:** Creator Context & Knowledge; `CAP-CREATOR-CONTEXT`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Unify creator profile, goals, preferences, content style, audience, constraints and authored examples behind the canonical Creator Context resolver. Separate creator-entered facts from inferred claims; make edits reviewable, scoped and persistent, and ensure all tools receive the same resolved context.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/creator-context.md`; `docs/domains/BRAIN.md`; `tasks/system-convergence/CREATOR-CONTEXT-REACHABILITY.md`; `docs/architecture/VIEWTUBE_SYSTEM_CONVERGENCE_AND_CONSOLIDATION.md`.
- **Code / folders:** CreatorContextResolver and adapters; profile/settings persistence; `src/services/brain/`; account schema and context consumers.
- **Known PRs:** #1253; #1241; #1211 (context coverage and runtime evidence).
- **Known branches:** `codex/brain-context-gate-and-evidence-explorer-2026-11-14`; `audit/ai-brain-consolidation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; AI engineering; privacy/security review; repository understanding. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google user data policy](https://developers.google.com/terms/api-services-user-data-policy); [OWASP privacy guidance](https://owasp.org/www-project-top-10-privacy-risks/).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Unwanted profiling, hidden inferred memory, cross-channel contamination, unreviewed automatic learning. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Creator Context & Knowledge. `CAP-CREATOR-CONTEXT`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Account identity, channel profile, consent/personalization controls, Brain runtime. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Creator can inspect/edit preferences and goals; context resolves consistently across surfaces; inferred data is distinguishable and deletable.

#### J. Verification matrix and evidence required

Context resolution fixtures; preference persistence; multi-channel account tests; consent and deletion tests. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Unwanted profiling, hidden inferred memory, cross-channel contamination, unreviewed automatic learning. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

What is creator-owned versus system-inferred, and which fields can be edited or opted out?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Context refresh/version history, consent changes, profile export and deletion procedures.

#### O. Next action and handoff

Map profile tables and resolver inputs/consumers; identify any duplicate creator context stores. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 15. Opportunity Radar, topic research and content-gap intelligence

**Priority:** P1 — creator intelligence  
**Canonical owner / capability:** Opportunity Intelligence specialist over Evidence & Intelligence; `CAP-EVIDENCE-INTELLIGENCE`; possible new capability only after registry review.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Audit existing topic research, keyword, competitor, search and opportunity modules. Consolidate evidence inputs and scoring into the existing specialist; add transparent opportunity records with source, freshness, audience fit, effort and uncertainty, plus save/compare/convert-to-project actions.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/research/VIEWTUBE_75_PRODUCT_COMPETITIVE_AND_INTEGRATION_PROPOSALS.md`; `docs/references/DEEP_RESEARCH_CONSTRUCTION_SOURCE.md`; `docs/architecture/PRODUCT_ARCHITECTURE.md`; `ideas/MASTER_IDEAS.md`.
- **Code / folders:** `src/services/brain/` opportunity/channel intelligence; research provider adapters; Studio tool prompts in `docs/plans/studio-hub-tool-prompts/01-opportunity-radar.md`.
- **Known PRs:** No specific merged PR verified for the complete Opportunity Radar; search PRs and active branches before implementation.
- **Known branches:** Opportunity Radar / channel intelligence branches require targeted branch census.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube Ideas Curator; Codelit Product Plan; technical research; agent.spot for tool discovery; vidIQ research tools where connected. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Data API search](https://developers.google.com/youtube/v3/docs/search/list); [Google Trends](https://trends.google.com/); [vidIQ](https://vidiq.com/).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Search-provider licensing, scraped data terms, misleading demand estimates, biased scoring. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Opportunity Intelligence specialist over Evidence & Intelligence. `CAP-EVIDENCE-INTELLIGENCE`; possible new capability only after registry review. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Channel profile, public research sources, evidence, creator goals, project creation. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Opportunity includes traceable sources, creator/channel fit, clear uncertainty and an actionable project handoff.

#### J. Verification matrix and evidence required

Source validity/freshness; duplicate candidate; scoring fixture; handoff persistence; no-guarantee wording. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Search-provider licensing, scraped data terms, misleading demand estimates, biased scoring. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which research providers are approved and which features rely on public data versus private analytics?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Provider quotas/costs, source expiry, scoring version and opportunity feedback loop.

#### O. Next action and handoff

Search existing Opportunity Radar code, tool prompt and PR history; classify extend/combine/create. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 16. Research-to-script, outlines, storyboards and ContentBuild handoff

**Priority:** P1 — creator intelligence  
**Canonical owner / capability:** Script & Story Studio over ContentBuild + Brain; `CAP-PROJECT-CONTENT-IDENTITY`, `CAP-CREATOR-OPERATIONS`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Connect source-backed research to outline, script, scenes and storyboard artifacts inside the canonical ContentBuild. Use BrainRuntime and the shared Gemini gateway; preserve creator voice and prompt/model/source provenance. Ensure the script can be revised, saved, reopened and handed to Editor without copying into a second project store.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/VIEWTUBE_PROJECTS_CONTENTBUILD_WORKFLOW_MASTER_RESOURCE.md`; `docs/architecture/VIEWTUBE_PROJECT_GENERATION_PROMPTS_BRAIN_INTEGRATION_PLAN_2026-10-13.md`; `docs/plans/VIEWTUBE_AI_PROMPT_MIGRATION_AND_QUALITY_GOVERNANCE_PLAN_2026-10-29.md`.
- **Code / folders:** Project/ContentBuild services; `src/services/brain/`; prompt registry; script/storyboard components; operation and asset lineage.
- **Known PRs:** #1198 (Gemini governed callers); #1220 (operation identity); #1188 (retry-safe generation receipts).
- **Known branches:** `feat/p1-gemini-governed-callers-final-2026-10-30`; `feat/brain-operation-identity-propagation-20261030`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

AI engineering; harden LLM integration; TDD; ViewTube convergence governance; technical research. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Gemini API](https://ai.google.dev/gemini-api/docs); [Remotion](https://www.remotion.dev/docs).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Uncited claims, creator voice drift, duplicate generation charges, unsaved drafts. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Script & Story Studio over ContentBuild + Brain. `CAP-PROJECT-CONTENT-IDENTITY`, `CAP-CREATOR-OPERATIONS`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Research/evidence, creator context, Gemini gateway, credits, Project/ContentBuild. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Research-to-script produces durable ContentBuild artifacts with revision history, provenance and Editor handoff.

#### J. Verification matrix and evidence required

Generate/edit/save/reopen; prompt-version trace; interrupted retry; credit settlement; project identity continuity. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Uncited claims, creator voice drift, duplicate generation charges, unsaved drafts. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which script/storyboard model is canonical and which prompt families remain direct legacy Gemini calls?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Generation cost/latency, prompt rollback, failed-job retry and creator feedback.

#### O. Next action and handoff

Trace one complete research-to-script-to-ContentBuild path and list missing persistence/identity seams. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 17. Analytics dashboards, reports, exports and metric coverage

**Priority:** P1 — creator intelligence  
**Canonical owner / capability:** VT-SYNC + analytics-canon; UI consumes canonical analytics; `CAP-ANALYTICS-CANON`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Audit the analytics metric catalog, query windows, dimensions, coverage and dashboards. Finish the beta reporting set using only supported YouTube metrics; document metric definitions, freshness, missingness, comparability and export semantics. Ensure dashboards and AI use the same canonical source.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/analytics/VIEWTUBE_ANALYTICS_VT_SYNC_MASTER_RESOURCE.md`; `docs/analytics/ANALYTICS_INTELLIGENCE_HUB_DETERMINISTIC_EVIDENCE_MASTER_PLAN_2026-10-15.md`; `docs/analytics/YOUTUBE_ANALYTICS_DATASET_EXPANSION_PLAN.md`; `docs/capabilities/analytics-canon.md`.
- **Code / folders:** `src/services/analytics-canon/`; `src/services/analytics/`; `src/services/youtube/analyticsReportMatrix.ts`; analytics dashboard and export components.
- **Known PRs:** #1241 context provenance consumer; #1253 Brain evidence integration; related analytics PR inventory still required.
- **Known branches:** `brain/canonical-analytics-consumers-2026-10-17`; analytics-specific branches to be enumerated.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Data index; product-business-analysis; data quality; visualize-data; testing-data-visualizations. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Analytics API](https://developers.google.com/youtube/analytics); [YouTube Reporting API](https://developers.google.com/youtube/reporting); [CSV RFC 4180](https://www.rfc-editor.org/rfc/rfc4180).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Metric semantics drift, sampling/latency, API coverage limits, false comparison. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

VT-SYNC + analytics-canon; UI consumes canonical analytics. `CAP-ANALYTICS-CANON`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

VT-SYNC, canonical metrics, channel identity, evidence, export storage. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Core creator reports have correct units/windows and comparison semantics; export matches on-screen results; unavailable metrics remain unavailable.

#### J. Verification matrix and evidence required

Metric calculation fixtures; date/window edge cases; dimension compatibility; export parity; visual/responsive tests. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Metric semantics drift, sampling/latency, API coverage limits, false comparison. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which report families are required for beta and which are deferred due to API scope/coverage?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Query performance, cache freshness, export failure monitoring and dataset coverage dashboard.

#### O. Next action and handoff

Build metric-to-endpoint-to-dashboard coverage matrix and reconcile against analytics-canon. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 18. Outcome attribution, experiments and governed learning loop

**Priority:** P1 — creator intelligence  
**Canonical owner / capability:** Outcomes, Evaluation & Learning; `CAP-OUTCOME-LEARNING`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Close the lifecycle from recommendation or creator decision through operation, receipt, publish binding, measured outcome, evaluation and governed learning candidate. Preserve correlation versus causation, comparability windows and human approval for durable learning. Extend existing ledgers; do not add a second evidence/outcome store.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/outcome-learning.md`; `tasks/ai-brain-quality/CANONICAL-PUBLICATION-TO-LEARNING-GOLDEN-PATH-PLAN.md`; `tasks/ai-brain-quality/PHASE-10-OUTCOME-LINEAGE.md`; `docs/architecture/POST_PUBLICATION_ANALYTICS_OUTCOME_PIPELINE_INTEGRATION_2026-10-15.md`.
- **Code / folders:** `src/services/brain/Algorithm*`; `src/services/asset-engine/PostPublishAnalyticsBridge.ts`; `src/services/asset-engine/PublishTransaction.ts`; outcome/evaluation stores.
- **Known PRs:** #1213 outcome correlation lineage; #1254; #1256; #1206 publishing recovery.
- **Known branches:** `feat/brain-outcome-correlation-lineage-20261030`; `feat/brain-learning-canonical-evidence-resolution-phase-2c-2026-11-11`; `publish-ambiguous-outcome-recovery`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Data product analysis; AI engineering; TDD; code review; ViewTube convergence governance. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Analytics API](https://developers.google.com/youtube/analytics); [Google experimentation guidance](https://developers.google.com/optimization).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Causal overclaiming, wrong video/package attribution, silent memory changes. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Outcomes, Evaluation & Learning. `CAP-OUTCOME-LEARNING`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Publish transaction, analytics checkpoints, evidence, creator decisions, operation receipts. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

A published/changed artifact can be linked to its outcome and evaluation; learning candidates preserve provenance and require governed promotion.

#### J. Verification matrix and evidence required

Golden lifecycle tests; metric comparability; missing/delayed data; lineage; rejection/promotion governance. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Causal overclaiming, wrong video/package attribution, silent memory changes. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which learning candidate types can be auto-generated and which require creator review?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Outcome ingestion lag, evaluation failures, learning audit and rollback.

#### O. Next action and handoff

Run the canonical publication-to-learning golden path and reconcile phase 10–18 evidence. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 19. Projects, ContentBuild and canonical content identity

**Priority:** P1 — production  
**Canonical owner / capability:** Projects + ContentBuild; `CAP-PROJECT-CONTENT-IDENTITY`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace Project and ContentBuild identities from creation through research, script, assets, Editor, packaging, publish and outcomes. Complete missing handoffs using the existing stable IDs and projection model; preserve Project as workflow container and ContentBuild as evolving content identity. Do not create a parallel project/video package store.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/VIEWTUBE_PROJECTS_CONTENTBUILD_WORKFLOW_MASTER_RESOURCE.md`; `docs/architecture/PROJECT_CONTENTBUILD_ASSET_ENGINE_VIDEO_PACKAGE_CONSOLIDATION_2026-09-22.md`; `docs/capabilities/project-content-identity.md`; `docs/programs/INTEGRATED_APPLICATION.md`.
- **Code / folders:** `src/services/asset-engine/ContentBuildRepository.ts`; `src/services/asset-engine/ProjectContentBuildBridge.ts`; project services and UI.
- **Known PRs:** #1220 operation identity; #1278/#1280 calendar work (merged to Studio recovery branch, not master integration).
- **Known branches:** `feat/projects-calendar-phase-0-1-source-integration-2026-11-15`; `feat/projects-calendar-phases-5-7-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; repository understanding; TDD; project coordination. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[GitHub Actions](https://docs.github.com/actions) for CI evidence; [Remotion project model](https://www.remotion.dev/docs).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Multiple package IDs, copied project state, local-only persistence, calendar branch divergence. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Projects + ContentBuild. `CAP-PROJECT-CONTENT-IDENTITY`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Account identity, creator context, asset engine, calendar, operations, publisher. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

One Project and ContentBuild identity survives every supported workflow, reload and cross-surface handoff.

#### J. Verification matrix and evidence required

Create/edit/save/reopen; identity propagation; duplicate prevention; migration and cross-surface E2E. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Multiple package IDs, copied project state, local-only persistence, calendar branch divergence. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which Project and ContentBuild stores are canonical on master integration? Which calendar changes remain only on Studio recovery branch?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Project archive/restore, task scheduling, ownership and failed handoff repair.

#### O. Next action and handoff

Inspect Project/ContentBuild authorities and compare calendar PRs against the integration target. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 20. Vault user experience and asset-library consolidation

**Priority:** P1 — production  
**Canonical owner / capability:** Vault UX over Asset Engine; `CAP-ASSET-LINEAGE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Complete Vault as the creator-facing browse/search/manage experience over canonical Asset Engine asset IDs. Audit upload, folders/collections, previews, filters, selection, batch operations, deep links, metadata and project relationships. Reconcile unfinished Vault branch work selectively; do not introduce a second media store.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/VIEWTUBE_ASSET_ENGINE_MASTER_RESOURCE.md`; `docs/architecture/VIEWTUBE_CREATOR_VAULT_IMPLEMENTATION_PLAN_2026-09-24.md`; `tasks/viewtube-vault/REVISED-MERGE-PLAN.md`; `tasks/viewtube-vault/REHARVEST-GAP-REGISTRY.md`; `docs/plans/VAULT_WORK_COMPLETION_AUDIT_2026-10-14.md`.
- **Code / folders:** `src/services/vault*`; `src/services/vaultAdapter.ts`; `src/services/asset-engine/`; Vault feature components/routes.
- **Known PRs:** PRs/branch changes require a targeted Vault diff audit; do not infer completion from historical Vault plans.
- **Known branches:** `audit/vault-completion-and-continuation-2026-10-14`; `audit/vault-product-clarity-2026-11-11`; `codex/finish-studio-vault-migrations-2026-10-19`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; repository understanding; UI coverage audit; accessibility; TDD. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google Cloud Storage](https://cloud.google.com/storage/docs) if GCS is selected; [OWASP File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Asset duplicates, broken signed URLs, branch-only fixes, misleading storage status. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Vault UX over Asset Engine. `CAP-ASSET-LINEAGE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Asset Engine, object storage, account permissions, Project/ContentBuild. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Creator can upload, search, preview, organize, select and reuse assets across projects with durable IDs and clear storage status.

#### J. Verification matrix and evidence required

Upload/download; preview; batch operations; mobile/desktop; permissions; reload persistence; lineage checks. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Asset duplicates, broken signed URLs, branch-only fixes, misleading storage status. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which Vault branch changes are not merged into master integration, and which asset capabilities already have parity?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Storage quotas, orphan cleanup, lifecycle policy, upload failure recovery and support diagnostics.

#### O. Next action and handoff

Compare current master with the three Vault audit/donor branches and map all unique changes. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 21. Asset Engine, media storage, lineage and versioning

**Priority:** P1 — production  
**Canonical owner / capability:** Asset Engine; `CAP-ASSET-LINEAGE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Complete the canonical artifact lifecycle from ingest through metadata, version, variant, selection, transformation, storage and deletion. Ensure Vault, Editor, generation, packaging and publishing all use the same asset identity and lineage contracts. Extend existing Asset Engine code and keep object storage behind the current adapter.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/VIEWTUBE_ASSET_ENGINE_MASTER_RESOURCE.md`; `docs/capabilities/asset-lineage.md`; `docs/architecture/ASSET_ENGINE_CONTENTBUILD_IMPLEMENTATION_PLAN_2026-09-20.md`; `docs/architecture/VIEWTUBE_SYSTEM_CONVERGENCE_AND_CONSOLIDATION.md`.
- **Code / folders:** `src/services/asset-engine/`; `src/services/vaultAdapter.ts`; media compression/metadata/hash services; storage adapters.
- **Known PRs:** #1220 operation identity; #1206 publishing recovery; inspect Asset Engine branch history.
- **Known branches:** `codex/finish-studio-vault-migrations-2026-10-19`; `audit/vault-completion-and-continuation-2026-10-14`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; TDD; secure-code; data quality; repository understanding. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google Cloud Storage](https://cloud.google.com/storage/docs); [S3 API docs](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) if AWS adapter exists; [OWASP file upload](https://cheatsheetseries.owasp.org/).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Orphaned blobs, inconsistent metadata, accidental destructive deletion, public URL leakage. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Asset Engine. `CAP-ASSET-LINEAGE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Database, object storage, account identity, Project/ContentBuild, Creator Operations. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Each asset has stable identity, ownership, storage locator, lineage/version, content type and lifecycle; derivatives trace to parents.

#### J. Verification matrix and evidence required

Hash/integrity; upload/retry; version/variant; deletion/restore; cross-account access; asset-to-publish lineage. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Orphaned blobs, inconsistent metadata, accidental destructive deletion, public URL leakage. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which storage provider and adapter are production canonical? What retention and deletion policies apply?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Storage usage, lifecycle/cleanup, checksum validation, signed URL expiry, restore procedures.

#### O. Next action and handoff

Trace asset create/update/delete and storage locator lifecycle through current canonical adapter. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 22. Unified desktop/mobile video editor

**Priority:** P1 — production  
**Canonical owner / capability:** Editor; `CAP-EDITOR-RENDER`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Read the Editor master resource and mandatory Editor skill first. Reconcile desktop and mobile editing against one shared project/timeline model, preserve stable capability IDs and existing UI contracts, then finish the beta-critical edit/save/reopen/preview workflow. Route AI through BrainRuntime, media jobs through Video Director, assets through Asset Engine/Vault and final output through Remotion.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/editor/VIEWTUBE_YOUTUBE_EDITOR_SYSTEM_MASTER_RESOURCE.md`; `docs/capabilities/editor-render.md`; `docs/editor/CREATOR_PRODUCTION_WORKBENCH_HANDOFF_2026-10-14.md`; `AGENTS.md` mandatory editor rule.
- **Code / folders:** `src/services/editorEngine.ts`; editor feature/components/routes; timeline/project state; Remotion compositions; asset-engine bridges.
- **Known PRs:** Editor PRs require a dedicated current-branch history search; do not infer current completion from the old editor master.
- **Known branches:** `codex/finish-studio-vault-migrations-2026-10-19`; current Editor-specific donors to be enumerated.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube YouTube Editor System skill; Remotion research; TDD; code review; verification-before-completion. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Remotion docs](https://www.remotion.dev/docs); [WebCodecs](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API); [MDN Media Source Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Divergent mobile/desktop state, unsaved edits, heavy media performance, inaccessible timeline interactions. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Editor. `CAP-EDITOR-RENDER`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Project/ContentBuild, Asset Engine/Vault, BrainRuntime, operation jobs, Remotion. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

One project model works on desktop/mobile; creator can import, edit, preview, save, reload and hand off to render without losing state.

#### J. Verification matrix and evidence required

Editor tests; persistence round-trip; timeline interactions; device viewport; touch/keyboard; media decode; screenshot/runtime QA. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Divergent mobile/desktop state, unsaved edits, heavy media performance, inaccessible timeline interactions. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which editor workspace/mini-editor surfaces are production-supported and what is the single project model?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Autosave recovery, render job queue, crash recovery, performance telemetry and editor support bundle.

#### O. Next action and handoff

Follow AGENTS.md and Editor master resource; build the exact source-to-preview-to-save map before edits. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 23. Remotion composition and deterministic render engine

**Priority:** P1 — production  
**Canonical owner / capability:** Editor + Remotion / Video Director operation owner; `CAP-EDITOR-RENDER`, `CAP-CREATOR-OPERATIONS`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace timeline/project state into Remotion compositions and server-side render jobs. Complete deterministic render input, versioned composition, resource limits, progress, cancellation, retry and output receipt using the existing pipeline. Do not add a second render orchestrator or route final renders around Asset Engine.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/editor/VIEWTUBE_YOUTUBE_EDITOR_SYSTEM_MASTER_RESOURCE.md`; `docs/capabilities/editor-render.md`; `docs/capabilities/asset-lineage.md`; `AGENTS.md` Editor rules.
- **Code / folders:** `src/server/vt-e1-render-server.mjs`; Remotion compositions and render worker; `src/services/editorEngine.ts`; `src/services/asset-engine/GenerationWorkflow.ts`.
- **Known PRs:** Render-specific PR history not fully inventoried; #1201 is hosting runtime fallback, not proof of Remotion completion.
- **Known branches:** `fix/render-production-no-database-fallback` (runtime adjacent); Editor donor branches to inventory.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Remotion skill/research; TDD; productionize-code; verification-before-completion. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Remotion rendering](https://www.remotion.dev/docs/renderer); [Remotion Lambda](https://www.remotion.dev/docs/lambda); [FFmpeg](https://ffmpeg.org/documentation.html).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Render costs, timeouts, memory, codec incompatibility, non-deterministic asset references. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Editor + Remotion / Video Director operation owner. `CAP-EDITOR-RENDER`, `CAP-CREATOR-OPERATIONS`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Editor project model, media assets, job queue, server compute, output storage. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Same input project/composition/version produces a valid playable output; job state persists; failures can retry safely.

#### J. Verification matrix and evidence required

Render smoke tests; output decode/playback; duration/frame/audio checks; concurrency/resource limits; interrupted-job recovery. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Render costs, timeouts, memory, codec incompatibility, non-deterministic asset references. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which render backend is selected for beta (local/server/Lambda/other) and what are size/duration limits?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Queue depth, render duration, failure rate, compute budget, artifact retention and job cancellation.

#### O. Next action and handoff

Trace one real project through render API, worker, output asset and playback validation. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 24. Video export, encoding, packaging and download

**Priority:** P1 — production  
**Canonical owner / capability:** Packaging/Video Director + Asset Engine; Editor owns render input; `CAP-EDITOR-RENDER`, `CAP-ASSET-LINEAGE`, `CAP-PUBLISH`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Finish the pipeline from approved editor state to a validated downloadable media artifact and publish-ready package. Reuse the canonical render result, validate codecs/container/audio/video duration and aspect ratio, register output in Asset Engine/Vault, and preserve package/version lineage.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/editor-render.md`; `docs/capabilities/asset-lineage.md`; `docs/editor/VIEWTUBE_YOUTUBE_EDITOR_SYSTEM_MASTER_RESOURCE.md`; `docs/architecture/VIEWTUBE_ASSET_ENGINE_MASTER_RESOURCE.md`.
- **Code / folders:** Remotion renderer; FFmpeg/media processing; packaging services; Asset Engine storage; Publisher upload adapters.
- **Known PRs:** #1206 publish ambiguous outcome recovery (downstream); #1201 runtime hosting (adjacent).
- **Known branches:** Editor/render branches to enumerate; `publish-ambiguous-outcome-recovery` for downstream recovery.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Remotion; technical research; TDD; secure-code; verification-before-completion. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[FFmpeg docs](https://ffmpeg.org/documentation.html); [Remotion renderer](https://www.remotion.dev/docs/renderer); [YouTube supported upload formats](https://support.google.com/youtube/troubleshooter/2888402).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Codec mismatches, huge outputs, temporary URLs, duplicate assets, incomplete renders. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Packaging/Video Director + Asset Engine; Editor owns render input. `CAP-EDITOR-RENDER`, `CAP-ASSET-LINEAGE`, `CAP-PUBLISH`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Remotion render, asset storage, media metadata, publishing package. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Export yields valid media, persists in Vault, can be downloaded/reopened and is accepted by YouTube upload validation.

#### J. Verification matrix and evidence required

Codec/container probe; playback; A/V sync; dimensions/fps/duration; checksum; download and upload smoke. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Codec mismatches, huge outputs, temporary URLs, duplicate assets, incomplete renders. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

What export presets/resolutions/codecs are supported and which are guaranteed on the chosen renderer?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Export quotas, output retention, failed encode retry and storage budget.

#### O. Next action and handoff

Build one verified render-to-asset-to-download-to-upload fixture and record supported presets. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 25. AI image, thumbnail, video and audio generation providers

**Priority:** P1 — production  
**Canonical owner / capability:** Creator Operations & Generation + provider adapters; `CAP-CREATOR-OPERATIONS`, `CAP-ASSET-LINEAGE`, `CAP-BRAIN-EXPERIENCE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Inventory every generation provider and callsite; route text through the governed Gemini gateway and media through existing provider adapters/Video Director. Add provider capability, credential, cost, consent, retry and provenance contracts; every successful output must become a canonical asset. Avoid provider-specific logic in UI components.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/capabilities/creator-operations.md`; `docs/brain/AI_BRAIN_MASTER_RESOURCE.md`; `docs/plans/VIEWTUBE_PROVIDER_CREDENTIAL_SECURITY_AND_BYOK_PLAN_2026-10-29.md`.
- **Code / folders:** `src/services/gemini.ts`; `src/services/geminiModelGovernance.ts`; `src/services/asset-engine/GenerationWorkflow.ts`; provider adapters and generation routes.
- **Known PRs:** #1198 Gemini governed callers; #1217 key validation; #1188 retry-safe receipts.
- **Known branches:** `feat/p1-gemini-governed-callers-final-2026-10-30`; `feat/gemini-key-validation-surface-20261030`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

AI engineering; harden LLM integration; provider research; secure-code; TDD. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Gemini API](https://ai.google.dev/gemini-api/docs); [Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs); [Remotion](https://www.remotion.dev/docs).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Provider outages/pricing, unsafe media, credential exposure, generated-content disclosure and duplicate charges. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Creator Operations & Generation + provider adapters. `CAP-CREATOR-OPERATIONS`, `CAP-ASSET-LINEAGE`, `CAP-BRAIN-EXPERIENCE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Gemini gateway, provider credentials, credit ledger, Asset Engine, operations/jobs. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Generation providers are selected by capability and policy; cost/provenance is recorded; outputs persist as assets; failed jobs settle credits correctly.

#### J. Verification matrix and evidence required

Provider contract tests; BYOK validation; timeout/retry; cost metering; output persistence; safety policy. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Provider outages/pricing, unsafe media, credential exposure, generated-content disclosure and duplicate charges. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which providers and modalities are committed for beta, and which remain optional integrations?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Provider availability/cost, model versions, rate limits, fallback policy and credential rotation.

#### O. Next action and handoff

Generate provider/callsite inventory and route all supported calls through canonical operation and accounting contracts. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 26. Transcription, captions, scene intelligence and content repurposing

**Priority:** P1 — production  
**Canonical owner / capability:** Video Director / Creator Operations + Asset Engine; `CAP-CREATOR-OPERATIONS`, `CAP-ASSET-LINEAGE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Audit existing transcript, captions, scene detection, clipping and repurposing tools. Consolidate outputs as timestamped, versioned assets linked to source media and ContentBuild. Ensure derived clips retain source time ranges, consent and lineage and can flow into Editor/Remotion.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/editor/VIEWTUBE_YOUTUBE_EDITOR_SYSTEM_MASTER_RESOURCE.md`; `docs/capabilities/asset-lineage.md`; `docs/capabilities/creator-operations.md`; `docs/references/DEEP_RESEARCH_CONSTRUCTION_SOURCE.md`.
- **Code / folders:** `src/services/vaultCaptions.ts`; media compression/processing; transcript and video intelligence services; Editor timeline; Asset Engine.
- **Known PRs:** No complete transcript/repurposing PR set verified; search branches and code callers before adding.
- **Known branches:** Editor/Video Director donor branches require audit.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

AI engineering; HyperFrames/Remotion research; TDD; data lineage; repository understanding. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube captions API](https://developers.google.com/youtube/v3/docs/captions); [WebVTT](https://www.w3.org/TR/webvtt/); [FFmpeg](https://ffmpeg.org/documentation.html).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Transcription accuracy, copyright/permission, language support, timestamp drift and provider costs. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Video Director / Creator Operations + Asset Engine. `CAP-CREATOR-OPERATIONS`, `CAP-ASSET-LINEAGE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Asset Engine, media storage, transcription provider, Editor, Creator Operations. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Transcript/caption/clip artifacts have accurate timestamps, can be edited/exported and remain traceable to source video.

#### J. Verification matrix and evidence required

Timestamp alignment; caption formats; scene/clip boundaries; source-to-derivative lineage; playback and editor import. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Transcription accuracy, copyright/permission, language support, timestamp drift and provider costs. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which transcription provider and caption workflows are already integrated? Is automatic repurposing in beta scope?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Processing queue, language/model quality, retry and source retention.

#### O. Next action and handoff

Inventory caption/transcript code and distinguish current production paths from planned ideas. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 27. YouTube Publisher, resumable upload and publication lifecycle

**Priority:** P1 — creator operations  
**Canonical owner / capability:** Publisher; `CAP-PUBLISH`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace approved ContentBuild/package snapshot through upload initiation, resumable chunks, metadata, thumbnail, schedule/privacy, remote reconciliation and final publish receipt. Complete retry-safe, idempotent publishing with explicit approval and ambiguous-outcome recovery. Reuse current Publisher and YouTube provider adapters; never create a second upload system.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/publish.md`; `docs/plans/VIEWTUBE_VIDEO_PUBLISHER_WRITE_CREATE_IMPLEMENTATION_PLAN_2026-10-09.md`; `docs/plans/VIEWTUBE_PUBLISHER_METADATA_PROJECT_PACKAGE_PERSISTENCE_PLAN_2026-10-08.md`; `docs/architecture/POST_PUBLICATION_IDENTITY_CONTRACT_2026-10-15.md`.
- **Code / folders:** `src/services/asset-engine/PublishTransaction.ts`; `src/services/asset-engine/ApprovedPublishSnapshot.ts`; `src/services/youtube/PublishTransactionYouTubeBridge.ts`; publisher metadata persistence.
- **Known PRs:** #1206 ambiguous provider outcome recovery; #1210 publish recovery evidence; #1276 credits is separate.
- **Known branches:** `publish-ambiguous-outcome-recovery`; `publish-recovery-evidence-reconciliation`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; secure-code; TDD; YouTube API research; verification-before-completion. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube resumable uploads](https://developers.google.com/youtube/v3/guides/using_resumable_upload_protocol); [videos.insert](https://developers.google.com/youtube/v3/docs/videos/insert).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. External side effect, quota, large uploads, uncertain response, duplicate publish and account policy. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Publisher. `CAP-PUBLISH`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

OAuth upload scope, ContentBuild/package, asset export, job queue, operation receipts. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Approved snapshot is immutable; upload is resumable/idempotent; remote video ID/status is reconciled; ambiguous outcomes do not create duplicates.

#### J. Verification matrix and evidence required

Authenticated staging upload; chunk interruption/retry; metadata/thumbnail; schedule/timezone; remote reconciliation; audit receipt. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

External side effect, quota, large uploads, uncertain response, duplicate publish and account policy. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which upload types/visibility/schedule flows are actually supported and verified?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Upload progress, retry, stuck-job recovery, remote status reconciliation and creator notification.

#### O. Next action and handoff

Execute the Publisher recovery plan and verify one real test-channel upload. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 28. YouTube Studio channel and video management

**Priority:** P1 — creator operations  
**Canonical owner / capability:** Channel Manager / Publisher for external writes; `CAP-CREATOR-OPERATIONS`, `CAP-PUBLISH`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Inventory existing channel, video, playlist and metadata management routes and map each control to an official YouTube endpoint and scope. Finish supported channel management by extending canonical YouTube services; clearly label unsupported Studio operations and preserve the separation between managing existing videos and publishing new ones.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/creator-operations.md`; `docs/capabilities/publish.md`; `docs/plans/VIEWTUBE_PUBLISHER_MANAGER_CHANNEL_CONNECTED_CONTROLS_PLAN_2026-10-09.md`; `docs/architecture/YOUTUBE_API_STABILIZATION_V1_TRACKER.md`.
- **Code / folders:** `src/services/youtube/`; Channel Inspector; Video Manager; Publisher; `apiCapabilityRegistry.ts`.
- **Known PRs:** #1211 capability runtime audit; #1206 publish recovery; inspect PRs for Publisher Manager.
- **Known branches:** `audit/brain-capability-runtime-verification-2026-10-30`; Publisher/Manager branches to enumerate.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube UI coverage audit; YouTube API research; TDD; secure-code. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Data API](https://developers.google.com/youtube/v3); [videos.update](https://developers.google.com/youtube/v3/docs/videos/update); [playlists API](https://developers.google.com/youtube/v3/docs/playlists).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Not all Studio functions have public APIs; restricted scopes; accidental destructive edits. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Channel Manager / Publisher for external writes. `CAP-CREATOR-OPERATIONS`, `CAP-PUBLISH`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

OAuth scopes, channel identity, provider registry, entitlements, publishing side-effect rules. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Supported channel/video operations work against connected account and update canonical local projections with verified remote results.

#### J. Verification matrix and evidence required

Read/write API tests; scope denial; stale remote state; multi-channel; pagination; audit receipts. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Not all Studio functions have public APIs; restricted scopes; accidental destructive edits. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which UI features imply unsupported YouTube Studio operations and need redesign or explicit limitation labels?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Remote sync, write audit, quota and rollback/compensation where possible.

#### O. Next action and handoff

Produce feature-to-endpoint-to-scope matrix and remove false capability claims. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 29. Comments, moderation, replies and Community operations

**Priority:** P1 — creator operations  
**Canonical owner / capability:** Audience & Community Desk; YouTube provider owns side effects; `CAP-CREATOR-OPERATIONS`, `CAP-EVIDENCE-INTELLIGENCE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Audit comment retrieval, moderation, reply generation and Community posting against current YouTube API support and account scopes. Reuse Brain for draft assistance and require explicit approval before write actions unless a clear user policy authorizes automation. Preserve source comment IDs and action receipts.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/capabilities/creator-operations.md`; `docs/capabilities/evidence-intelligence.md`; `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/references/DEEP_RESEARCH_CONSTRUCTION_SOURCE.md`.
- **Code / folders:** `src/services/youtube/commentAccess.ts`; `src/services/youtube/commentHandoff.ts`; commentThreads services; Brain tool registry; community tools.
- **Known PRs:** #1211 runtime tool audit; #1198 Gemini governed comment callers (inspect exact changes).
- **Known branches:** `audit/brain-capability-runtime-verification-2026-10-30`; `feat/p1-gemini-governed-callers-final-2026-10-30`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

YouTube API research; AI engineering; secure-code; TDD; code review. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[CommentThreads API](https://developers.google.com/youtube/v3/docs/commentThreads); [Comments API](https://developers.google.com/youtube/v3/docs/comments); [YouTube Community guidelines](https://www.youtube.com/howyoutubeworks/policies/community-guidelines/).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Harassment/spam, policy violation, mistaken moderation, unsupported Community API endpoints. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Audience & Community Desk; YouTube provider owns side effects. `CAP-CREATOR-OPERATIONS`, `CAP-EVIDENCE-INTELLIGENCE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

YouTube scopes, Brain gateway, account permissions, approval and audit receipts. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Comments load accurately; reply/moderation actions are permission-gated; AI drafts are distinguishable from posted replies; results reconcile remotely.

#### J. Verification matrix and evidence required

Comment pagination; disabled comments; moderation states; draft/approve/post; permission denial; duplicate reply prevention. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Harassment/spam, policy violation, mistaken moderation, unsupported Community API endpoints. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which Community operations are officially API-supported versus UI/manual-only?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Moderation audit log, rate limit, user notification, complaint and rollback escalation.

#### O. Next action and handoff

Map comment services and each UI action to the official endpoint and required scope. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 30. Titles, thumbnails, metadata packaging and experiment management

**Priority:** P1 — creator operations  
**Canonical owner / capability:** Packaging & Experiment Lab; Publisher applies approved snapshot; `CAP-PUBLISH`, `CAP-OUTCOME-LEARNING`, `CAP-ASSET-LINEAGE`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Unify title, thumbnail, description, tags, category and packaging variants under the canonical ContentBuild/package model. Connect generation and manual edits to versioned assets and approved publish snapshots. Add experiment tracking only where the measurement method is explicit; distinguish native YouTube experiments from manual comparisons.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/plans/VIEWTUBE_PUBLISHER_METADATA_PROJECT_PACKAGE_PERSISTENCE_PLAN_2026-10-08.md`; `docs/architecture/POST_PUBLICATION_IDENTITY_CONTRACT_2026-10-15.md`; `docs/capabilities/publish.md`; `docs/capabilities/outcome-learning.md`.
- **Code / folders:** `src/services/publisherMetadataPackageOptions.ts`; `src/services/publisherMetadataProjectPersistence.ts`; `src/services/asset-engine/ApprovedPublishSnapshot.ts`; Thumbnail Studio.
- **Known PRs:** #1210 publish recovery evidence; #1206 ambiguous outcome recovery; #1198 Gemini governed callers.
- **Known branches:** `publish-recovery-evidence-reconciliation`; `feat/p1-gemini-governed-callers-final-2026-10-30`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

AI engineering; data analysis; TDD; ViewTube convergence governance; product-design audit if UX changes. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube thumbnails.set](https://developers.google.com/youtube/v3/docs/thumbnails/set); [YouTube video update](https://developers.google.com/youtube/v3/docs/videos/update); [YouTube Test & Compare](https://support.google.com/youtube/answer/14102417).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Variant confusion, stale package, incorrect A/B claims, copyright and generated thumbnail policy. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Packaging & Experiment Lab; Publisher applies approved snapshot. `CAP-PUBLISH`, `CAP-OUTCOME-LEARNING`, `CAP-ASSET-LINEAGE`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

ContentBuild, asset lineage, Gemini gateway, Publisher, analytics/outcome. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Creator can create/select/save/reopen packaging variants; approved publication freezes exact metadata/assets; experiment result attribution is trustworthy.

#### J. Verification matrix and evidence required

Save/reopen/restore; variant lineage; publish snapshot; thumbnail upload; outcome window and comparison validity. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Variant confusion, stale package, incorrect A/B claims, copyright and generated thumbnail policy. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which native experiment APIs/features are actually available to this app and what is manual-only?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Packaging history, experiment end state, asset retention and rollback to prior metadata.

#### O. Next action and handoff

Audit metadata persistence services and compare current Publisher/Manager workflows against the 13-section contract. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 31. Creator calendar, scheduling and production planning

**Priority:** P1 — creator operations  
**Canonical owner / capability:** Projects + Calendar capability; Publisher owns YouTube schedule execution; `CAP-PROJECT-CONTENT-IDENTITY` + `CAP-PUBLISH`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Reconcile all calendar branches and PRs against the current target, separating project planning events from actual YouTube scheduled publication. Selectively migrate complete calendar work, preserve Studio recovery dependencies, and ensure event identity, persistence, recurrence/timezone and Project handoff use canonical records.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/plans/VIEWTUBE_STUDIO_CALENDAR_INTEGRATION_PLAN_2026-10-29.md`; `docs/architecture/VIEWTUBE_PROJECTS_CONTENTBUILD_WORKFLOW_MASTER_RESOURCE.md`; `docs/programs/INTEGRATED_APPLICATION.md`.
- **Code / folders:** `src/components/projects/ProjectPlannerCalendar.tsx`; `src/components/projects/ProjectPlannerCalendar.css`; project planning services; Publisher scheduling services.
- **Known PRs:** #1278 and #1280 (merged to `fix/studio-controls-regression-recovery-2026-10-31`, not master integration at snapshot); #1245–#1248 calendar primitives.
- **Known branches:** `feat/projects-calendar-phase-0-1-source-integration-2026-11-15`; `feat/projects-calendar-phases-5-7-2026-11-15`; `fix/studio-controls-regression-recovery-2026-10-31`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube convergence governance; project coordination; TDD; calendar/timezone research; verification. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google Calendar API](https://developers.google.com/calendar/api) only if selected; [Temporal](https://tc39.es/proposal-temporal/) for timezone semantics where compatible.

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Merging work to wrong branch, timezone errors, duplicated events, UI regression from Studio primitives. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Projects + Calendar capability; Publisher owns YouTube schedule execution. `CAP-PROJECT-CONTENT-IDENTITY` + `CAP-PUBLISH`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Project identity, task scheduling, Publisher schedule API, Studio primitives, notifications. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Calendar events persist and reopen; project deadlines remain distinct from remote publish schedules; timezone/recurrence is correct; mobile works.

#### J. Verification matrix and evidence required

CRUD round-trip; timezone/DST; recurrence; event-kind schema; calendar-to-project and publish handoff; responsive tests. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Merging work to wrong branch, timezone errors, duplicated events, UI regression from Studio primitives. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which calendar PRs should be ported from Studio recovery to master, and what exact target branch is authorized?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Reminders, stale event detection, sync conflict handling and notification preferences.

#### O. Next action and handoff

Compare PR #1278/#1280 heads against current integration SHA and build a selective migration ledger. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 32. Background jobs, queues, notifications and automation

**Priority:** P1 — creator operations  
**Canonical owner / capability:** Creator Operations / platform job infrastructure; `CAP-CREATOR-OPERATIONS`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Inventory render, upload, sync, AI generation, email and scheduled jobs. Consolidate on a durable job contract with owner, operation ID, state, retry policy, idempotency, progress, cancellation, receipt and notification. Prove critical work continues after browser closure and recovers after worker restart.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/capabilities/creator-operations.md`; `docs/programs/INTEGRATED_APPLICATION.md`; `docs/governance/VERIFICATION.md`.
- **Code / folders:** `server/`; `src/server/`; cron/job/worker scripts; render server; VT-SYNC; operation and receipt services.
- **Known PRs:** #1188 retry-safe Gemini receipts; #1206 publish recovery; #1201 Render runtime.
- **Known branches:** `fix/p1-gemini-idempotency-retry-2026-10-30`; `publish-ambiguous-outcome-recovery`; `fix/render-production-no-database-fallback`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Repository understanding; TDD; incident triage; secure-code; engineering workflow guide. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Cloud Tasks](https://cloud.google.com/tasks/docs); [Cloud Scheduler](https://cloud.google.com/scheduler/docs); [BullMQ](https://docs.bullmq.io/) only if used.

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. At-least-once delivery, duplicate side effects, runaway costs, stuck jobs and missed notifications. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Creator Operations / platform job infrastructure. `CAP-CREATOR-OPERATIONS`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Persistent DB, worker runtime, provider adapters, operation identity, notification channel. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Jobs survive restart, retry safely, expose accurate progress, do not double-charge or double-publish, and notify the correct account.

#### J. Verification matrix and evidence required

Worker restart; duplicate delivery; retry/backoff; dead-letter; cancellation; browser-close; concurrent job tests. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

At-least-once delivery, duplicate side effects, runaway costs, stuck jobs and missed notifications. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which queue technology is already selected, and which workflows currently run synchronously in request handlers?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Queue depth, latency, dead-letter alerts, job replay and provider outage playbooks.

#### O. Next action and handoff

Produce a job inventory and mark each as durable, request-bound, scheduled, or browser-local. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 33. External research and partner/provider integrations

**Priority:** P1 — creator operations  
**Canonical owner / capability:** Integration registry + capability-specific provider owners; Existing capabilities first; new CAP only after review.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Use the integration dossier and research sources to evaluate each proposed provider against user value, official API availability, data rights, auth, cost, quotas, reliability and alternatives. Select only integrations needed for beta; implement through provider adapters and evidence provenance. Do not add integrations solely because they appear in a proposal list.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/research/VIEWTUBE_75_PRODUCT_COMPETITIVE_AND_INTEGRATION_PROPOSALS.md`; `docs/research/VIEWTUBE_PRODUCT_STRATEGY_COMPETITIVE_PARTNERSHIP_AND_TECHNICAL_DOSSIER.md`; `docs/references/DEEP_RESEARCH_CONSTRUCTION_SOURCE.md`; `governance/ai-systems/registry/integrations.json`.
- **Code / folders:** Provider adapter folders; `governance/ai-systems/registry/integrations.json`; `src/services/youtube/`; research/keyword modules.
- **Known PRs:** No provider-wide PR set verified; evaluate each provider separately.
- **Known branches:** Provider branches to discover only after selected integrations are approved.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Technical research; agent.spot; plugin management; secure-code; ViewTube Ideas Curator. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google Trends](https://trends.google.com/); [vidIQ](https://vidiq.com/); [YouTube API](https://developers.google.com/youtube/v3); [MCP Registry](https://registry.modelcontextprotocol.io/).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Unstable APIs, scraped data policy, licensing, privacy, vendor lock-in and unexpected cost. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Integration registry + capability-specific provider owners. Existing capabilities first; new CAP only after review. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Provider approval, legal terms, API keys, account consent, evidence model. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Each shipped integration has verified API/terms, user value, owner, security model, cost/quota, error behavior and tests.

#### J. Verification matrix and evidence required

Provider contract; credentials; rate limits; outage behavior; provenance; terms/policy review. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Unstable APIs, scraped data policy, licensing, privacy, vendor lock-in and unexpected cost. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which external integrations are beta-critical versus roadmap-only? Which require paid partner agreements?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Provider health, key rotation, contract review, cost budgets and deprecation watch.

#### O. Next action and handoff

Rank integrations by beta journey dependency and verify first-party docs for top candidates. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 34. Creator monetization, revenue and business intelligence

**Priority:** P1 — creator operations  
**Canonical owner / capability:** Monetization & Operations Hub; analytics-canon for reported metrics; `CAP-ANALYTICS-CANON`, `CAP-OUTCOME-LEARNING`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Complete creator business reporting by clearly separating YouTube-reported monetization, manually entered sponsorship/campaign records and modeled estimates. Reuse canonical analytics and Project identities; add revenue goals and business insights only with explicit provenance and calculation definitions.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/analytics/VIEWTUBE_ANALYTICS_VT_SYNC_MASTER_RESOURCE.md`; `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/partnerships/VIEWTUBE_MASTER_PARTNER_INTELLIGENCE_AND_PITCH_PLANNING.md`; `docs/capabilities/outcome-learning.md`.
- **Code / folders:** `src/services/analytics-canon/`; `src/services/subscriptionPlans.ts`; monetization and campaign modules; Project/ContentBuild models.
- **Known PRs:** #1276 subscription/usage foundation is ViewTube billing, not creator revenue; no creator-revenue PR fully verified.
- **Known branches:** `feat/account-entitlement-usage-foundation-2026-11-15` (platform monetization only; keep distinct).
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Data product analysis; KPI design; build-report; data quality; secure-code. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[YouTube Analytics API](https://developers.google.com/youtube/analytics); [YouTube monetization policies](https://support.google.com/youtube/answer/1311392).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Revenue estimates mistaken for actual earnings; restricted monetization data; tax/accounting claims. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Monetization & Operations Hub; analytics-canon for reported metrics. `CAP-ANALYTICS-CANON`, `CAP-OUTCOME-LEARNING`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Analytics, creator profile, campaign/project records, account permissions. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Reported revenue, manually entered business revenue and estimates are distinct; calculations and source windows are visible.

#### J. Verification matrix and evidence required

Metric definitions; currency/timezone; missingness; access permissions; export; reconciliation against source. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Revenue estimates mistaken for actual earnings; restricted monetization data; tax/accounting claims. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Is sponsorship/brand CRM part of beta or a later tier? Which monetization metrics are available for connected accounts?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Data freshness, currency updates, user corrections and privacy/export.

#### O. Next action and handoff

Audit revenue-related UI and data sources; scope only verified data for beta. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 35. Gemini API, model gateway, prompt governance and BYOK

**Priority:** P2 — commercial/release  
**Canonical owner / capability:** BrainModelGateway / Gemini provider governance; `CAP-BRAIN-EXPERIENCE`, `CAP-CREATOR-OPERATIONS`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Reconcile every Gemini/model callsite, prompt family and credential path with the canonical BrainModelGateway and provider governance. Complete model routing, structured outputs, streaming, retry/idempotency, prompt/version provenance, BYOK validation and safe fallback without direct provider calls from UI or unmetered services.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/GEMINI_PROVIDER_GOVERNANCE_AND_VERSION_POLICY.md`; `docs/architecture/GEMINI_MODEL_CALLSITE_INVENTORY.md`; `docs/architecture/GEMINI_LIVE_CERTIFICATION.md`; `docs/plans/VIEWTUBE_BRAIN_MODEL_GATEWAY_CONVERGENCE_PLAN_2026-10-29.md`; `docs/plans/VIEWTUBE_AI_PROMPT_MIGRATION_AND_QUALITY_GOVERNANCE_PLAN_2026-10-29.md`.
- **Code / folders:** `src/services/gemini.ts`; `src/services/geminiModelGovernance.ts`; BrainModelGateway; prompt registry; provider credential services.
- **Known PRs:** #1217 BYOK key validation; #1198 governed callers; #1188 idempotent receipts; #1222 Gemini live certification.
- **Known branches:** `feat/gemini-key-validation-surface-20261030`; `feat/p1-gemini-governed-callers-final-2026-10-30`; `feat/gemini-live-certification-workflow-2026-10-30`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

AI engineering; harden LLM integration; technical research; TDD; secure-code. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Gemini API docs](https://ai.google.dev/gemini-api/docs); [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing); [Vertex AI generative AI](https://cloud.google.com/vertex-ai/generative-ai/docs).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. API changes/pricing, key leakage, prompt injection, untracked direct callsites and fallback mismatch. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

BrainModelGateway / Gemini provider governance. `CAP-BRAIN-EXPERIENCE`, `CAP-CREATOR-OPERATIONS`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

BrainRuntime, account settings, BYOK validation, credits, prompt/version registry. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

All supported text/structured/tool calls route through the gateway; key validation is safe; model/prompt provenance and usage are recorded.

#### J. Verification matrix and evidence required

Callsite inventory; model compatibility; structured-output fixtures; retry; streaming; BYOK; prompt regression tests. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

API changes/pricing, key leakage, prompt injection, untracked direct callsites and fallback mismatch. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which Gemini models are beta-approved, which are experimental, and what BYOK policy applies to free/paid tiers?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Model latency/cost dashboards, provider outage fallback, key rotation and prompt rollback.

#### O. Next action and handoff

Run current callsite inventory and classify each caller as canonical, compatibility, or dead. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 36. AI credit ledger, metering, reservations, refunds and top-ups

**Priority:** P2 — commercial/release  
**Canonical owner / capability:** Account Credit / Usage Accounting; Account/billing system; links to `CAP-CREATOR-OPERATIONS`.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Audit the account credit ledger and usage reservation work already merged, then complete atomic metering across every Gemini/generation operation. Ensure reserve→execute→settle/refund is idempotent, auditable and concurrency-safe; integrate top-ups only through verified payment events. Do not implement balances as an untracked mutable counter.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/plans/VIEWTUBE_BRAIN_MODEL_GATEWAY_CONVERGENCE_PLAN_2026-10-29.md`; `docs/plans/VIEWTUBE_PROVIDER_CREDENTIAL_SECURITY_AND_BYOK_PLAN_2026-10-29.md`; `.env.billing.example`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`.
- **Code / folders:** `server/account-credit-reservations.test.mjs`; `server/account-store.mjs`; `server/account-schema.sql`; `server/billing-server.mjs`; `src/services/billingEntitlement.ts`; Gemini gateway.
- **Known PRs:** #1276 (merged account entitlements and Gemini credit reservations).
- **Known branches:** `feat/account-entitlement-usage-foundation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Data quality; secure-code; TDD; code review; Stripe research. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Gemini pricing](https://ai.google.dev/gemini-api/docs/pricing); [Stripe Billing](https://docs.stripe.com/billing); [Stripe webhooks](https://docs.stripe.com/webhooks).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Double charge, negative balance, unpriced model, refund abuse and webhook replay. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Account Credit / Usage Accounting. Account/billing system; links to `CAP-CREATOR-OPERATIONS`. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Gemini gateway, account identity, entitlement plans, Stripe payments. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Every charge has operation ID and pricing basis; failures refund/settle correctly; concurrent/replayed jobs cannot double-spend; top-ups reconcile to payments.

#### J. Verification matrix and evidence required

Concurrent reservation; retry; failure refund; partial generation; webhook replay; ledger reconciliation. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Double charge, negative balance, unpriced model, refund abuse and webhook replay. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

What is the credit unit and pricing policy per model/tool? Which credits expire or roll over?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Ledger reconciliation, low-balance alert, failed settlement queue, refund review and fraud monitoring.

#### O. Next action and handoff

Inspect PR #1276 code/tests and map all model/generation callsites to metering coverage. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 37. Subscription plans, account tiers, entitlements and feature gating

**Priority:** P2 — commercial/release  
**Canonical owner / capability:** Account Entitlement service; Commercial account platform; capability entitlements consumed by all domains.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Inspect the six-plan entitlement/usage foundation already merged and complete the canonical plan catalog, feature entitlement matrix and server-side enforcement. Map each of the 40 capabilities to plan access, limits and upgrade path; ensure frontend gating is only a presentation of backend authorization.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `src/services/subscriptionPlans.ts`; `src/services/billingEntitlement.ts`; `.env.billing.example`; `docs/architecture/PRODUCT_ARCHITECTURE.md`; `docs/governance/TASK_AUTHORITY.md`.
- **Code / folders:** `src/services/subscriptionPlans.ts`; `src/services/billingEntitlement.ts`; `server/account-schema.sql`; `server/account-store.mjs`; route authorization.
- **Known PRs:** #1276 (merged six-plan billing and Gemini credit reservations).
- **Known branches:** `feat/account-entitlement-usage-foundation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Secure-code; data modeling; TDD; product-business-analysis; code review. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Stripe Billing Entitlements](https://docs.stripe.com/billing/entitlements); [Stripe subscriptions](https://docs.stripe.com/billing/subscriptions/overview).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Entitlement drift, feature leakage, accidental lockout, inconsistent limits and plan migration. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Account Entitlement service. Commercial account platform; capability entitlements consumed by all domains. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Account identity, credit ledger, Stripe subscription events, capability registry. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Plan entitlements are defined once, enforced server-side, updated from billing events and consistently reflected in all product surfaces.

#### J. Verification matrix and evidence required

Plan matrix tests; upgrade/downgrade; grace period; revoked access; backend bypass attempts; channel/storage/render limits. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Entitlement drift, feature leakage, accidental lockout, inconsistent limits and plan migration. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

What are the final beta plan names, limits, trials and grandfathering rules? Which features are paid vs public beta?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Entitlement reconciliation, billing webhook lag, plan versioning and support overrides with audit.

#### O. Next action and handoff

Review PR #1276 and build a 40-capability entitlement matrix before changing UI gates. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 38. Stripe checkout, subscription billing, invoices and credit purchases

**Priority:** P2 — commercial/release  
**Canonical owner / capability:** Billing service + Stripe provider adapter; Commercial account infrastructure.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Trace checkout creation, Stripe customer mapping, subscription lifecycle, webhook verification and credit top-up purchase. Complete all billing mutations from signed, idempotent webhook events; reconcile checkout redirects with authoritative Stripe state and implement failure, cancellation, refund and invoice history flows.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `.env.billing.example`; `server/billing-server.mjs`; `src/services/subscriptionPlans.ts`; `src/services/billingEntitlement.ts`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`.
- **Code / folders:** `server/billing-server.mjs`; `server/account-store.mjs`; `server/account-schema.sql`; billing routes/webhook handlers; checkout/settings components.
- **Known PRs:** #1276 (merged billing and credit reservation foundation).
- **Known branches:** `feat/account-entitlement-usage-foundation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Secure-code; Stripe technical research; TDD; code review; incident triage. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Stripe Checkout](https://docs.stripe.com/checkout); [Stripe Billing](https://docs.stripe.com/billing); [Webhooks](https://docs.stripe.com/webhooks); [Customer Portal](https://docs.stripe.com/customer-management).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Webhook spoof/replay, duplicate credit grants, wrong customer binding, tax/legal obligations and production key mishandling. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Billing service + Stripe provider adapter. Commercial account infrastructure. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Account identity, subscription catalog, entitlement service, credit ledger, production Stripe keys. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Test and production checkout work; signed webhooks update entitlements exactly once; failed/canceled/refunded payments reconcile; invoices/history are visible.

#### J. Verification matrix and evidence required

Stripe test clocks; webhook signature/replay; duplicate events; failed payment; cancellation; refund; credit top-up reconciliation. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Webhook spoof/replay, duplicate credit grants, wrong customer binding, tax/legal obligations and production key mishandling. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which Stripe products/prices are final? Is Customer Portal enabled? What tax/invoice requirements apply to launch geographies?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Webhook retry monitor, failed payment notifications, reconciliation job, dispute/refund handling and secret rotation.

#### O. Next action and handoff

Audit merged PR #1276 and run full Stripe test-mode lifecycle before production configuration. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 39. Account settings, privacy, security and data lifecycle controls

**Priority:** P2 — commercial/release  
**Canonical owner / capability:** Account Settings + Auth Canon + domain data owners; Account management and privacy requirement.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Audit all account settings and connected-service controls. Complete profile, Google/YouTube connection, channel selection, AI preferences/BYOK, credits, plan, notifications, security, export, disconnect and account deletion using canonical backend services. Ensure disconnecting YouTube does not delete the ViewTube account and deletion reaches owned data consistently.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/architecture/SIMPLE_AUTH_V1.md`; `docs/capabilities/creator-context.md`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`; `docs/plans/VIEWTUBE_PROVIDER_CREDENTIAL_SECURITY_AND_BYOK_PLAN_2026-10-29.md`.
- **Code / folders:** Settings routes/components; `src/services/auth-canon/`; `server/account-auth.mjs`; `server/account-store.mjs`; BYOK/Gemini services; billing settings.
- **Known PRs:** #1193 settings wiring/provider boundary audit; #1217 key validation; #1276 billing/entitlements.
- **Known branches:** `audit/brain-public-provider-boundaries-2026-10-30`; `feat/gemini-key-validation-surface-20261030`; `feat/account-entitlement-usage-foundation-2026-11-15`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

ViewTube UI coverage audit; secure-code; accessibility; TDD; privacy research. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google account data policy](https://developers.google.com/terms/api-services-user-data-policy); [GDPR overview](https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en); [CCPA](https://oag.ca.gov/privacy/ccpa).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Orphaned personal data, credential leakage, accidental full account deletion, incomplete retention/deletion policy. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Account Settings + Auth Canon + domain data owners. Account management and privacy requirement. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

Auth, account model, channel OAuth, billing, creator context, asset ownership and deletion workflows. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Creator can manage settings, revoke providers, export/delete data and see billing/usage; all actions are permission-checked and audited.

#### J. Verification matrix and evidence required

Settings save/reload; OAuth revoke; BYOK secret handling; export completeness; deletion cascade; account isolation; mobile accessibility. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Orphaned personal data, credential leakage, accidental full account deletion, incomplete retention/deletion policy. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which privacy jurisdictions and retention periods are in launch scope? What support override is permitted?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

Privacy request SLA, export/deletion job monitoring, audit trail and incident escalation.

#### O. Next action and handoff

Map every settings screen to persisted backend fields and verify current PR #1193 findings. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

### 40. Public beta certification, legal/compliance, observability and partner readiness

**Priority:** P2 — commercial/release  
**Canonical owner / capability:** Release program + Product Architecture + Partner Development; Cross-system certification; no new product capability by default.  
**Lifecycle / completion:** `UNASSESSED — Task Authority is authoritative`.  
**Estimated completion:** `NOT ASSESSED` (initial repository discovery only; no acceptance denominator or per-feature verification yet).  

#### A. Start / continue / complete prompt

Run the beta release gates against a fixed integration SHA and real test account/channel. Verify all advertised end-to-end journeys, security/privacy, Google/YouTube compliance, Stripe billing if enabled, support/observability, backups, performance and rollback. Produce a truthful release dossier and partner demo using live verified capabilities; label limitations and roadmap items explicitly.

#### B. Related repository files, code, folders, documents, conversations, branches and PRs

- **Documents:** `docs/deployment/VIEWTUBE_DEPLOYMENT_RELEASE_MASTER_RESOURCE.md`; `docs/partnerships/VIEWTUBE_MASTER_PARTNER_INTELLIGENCE_AND_PITCH_PLANNING.md`; `docs/partnerships/VIEWTUBE_PRIORITY_PARTNER_PITCH_PACK_2026-11.md`; `docs/governance/VERIFICATION.md`; `docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`.
- **Code / folders:** `.github/workflows/`; release metadata; health/diagnostics routes; test suites; deployment config; public landing/signup.
- **Known PRs:** #1262 partner planning; #1263 partner pitch pack; #208 integration branch PR to main; #1201 deployment runtime.
- **Known branches:** `master/consolidated-feature-integration`; `docs/master-partner-pitch-planning-2026-11-13`; `docs/priority-partner-pitch-pack-2026-11-14`.
- **Conversation sources:** search the ViewTube conversations for this exact initiative name and related terms; record exact title/date and link if available. Initial conversation seeds: `40 Essential Requirements for Public Beta Launch` (2026-11-16); `Merge Branches Safely` (2026-11-12); `AI Brain Consolidation Plan` (2026-11-14); other related discussions must be added only after their content is inspected.
- **Task Index:** resolve current canonical VT task IDs through Task Authority; do not allocate IDs from this document.

#### C. Progress log

| Date | Update / discovery | Evidence / refs | Tests / runtime | Blocker / next action |
|---|---|---|---|---|
| 2026-11-16 | Added this initiative dossier. Initial high-level repository tree, capability registry and selected PR/branch metadata inspected; feature-specific audit remains open. | `master/consolidated-feature-integration` @ `8e68004691ab84385b5f0d24fee81b789256278a`; refs above. | Not run for this initiative. | Perform focused current-branch code/PR audit; map canonical task IDs and acceptance evidence. |

#### D. Skills, workflows, developer tools, plugins and useful repositories

Verification-before-completion; code review; AI App Readiness Checker if publishing an MCP app; Agent Ready for public-site readability; product/business analysis. Useful existing tools: GitHub repository/PR/branch/commit inspection; Codelit Product Plan and Plan & Ship templates; repository-local ViewTube skills under `.claude/skills/` and `.codex/skills/`. Install/connect only a provider that fills a demonstrated gap.

#### E. Important knowledge links

[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy); [YouTube API Services Terms](https://developers.google.com/youtube/terms/api-services-terms-of-service); [Google OAuth verification](https://support.google.com/cloud/answer/9110914); [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).

#### F. Scope and explicit non-goals

Scope is limited to the outcome described above and the dependencies required for beta. Overclaiming readiness, Google verification delays, unreviewed terms, production data exposure, untested billing and unstable deploy. Do not expand this into a new subsystem where an existing capability owner can be extended.

#### G. Canonical owner, capability and contracts

Release program + Product Architecture + Partner Development. Cross-system certification; no new product capability by default. Confirm exact schema/API contracts in the current Domain Authority and code before implementation; this resource is not a replacement contract.

#### H. Dependencies, predecessors and critical path

All prior initiatives, support process, legal review, deployment and release approvals. Record upstream task IDs and downstream consumers after Task Index reconciliation.

#### I. Acceptance criteria / definition of done

Five beta journeys are demonstrated with real authorized data; advertised claims match evidence; legal/security blockers resolved; rollback and support ready.

#### J. Verification matrix and evidence required

Full E2E; authenticated YouTube; render/playback; publish/reconcile; payment test; security; mobile; performance; backup restore; release smoke. Evidence must be linked to the exact commit/environment and assessed under Task Authority (`PROVEN`, `SUPPORTED`, `CLAIMED`, `UNKNOWN` or `CONTRADICTED`).

#### K. Security, privacy, compliance, API scopes and quotas

Overclaiming readiness, Google verification delays, unreviewed terms, production data exposure, untested billing and unstable deploy. Recheck provider terms, scope requirements and account eligibility before enabling external operations.

#### L. Risks, assumptions and unresolved constraints

Which features are GA-beta enabled, waitlisted, invite-only or disabled? Who approves the final public release and partner claims?

#### M. Decisions, alternatives and open questions

Record proposed versus confirmed decisions separately, including decision date, rationale, source and affected capability. Do not silently resolve conflicts between branches, plans or prior conversations.

#### N. Operational readiness, monitoring and recovery

On-call owner, incident playbooks, status page, user feedback intake, backup restore, release rollback and partner demo environment.

#### O. Next action and handoff

Build an evidence-backed beta certification matrix and do not announce readiness until every mandatory gate has proof. Handoff must include current branch/commit, files changed, tests run, evidence, blockers and exact next action.

---

## 6. Shared implementation and verification requirements

| Cross-cutting requirement | Required outcome |
|---|---|
| Canonical identity | User, creator, channel, Project, ContentBuild, asset/version, operation, publish and outcome IDs remain traceable. |
| One owner per fact class | Analytics truth, creator context, evidence, assets, projects, operations, publishing and billing have one canonical owner each. |
| API/provider contracts | Typed schemas, auth/scope checks, quota, pagination, retries, error normalization and version/deprecation review. |
| Persistence | Durable records, migrations, backup/restore, idempotency and no hidden browser-only production dependency. |
| Security | Server-side authorization, tenant isolation, secret handling, signed URLs, CSRF/state validation, webhook signatures and audit. |
| Background work | Durable queues, operation identity, retry/cancel, progress, receipt, recovery and notifications. |
| Evidence and provenance | Source, timestamp, scope, freshness, missingness and derived-vs-observed distinction. |
| Observability | Logs, metrics, traces, health checks, alert thresholds, provider cost/quota and incident runbooks. |
| User experience | Real backend wiring, truthful loading/empty/error/disconnected/permission states, mobile/accessibility and help. |
| Verification | Focused tests, integration tests, build, runtime, authenticated external behavior, responsive/visual inspection and receipt. |
| Release controls | Feature flags/entitlements, staged rollout, rollback, data migration and support readiness. |

## 7. Ten additional master-level sections

These sections support the per-initiative dossiers and make the 40-item program easier to govern:

1. **Executive readiness dashboard:** generated view of priority, maturity axes, evidence confidence, blockers and next gate; derive from Task Index and receipts rather than hand-maintained numbers.
2. **Capability-to-initiative crosswalk:** map every initiative to CAP IDs, Domain Authorities, plan families, Master Tools and user journeys; preserve many-to-many relationships.
3. **Dependency graph and critical path:** typed `requires`/`blocks` relationships; identify upstream gates and safe parallel work.
4. **Existing-work and donor migration ledger:** record branch/PR source SHA, merge-base, unique changes, conflicts, destination, tests and disposition before selective porting.
5. **API/scope/provider catalog:** provider, endpoint/tool, scope, data class, quotas, pricing, policy, owner, status, fallback and deprecation watch.
6. **Data dictionary and lineage map:** canonical entities, IDs, schemas, field semantics, retention, source and downstream consumers.
7. **Risk, compliance and release-blocker register:** severity, likelihood, owner, mitigation, evidence and decision; distinguish hard blockers from accepted beta limitations.
8. **Decision and assumptions register:** proposed/confirmed/superseded decisions, alternatives, rationale, sources and impact.
9. **Test account, fixture and demo scenario catalog:** safe test channels, synthetic fixtures clearly labelled, account permissions, demo reset procedure and no production secrets.
10. **Partner claim and evidence ledger:** every pitch claim linked to a working route, real capability, demo proof, limitation and roadmap classification.

## 8. Recommended implementation workflows and installed tools

- **ViewTube Document System** — governs document creation, registry updates, prior-art reconciliation and verification.
- **ViewTube Convergence Governance** — resolves CAP IDs, capability homes, plan families, branches/PRs and duplicate implementations.
- **ViewTube Ideas Curator** — existing idea ingestion and deduplication process. Canonical stores are `ideas/registry.json` and `ideas/MASTER_IDEAS.md`; command: `npm run generate:ideas-master`. Do not create another ideas database.
- **ViewTube Task Authority** — canonical task IDs, lifecycle, maturity axes and evidence-gated completion. This document must not override it.
- **ViewTube YouTube Editor System** — mandatory for initiatives 22–26 and any Editor/Remotion work; follow `AGENTS.md`.
- **Superpowers:** brainstorming, writing-plans, TDD, systematic-debugging, code review, verification-before-completion and branch finishing as appropriate.
- **Matt Skills Curated:** repository understanding, research, secure-code, code-review, data-quality and implementation planning.
- **Data skills:** data index, product/business analysis, build-report, design-KPIs, data-quality and dashboard/visualization workflows for analytics initiatives.
- **Codelit:** Product Plan, System Architecture and Plan & Ship templates were inspected. Codelit returns public templates only; it does not save drafts or execute code.
- **GitHub connector:** use it for source files, trees, branches, commits, PRs, checks and changes. Verify each ref before writing.
- **Product Design:** already installed; use for UX audits/prototypes when an initiative requires product experience work. Avoid making frontend redesign the default solution to backend gaps.
- **No separate installable product named “Idea Generator” was returned by plugin discovery.** The repository's governed `viewtube-ideas-curator` skill is already present and is the correct existing idea workflow. Do not install an unrelated app or create a duplicate generator just to satisfy a name.

## 9. Current known branch and PR reference index

| PR | Branch | Base | Observed state | Relevance / caution |
|---:|---|---|---|---|
| [#208](https://github.com/viewtube-dev/viewtube/pull/208) | `master/consolidated-feature-integration` | `main` | Open | Integration baseline observed at `8e680046`; branch itself is not main. |
| [#1276](https://github.com/viewtube-dev/viewtube/pull/1276) | `feat/account-entitlement-usage-foundation-2026-11-15` | `master/consolidated-feature-integration` | Merged | Six-plan billing/entitlement and Gemini credit reservation foundation; inspect actual tests and runtime coverage. |
| [#1256](https://github.com/viewtube-dev/viewtube/pull/1256) | `feat/brain-learning-canonical-evidence-resolution-phase-2c-2026-11-11` | `master/consolidated-feature-integration` | Merged | Brain learning evidence resolution. |
| [#1254](https://github.com/viewtube-dev/viewtube/pull/1254) | `feat/brain-learning-evidence-validation-phase-2b-2026-11-11` | `master/consolidated-feature-integration` | Closed, not merged in observed metadata | Preserve as donor; inspect unique changes. |
| [#1241](https://github.com/viewtube-dev/viewtube/pull/1241) | `fix/brain-gemini-context-grounding-phases-2-5-rebased` | `master/consolidated-feature-integration` | Open | Context provenance work; inspect review/check status and changes. |
| [#1206](https://github.com/viewtube-dev/viewtube/pull/1206) | `publish-ambiguous-outcome-recovery` | `master/consolidated-feature-integration` | Merged | Publishing retry/reconciliation foundation. |
| [#1201](https://github.com/viewtube-dev/viewtube/pull/1201) | `fix/render-production-no-database-fallback` | `master/consolidated-feature-integration` | Merged | Render runtime/DB fallback work; verify current deployment behavior. |
| [#1193](https://github.com/viewtube-dev/viewtube/pull/1193) | `audit/brain-public-provider-boundaries-2026-10-30` | `master/consolidated-feature-integration` | Closed, merged status to be checked from live PR metadata | Auth/provider/Settings audit. |
| [#1211](https://github.com/viewtube-dev/viewtube/pull/1211) | `audit/brain-capability-runtime-verification-2026-10-30` | `master/consolidated-feature-integration` | Closed, merged status to be checked | Brain capability runtime evidence. |
| [#1262](https://github.com/viewtube-dev/viewtube/pull/1262) | `docs/master-partner-pitch-planning-2026-11-13` | `master/consolidated-feature-integration` | Merged | Partner intelligence/playbook. |
| [#1263](https://github.com/viewtube-dev/viewtube/pull/1263) | `docs/priority-partner-pitch-pack-2026-11-14` | `master/consolidated-feature-integration` | Merged | Partner pitch pack. |
| [#1278](https://github.com/viewtube-dev/viewtube/pull/1278) | `feat/projects-calendar-phase-0-1-source-integration-2026-11-15` | `fix/studio-controls-regression-recovery-2026-10-31` | Merged | Calendar work on Studio recovery branch; not automatically in master integration. |
| [#1280](https://github.com/viewtube-dev/viewtube/pull/1280) | `feat/projects-calendar-phases-5-7-2026-11-15` | `fix/studio-controls-regression-recovery-2026-10-31` | Merged | Calendar phases 5–7 on Studio recovery branch; selective migration required. |

This index is a starter snapshot from the observed GitHub results, not a complete branch census. Add exact head/base SHAs, merge commits, changed-file inventories, checks and review conclusions during each initiative audit.

## 10. Conversation and knowledge intake log

| Date | Conversation / source | Topics to reconcile | Status |
|---|---|---|---|
| 2026-11-16 | `40 Essential Requirements for Public Beta Launch` | 40 initiative baseline; preserve requested scope and priorities. | Captured in this resource; repository crosswalk in progress. |
| 2026-11-14 | `AI Brain Consolidation Plan` | Brain runtime, evidence, context, capability consolidation and branch work. | Candidate source; inspect exact conversation and map unique work. |
| 2026-11-12 | `Merge Branches Safely` | Branches with post-merge updates; Vault, Resource Library and Brain audit. | Candidate source; must be reconciled to current PR/branch refs. |
| 2026-11-15 | `Calendar Redesign Plan` and calendar branch threads | Calendar phases, PR #1278/#1280 and selective migration. | Branch/PR relationship noted; detailed task crosswalk open. |
| 2026-11-14 | `New chat` / public beta readiness planning | Public beta and partner capability scope. | Current request is source for this reference. |

Conversation links are intentionally not fabricated. Add actual conversation URLs/IDs only when available through an authorized conversation export or handoff package.

## 11. Update log

| Date | Change | Evidence |
|---|---|---|
| 2026-11-16 | Initial living resource created on a feature branch from `master/consolidated-feature-integration`. Added 40 initiative dossiers, common dossier fields, 10 additional per-initiative sections, 10 master-level governance sections, starter branch/PR index and conversation intake log. | Branch base `8e68004691ab84385b5f0d24fee81b789256278a`; current repository tree, `AGENTS.md`, Product Architecture, Product Completion Constitution, Integrated Application Program, Task Authority, Verification, capability registry, Ideas Curator and Codelit templates inspected. |
| 2026-11-16 | Confirmed existing Ideas Curator and Ideas Library are the governed idea intake system; no separate installable plugin named Idea Generator was found in plugin search. | `.claude/skills/viewtube-ideas-curator/SKILL.md`; `ideas/README.md`; `ideas/registry.json`; `ideas/MASTER_IDEAS.md`; plugin discovery result. |

## 12. Release decision record

No public beta readiness decision is made by this document. A release decision requires a dated, authorized review of the five end-to-end gates: (1) signup/authentication/YouTube connection and sync; (2) Brain with real evidence and permissions; (3) project-to-video render/export; (4) approved YouTube publish and analytics reconciliation; (5) paid checkout/entitlements/credit accounting if paid beta is enabled. Record accepted limitations, owner approvals and deployment evidence in the release receipt and Task Authority.

## 13. Quick update template

Copy this block into the relevant initiative's Progress Log when new work is discovered:

```text
Date (YYYY-MM-DD):
Initiative # / title:
Source branch + exact commit SHA:
PR / issue / mission:
Files and code changed or inspected:
Discovery / change / bug / hurdle:
Decision (proposed or confirmed) + source:
Tests / build / runtime / authenticated flow:
Evidence refs + assessment:
Task Authority ID / lifecycle (read from canonical Task Index):
Maturity axes changed (architecture/backend/frontend/integration/tests/runtime/responsive/documentation/release):
Estimated completion (method, denominator, confidence; or NOT ASSESSED):
Blockers / risks:
Next action / handoff:
```

## 14. Source authorities and navigation

- [`AGENTS.md`](../../AGENTS.md)
- [`docs/governance/DOCUMENTATION.md`](../governance/DOCUMENTATION.md)
- [`docs/registry.json`](../registry.json)
- [`docs/governance/TASK_AUTHORITY.md`](../governance/TASK_AUTHORITY.md)
- [`docs/governance/VERIFICATION.md`](../governance/VERIFICATION.md)
- [`docs/architecture/PRODUCT_ARCHITECTURE.md`](../architecture/PRODUCT_ARCHITECTURE.md)
- [`docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md`](../architecture/PRODUCT_COMPLETION_CONSTITUTION.md)
- [`docs/programs/INTEGRATED_APPLICATION.md`](../programs/INTEGRATED_APPLICATION.md)
- [`docs/architecture/capabilities.json`](../architecture/capabilities.json)
- [`governance/convergence/plan-families.json`](../../governance/convergence/plan-families.json)
- [`ideas/README.md`](../../ideas/README.md)
- [`ideas/MASTER_IDEAS.md`](../../ideas/MASTER_IDEAS.md)
- [`docs/partnerships/VIEWTUBE_MASTER_PARTNER_INTELLIGENCE_AND_PITCH_PLANNING.md`](../partnerships/VIEWTUBE_MASTER_PARTNER_INTELLIGENCE_AND_PITCH_PLANNING.md)
- [`docs/partnerships/VIEWTUBE_PRIORITY_PARTNER_PITCH_PACK_2026-11.md`](../partnerships/VIEWTUBE_PRIORITY_PARTNER_PITCH_PACK_2026-11.md)

---

**Maintenance principle:** this document should get more useful with every verified discovery, migration, implementation, test and release. It should never become a parallel task-status database or a reason to rebuild a capability that already exists.