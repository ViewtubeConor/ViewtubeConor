# Comment Management — Master Resource Reference & Workflow Handoff

**Production date:** 2026-11-15  
**Class:** MASTER RESOURCE / IMPLEMENTATION HANDOFF  
**Registry ID:** DOC-HANDOFF-COMMENT-MANAGEMENT-MASTER-20261115  
**Status:** ACTIVE — implementation and verification in progress  
**Repository:** `viewtube-dev/viewtube`  
**PR:** [#1274 — Redesign Studio Hub Comment Management workspace](https://github.com/viewtube-dev/viewtube/pull/1274)  
**Working branch:** `feat/comment-management-studio-redesign-2026-11-14`  
**Target:** `master/consolidated-feature-integration`  
**Implementation head covered by the latest recorded implementation workflow:** `7e8e5dbe5850e37e16407d82c8a0f504cf2fb21b`  
**Master handoff documentation commit:** `bd852de9caadda6cfa7511a7bcbd54d3dc7f2b0e` (this documentation-only commit advances the PR branch; no workflow run was returned for it at verification time).  
**Latest completed implementation workflow recorded by PR:** [43699978637](https://github.com/viewtube-dev/viewtube/actions/runs/43699978637) — FAILURE  
**Merge / production:** Not claimed. PR remains draft and is not merge-ready.

> This is the navigation and resumption document for the Comment Management workflow. It does not replace the feature specification, the Toolbox Workflow Convergence plan/todo, Task Authority, or the conversation intake package. It consolidates their relationships, system boundaries, process, implementation phases, evidence and next actions so a new developer or agent can resume without reconstructing the conversation.

## 1. Start here — authoritative resource map

| Need | Canonical resource | Authority |
|---|---|---|
| End-to-end product, UX, ownership, API/security, future scope | [Comment Management Workspace specification](../product/studio-hub/COMMENT_MANAGEMENT_WORKSPACE.md) | Feature-level product/technical specification; registry ID `DOC-SPEC-COMMENT-MANAGEMENT` |
| Current implementation checklist and phase state | [Toolbox Workflow Convergence todo](../../../tasks/toolbox-workflow-convergence/todo.md) | Surviving implementation checklist |
| Broader architecture and convergence rationale | [Toolbox Workflow Convergence plan](../../../tasks/toolbox-workflow-convergence/plan.md) | Existing cross-tool workflow plan; Comment Management is one work package |
| Conversation context, decisions and resume instructions | [Conversation handoff](../../../tasks/conversation-intake/VT-CONV-COMMENT-MANAGEMENT-STUDIO-2026-11-15/handoff.md) | Resumability record |
| All captured conversation work | [Conversation worklog](../../../tasks/conversation-intake/VT-CONV-COMMENT-MANAGEMENT-STUDIO-2026-11-15/worklog.json) | Intake inventory; not a task ledger |
| Reconciliation/disposition receipt | [Conversation review](../../../tasks/conversation-intake/VT-CONV-COMMENT-MANAGEMENT-STUDIO-2026-11-15/review.md) | Work deduplication and routing receipt |
| Studio Hub tool ownership | [Studio Hub Master Tool Architecture](../VIEWTUBE_STUDIO_HUB_MASTER_TOOL_ARCHITECTURE.md) | Cross-tool product architecture |
| Conversation handoff governance | [Conversation Handoffs](../../governance/CONVERSATION_HANDOFFS.md) | Global intake/handoff process |
| Task creation and permanent task identity | [Task Authority](../../governance/TASK_AUTHORITY.md) | Only authority for canonical task allocation |
| Product and domain boundaries | [Product Architecture](../../architecture/PRODUCT_ARCHITECTURE.md) and domain authorities | Canonical ownership |
| PR implementation and CI evidence | [PR #1274](https://github.com/viewtube-dev/viewtube/pull/1274) | Current code review and workflow status |

**Precedence rule:** current source code and tests establish implementation truth; governance/domain authorities establish ownership; the feature specification establishes intended Comment Management behavior; the convergence todo establishes unfinished work; PR checks establish only the commit and jobs they actually tested. If records disagree, inspect the current branch and update the relevant canonical record rather than silently choosing a stale summary.

## 2. Mission and intended product outcome

Turn the existing Studio Hub Comment Responder / Comment Operations capability into a creator-facing **Comment Management** workspace that supports conversation triage, context comprehension, AI-assisted reply drafting, video recommendations, audience insight review and safe moderation—without creating a second backend, controller, persistence layer, AI runtime, evidence store or task system.

The workspace is an operational surface, not a generic chatbot or a second application nested inside Studio Hub.

### Goals

- Make comment queues and conversation history understandable and actionable.
- Reduce visual nesting and redundant toolbox framing.
- Preserve the existing shared creator-engagement controller and YouTube service boundary.
- Keep AI suggestions reviewable and creator-controlled.
- Carry source-attributed comment/video evidence into existing Brain, Audience, Video Inspector and Project workflows.
- Establish typed contracts, robust loading/error/permission behavior, responsive interaction and accessibility.
- Make future capability additions fit stable workspace regions and governed registries.

### Explicit non-goals / safety constraints

- No autonomous public replies or autonomous moderation.
- No silent posting, silent recommendation insertion, or bulk external writes.
- No new comment database, synchronization owner, audience store, evidence store, ActionPacket system or Brain runtime.
- No replacement of the existing Brain gateway, prompt registry or model orchestration.
- No assumption that YouTube supports every desired moderation action.
- No unsupported OAuth scope, quota, retention or data-access claims.
- The 65 opportunity items are candidates, not automatic implementation commitments.
- No merge, release or production deployment claim until evidence and review gates are satisfied.

## 3. Existing system architecture and ownership

The convergence decision is **EXTEND** the existing Comment Responder / Comment Operations capability. Preserve the current owners:

| Layer | Existing owner | Responsibility / rule |
|---|---|---|
| Studio Hub shell | `src/views/StudioHub.tsx` and existing `ToolboxScaffold` | Owns the one outer Studio toolbox shell and navigation |
| Workspace UI | `src/components/CommentResponder.tsx` | Owns internal Comment Management presentation; do not add a nested SubToolbox |
| Shared interaction/controller | `src/features/creator-engagement/useCommentResponderController.ts` | Queue, selection, drafts, recommendations, reply and moderation state/actions |
| Domain contracts/context | `src/features/creator-engagement/types.ts`, `useCreatorEngagementContext.ts` | Typed creator, channel, comment and engagement context |
| YouTube transport | Existing YouTube services, including `src/services/simpleYouTubeApi.ts` | Provider API and typed comment/thread/page contracts; do not bypass with UI-owned fetches |
| Brain integration | `src/services/brain/commentEngagement.ts`, existing Brain gateway and capability integration | Draft/recommendation intelligence; no second runtime |
| Audience projection | `audiencePulse.ts` | Read-only projection over loaded records; expose sample coverage and heuristic limits |
| Evidence handoff | `audiencePulseHandoff.ts` and existing `ViewTubeActionPacket` flow | Proposal/evidence handoff; not a new persistence system |
| Shared presentation parity | Dashboard and Studio shared CommentResponder/controller | Preserve parity and test both entry points |
| Toolbox UI primitives | Existing Toolbox/SubToolbox and Studio Controls authorities | Reuse canonical shell, fields, buttons, sizing, focus and token rules |

### Primary implementation paths

- `src/components/CommentResponder.tsx`
- `src/components/CommentResponder.contract.test.ts`
- `src/features/creator-engagement/types.ts`
- `src/features/creator-engagement/useCommentResponderController.ts`
- `src/features/creator-engagement/creatorEngagementParity.test.ts`
- `src/features/creator-engagement/useCreatorEngagementContext.ts`
- `src/features/creator-engagement/audiencePulse.ts`
- `src/features/creator-engagement/audiencePulseHandoff.ts`
- `src/services/brain/commentEngagement.ts`
- `src/views/StudioHub.tsx`
- `src/services/simpleYouTubeApi.ts` (service-owned provider contracts)

The exact changed-file list is the PR diff, not this illustrative ownership map.

## 4. Workspace interaction and design contract

The workspace has four stable regions. These are UI composition boundaries, not new service owners.

### 4.1 Inbox and triage

- New/unreplied and replied/history queue views.
- Selectable comments with clear selected and keyboard-focus states.
- Author, excerpt, timestamp and only provider-returned counts/metadata.
- Previous/next navigation remains secondary to direct selection.
- Refresh/reconnect and explicit loading, empty, error, disconnected, stale and permission-limited states.
- Stable thread identity from provider/domain IDs.
- Search/filter must disclose whether it covers the loaded page or the full server-side result set.
- Never fabricate queue totals or imply a partial page is a complete inbox.

### 4.2 Conversation and video context

- Render original comment and available replies in chronological order.
- Distinguish creator replies by channel identity, not display-name guesses.
- Keep associated video context compact and link to Video Inspector only through an existing supported route/context contract.
- Preserve comment, thread, video IDs and source references in handoffs.
- Incomplete thread retrieval must be visibly incomplete, not presented as a complete conversation.

### 4.3 AI Response Studio

- Generate and Refine create/edit drafts; they never publish.
- Suggest Videos returns reviewable recommendations with source identity and rationale.
- Creator explicitly chooses Add to reply or Dismiss; recommendation state is scoped to the selected comment and cleared after successful posting.
- Editing remains creator-controlled.
- Explicit Post Reply is the only public-write trigger.
- Enter inserts a newline; do not add implicit submit behavior.
- Prevent duplicate submissions while in flight; reconcile ambiguous network outcomes before retry.
- Drafts must remain scoped to their comment/thread and must not leak across selection changes.
- Provide loading, error, stale-context and retry feedback.
- Do not invent match scores, confidence, evidence or source metadata.

### 4.4 Audience Intelligence / Audience Pulse

- Current Audience Pulse is a read-only projection over loaded source records with conservative heuristic intent classification.
- It is not full semantic sentiment analysis, demographic profiling, robust clustering or representative channel-wide research.
- Show source attribution, evidence IDs, sample coverage and limitations.
- Never fabricate intent, sentiment, counts, segments or urgency.
- Suggested destinations are advisory and capability/registry filtered.
- Handoffs remain proposals until the destination owner and creator explicitly accept them.
- Evidence chain: source records → Audience Pulse evidence packet → Brain review/interpretation → Brain-authored typed Project proposal → Project Builder draft → creator confirmation → canonical Project/ContentBuild creation.

## 5. System interaction flow

```text
YouTube account / channel context
        |
        v
Existing YouTube service boundary
        |
        v
Typed comment / thread / page contracts
        |
        v
Creator Engagement controller
        |
        +------------------------------+
        |                              |
        v                              v
Comment Management UI            Audience Pulse
        |                              |
        |                              v
        |                       Evidence / ActionPacket proposal
        |                              |
        v                              v
Existing Brain comment service    Brain review / interpretation
        |                              |
        v                              v
Draft + video recommendations     Typed Project proposal
        |                              |
        v                              v
Creator review / edit             Project Builder draft
        |                              |
        v                              v
Explicit Post Reply               Creator confirmation
        |                              |
        v                              v
Existing authorized YouTube API   Canonical Project / ContentBuild
```

No branch in this flow may bypass creator approval for externally visible writes. Preserve provenance from source record through derived suggestion and destination handoff.

## 6. Conversation and repository workflow process

Use the following process for every continuation. It follows the repository's Conversation Handoffs, Documentation Governance, Task Authority, Convergence and Verification authorities.

### Step A — Re-establish truth before editing

1. Fetch PR #1274 metadata, current head SHA, base SHA, draft/open state and changed files.
2. Fetch current target branch SHA and compare it with the PR base.
3. Read this master reference, the feature specification, convergence plan/todo, handoff, worklog and review.
4. Inspect current code/tests at the exact PR head; do not rely on stale conversation summaries.
5. Fetch the latest workflow runs for the exact head and inspect failing job logs.
6. Record exact SHAs, run IDs, job names and outcomes before changing code.

### Step B — Reconcile existing work, avoid duplication

1. Search existing code, tests, routes, registries, ideas, tasks and documentation before adding anything.
2. Classify each item as implemented and evidenced, partially implemented, planned, blocked, superseded, duplicate or unsupported.
3. Extend the existing controller/service/registry/plan when an owner already exists.
4. Do not create a parallel branch, PR, controller, store, runtime, task ledger or handoff package for this same work.
5. Update the canonical checklist and evidence record; do not use this master reference as a second live task tracker.

### Step C — Implement with evidence

1. Reproduce the defect or missing behavior.
2. Add/adjust a focused regression test first where behavior changes.
3. Implement the smallest change in the canonical owner.
4. Preserve type safety, accessibility, provider permission boundaries and shared Studio/Dashboard behavior.
5. Run focused tests, typecheck, relevant audits and production build.
6. Inspect the diff for unrelated edits, duplicate CSS/overrides, test weakening and generated-file drift.
7. Commit and push only actual code/document changes; record the resulting SHA and evidence.

### Step D — Verify branch and target separately

- Run the exact same failing gates against the exact target SHA without mutating the target branch.
- Compare results by job, test and diagnostic, not just pass/fail totals.
- A failure is “branch-introduced” only with evidence from target-vs-feature comparison.
- A failure is “baseline” only when reproduced on the target under comparable environment/configuration.
- If target baseline cannot be run, leave attribution **unknown**.
- Re-run all required release gates on the final PR head after fixes; earlier runs do not certify later commits.

### Step E — Close the loop

- Update `tasks/toolbox-workflow-convergence/todo.md` with checkboxes and a dated evidence receipt.
- Update the feature specification only when product/system contract changes.
- Update conversation worklog/review when a new conversation contributes durable work or changes disposition.
- Update this master resource only when navigation, ownership, phase order, evidence pointer or resume instructions materially change.
- Resolve task allocation through Task Authority; do not invent permanent VT IDs.
- Keep PR draft until all required acceptance and verification gates pass.
- Never merge or deploy without explicit authorization and verified readiness.

## 7. Implementation phases and acceptance gates

The canonical live checkbox state is in `tasks/toolbox-workflow-convergence/todo.md`. The phase summaries below are a navigation map, not a duplicate task ledger.

### Phase 0 — Baseline and reconciliation

- Audit exact current target and feature heads.
- Inventory relevant branches, PRs, code owners, docs, registries and existing task work.
- Build a no-loss donor map for prior implementation.
- Distinguish existing capability from proposed additions.
- Checkpoint: no duplicate implementation or new owner; no work declared complete without evidence.

### Phase 1 — Shared contracts and workspace shell

- Preserve the single outer `ToolboxScaffold`.
- Remove redundant inner shell/wrapper.
- Establish selectable inbox and stable thread identity.
- Preserve controller and Dashboard/Studio parity.
- Define typed provider comment/thread/page contracts at the service boundary.
- Checkpoint: one canonical controller and service boundary; no untyped comment-flow state; keyboard-operable selection and explicit states.

### Phase 2 — Core comment workflow

- Preserve Generate, Refine, Suggest Videos, review, Add to reply, Dismiss and explicit Post Reply semantics.
- Keep recommendation/draft state scoped to thread identity.
- Cover incomplete/hydrated threads and creator-reply partitioning.
- Checkpoint: feature-specific contract tests and creator-engagement parity tests pass without weakening assertions.

### Phase 3 — CI and regression attribution

- Reconcile previously failing CommentResponder compact-textarea and Post Reply accessible-label assertions.
- Run focused Comment Management contracts, parity, typecheck, full suite, Studio counter/dropdown gate, confirmed-catalog audit, document audit, build and smoke.
- Run exact target-branch baseline for every broader failure.
- Fix only proven feature-owned regressions in this PR; route unrelated Studio Controls/catalog issues to their canonical workstream.
- Checkpoint: all release gates pass on the final head or each remaining failure has a reviewed, evidence-backed disposition and PR stays draft.

### Phase 4 — Brain evidence and recommendation quality

- Expand comment context only with permitted, source-attributed thread/video evidence.
- Reuse existing Brain gateway/service and capability registration.
- Add fixtures for strong match, weak/no match, excluded source video, invalid/unknown IDs and sparse metadata.
- Preserve evidence lineage and explicit creator review.
- Checkpoint: no unsupported model context, fabricated evidence, or second Brain runtime.

### Phase 5 — Moderation safety and API feasibility

- Verify current official YouTube endpoint, scope, quota, policy, permission, audit ownership and retry behavior per action.
- Existing foundation reported: `moderateSimpleComment` / `markCommentAsSpam`, authenticated server routes, `data.comments.manage`, and `youtube.force-ssl`.
- Wire only existing verified actions with per-action permission gating, explicit confirmation, result receipt and success/error refresh.
- Verify delete, pin, heart and bulk operations independently; do not expose unsupported actions.
- Checkpoint: every mutation is explicit, authorized, test-covered and auditable.

### Phase 6 — Audience Pulse and opportunity portfolio

- Validate sample coverage and heuristic limitations.
- Preserve the 40 product improvement ideas and 25 community interaction workflows in the feature specification and registered opportunity source list `IDEA-LIST-COMMENT-MANAGEMENT-001`, attached to existing `IDEA-YT-004`.
- Reconcile against `IDEA-WF-029` Comment Response Campaign, `IDEA-WF-008` Comment to Community Campaign and `IDEA-SPA-013` Comment-to-Content Opportunity Miner.
- Promote only selected, deduplicated items through the Ideas Registry and Task Authority.
- Checkpoint: no candidate idea silently becomes committed implementation work.

### Phase 7 — Responsive, accessibility and connection certification

- Certify desktop, tablet and mobile; portrait and landscape.
- Test keyboard navigation, focus visibility, accessible names/labels, touch targets, text scaling and screen-reader semantics.
- Cover connected, disconnected, reconnecting, permission denied, loading, empty, stale and error states.
- Capture screenshots and record viewport, build SHA, route, state and findings.
- Checkpoint: all workspace regions usable across target form factors with no regressions to shared primitives.

### Phase 8 — Final governance and release readiness

- Re-run full release gates on exact final PR head.
- Reconcile every failure against target baseline.
- Confirm documentation registry and task/worklog references.
- Review PR diff and approvals.
- Mark ready only when acceptance, security, accessibility, API and CI requirements are met.
- Merge/deploy only through the repository's authorized release process and explicit approval.

## 8. Current implementation and CI evidence snapshot

**Important:** this is the latest evidence captured in the PR description and existing handoff records at the time this master reference was authored. Re-fetch PR #1274 and Actions before relying on it for a new implementation decision.

PR #1274 records latest head `7e8e5dbe5850e37e16407d82c8a0f504cf2fb21b`, base `52c6e90f`, and comparison of 52 commits ahead / 0 behind. The latest completed workflow recorded in the PR body is [43699978637](https://github.com/viewtube-dev/viewtube/actions/runs/43699978637), which completed **FAILURE**.

### Passing on that recorded run

- Production build.
- Local smoke.
- Brain quality-loop.
- Gemini governance.
- Dedicated Comment Management workspace/shared engagement contract step.
- `CommentResponder.contract.test.ts`: 9 tests.
- `creatorEngagementParity.test.ts`: 4 tests.

The two earlier CommentResponder assertions—compact textarea source contract and Post Reply accessible-label source contract—are now reported passing. No assertion was weakened.

### Remaining failures reported

1. **Studio counter/dropdown regression gate:** three assertions involving double-split counter width, dropdown accent ownership and hard-coded palette values.
2. **Typecheck:** cross-domain Brain evidence/test typing, StudioControls export/size contracts, ValueToggles prop typing and missing `@testing-library/react`. No diagnostics were reported in the modified comment API/controller/component paths in the captured report.
3. **Confirmed catalog audit:** missing split-text-input stylesheet/specimens and Studio field/focus/toggle/split-input contracts.
4. **Document audit:** six competing ACTIVE P1 workstream concern families.
5. **Full suite:** 296 failures across 86 files; 585 passed across 671.

The implicated Studio/catalog files were reported outside the PR diff. The PR comparison is not a substitute for an exact target-branch workflow baseline. Do not call these failures pre-existing until the same gates have been run against the exact target SHA.

Earlier records reference workflow runs `43677671858`, `43688189005` (cancelled), `43699044473` and `43699978637`. The latest PR body supersedes earlier status summaries where run IDs or totals differ. Always use the latest completed run on the exact current head.

## 9. Outstanding work — resume order

The current authoritative checkbox list is `tasks/toolbox-workflow-convergence/todo.md`. The practical execution order is:

1. **Refresh repository truth:** fetch current PR #1274 head/base, target SHA, current changed files and latest Actions run; verify whether `7e8e5dbe` and run `43699978637` remain current.
2. **Target baseline:** run the failed typecheck, full suite, confirmed-catalog, document-audit and Studio counter/dropdown gates against the exact target SHA. Do not mutate target.
3. **Triage failures:** map each diagnostic to changed path, owner, test and target result. Fix only proven Comment Management/PR regressions here; route Studio Controls and document-governance conflicts to their canonical owners.
4. **Brain evidence:** add approved thread/video context and recommendation fixtures through existing Brain services.
5. **Moderation:** validate every exposed route/permission and explicit confirmation before UI controls are enabled.
6. **Audience Pulse:** validate source coverage, heuristic claims and ActionPacket handoff.
7. **Responsive/accessibility:** finish screenshot, keyboard, focus, touch and connection-state certification.
8. **Final CI:** run complete release gates on final head, update checklist and PR description, retain draft until ready.

## 10. Test and verification matrix

| Layer | Required evidence |
|---|---|
| Comment workspace | `CommentResponder.contract.test.ts` including explicit posting and recommendation review |
| Shared behavior | `creatorEngagementParity.test.ts` across Studio and Dashboard |
| Typed data | Service comment/thread/page contracts; hydrated/incomplete thread fixtures; creator-reply partition |
| Brain | Source-attributed context fixtures; strong/weak/no-match, excluded source, invalid IDs and sparse metadata |
| Moderation | Permission denied/allowed, confirmation, success, rejected/spam, failure, refresh and retry behavior |
| Audience Pulse | Sample coverage, heuristic limitations, evidence identity and handoff acceptance |
| Static quality | Typecheck and lint/static checks |
| Regression | Studio counter/dropdown gate and confirmed-catalog audit |
| Governance | Document audit, registry integrity and task authority review |
| Integration | Full test suite, production build and local smoke |
| UI | Desktop/tablet/mobile screenshots; keyboard/focus/touch; all connection and empty/error states |
| Release | Full CI on exact final PR head; target baseline comparison for disputed failures |

A green build alone is not a release certificate. Focused feature tests passing does not imply the full suite passes.

## 11. Idea and workflow relationships

The feature specification retains 65 candidate opportunities (40 product improvements and 25 audience/community interaction workflows) under `IDEA-LIST-COMMENT-MANAGEMENT-001`, attached to existing `IDEA-YT-004`.

Related existing ideas/workflows:
- `IDEA-YT-004` — Comment & Community Operations Toolbox.
- `IDEA-WF-029` — Comment Response Campaign.
- `IDEA-WF-008` — Comment to Community Campaign.
- `IDEA-SPA-013` — Comment-to-Content Opportunity Miner.

Relationship rules:
- Comment Response Campaign executes through the Comment/Community Operations workspace.
- Comment-to-Content Opportunity Miner is complementary analysis, not a replacement responder.
- Comment evidence may seed a content opportunity, but evidence packet, Brain interpretation, Project proposal and canonical Project creation remain separate governed steps.
- Do not allocate 65 tasks simply because 65 ideas are catalogued.
- Deduplicate and route accepted opportunities through existing Ideas Registry and Task Authority.

## 12. Governance, status and change control

- This document is a master navigation/handoff resource, not a new domain authority or task ledger.
- The product specification is subordinate to Product Architecture, domain authorities and governance.
- The convergence todo remains the only surviving implementation checklist for this work package.
- The conversation worklog is an intake inventory, not canonical task status.
- Permanent VT task IDs must not be invented. Resolve the current Task Index writer path and candidate identity through Task Authority before mutation.
- Keep implementation and docs on the existing PR branch unless repository evidence or user direction requires otherwise.
- Do not create duplicate Comment Management PRs, plans, stores, controllers or handoff packages.
- Preserve provenance and record exact commit/run IDs for each material verification claim.
- When a new phase changes architecture or scope, update the feature specification and relevant authority; when it changes task status, update the convergence todo; when it changes handoff navigation or current evidence snapshot, update this master reference.

## 13. Next-agent resume checklist

- [ ] Fetch current PR #1274 metadata and verify current head/base/state.
- [ ] Fetch current target branch SHA.
- [ ] Fetch latest workflow runs for current head and inspect failed job logs.
- [ ] Confirm this document and linked resources still exist at current branch head.
- [ ] Read the complete current convergence todo before choosing a task.
- [ ] Run exact target baseline for disputed CI gates.
- [ ] Fix only proven owned regressions; add regression coverage first.
- [ ] Continue Brain, moderation, Audience Pulse and responsive/accessibility phases in the order above.
- [ ] Update canonical todo and evidence receipts.
- [ ] Keep PR draft until full acceptance and verification are satisfied.

**Resume command:** Continue PR #1274 from its current head. Start with an exact target-branch baseline for the remaining failed CI gates; do not create a new branch or parallel PR. The two CommentResponder-specific assertions are already reported fixed and passing—do not redo or weaken them. Use `tasks/toolbox-workflow-convergence/todo.md` as the live task checklist and this file as the master navigation/system/process handoff.
