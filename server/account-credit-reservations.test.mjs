import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { mkdtemp, rm } from "node:fs/promises";
import test from "node:test";

const tempRoot = await mkdtemp(path.join(os.tmpdir(), "viewtube-ai-credit-reservations-"));
process.env.NODE_ENV = "test";
delete process.env.DATABASE_URL;
process.env.ACCOUNT_STORE_DIR = tempRoot;

const store = await import(`./account-store.mjs?credit-reservations=${Date.now()}`);

test.after(async () => {
  await rm(tempRoot, { recursive: true, force: true });
});

const createFundedCreator = async () => {
  const userId = await store.resolveGoogleAccount({
    googleSubject: `google-${crypto.randomUUID()}`,
    email: `creator-${crypto.randomUUID()}@example.test`,
    displayName: "Credit Reservation Test",
    intent: "sign_up",
  });
  await store.setServerSubscription(userId, { status: "active", planId: "creator" });
  await store.appendAiCreditLedgerEntry(userId, {
    entryType: "grant",
    deltaCredits: 1_000,
    idempotencyKey: `grant:${userId}`,
  });
  return userId;
};

test("AI credit reservation is idempotent and settles to actual usage", async () => {
  const userId = await createFundedCreator();
  const first = await store.reserveAiCredits(userId, {
    credits: 300,
    idempotencyKey: "generation:one",
    metadata: { model: "gemini-test" },
  });
  assert.equal(first.allowed, true);
  assert.equal(first.duplicate, false);
  assert.equal(first.availableCredits, 700);

  const duplicate = await store.reserveAiCredits(userId, {
    credits: 300,
    idempotencyKey: "generation:one",
  });
  assert.equal(duplicate.allowed, true);
  assert.equal(duplicate.duplicate, true);
  assert.equal(duplicate.availableCredits, 700);
  assert.equal(duplicate.reservationId, first.reservationId);

  const settled = await store.settleAiCreditReservation(userId, {
    reservationId: first.reservationId,
    actualCredits: 180,
    idempotencyKey: "generation:one:settle",
  });
  assert.equal(settled.settled, true);
  assert.equal(settled.duplicate, false);
  assert.equal(settled.availableCredits, 820);

  const repeatedSettlement = await store.settleAiCreditReservation(userId, {
    reservationId: first.reservationId,
    actualCredits: 180,
    idempotencyKey: "generation:one:settle",
  });
  assert.equal(repeatedSettlement.duplicate, true);
  assert.equal(repeatedSettlement.availableCredits, 820);
});

test("AI credit reservation rejects insufficient balance without a ledger debit", async () => {
  const userId = await createFundedCreator();
  const result = await store.reserveAiCredits(userId, {
    credits: 1_001,
    idempotencyKey: "generation:too-large",
  });
  assert.equal(result.allowed, false);
  assert.equal(result.availableCredits, 1_000);
});

test("releasing an unused AI credit reservation restores the full reservation", async () => {
  const userId = await createFundedCreator();
  const reservation = await store.reserveAiCredits(userId, {
    credits: 250,
    idempotencyKey: "generation:cancelled",
  });
  assert.equal(reservation.availableCredits, 750);

  const released = await store.releaseAiCreditReservation(userId, {
    reservationId: reservation.reservationId,
    idempotencyKey: "generation:cancelled:release",
    reason: "provider_failed_before_execution",
  });
  assert.equal(released.released, true);
  assert.equal(released.availableCredits, 1_000);

  const duplicate = await store.releaseAiCreditReservation(userId, {
    reservationId: reservation.reservationId,
    idempotencyKey: "generation:cancelled:release",
  });
  assert.equal(duplicate.duplicate, true);
  assert.equal(duplicate.availableCredits, 1_000);
});

test("unlimited Executive accounts reserve and settle without finite credit debits", async () => {
  const userId = await createFundedCreator();
  await store.setServerSubscription(userId, { status: "active", planId: "executive" });
  const reservation = await store.reserveAiCredits(userId, {
    credits: 50_000,
    idempotencyKey: "generation:executive",
  });
  assert.equal(reservation.allowed, true);
  assert.equal(reservation.unlimited, true);
  assert.equal(reservation.availableCredits, 1_000);

  const settled = await store.settleAiCreditReservation(userId, {
    reservationId: reservation.reservationId,
    actualCredits: 60_000,
    idempotencyKey: "generation:executive:settle",
  });
  assert.equal(settled.settled, true);
  assert.equal(settled.unlimited, true);
  assert.equal(settled.availableCredits, 1_000);
});
