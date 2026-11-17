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
  "accordions-layout": { title: "Accordions & Layout", order: 12, defaultOpen: true },
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
  { title: "Arrow Toggle · Five Sizes × Left / Right / Double Rails", family: "choice-toggles", combined: true },
  { title: "Side Toggle · Five Sizes × Left / Right Arrow Orientation", family: "choice-toggles", combined: true },
  { title: "Double Side Toggle · Five Sizes × V1 / V2 × Three Right Faces", family: "choice-toggles", combined: true },
  { title: "Bar Toggle · Five Sizes", family: "choice-toggles", combined: true },
  { title: "StudioDoubleSplitWordCounter · Two Chevron Rails + Four-State Word Cycle", family: "counters" },
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
  { title: "Studio Spectrum + Metric Icons · Semantic Icon System", family: "tags-status" },
  { title: "StudioSideTextCounter · Editable Text + Numeric Stepper · Five Sizes", family: "split-text-fields" },
  { title: "Studio Numeric Steppers · Inline + Split", family: "steppers-sliders" },
  { title: "Panel Accordion · StudioPanelAccordion · Standard + Compact", family: "accordions-layout" },
  { title: "Panel Accordion", family: "accordions-layout" },
  { title: "Resource Button", family: "buttons" },
  { title: "Chat Response Shell + Response Metadata Row", family: "chat-meta" },
  { title: "Calendar Event Chips + Multi-day Bars + Thumbnail Events", family: "calendar" },
  { title: "Accent Rail + Icon Title Information Modules", family: "modules-frames" },
  { title: "Studio Video Module · Thumbnail + Text Anatomy", family: "modules-frames" },
  { title: "Studio Video Selector · Searchable Split-left Menu", family: "dropdowns" },
  { title: "Split Accordion · Train Motion", family: "accordions-layout" },
  { title: "InterModule · Standard", family: "modules-frames" },
  { title: "Collapsing Split Module · Standard + Compact", family: "modules-frames" },
  { title: "Collapsing Two-Line Module · Standard", family: "modules-frames" },
  { title: "Top Split Module · Left / Right / Double / None", family: "modules-frames" },
  { title: "Upload Frame · Standard + Compact", family: "modules-frames" },
  { title: "Multi Section Module", family: "modules-frames" },
  { title: "Publishing Card · 5:7 Compound Composition", family: "compositions" },
  { title: "Status / navigation · LED badge and tab system", family: "tags-status" },
  { title: "StudioCloseableBadge · Fixed 20px Exception", family: "badges" },
  { title: "StudioTagEditor · Tokenized Actions", family: "tags-status" },
  { title: "StudioSpectrumTag · Vault Metadata Exception", family: "tags-status" },
  { title: "Word Toggle · Five Sizes × Four Skins", family: "choice-toggles", combined: true },
  { title: "Vertical Word Toggle · Five Sizes × Four Variants", family: "choice-toggles", combined: true },
  { title: "StudioCounter · Supreme + Standard + Compact + Mini + Micro", family: "counters" },
  { title: "StudioSideCounter · Supreme + Standard + Compact + Mini + Micro", family: "counters" },
  { title: "StudioDoubleSplitSlider · Supreme + Standard + Compact + Mini + Micro", family: "steppers-sliders" },
  { title: "StudioSplitTextInput · Left / Right / Double · Five Sizes", family: "split-text-fields" },
  { title: "StudioSplitLeftTextInput · Five Sizes", family: "split-text-fields" },
  { title: "StudioSplitRightTextInput · Five Sizes", family: "split-text-fields" },
  { title: "StudioDoubleSplitTextInput · Five Sizes", family: "split-text-fields" },
  { title: "StudioLeftWordCounter · Four-State Cycle + Five Sizes", family: "counters" },
  { title: "StudioLeftWordSlider · Slider + Numeric Right Rail", family: "steppers-sliders" },
  { title: "Square Icon Button Groups · Five Joined Squares · Standard + Compact", family: "icon-buttons" },
  { title: "Circle Icon Button · 44px + 28px", family: "icon-buttons" },
  { title: "Play/Pause Split-left Button · 44px + 28px", family: "buttons" },
  { title: "Split-left Button · Standard + Compact", family: "buttons" },
]

export const CONFIRMED_CATALOG_REQUIRED_EXPORTS: readonly string[] = [
  "StudioButton", "StudioNumberInput", "StudioInput", "StudioTextInput", "StudioTextArea", "StudioTextBox",
  "Studioarea", "Studiotoggle", "Studioswitch", "Studioradio", "Studiocheck", "Studioxbox",
  "StudioChoice", "StudioWordToggle", "StudioVerticalWordToggle", "StudioSwitch", "StudioRadio", "StudioCheckbox", "StudioXCheckbox",
  "StudioCounter", "StudioSideCounter", "StudioSideTextCounter", "StudioSideTextCounterIcon", "StudioLeftCounter",
  "StudioLeftWordCounter", "StudioLeftWordSlider", "StudioInlineStepper", "StudioSplitStepper", "StudioDoubleSplitSlider",
  "StudioArrowToggle", "StudioSideToggle", "StudioDoubleSideToggle", "StudioBarToggle", "StudioDoubleSplitWordCounter",
  "StudioTwoLineButton", "StudioSplitTwoLineButton", "StudioActionButton", "StudioIconButton", "StudioSquareIconButton",
  "StudioSquareIconButtonGroup", "StudioCircleIconButton", "StudioPlayPauseButton", "StudioSplitLeftButton",
  "StudioDoubleSplitButton", "StudioSplitRightButton", "StudioSplitLeftBadge", "StudioSplitRightBadge", "StudioDoubleSplitBadge",
  "StudioBrainStatusBadge", "StudioBrainStatusIndicator", "StudioSpectrumTag", "StudioCloseableBadge", "StudioTagEditor", "StudioUploadFrame",
  "StudioDropdown", "StudioSplitLeftDropdown", "StudioLegendMultiDropdown",
  "StudioPanelAccordion", "StudioSplitAccordion", "StudioComponentGrid", "StudioComponentGridCell", "StudioComponentGridRow",
  "StudioInterModule", "StudioPublishingCard", "StudioLedBadgeTab",
  "StudioSpectrumIcon", "StudioIconBadge", "StudioMetricIcon", "StudioAccentRailModule", "StudioIconTitleModule",
  "StudioVideoModule", "StudioVideoSelector", "StudioResourceSplitButton", "StudioResponseMetaRow", "StudioChatResponseShell", "StudioChatComposerDock",
  "StudioCalendarEventChip", "StudioCalendarMultiDayBar", "StudioCalendarThumbnailEventChip", "StudioCalendarMediaRail",
] as const

export const isAllowedCombinedModuleTitle = (title: string): boolean =>
  /^(?:Switches, Radios & Checkboxes|Word Toggles ·|Arrow \/ Side \/ Double Side \/ Bar Toggles|Arrow Toggle ·|Side Toggle ·|Double Side Toggle ·|Bar Toggle ·|StudioChoice ·|Split Button Family ·|Split-left Badge ·)/.test(title)

type Matcher = { family: ConfirmedCatalogFamilyId; title?: RegExp; componentNames?: string[] }
const CLASSIFIERS: Matcher[] = [
  { family: "representatives", title: /Direct Imported Primitive Representatives|Primitive Representatives · Standard/ },
  { family: "choice-toggles", title: /Switches, Radios & Checkboxes|Word Toggles|Arrow \/ Side \/ Double Side \/ Bar Toggles|Arrow Toggle|Side Toggle|Double Side Toggle|Bar Toggle|StudioSwitch|StudioRadio|StudioCheckbox|StudioXCheckbox|StudioWordToggle|StudioVerticalWordToggle|StudioArrowToggle|StudioSideToggle|StudioDoubleSideToggle|StudioBarToggle|StudioChoice|Compatibility Control Exports/, componentNames: ["CanonicalControlFamilies", "CanonicalWordToggleFamily", "ConfirmedStudioValueToggleFamily"] },
  { family: "split-text-fields", title: /StudioSideTextCounterIcon|Icon Rail Text Inputs|Icon Button Rail Text Inputs|SplitTextInput|SplitLeftInput|SearchInput|SideTextCounter/ },
  { family: "text-fields", title: /Studio Text Input|Studio Text Area|Studio Text Box|StudioTextInput|StudioTextArea|StudioTextBox|UsernameInput|NumberInput|Compatibility Field Exports/ },
  { family: "icon-buttons", title: /Square Icon Button|Circle Icon Button|StudioIconButton|Icon Button ·/ },
  { family: "badges", title: /Split-left Badge|Split-right Badge|Double-split Badge|StudioSplitLeftBadge|StudioSplitRightBadge|StudioDoubleSplitBadge|Closeable Badge|StudioCloseableBadge/, componentNames: ["CanonicalSplitBadgeFamily"] },
  { family: "tags-status", title: /SpectrumTag|TagEditor|Tag Editor|Spectrum Tags|Ranked Metadata Tag|Brain Status|StudioBrainStatusBadge|StudioBrainStatusIndicator|StudioLedBadgeTab|Status \/ navigation|LED|StudioSpectrumIcon|StudioIconBadge|StudioMetricIcon/ },
  { family: "counters", title: /StudioCounter|StudioSideCounter|StudioLeftCounter|StudioLeftWordCounter|StudioDoubleSplitWordCounter|DoubleSplitWordCounter|Double Split Word|Side Counter|Left Word Counter/, componentNames: ["ConfirmedStudioCounterFamily", "ConfirmedStudioSideCounterFamily", "ConfirmedStudioLeftWordCounterFamily", "ConfirmedStudioDoubleSplitWordCounterFamily"] },
  { family: "steppers-sliders", title: /Studio Numeric Steppers|StudioDoubleSplitSlider|Double Split Slider|Stepper|StudioInlineStepper|StudioSplitStepper|LeftWordSlider|StudioLeftWordSlider|Slider/, componentNames: ["ConfirmedStudioDoubleSplitSliderFamily", "ConfirmedStudioNumericStepperFamily", "ConfirmedStudioLeftWordSliderFamily"] },
  { family: "dropdowns", title: /Dropdown|StudioVideoSelector/, componentNames: ["ConfirmedStudioDropdownFamily"] },
  { family: "buttons", title: /Button ·|Prominent Action|Two-Line Button|Split-left Button|Split Button Family|Play\/Pause|StudioSplitLeftButton|StudioDoubleSplitButton|StudioSplitRightButton|StudioActionButton|StudioTwoLineButton|StudioSplitTwoLineButton/, componentNames: ["ConfirmedStudioButtonFamily", "ConfirmedStudioSplitButtonFamily"] },
  { family: "modules-frames", title: /Top Split Module|Collapsing|InterModule|Upload Frame|StudioUploadFrame|Two-Line InterModule|Collapsing Two-Line|Accent Rail|Icon Title|StudioAccentRailModule|StudioIconTitleModule|StudioVideoModule|Multi Section Module|StudioMultiSectionModule|Resource Button/ },
  { family: "accordions-layout", title: /Split Accordion|Panel Accordion|StudioPanelAccordion|Component Grid/ },
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
