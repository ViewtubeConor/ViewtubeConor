# ViewTube Resource Library Studio Row and Tag Reconciliation Audit

**Date:** 2026-11-15  
**Branch:** `integration/reconciled-master-studio-2026-11-15`  
**Master snapshot:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**10-31 source:** `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`  
**Diagnostic PR:** [#1271](https://github.com/viewtube-dev/viewtube/pull/1271)

## 1. Decision

**Keep master Resource Library registry, canonical Markdown renderer, guide content, learning paths, and browser-local completion progress. Selectively port the 10-31 Studio row treatment and SpectrumTag sizing only after reconciling the primitive API and global token CSS.**

The source does not justify replacing the Resource Library architecture or registry. The registry blob is identical in the two frozen snapshots, so it must not be copied or duplicated.

## 2. What is already canonical in master

Both snapshots contain the same `resourceLibraryRegistry.ts` blob. Master already provides:
- Canonical Markdown-backed resource entries and parsing.
- Search, category filtering, learning-path filtering, and resource selection.
- Reader rendering through `ResourceDocumentRenderer`.
- Browser-local completion progress with graceful storage failure handling.
- Workspace continuation links that explicitly do not claim to mutate project data.
- Contract tests for core guide rendering.

Preserve this architecture and all resource IDs/content. Do not introduce a second registry, duplicate guide content, or move resource persistence into the Studio primitive layer.

## 3. Source UI changes

### 3.1 Resource Index rows

10-31 replaces the bespoke Resource Index button with `StudioSplitLeftButton`:
- Standard-size full-row action.
- File icon in the split-left rail.
- Category, short title, read time, and difficulty in the label area.
- `StudioSpectrumTag` for completed status.
- A 44px square icon rail centered within a taller 76px row.
- Palette variables `--pair-a` and `--pair-b` are added alongside Resource Library-specific palette variables.

This is a good candidate because the row is an actual interactive split-left control, not merely a card that imitates one. Preserve the full-width row behavior and mobile stacking of the index. Do not wrap the row in a second button or add nested interactive elements.

### 3.2 Resource document metadata and tags

10-31 changes category/format/status metadata and topic tags to `StudioSpectrumTag`. It also adds the tag component's proportional 20px size.

The master SpectrumTag API currently accepts label, spectrumKey, selected, className, onClick, and ariaLabel; it does **not** accept a `size` prop. The 10-31 source adds `size?: "15px" | "20px"`, defaults to 15px, emits `data-size`, and adds the `is-20px` class.

Therefore the Resource Library tag changes cannot be ported alone. They depend on the matching StudioSpectrumTag API and CSS geometry. Preserve the existing 15px Vault donor geometry exactly. The 20px variant must be proportional (20px height, 2.6667px border, 5.3333px radius, 10.6667px font) and must not create a second tag primitive.

### 3.3 Completed status

The source changes the completed-resource mark to `StudioSpectrumTag`. Keep this as a candidate, but ensure it remains a noninteractive span when nested inside the parent Resource Index button. The current SpectrumTag implementation already renders a span when no onClick is supplied, which is the correct nesting behavior.

## 4. CSS ownership and risks

The source CSS scopes row geometry to the Studio split-left button's data attributes and the Resource Library row class. It:
- Keeps the row full-width.
- Sets a 76px minimum row height.
- Gives the button face a 70px minimum height.
- Sets the split rail to a 44px square, centered vertically.
- Keeps row text in the label region.
- Moves active-row background treatment into the split label region.

This is a local Resource Library exception, not a new global Studio default. Keep it scoped to the Resource Library row. Do not alter the global split-left primitive to satisfy this one page.

Before porting, verify the actual master DOM attributes emitted by `StudioSplitLeftButton` and the face/rail/label slot structure. The source contract test checks those attributes, but the test must run against the master API after the selected primitive changes are applied.

The source also adds palette aliases `--pair-a` and `--pair-b`. Check whether these names are already globally owned in the active Studio CSS pipeline; retain them only if they are required by the primitive and do not shadow a different page-level palette.

## 5. Test coverage gap

The 10-31 source adds:
- A Resource Library split-left row contract test.
- A completed-status SpectrumTag contract test.
- A catalog presence assertion for calendar primitives and Resource Library split button.

The master has a Resource Library render contract test but does not have the source-only SpectrumTag contract test.

Add/port tests for:
1. Resource Index rows render as full-width `StudioSplitLeftButton` instances.
2. Exactly one native button per resource row; no nested button from SpectrumTag.
3. 44px square rail centered in the 76px row.
4. Full-width behavior at narrow/mobile viewports and no horizontal overflow.
5. Category/title/read-time text truncation without hiding the selected state.
6. Completed status uses the canonical static SpectrumTag.
7. Resource document kicker uses 20px tags only after the global API and CSS support it.
8. Topic tags retain 15px geometry.
9. Search, category, learning-path selection, URL selection, progress persistence, and guide rendering remain unchanged.
10. Catalog registration and export coverage are consistent with the actual confirmed primitive policy.

Prefer behavior/DOM tests and computed-style/browser tests for geometry. Do not rely only on source-string assertions.

## 6. Recommended implementation order

1. Preserve the master registry and reader architecture unchanged.
2. Verify the master `StudioSplitLeftButton` DOM contract and width behavior.
3. Add the Resource Library split-left row treatment and scoped CSS.
4. Reconcile SpectrumTag's 15px/20px API and proportional CSS in its canonical Studio owner.
5. Convert the document kicker, topic tags, and completion marker to SpectrumTag.
6. Update tests and catalog specimens only after confirming the component is an approved public primitive.
7. Run Resource Library tests, Studio control tests, typecheck, build, and mobile browser verification.

## 7. Verification boundary

Reviewed frozen master/source versions of:
- `ResourceLibrary.tsx`
- `ResourceDocumentRenderer.tsx`
- `resourceLibraryRegistry.ts` (identical blob SHA)
- `resource-library.css`
- `ResourceLibrary.contract.test.tsx`
- source `resourceLibrarySpectrumTag.contract.test.ts`
- master/source `StudioControls.tsx` SpectrumTag API.

The exact PR #1271 patches for ResourceLibrary, ResourceDocumentRenderer, and resource-library.css were inspected.

No implementation files were changed. No tests, typecheck, build, browser, or accessibility runs were performed. This audit recommends a selective UI port, not a completed integration.
