# Comment Management Workspace — Product, UX and Integration Specification

**Production Date:** 2026-11-15  
**Last Edited:** 2026-11-15  
**Class:** SPECIFICATION  
**Status:** ACTIVE  
**Concern:** Studio Hub Comment Management workspace, creator-engagement interaction model, extensible UX, and future opportunity routing  
**Owner:** Creator Engagement + Studio Hub; Brain, YouTube Services, Audience & Community Desk and Toolbox UI are collaborating owners within their existing boundaries  
**Registry ID:** DOC-SPEC-COMMENT-MANAGEMENT  
**Last Audited Main SHA:** null  
**Supersedes:** None  
**Related Authorities:** docs/governance/DOCUMENTATION.md; docs/governance/TASK_AUTHORITY.md; docs/governance/CONVERGENCE.md; docs/governance/VERIFICATION.md; docs/architecture/PRODUCT_COMPLETION_CONSTITUTION.md; docs/architecture/PRODUCT_ARCHITECTURE.md; docs/architecture/VIEWTUBE_TOOLBOX_UI_MASTER_RESOURCE.md; docs/product/VIEWTUBE_STUDIO_HUB_MASTER_TOOL_ARCHITECTURE.md; docs/product/studio-hub/02_STUDIO_HUB_TOOLS.md; docs/product/studio-hub/03_STUDIO_HUB_INTELLIGENCE_AI_BRAIN_PROMPTS.md; docs/product/studio-hub/04_STUDIO_HUB_INTERACTIONS_WORKFLOWS_HANDOFFS_CONTRACTS.md; docs/specifications/TOOLBOX_PROMOTION_AND_WORKFLOW_CHAINS.md; tasks/toolbox-workflow-convergence/plan.md

## 1. Purpose and scope

This specification consolidates the conversation's Comment Management direction into the existing ViewTube Comment Responder / Comment Operations workstream. It defines the current verified product baseline, the Studio Hub workspace interaction contract, the extensibility boundaries, provider/security constraints, future opportunity catalog, phased implementation sequence, and completion evidence.

This is a subordinate feature specification. It does not create a new comment service, persistence layer, AI runtime, audience store, moderation engine, or task ledger. Exact work and lifecycle remain in the existing governed task systems and the surviving Toolbox Workflow Convergence plan.

### Goals

- Make currently implemented Comment Responder capabilities easy to discover and operate.
- Replace nested/duplicated visual framing with one clear Studio Hub workspace.
- Improve comment queue triage, conversation comprehension, reply drafting, video suggestions, and audience insight review.
- Make the frontend extensible so later features fit existing workspace regions.
- Preserve creator approval for all externally visible comment and community mutations.
- Connect comment evidence to Brain, Video Inspector, Audience & Community, and Project workflows through existing contracts.
- Keep product claims, inferred signals, API feasibility and permission availability explicit.

### Non-goals for the first UI foundation slice

- No autonomous public replies.
- No autonomous moderation or bulk action execution.
- No new comment database or synchronization owner.
- No replacement BrainRuntime, BrainModelGateway, prompt registry, or evidence store.
- No claim that YouTube supports every desired moderation action.
- No unverified expansion of OAuth scopes, quota assumptions, retention policy, or data access.
- No implementation of all opportunity-catalog items as part of the shell redesign.

## 2. Existing-work reconciliation

**Convergence decision: EXTEND.** The repository already contains a Comment Responder capability, a Comment Operations workstream in `tasks/toolbox-workflow-convergence/`, the `IDEA-YT-004` Comment & Community Operations Toolbox idea, the Comment Response Campaign workflow, Audience Pulse, creator-engagement controller/context, Brain comment-engagement service, and existing moderation API routes.

The UI redesign therefore extends the existing implementation and the active Toolbox Workflow Convergence plan. It does not create a parallel Comment Management application.

### Existing source paths

| Path | Existing responsibility |
|---|---|
| `src/components/CommentResponder.tsx` | Studio/Dashboard shared Comment Responder presentation and interaction surface |
| `src/features/creator-engagement/useCommentResponderController.ts` | Shared queue, selection, drafting, recommendation, reply, moderation state/actions |
| `src/features/creator-engagement/types.ts` | Creator-engagement and comment-related contracts |
| `src/features/creator-engagement/useCreatorEngagementContext.ts` | Channel/account/creator context consumed by the feature |
| `src/features/creator-engagement/audiencePulse.ts` | Read-only audience-signal projection and heuristic classification |
| `src/features/creator-engagement/audiencePulseHandoff.ts` | Evidence/action-packet proposal handoff |
| `src/services/brain/commentEngagement.ts` | Existing Brain comment drafting and video recommendation integration |
| `src/services/brain/phaseOneIntegration.ts` | Existing Brain capability integration registration |
| `src/views/StudioHub.tsx` | Studio Hub outer ToolboxScaffold composition and navigation anchor |
| `src/components/Toolbox.tsx` and `src/components/subtoolbox/*` | Canonical outer Toolbox and internal primitive/layout authorities |
| `src/components/CommentResponder.contract.test.ts` | Comment workspace and integration contract tests |
| `src/features/creator-engagement/creatorEngagementParity.test.ts` | Shared Studio/Dashboard parity contract |

Current code and tests outrank this document if implementation details change. Reconcile this table on every material follow-up.

### Existing prior art to preserve

- `IDEA-YT-004` — Comment & Community Operations Toolbox.
- `IDEA-WF-029` — Comment Response Campaign.
- `IDEA-WF-008` — Comment to Community Campaign.
- `IDEA-SPA-013` — Comment-to-Content Opportunity Miner.
- `tasks/toolbox-workflow-convergence/plan.md` and `todo.md`.
- Studio Hub architecture documents 02, 03 and 04.
- Toolbox promotion/workflow chain specification.
- Existing Dashboard comment widget/feature parity work.

The Comment Response Campaign is a workflow that executes through the Comment/Community Operations workspace; the Comment-to-Content Opportunity Miner is complementary analysis capability, not a replacement responder.

## 3. Current implementation baseline and evidence status

The current PR #1274 description records the first implementation slice and its file scope. It reports:
- Studio Hub module renamed to Comment Management while retaining the outer ToolboxScaffold.
- Redundant inner Comment Responder SubToolbox and extra white wrapper removed.
- Selectable inbox added using the existing comment controller.
- Selected conversation, thread history, video context, Generate/Refine, reply posting, Audience Pulse, evidence proposals, connection states and received-image handoff preserved.
- AI video recommendations presented separately for review, with match score, explanation, preview, Add to reply and Dismiss actions.
- Recommendation state scoped to the selected comment and cleared after successful reply.
- Enter inserts a newline; posting remains an explicit creator action.
- Dedicated CI contract step and creator-engagement/Brain tests added.
- Existing moderation route/scope foundation documented; moderation controls remain follow-up work.

PR-reported changed paths:
- `.github/workflows/release-gates.yml`
- `src/components/CommentResponder.tsx`
- `src/components/CommentResponder.contract.test.ts`
- `src/features/creator-engagement/types.ts`
- `src/features/creator-engagement/useCommentResponderController.ts`
- `src/views/StudioHub.tsx`
- `tasks/toolbox-workflow-convergence/plan.md`
- `tasks/toolbox-workflow-convergence/todo.md`

### CI evidence — do not overstate

Workflow run [43677671858](https://github.com/viewtube-dev/viewtube/actions/runs/43677671858) completed with overall failure. The job detail retrieved during this conversation showed:
- Production build: PASS.
- Local smoke: PASS.
- Brain quality-loop: PASS.
- Gemini governance: PASS.
- Focused-contracts: FAIL at the pre-existing Studio counter/dropdown regression gate; the new Comment Management test step is reported by PR #1274 as having passed before that gate.
- Static-quality: FAIL at typecheck.
- Conversation handoff contract job: handoff contract and document-system tests PASS; document audit FAIL.
- Source governance: confirmed catalog audit FAIL.
- Full suite: FAIL.

The exact underlying failure output for typecheck, document audit, confirmed catalog and full suite was not retrieved in this conversation. Do not label these failures as unrelated without examining the logs. Do not claim the PR is merge-ready. Re-run the affected checks on the current head after diagnosing and correcting the failures. PR #1274 remains a review artifact, not proof of completion or merge.

## 4. Product interaction model

The workspace has four stable presentation regions. These are frontend composition boundaries, not new service owners.

### 4.1 Inbox and triage

Primary job: help the creator find the right conversation quickly.

Initial capabilities:
- New/unreplied and replied/history queue tabs.
- Selectable comment list.
- Selected-state visibility and keyboard focus.
- Author, comment excerpt, timestamp, likes when returned, reply count when returned.
- Previous/next navigation retained as secondary navigation.
- Refresh/reconnect action.
- Loading, empty, error, disconnected, stale and permission-limited states.
- Selection remains tied to the existing controller's thread identity.
- Queue counts are only shown when sourced from loaded/known records; never fabricate totals.

Future filters should be additive and should not change canonical thread identity. Search and sort must state whether they operate on the loaded page or the complete server-side result set.

### 4.2 Conversation and video context

Primary job: understand the thread before replying.

- Render original comment and available replies in chronological order.
- Distinguish creator replies from viewer replies using channel identity, not display-name guesses.
- Keep video title/thumbnail/link compact and provide a route to Video Inspector when the existing route/context contract supports it.
- Show unavailable context as unavailable, not inferred.
- Preserve comment/thread/video IDs and source references for downstream handoffs.
- Do not treat partial thread retrieval as a complete conversation.

### 4.3 AI Response Studio

Primary job: draft and review a reply.

Existing actions:
- Generate a new draft.
- Refine the current draft.
- Suggest Videos from the creator's available video catalog.
- Review a recommendation before inserting it into the reply.
- Edit the draft.
- Explicitly post the reply through the existing authorized service.

Rules:
- Generate and Refine never publish.
- Suggest Videos must return a reviewable recommendation, not silently insert a link.
- Keep recommendation identity, source video ID, reason, score/strength and evidence separate from the draft.
- Do not invent confidence or numeric scores if the model/provider did not return them.
- Explicit Post action is the only publish trigger.
- Enter inserts a newline. Any shortcut that submits must be explicit, documented and accessible.
- Disable duplicate submit while an operation is in flight; reconcile ambiguous network outcomes before retrying.
- Keep a draft scoped to its comment/thread; switching comments must not silently attach one viewer's draft to another thread.
- Show generation/refinement loading, error, stale-context and retry states.

### 4.4 Audience Intelligence / Audience Pulse

Primary job: inspect source-backed audience signals and decide what to do next.

Current Audience Pulse is a read-only projection over loaded source records and uses conservative heuristic intent classification. It is not currently equivalent to full semantic sentiment analysis, robust clustering, demographic profiling, or representative channel-wide audience research.

- Preserve source references and evidence IDs.
- Clearly label heuristic/inferred classifications.
- Show sample coverage and source limitations.
- Do not fabricate intent, sentiment, counts, audience segments or urgency.
- Suggested destinations are advisory and must be registry/capability filtered.
- Handoff proposals remain pending until explicitly reviewed/accepted by the destination owner and creator.
- A comment evidence packet is not itself a project brief. The documented chain is source records → Audience Pulse evidence packet → Brain review/interpretation → Brain-authored typed Project proposal → Project Builder draft → creator confirmation → canonical Project/ContentBuild creation.

## 5. Studio Hub UI composition contract

- Studio Hub's existing `ToolboxScaffold` remains the single outer toolbox shell.
- `CommentResponder.tsx` owns the internal workspace composition.
- Do not nest a second full Comment Responder SubToolbox or redundant white rounded shell.
- Use canonical Toolbox/SubToolbox primitives, tokens and responsive layout owners.
- Do not introduce page-local primitive geometry, private token ladders or parallel CSS systems.
- Preserve the `comment-responder` navigation/anchor identity unless a separately reviewed migration explicitly retains aliases.
- Desktop: bounded inbox rail/list plus selected conversation and reply workspace; intelligence is secondary and collapsible.
- Mobile: one-column flow; queue selection transitions to focused conversation/reply; no squeezed two-column layout or horizontal overflow.
- Tablet: adapt naturally without fixed-width assumptions.
- Preserve visible focus, accessible names, selected state, semantic list/button structure and touch target sizing.
- Keep all feature actions reachable without requiring users to discover hidden hover-only controls.

### Recommended visual hierarchy

1. Workspace title, connection/permission status and compact queue summary.
2. Queue tabs and selectable inbox.
3. Selected conversation with video context.
4. Reply composer and Generate / Refine / Suggest Videos actions.
5. Explicit Post Reply action.
6. Audience Pulse / evidence proposals as secondary review area.

Do not surface future controls as disabled placeholders. Add a control when the underlying behavior and permission contract exist.

## 6. Shared architecture and ownership boundaries

| Concern | Canonical owner |
|---|---|
| Studio Hub shell / Toolbox geometry | Toolbox UI authority and existing ToolboxScaffold |
| Comment workspace presentation | Existing CommentResponder component |
| Queue selection and comment operations state | Existing creator-engagement controller |
| Comment transport and YouTube API calls | Existing YouTube services/routes |
| Creator/channel context | Existing creator-engagement context and canonical creator context |
| Reply generation and video recommendations | Existing Brain gateway/service and prompt governance |
| Audience evidence projection | Existing Audience Pulse |
| Cross-tool proposals | Existing ViewTubeActionPacket contracts and destination capability owners |
| Video details/transcript/inspection | Existing Video Inspector / video intelligence owners |
| Community post creation | Existing Community Post Generator/controller and Community capability |
| Task lifecycle | Task Authority / canonical Task Index |
| Documentation identity | Documentation Governance / docs registry |

No new comment store, second controller, new AI runtime, audience evidence store or cross-tool orchestrator is authorized by this specification.

### Brain context expansion target

When source availability and privacy permissions allow, a future structured Brain request may include:
- selected comment and canonical IDs;
- complete available thread, with explicit completeness indicator;
- video metadata and canonical video ID;
- transcript excerpts and timestamps with source references;
- relevant Video Inspector evidence;
- creator-approved channel voice/preferences;
- relevant Audience Pulse evidence with heuristic labels;
- task intent (generate, refine, recommend);
- excluded or unavailable context and reasons.

Brain responses should be structured and source-attributed. Observed facts, model inferences, recommendations and unknowns must remain distinct. No hidden training/learning promotion occurs from a single comment or accepted draft.

## 7. YouTube provider feasibility and policy gates

This specification is not a substitute for a live, versioned YouTube API audit. Existing repository evidence identifies the `data.comments.manage` capability and `youtube.force-ssl` scope for the current moderation foundation, and existing routes/functions `moderateSimpleComment` and `markCommentAsSpam`. This is not blanket proof for all moderation operations.

| Operation | Current repository evidence | Gate before exposure |
|---|---|---|
| Read comment threads | Existing Comment Responder retrieval | Verify endpoint fields, pagination, ownership and read scope in current service |
| Reply to a comment | Existing reply-post path | Verify write scope, channel ownership, idempotency/retry and error mapping |
| Set moderation status | Existing `moderateSimpleComment` route/function | Explicit confirmation, `youtubeWrite` capability, permission/error tests |
| Mark as spam | Existing `markCommentAsSpam` route/function | Explicit confirmation, permission/error tests and visible irreversible/consequential warning |
| Delete comment | Not established by the inspected evidence | Verify exact endpoint, permission and policy; do not expose by assumption |
| Pin comment | Not established | Verify exact provider support, resource constraints and authorization |
| Heart/like comment | Not established | Verify endpoint and scope; do not infer from UI affordances |
| Bulk moderation | Not established as a supported product contract | Verify per-item semantics, partial failure, rate/quota behavior, confirmations and audit receipts |
| Sentiment/intent analysis | Local heuristic projection exists | Label inference; validate sample representativeness and model provenance |
| Channel analytics join | Not established by comment record alone | Verify Analytics API scope, data rights, join key, granularity and latency separately |

### Required API audit checklist

For every proposed YouTube operation, record:
1. Exact Data API endpoint and HTTP method.
2. Resource identifiers and required request fields.
3. Supported response fields and pagination semantics.
4. OAuth scope(s) and whether incremental authorization is possible.
5. Channel/resource ownership restrictions.
6. Quota cost and project quota assumptions from current official documentation.
7. Per-user/channel rate limiting and retry behavior.
8. Policy/developer-policy restrictions, including spam, harassment, privacy and automation limits.
9. Whether the action is reversible and how to reconcile ambiguous outcomes.
10. API error mapping, partial failure behavior and audit evidence.
11. Test fixtures and a safe non-production verification method.
12. Source URL, retrieval date and API version.

Do not quote a fixed quota cost or claim a method is supported until it is verified against current official YouTube documentation. A missing optional scope must disable only the dependent capability; it must not mark the entire channel disconnected.

## 8. Security, privacy, safety and data-rights gates

- Least privilege: request only the scope needed for a visible, user-valued capability.
- Incremental authorization: optional write scopes must not block read-only comment access.
- Tenant isolation: every comment/thread/video operation must be bound to the authenticated creator/channel identity.
- Authorization: server-side routes must re-check capability and ownership; UI hiding is not a security boundary.
- Human approval: public replies and moderation mutations require deliberate creator action.
- Bulk safeguards: preview exact targets and actions, require explicit confirmation, impose bounded batch size only after provider limits are verified, and show per-item outcomes.
- Audit trail: record actor, channel, target comment ID, operation, timestamp, approval, request correlation/idempotency key, result and provider error classification. Avoid storing unnecessary comment text or credentials.
- Data minimization: fetch only fields needed for the task; do not retain or export data beyond the approved purpose.
- Retention/deletion: follow YouTube API Services Terms, Developer Policies and ViewTube retention rules; document deletion/refresh obligations before adding caches or exports.
- AI safety: treat viewer comments as untrusted prompt input. Delimit and quote source text; never obey instructions embedded in a comment that ask Brain to reveal secrets, invoke tools, or publish.
- PII: avoid exposing email, private account data, or inferred sensitive attributes. Do not profile protected traits.
- Abuse prevention: detect spam/harassment only as advisory unless a verified moderation rule and creator approval exist.
- Transparency: mark AI-generated drafts and inferred audience signals; preserve evidence references.
- Recovery: use idempotency/reconciliation for uncertain post outcomes to avoid duplicate public replies.

## 9. Extensibility contracts

Future additions must fit one of the four existing presentation regions and reuse existing service/capability owners.

Proposed conceptual view models (names are descriptive only; implement only after checking existing types):
- Inbox item: canonical comment/thread IDs, author summary, text excerpt, timestamp, available engagement fields, video reference, reply state, moderation state when supported, selection state.
- Conversation view: ordered messages, author role, source completeness, timestamps, linked video, evidence references.
- Draft: comment/thread ID, text, generation mode, tone/length metadata if supported, source context IDs, status, updated time.
- Recommendation: target video ID, source references, rationale, returned match strength/score if available, preview data, review state.
- Audience signal: signal type, evidence IDs, source coverage, method/provenance, confidence only if calibrated, inferred/observed label, advisory destinations.
- Action result: operation ID, target ID, actor, explicit approval, status, provider result/error, reconciliation state.

Typed transport models belong to YouTube service boundaries; presentation models should be derived/adapted without duplicating API truth. Replace weak `any` contracts in bounded slices with tests and real provider fixtures.

## 10. Opportunity catalog — 40 Comment Management improvements

These are candidate opportunities, not accepted commitments or proof of provider support. Route each through the Ideas Registry and Task Authority before implementation.

1. Unified inbox across comments and supported community interactions.
2. Smart priority sorting using unanswered age, creator-defined rules and observable signals.
3. Saved queue views for questions, feedback, support, praise and follow-up.
4. Full-text search across the currently available comment corpus.
5. Filters by video, status, date, author and supported moderation state.
6. Duplicate-question detection with links to earlier answers.
7. Thread completeness and pagination indicators.
8. Conversation timeline with clear creator/viewer roles.
9. Context drawer for original video and Video Inspector findings.
10. Transcript-grounded reply context with timestamp citations.
11. Comment-to-video moment matching for precise answers.
12. Multi-draft reply alternatives with side-by-side comparison.
13. Channel-voice presets grounded in creator-approved examples.
14. Tone, length and reading-level controls.
15. Translation and bilingual response drafting with language labels.
16. Fact-check assistant that flags claims needing source review.
17. Policy and safety review for risky or overconfident draft language.
18. FAQ answer suggestions grounded in creator-approved sources.
19. Saved reply snippets with versioning and channel ownership.
20. Personalized response templates by question type.
21. Suggest Videos with transparent relevance rationale and reviewable previews.
22. Multi-video recommendation sets with creator selection.
23. Related playlist/series suggestions when supported by creator catalog data.
24. Comment-to-content opportunity extraction with evidence links.
25. Audience request clustering with sample-size and coverage labels.
26. Topic trend changes across defined, comparable time windows.
27. Sentiment/theme analysis with model provenance and uncertainty.
28. Repeated confusion and product-issue detection.
29. Creator-defined escalation rules for sensitive or urgent threads.
30. Escalation notes and handoff to existing support/workflow destinations.
31. Moderation review queue for currently supported actions only.
32. Per-item moderation preview and explicit confirmation.
33. Bulk action preview with bounded batches and per-item receipts, only after API validation.
34. Duplicate/ambiguous action prevention and post-outcome reconciliation.
35. Audit history for reply and moderation actions.
36. Reply performance reporting using verified available metrics, without causal overclaim.
37. Response-time and unanswered-backlog reporting with clear data coverage.
38. Comment-to-Project proposal through Brain interpretation and Project Builder approval.
39. Creator learning loop from approved/rejected drafts, gated by existing learning governance.
40. Accessibility-first keyboard triage, focus management and mobile quick actions.

## 11. Opportunity catalog — 25 audience/community interaction workflows

These are candidate creator workflows. Some may require YouTube surfaces or APIs beyond the currently verified Comment Responder. Do not imply every interaction is executable through the Data API.

1. Answer a viewer question with a concise, source-grounded response.
2. Link a relevant existing tutorial video after creator review.
3. Direct a viewer to the correct chapter/timestamp when transcript evidence exists.
4. Acknowledge constructive criticism and explain a planned correction.
5. Thank a viewer for detailed feedback without generating repetitive spam.
6. Identify recurring questions and draft a public FAQ response.
7. Turn repeated requests into a creator-reviewed future-video brief.
8. Invite viewers to clarify an ambiguous request.
9. Recognize returning contributors using only permitted, visible context.
10. Identify unanswered high-value questions for creator attention.
11. Route product/support issues into an existing support workflow.
12. Escalate threats, harassment or sensitive content for human review.
13. Surface misinformation claims for evidence review rather than automatic confrontation.
14. Draft respectful disagreement responses that preserve channel voice.
15. Invite viewers to compare approaches or share their own experience.
16. Collect feedback after a tutorial and propose improvements.
17. Identify requests for a follow-up, sequel or deeper explanation.
18. Convert related comments into a community poll proposal.
19. Draft a Community post summarizing a recurring audience question for creator approval.
20. Build a creator-approved response campaign for a video launch.
21. Identify viewers asking for resources and prepare a reviewed resource reply.
22. Suggest a playlist or series path for a viewer's learning journey.
23. Invite a viewer to an existing public community activity where appropriate.
24. Detect recurring praise themes and summarize what viewers value.
25. Produce a weekly audience conversation digest with source references and unanswered items.

## 12. Prioritization

### Immediate foundation (P1)
- Single outer Toolbox and clear hierarchy.
- Selectable inbox and conversation view.
- Draft-only Generate/Refine/Suggest Video flow.
- Explicit reply submission and safe keyboard behavior.
- Existing connection, error, empty and loading states.
- Audience Pulse source/heuristic transparency.
- Shared controller and Dashboard parity.
- Focused regression tests and CI.

### Next foundation (P1/P2)
- Replace weak presentation `any` contracts with canonical typed thread/comment models.
- Improve Brain context with source-attributed available thread/video context.
- Add recommendation quality fixtures and invalid/no-fit cases.
- Wire only already-verified moderation endpoints with explicit confirmation and capability gating.
- Complete responsive and accessibility certification.
- Capture runtime screenshots and inspect all relevant states.

### Later opportunities (P2/P3)
- Search, saved views, clustering, sentiment/theme analytics, response reporting, bulk workflows, campaign tools, deeper community interaction and learning loops.
- Each requires an owner, source/API feasibility review, data-rights review, acceptance criteria and Task Authority promotion.

## 13. Phased delivery and acceptance

### Phase 0 — Preserve and baseline
- Inventory existing UI/controller/service actions and Dashboard parity.
- Capture current branch/PR and CI state.
- Freeze comment, thread, draft, recommendation and action contracts.
- Acceptance: all existing user-visible actions and data owners are mapped; no duplicate owner introduced.

### Phase 1 — Shell and hierarchy
- Keep one ToolboxScaffold outer shell.
- Remove duplicate inner shell and redundant wrapper.
- Use canonical primitives and stable navigation anchor.
- Acceptance: no nested duplicate shell; no lost collapse/navigation behavior.

### Phase 2 — Inbox and conversation
- Add/verify selectable queue, new/replied views and conversation chronology.
- Preserve previous/next and refresh/reconnect.
- Acceptance: selection always maps to correct canonical thread; loading/empty/error/disconnected states are truthful; no mobile horizontal overflow.

### Phase 3 — AI Response Studio
- Generate, Refine and Suggest Videos remain separate explicit actions.
- Recommendation is reviewable before insertion.
- Post remains an explicit creator action.
- Acceptance: no AI operation publishes; Enter inserts newline; duplicate submission blocked; draft remains bound to correct thread.

### Phase 4 — Audience Pulse
- Preserve source references, inferred labels, limitations and pending proposal semantics.
- Acceptance: no unsupported sentiment/intent claim; no handoff is presented as executed before destination acceptance.

### Phase 5 — Typed contracts and moderation foundation
- Replace weak any types incrementally.
- Expand Brain context only from permitted/source-attributed data.
- Expose moderation only for verified operations and capability.
- Acceptance: permission failures are scoped to dependent actions; every mutation has explicit confirmation and auditable result; no unsupported delete/pin/heart/bulk claims.

### Phase 6 — Responsive/accessibility/runtime certification
- Desktop, tablet, mobile portrait/landscape.
- Keyboard/focus/screen-reader/touch.
- Connected, disconnected, loading, empty, error, stale, permission-limited and action-in-flight states.
- Acceptance: screenshots captured and analyzed; defects corrected and reverified; runtime smoke and relevant tests pass.

### Phase 7 — Opportunity promotion
- Select highest-value ideas from the catalogs.
- Reconcile with existing ideas/workflows/capability owners.
- Promote only accepted ideas into Task Authority and owning plans.
- Acceptance: no duplicate ideas/tasks/capabilities; dependencies and provider gates documented.

## 14. Verification profile

Required before declaring the workspace implementation complete:
- Focused CommentResponder contract tests.
- Creator-engagement parity tests.
- Brain comment-engagement service tests.
- Typecheck and runtime lint.
- Production build.
- Full test suite or documented baseline comparison.
- Source/governance audits.
- Dedicated Comment Management CI step.
- Browser smoke in authenticated and disconnected states where safe.
- Desktop/tablet/mobile screenshots and visual analysis.
- Keyboard and accessibility inspection.
- YouTube API permission/error tests using safe fixtures or test channel.
- Post/retry/idempotency reconciliation tests.
- Per-action moderation confirmation and audit tests before moderation UI is enabled.

A green build is not visual proof. A passing contract test is not authenticated YouTube proof. A merged PR is not DONE. Use `docs/governance/VERIFICATION.md` and Task Authority evidence states.

## 15. Risks and open questions

1. Are comment/thread transport types already centralized in a YouTube service module, and which exact type is the canonical source?
2. What are the precise typecheck errors from the failed workflow run?
3. What causes the confirmed catalog audit and document audit failures, and are they baseline failures or introduced by the branch?
4. What provider-supported comment fields and pagination guarantees exist for all currently used endpoints?
5. What exact quota costs/rate limits apply to current read/reply/moderation calls under the deployed Google project?
6. Which scopes are requested today, and can comment-write permission be incrementally granted?
7. What moderation statuses/actions are currently implemented by server routes, and which are safe/reversible?
8. What audit event store exists for external comment mutations? If none, which existing operation/audit owner should own it?
9. What are the retention/deletion rules for stored comments, derived audience signals and generated drafts?
10. Which transcript and Video Inspector evidence can be safely supplied to Brain, with what source identifiers?
11. What is the exact sample coverage of Audience Pulse and when should the UI suppress conclusions?
12. Does Audience Studio become the eventual navigation home for Comment Operations and Community Posts? This remains a product ownership decision, not assumed by this spec.
13. Which 40+25 opportunity items should be promoted first after API, rights, owner and value review?

## 16. Change history

| Date | Change | Evidence / status |
|---|---|---|
| 2026-11-15 | Consolidated conversation requirements, first-slice implementation evidence, workspace UX contract, Brain/Video Inspector/Audience Pulse seams, provider/security gates, 40 product opportunities and 25 community interaction workflows | PR #1274; workflow run 43677671858; detailed failures remain open |
