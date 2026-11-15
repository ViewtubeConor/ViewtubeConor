/**
 * Confirmed Primitive Catalog taxonomy (Phases 0–8).
 */
export type StudioCatalogSize = "supreme" | "standard" | "compact" | "mini" | "micro"
export const STUDIO_CATALOG_SIZES: readonly StudioCatalogSize[] = ["supreme", "standard", "compact", "mini", "micro"] as const
export const STUDIO_CATALOG_SIZE_LABELS: Record<StudioCatalogSize, string> = {
  supreme: "60 Supreme", standard: "44 Standard", compact: "28 Compact", mini: "20 Mini", micro: "12 Micro",
}
export type ConfirmedCatalogFamilyId =
  | "representatives" | "text-fields" | "split-text-fields" | "buttons" | "icon-buttons" | "badges"
  | "tags-status" | "choice-toggles" | "counters" | "steppers-sliders" | "dropdowns" | "modules-frames"
  | "accordions-layout" | "chat-meta" | "calendar" | "compositions" | "unsorted"
export const CONFIRMED_CATALOG_FAMILY_META: Record<Exclude<ConfirmedCatalogFamilyId, "representatives" | "unsorted">, { title: string; order: number; defaultOpen: boolean }> = {
  "text-fields": { title: "Text Fields", order: 1, defaultOpen: false },
  "split-text-fields": { title: "Split & Icon-Rail Text Fields", order: 2, defaultOpen: false },
  buttons: { title: "Buttons", order: 3, defaultOpen: false },
  "icon-buttons": { title: "Icon Buttons", order: 4, defaultOpen: false },
  badges: { title: "Badges", order: 5, defaultOpen: false },
  "tags-status": { title: "Tags & Status", order: 6, defaultOpen: false },
  "choice-toggles": { title: "Switches / Toggles / Radio / Checkbox", order: 7, defaultOpen: false },
  counters: { title: "Counters", order: 8, defaultOpen: false },
  "steppers-sliders": { title: "Steppers & Sliders", order: 9, defaultOpen: false },
  dropdowns: { title: "Dropdowns", order: 10, defaultOpen: false },
  "modules-frames": { title: "Modules & Frames", order: 11, defaultOpen: false },
  "accordions-layout": { title: "Accordions & Layout", order: 12, defaultOpen: false },
  "chat-meta": { title: "Chat & Meta", order: 13, defaultOpen: false },
  calendar: { title: "Calendar", order: 14, defaultOpen: false },
  compositions: { title: "Compositions", order: 15, defaultOpen: false },
}
export const CONFIRMED_CATALOG_FAMILY_ORDER: Array<Exclude<ConfirmedCatalogFamilyId, "representatives" | "unsorted">> = (
  Object.entries(CONFIRMED_CATALOG_FAMILY_META) as Array<[Exclude<ConfirmedCatalogFamilyId, "representatives" | "unsorted">, { order: number }]>
).sort((a, b) => a[1].order - b[1].order).map(([id]) => id)

export const CONFIRMED_CATALOG_MODULE_INVENTORY: ReadonlyArray<{ title: string; family: ConfirmedCatalogFamilyId; combined?: boolean }> = [
  { title: "Switches, Radios & Checkboxes", family: "choice-toggles", combined: true },
  { title: "Word Toggles · Standard + Compact + Vertical", family: "choice-toggles", combined: true },
  { title: "Arrow / Side / Double Side / Bar Toggles", family: "choice-toggles", combined: true },
  { title: "Split-left Badge · Standard + Compact + Micro", family: "badges" },
  { title: "Direct Imported Primitive Representatives · Standard", family: "representatives" },
  { title: "StudioSideTextCounterIcon · Editable Text + Single Icon Rail · Five Sizes", family: "split-text-fields" },
  { title: "Button · V1–V7 · Proportional size grid", family: "buttons" },
  { title: "Split Button Family · All Sizes × Left / Right / Double / Two-Line", family: "buttons", combined: true },
  { title: "Dropdown Family · All Sizes × Single / Simple / Split-Left / Multi-Select", family: "dropdowns" },
  { title: "StudioChatComposerDock · Message Composer Layout", family: "chat-meta" },
  { title: "StudioIconButton · All Five Sizes", family: "icon-buttons" },
  { title: "StudioChoice · All Five Sizes", family: "choice-toggles", combined: true },
  { title: "Compatibility Field Exports · Standard", family: "text-fields" },
  { title: "Compatibility Control Exports · Standard", family: "choice-toggles" },
  { title: "Component Grid · Grid / Cell / Row", family: "accordions-layout" },
  { title: "StudioLeftCounter · Supreme + Standard + Compact + Mini + Micro", family: "counters" },
  { title: "Studio Text Input · Standalone + Simple + Floating + Fixed Label", family: "text-fields" },
  { title: "Studio Text Area · Standalone + Simple + Floating + Fixed Label", family: "text-fields" },
  { title: "Studio Text Box · Supreme + Standard + Compact + Mini + Micro", family: "text-fields" },
  { title: "Prominent Action · 60px Supreme", family: "buttons" },
  { title: "Square Icon Button · Standard + Compact", family: "icon-buttons" },
  { title: "Calendar Event Chips & Multi-day Bars · Mini Representatives", family: "calendar" },
]

export const CONFIRMED_CATALOG_REQUIRED_EXPORTS: readonly string[] = [
  "StudioButton", "StudioTextInput", "StudioTextArea", "StudioTextBox", "StudioCounter", "StudioSideCounter",
  "StudioSideTextCounter", "StudioLeftCounter", "StudioDropdown", "StudioSwitch", "StudioWordToggle",
  "StudioSplitLeftButton", "StudioDoubleSplitSlider", "StudioInterModule", "StudioCollapsingSplitModule",
  "StudioTopSplitModule", "StudioUploadFrame", "StudioSpectrumTag", "StudioCloseableBadge",
  "StudioChatComposerDock", "StudioChatResponseShell", "StudioResponseMetaRow",
] as const

export const isAllowedCombinedModuleTitle = (title: string): boolean =>
  /^(?:Switches, Radios & Checkboxes|Word Toggles · Standard \+ Compact \+ Vertical|Arrow \/ Side \/ Double Side \/ Bar Toggles|StudioChoice · All Five Sizes|Split Button Family · All Sizes × Left \/ Right \/ Double \/ Two-Line|Split-left Badge · Standard \+ Compact \+ Micro)$/.test(title)

type Matcher = { family: ConfirmedCatalogFamilyId; title?: RegExp; componentNames?: string[] }
const CLASSIFIERS: Matcher[] = [
  { family: "choice-toggles", title: /Switches, Radios & Checkboxes|Word Toggles|Arrow \/ Side \/ Double Side \/ Bar Toggles|StudioSwitch|StudioRadio|StudioCheckbox|StudioXCheckbox|StudioWordToggle|StudioVerticalWordToggle|StudioArrowToggle|StudioSideToggle|StudioDoubleSideToggle|StudioBarToggle|StudioChoice|Compatibility Control Exports/, componentNames: ["CanonicalControlFamilies", "CanonicalWordToggleFamily", "ConfirmedStudioValueToggleFamily"] },
  { family: "split-text-fields", title: /StudioSideTextCounterIcon|Icon Rail Text Inputs|Icon Button Rail Text Inputs|SplitTextInput|SplitLeftInput|SearchInput|SideTextCounter/ },
  { family: "text-fields", title: /Studio Text Input|Studio Text Area|Studio Text Box|StudioTextInput|StudioTextArea|StudioTextBox|UsernameInput|NumberInput|Compatibility Field Exports/ },
  { family: "icon-buttons", title: /Square Icon Button|Circle Icon Button|StudioIconButton|Icon Button ·/ },
  { family: "badges", title: /Split-left Badge|Split-right Badge|Double-split Badge|StudioSplitLeftBadge|StudioSplitRightBadge|StudioDoubleSplitBadge|Closeable Badge|StudioCloseableBadge/, componentNames: ["CanonicalSplitBadgeFamily"] },
  { family: "tags-status", title: /SpectrumTag|TagEditor|Tag Editor|Spectrum Tags|Ranked Metadata Tag|Brain Status|StudioBrainStatusBadge|StudioBrainStatusIndicator|StudioLedBadgeTab|Status \/ navigation|LED/ },
  { family: "counters", title: /StudioCounter|StudioSideCounter|StudioLeftCounter|StudioLeftWordCounter|Double Split Word|Side Counter|Left Word Counter/, componentNames: ["ConfirmedStudioCounterFamily", "ConfirmedStudioSideCounterFamily", "ConfirmedStudioLeftWordCounterFamily", "ConfirmedStudioDoubleSplitWordCounterFamily"] },
  { family: "steppers-sliders", title: /StudioDoubleSplitSlider|Double Split Slider|Stepper|StudioInlineStepper|StudioSplitStepper|LeftWordSlider|StudioLeftWordSlider|Slider/, componentNames: ["ConfirmedStudioDoubleSplitSliderFamily", "ConfirmedStudioNumericStepperFamily", "ConfirmedStudioLeftWordSliderFamily"] },
  { family: "dropdowns", title: /Dropdown/, componentNames: ["ConfirmedStudioDropdownFamily"] },
  { family: "buttons", title: /Button ·|Prominent Action|Two-Line Button|Split-left Button|Split Button Family|Play\/Pause|StudioSplitLeftButton|StudioDoubleSplitButton|StudioSplitRightButton|StudioActionButton|StudioTwoLineButton|StudioSplitTwoLineButton/, componentNames: ["ConfirmedStudioButtonFamily", "ConfirmedStudioSplitButtonFamily"] },
  { family: "modules-frames", title: /Top Split Module|Collapsing|InterModule|Upload Frame/ },
  { family: "accordions-layout", title: /Split Accordion|Panel Accordion|Component Grid/ },
  { family: "chat-meta", title: /StudioChatComposerDock|StudioChatResponseShell|Response Meta Row|StudioResponseMetaRow/ },
  { family: "calendar", title: /Calendar Event|Multi-day|Thumbnail Event|Media Rail|StudioCalendar/ },
  { family: "compositions", title: /Publishing Card/ },
]

export const classifyConfirmedCatalogTitle = (title: string, componentName = ""): ConfirmedCatalogFamilyId => {
  for (const rule of CLASSIFIERS) {
    if (rule.componentNames?.length && componentName && rule.componentNames.includes(componentName)) return rule.family
    if (rule.title && rule.title.test(title)) return rule.family
  }
  return "unsorted"
}

export const classifyConfirmedCatalogItem = (node: unknown): ConfirmedCatalogFamilyId => {
  if (!node || typeof node !== "object" || !("props" in node)) return "unsorted"
  const element = node as { props?: { title?: unknown }; type?: { displayName?: string; name?: string } | string | number }
  const title = typeof element.props?.title === "string" ? element.props.title : ""
  const type = element.type
  const componentName = typeof type === "function" ? (type as { displayName?: string; name?: string }).displayName || (type as { name?: string }).name || "" : ""
  return classifyConfirmedCatalogTitle(title, componentName)
}

export type ConfirmedCatalogFamilyName = "Text Fields" | "Buttons & Badges" | "Dropdowns" | "Controls" | "Modules & Frames" | "Compositions" | "Unsorted"
export const familyIdToDisplayName = (id: ConfirmedCatalogFamilyId): string => {
  if (id === "representatives") return "Representatives"
  if (id === "unsorted") return "Unsorted"
  return CONFIRMED_CATALOG_FAMILY_META[id].title
}
