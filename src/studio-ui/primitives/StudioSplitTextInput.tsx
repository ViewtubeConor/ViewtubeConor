/**
 * Split / double-split text inputs — foundation is StudioSideTextCounter /
 * StudioSideTextCounterIcon (StudioSplitShell + StudioTextInput).
 * Implementation lives in StudioControls.tsx so it shares the same shell, rails,
 * and single primary inset field contract.
 */
export {
  StudioSplitTextInput,
  StudioSplitLeftTextInput,
  StudioSplitRightTextInput,
  StudioDoubleSplitTextInput,
  type StudioSplitTextInputProps,
  type StudioSplitTextInputLayout,
} from "./StudioControls"
