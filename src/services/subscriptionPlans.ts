import type { MasterTableType } from "./productArchitecture"

export type SubscriptionPlanId =
 | "basic"
 | "beta"
 | "creator"
 | "creator_plus"
 | "creator_pro"
 | "executive"

export interface SubscriptionPlanCapabilityMatrix {
 id: SubscriptionPlanId
 label: string
 priceUsd: number
 monthlyCredits: number
 rolloverCap: number
 billingTier: "free" | "medium" | "large"
 modes: Array<"public_handle" | "connected" | "import" | "hybrid">
 tables: MasterTableType[]
 maxHistoryDays: number
 formulaComplexityTier: 1 | 2 | 3 | 4 | 5
 chartTier: 1 | 2 | 3 | 4 | 5
 includesScheduledExports: boolean
 includesExternalSignals: boolean
 includesTeamWorkspaces: boolean
 includesCustomConnectors: boolean
}

export const SUBSCRIPTION_PLANS: SubscriptionPlanCapabilityMatrix[] = [
 {
  id: "basic",
  priceUsd: 0,
  monthlyCredits: 0,
  rolloverCap: 0,
  billingTier: "free",
  label: "Basic (Free)",
  modes: ["public_handle", "import"],
  tables: [
   "master_channel_identity",
   "master_video_core",
   "master_geography",
   "master_traffic",
   "master_coverage_registry",
  ],
  maxHistoryDays: 90,
  formulaComplexityTier: 1,
  chartTier: 1,
  includesScheduledExports: false,
  includesExternalSignals: false,
  includesTeamWorkspaces: false,
  includesCustomConnectors: false,
 },
 {
  id: "beta",
  priceUsd: 0,
  monthlyCredits: 0,
  rolloverCap: 0,
  billingTier: "large",
  label: "Beta (BYOK)",
  modes: ["connected", "import", "hybrid", "public_handle"],
  tables: [
   "master_channel_identity",
   "master_video_core",
   "master_audience",
   "master_geography",
   "master_traffic",
   "master_device_playback",
   "master_retention",
   "master_monetization",
   "master_external_signals",
   "master_formula_metrics",
   "master_coverage_registry",
  ],
  maxHistoryDays: 3650,
  formulaComplexityTier: 5,
  chartTier: 5,
  includesScheduledExports: true,
  includesExternalSignals: true,
  includesTeamWorkspaces: true,
  includesCustomConnectors: true,
 },
 {
  id: "creator",
  priceUsd: 9.99,
  monthlyCredits: 1000,
  rolloverCap: 2000,
  billingTier: "medium",
  label: "Creator",
  modes: ["connected", "import", "hybrid", "public_handle"],
  tables: [
   "master_channel_identity",
   "master_video_core",
   "master_audience",
   "master_geography",
   "master_traffic",
   "master_device_playback",
   "master_coverage_registry",
  ],
  maxHistoryDays: 365,
  formulaComplexityTier: 2,
  chartTier: 2,
  includesScheduledExports: false,
  includesExternalSignals: false,
  includesTeamWorkspaces: false,
  includesCustomConnectors: false,
 },
 {
  id: "creator_plus",
  priceUsd: 19.99,
  monthlyCredits: 2000,
  rolloverCap: 4000,
  billingTier: "medium",
  label: "Creator Plus",
  modes: ["connected", "import", "hybrid", "public_handle"],
  tables: [
   "master_channel_identity",
   "master_video_core",
   "master_audience",
   "master_geography",
   "master_traffic",
   "master_device_playback",
   "master_retention",
   "master_monetization",
   "master_formula_metrics",
   "master_coverage_registry",
  ],
  maxHistoryDays: 1095,
  formulaComplexityTier: 3,
  chartTier: 3,
  includesScheduledExports: false,
  includesExternalSignals: false,
  includesTeamWorkspaces: false,
  includesCustomConnectors: false,
 },
 {
  id: "creator_pro",
  priceUsd: 39.99,
  monthlyCredits: 4000,
  rolloverCap: 8000,
  billingTier: "medium",
  label: "Creator Pro",
  modes: ["connected", "import", "hybrid", "public_handle"],
  tables: [
   "master_channel_identity",
   "master_video_core",
   "master_audience",
   "master_geography",
   "master_traffic",
   "master_device_playback",
   "master_retention",
   "master_monetization",
   "master_external_signals",
   "master_formula_metrics",
   "master_coverage_registry",
  ],
  maxHistoryDays: 1825,
  formulaComplexityTier: 4,
  chartTier: 4,
  includesScheduledExports: true,
  includesExternalSignals: true,
  includesTeamWorkspaces: true,
  includesCustomConnectors: false,
 },
 {
  id: "executive",
  priceUsd: 69.99,
  monthlyCredits: Number.POSITIVE_INFINITY,
  rolloverCap: Number.POSITIVE_INFINITY,
  billingTier: "large",
  label: "Executive",
  modes: ["connected", "import", "hybrid", "public_handle"],
  tables: [
   "master_channel_identity",
   "master_video_core",
   "master_audience",
   "master_geography",
   "master_traffic",
   "master_device_playback",
   "master_retention",
   "master_monetization",
   "master_external_signals",
   "master_formula_metrics",
   "master_coverage_registry",
  ],
  maxHistoryDays: 3650,
  formulaComplexityTier: 5,
  chartTier: 5,
  includesScheduledExports: true,
  includesExternalSignals: true,
  includesTeamWorkspaces: true,
  includesCustomConnectors: true,
 },
]

export const getSubscriptionPlan = (
 planId: SubscriptionPlanId,
): SubscriptionPlanCapabilityMatrix => {
 return SUBSCRIPTION_PLANS.find((plan) => plan.id === planId) || SUBSCRIPTION_PLANS[0]
}

export const isTableEnabledForPlan = (
 planId: SubscriptionPlanId,
 table: MasterTableType,
): boolean => {
 return getSubscriptionPlan(planId).tables.includes(table)
}
