# ViewTube Calendar Projection and Studio Primitive Reconciliation Audit

**Date:** 2026-11-15  
**Branch:** `integration/reconciled-master-studio-2026-11-15`  
**Master snapshot:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**10-31 source:** `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`  
**Diagnostic PR:** [#1271](https://github.com/viewtube-dev/viewtube/pull/1271)

## 1. Decision summary

**Recommendation: selectively port the additive calendar specimens and keep the calendar projection contract as a separate, not-yet-integrated read-model contract. Do not replace the Project Planner Calendar or create a second calendar owner.**

The 10-31 source adds:
- Mini variant support to `StudioCalendarEventChip`.
- `StudioCalendarMultiDayBar` with single/start/middle/end segment metadata.
- `StudioCalendarThumbnailEventChip`.
- Public exports and corresponding prop types for those two new components.
- A typed `CalendarEventProjection` contract describing owner-scoped calendar projections.

Master already has the Project Board's sole publishing calendar and its working project/task date behavior. It uses `Project.publishDate`, `Project.tasks[].dueDate`, and ContentBuild's YouTube schedule binding. This existing calendar should remain the single calendar surface.

## 2. Existing master calendar ownership

The frozen master page architecture is explicit:

- `src/views/ProjectCalendarPage.tsx` mounts Project Builder and Project Board.
- `src/components/projects/ProjectBoardWorkspace.tsx` switches between the Kanban board and `EmbeddedPublishingSchedule`.
- `src/components/projects/EmbeddedPublishingSchedule.tsx` mounts `ProjectPlannerCalendar` without adding a second shell/header.
- `src/components/projects/ProjectPlannerCalendar.tsx` owns the active calendar UI, date parsing, selected date, scheduled project list, task due dates, schedule writes, and publication-state badges.
- `src/components/projects/ProjectsWorkspaceContext.tsx` owns the board/calendar view switch and project navigation.

The project architecture document says there should be one full calendar under Project Board, with compact schedule context in Builder. It explicitly says not to restore two independently owned calendars.

## 3. Existing source-of-truth data

The inspected master planner reads:
- `brain.projects[].publishDate` for scheduled project dates.
- `brain.projects[].tasks[].dueDate` for project task dates.
- `ContentBuildSnapshot.youtube.scheduledAt` for the external YouTube schedule date.
- `ContentBuildSnapshot.youtube.status` and `lastVerifiedAt` for truthful publication-state context.

Scheduling writes update the owning Project through `updateProject`. Task completion writes update the owning Project task. The planner uses local calendar parsing for date-only ISO values and rejects impossible calendar dates instead of normalizing them silently.

The current publication badge helper reports a date mismatch when a verified saved YouTube status is scheduled for a different date than the Project plan. Preserve this behavior; do not silently reconcile the two dates.

## 4. Projection contract assessment

The source-only `src/services/calendar/calendarEventContract.ts` is a useful type contract and correctly states that:
- Calendar is a read-model projection, not a persistence model.
- Projects, Publisher/ContentBuild, Asset Engine, and Analytics remain record owners.
- Stable source record IDs and owner identity must be retained.
- Project publish dates and task due dates are one-day events.
- ContentBuild scheduled dates require verified state.
- Multi-day bars require explicit owner-provided start/end dates.
- Project publishDate must not be reinterpreted as a project start/end range.
- No calendar-local event table should be added as part of this work.

**Important limitation:** this file defines types and documents mappings; it does not implement projection adapters, validation, date normalization, event identity generation, source fetching, or consumer wiring. It must not be described as a complete calendar integration.

The inspected master `ContentBuildYouTubeBinding` already contains `scheduledAt`, `premiereAt`, `publishedAt`, `status`, and `lastVerifiedAt`. The master ContentBuild repository already persists the binding and events. The contract should reference these existing owner APIs rather than duplicate schedule state.

## 5. Primitive and CSS comparison

### 5.1 Mini event chip

The source adds `sizeVariant="mini"`, a fixed 20px height, 1.5px black border, and separate label/remove buttons. This corresponds to the established Mini tier geometry (20px / 1.5px / 3px / 17.5px).

Port candidate, with checks:
- Ensure the mini chip fills its intended row without imposing a global width.
- Keep label and remove actions as separate keyboard targets.
- Add selected semantics (e.g. `aria-pressed` only when the chip is actually a toggle button); do not imply selection on a noninteractive wrapper.
- Verify truncation, remove target size, focus visibility, and compact/mobile layout.
- Preserve standard-size behavior.

### 5.2 Multi-day bar

The source component supplies segment attributes and visual continuity rules for start/middle/end segments. It does not derive segments from dates or validate that the supplied segment matches an actual event range.

Port candidate only as a presentation primitive. A future owner adapter must split explicit inclusive date ranges into per-day segments and preserve one stable source event identity. Test one-day, two-day, multi-week, month-boundary, and invalid/reversed ranges. Do not infer a range from a project publish date.

The component's `selected` state currently changes styling but does not expose `aria-pressed`; implement appropriate semantics if it is interactive.

### 5.3 Thumbnail event chip

The source adds a 20px mini row with a 16:9 media cell, label, and optional status. Port candidate after verifying:
- image alt behavior for decorative versus meaningful thumbnails;
- keyboard and focus behavior when interactive;
- truncation at narrow widths;
- no image layout shift;
- use of current Asset Engine/Vault identity resolution rather than stale duplicated thumbnail URLs where this is a real calendar event.

### 5.4 Existing media rail CSS

Master media rail fallback uses a 50% primary color mixed with transparent, which conflicts with the current Studio fill rule. The source changes the fallback to 50% white mixed with primary. This source correction should be adopted.

The source also removes `!important` from reduced-motion declarations and includes the new calendar selectors. Preserve the non-important reduced-motion rule unless a documented higher-specificity conflict is proven. Do not add another override layer.

### 5.5 Export ownership

Master `src/studio-ui/index.ts` exports only `StudioCalendarEventChip` and `StudioCalendarMediaRail`. The 10-31 index additionally exports the multi-day bar, thumbnail chip, and their prop types. Selectively port these exports together with the component implementations and contract tests; do not wholesale replace the index because it contains unrelated master/source differences.

## 6. Missing integration and tests

The source PR adds the projection contract without an accompanying contract test or adapter/consumer. The source calendar primitive patch also has no dedicated component tests in the changed-file inventory.

Before treating this as integrated, add tests for:

1. Owner identity and stable projection IDs.
2. Project publishDate and task dueDate one-day projection.
3. ContentBuild schedule inclusion only when the binding status and verification requirements are met.
4. YouTube schedule mismatch preservation.
5. Invalid dates, timezone boundaries, date-only values, and IANA timezone handling.
6. Explicit multi-day range segmentation, including month/year boundaries.
7. Missing/unknown status without fabricated state.
8. Thumbnail asset resolution and missing/deleted asset behavior.
9. Mini chip label/remove keyboard access, focus, selected semantics, and responsive truncation.
10. Multi-day bar and thumbnail chip semantics, focus, and narrow-width behavior.
11. Public export coverage and confirmed-library specimen registration, if the catalog is intended to expose these primitives.

The source contract's date-key template-literal type does not enforce zero-padding or actual calendar validity. Add runtime validation at the adapter boundary; a template-literal type alone is not sufficient.

## 7. Recommended implementation sequence

1. Keep the master Project Planner Calendar as the only full calendar.
2. Port the additive Studio calendar primitive APIs and CSS corrections, without replacing existing standard event chip/media rail behavior.
3. Export the new components/types from the master Studio barrel.
4. Add component contract/accessibility tests.
5. Add runtime projection validation and owner-specific adapters only after mapping exact Project, ContentBuild, Asset Engine, and Analytics APIs.
6. Integrate the projection into the existing Project Planner Calendar; never create a second event store or calendar surface.
7. Add explicit multi-day date-range owner fields only if the owning persistence contract is separately approved. Do not add Project.startDate/endDate speculatively.
8. Verify the existing publication mismatch and date-only parsing behavior remains intact.

## 8. Verification boundary

Reviewed frozen master and 10-31 versions of:
- `StudioCalendarPrimitives.tsx`
- `studio-calendar-primitives.css`
- `src/studio-ui/index.ts`
- source `calendarEventContract.ts`
- master `ProjectCalendarPage.tsx`, `ProjectBoardWorkspace.tsx`, `EmbeddedPublishingSchedule.tsx`, `ProjectPlannerCalendar.tsx`, and `projectCalendarPublicationState.ts`
- master ContentBuild contracts and repository.

The exact PR #1271 patches for the three changed calendar files were inspected.

No implementation files were changed. No tests, typecheck, build, browser, or accessibility runs were performed. The recommendation is a source audit and test plan, not a claim of integration completion.
