export type SubscriptionPlanBillingTier = "free" | "medium" | "large";
export type SubscriptionPlanBillingId = "basic" | "beta" | "creator" | "creator_plus" | "creator_pro" | "executive";
export interface SubscriptionPlanBillingDefinition {
  readonly id: SubscriptionPlanBillingId;
  readonly label: string;
  readonly priceUsd: number;
  readonly trialHours: number;
  readonly monthlyCredits: number;
  readonly rolloverCap: number;
  readonly billingTier: SubscriptionPlanBillingTier;
  readonly stripePriceEnv: string | null;
}
export const SUBSCRIPTION_PLAN_BILLING: Readonly<Record<SubscriptionPlanBillingId, SubscriptionPlanBillingDefinition>>;
