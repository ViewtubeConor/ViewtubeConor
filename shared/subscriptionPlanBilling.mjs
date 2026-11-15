/**
 * Canonical server/client billing metadata for the six ViewTube account plans.
 * Feature eligibility remains owned by src/services/subscriptionPlans.ts.
 */
export const SUBSCRIPTION_PLAN_BILLING = Object.freeze({
  basic: Object.freeze({
    id: "basic", label: "Basic", priceUsd: 0, trialHours: 0,
    monthlyCredits: 0, rolloverCap: 0, billingTier: "free", stripePriceEnv: null,
  }),
  beta: Object.freeze({
    id: "beta", label: "Beta (BYOK)", priceUsd: 0, trialHours: 0,
    monthlyCredits: 0, rolloverCap: 0, billingTier: "large", stripePriceEnv: null,
  }),
  creator: Object.freeze({
    id: "creator", label: "Creator", priceUsd: 9.99, trialHours: 48,
    monthlyCredits: 1_000, rolloverCap: 2_000, billingTier: "medium", stripePriceEnv: "STRIPE_PRICE_CREATOR",
  }),
  creator_plus: Object.freeze({
    id: "creator_plus", label: "Creator Plus", priceUsd: 19.99, trialHours: 48,
    monthlyCredits: 2_000, rolloverCap: 4_000, billingTier: "medium", stripePriceEnv: "STRIPE_PRICE_CREATOR_PLUS",
  }),
  creator_pro: Object.freeze({
    id: "creator_pro", label: "Creator Pro", priceUsd: 39.99, trialHours: 48,
    monthlyCredits: 4_000, rolloverCap: 8_000, billingTier: "medium", stripePriceEnv: "STRIPE_PRICE_CREATOR_PRO",
  }),
  executive: Object.freeze({
    id: "executive", label: "Executive", priceUsd: 69.99, trialHours: 48,
    monthlyCredits: Number.POSITIVE_INFINITY, rolloverCap: Number.POSITIVE_INFINITY,
    billingTier: "large", stripePriceEnv: "STRIPE_PRICE_EXECUTIVE",
  }),
});
