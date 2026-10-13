// Unit tests for src/lib/contact.ts with a mocked Resend sender.
// Run: npm run test:contact
import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const out = mkdtempSync(join(tmpdir(), "contact-test-"));
execSync(`npx tsc src/lib/contact.ts --outDir ${out} --module es2022 --target es2022 --skipLibCheck`, { stdio: "inherit" });
const { renameSync } = await import("node:fs");
renameSync(join(out, "contact.js"), join(out, "contact.mjs"));
const { handleContact } = await import(pathToFileURL(join(out, "contact.mjs")).href);

const quiet = { error() {}, warn() {} };
const valid = { name: "Jane Smith", email: "jane@acme.com", company: "Acme <b>Roofing</b>", website: "https://acme.com", service: "Business websites", budget: "$1,500 – $3,000", message: "We need a faster website before storm season." };
const env = { RESEND_API_KEY: "re_test", RESEND_FROM_EMAIL: "Makvion <noreply@makvion.com>", CONTACT_TO_EMAIL: "contact@makvion.com" };
let calls = [];
const mock = async (key, payload) => { calls.push({ key, payload }); return { error: null }; };
let pass = 0;
const t = async (name, fn) => { calls = []; await fn(); pass++; console.log("✓", name); };

await t("missing API key -> 500, no send", async () => {
  const r = await handleContact(valid, {}, mock, quiet);
  assert.equal(r.status, 500); assert.equal(r.body.ok, false); assert.equal(calls.length, 0);
});
await t("valid payload -> calls Resend with correct args", async () => {
  const r = await handleContact(valid, env, mock, quiet);
  assert.equal(r.status, 200); assert.equal(r.body.ok, true); assert.equal(calls.length, 1);
  const { key, payload } = calls[0];
  assert.equal(key, "re_test");
  assert.equal(payload.from, "Makvion <noreply@makvion.com>");
  assert.deepEqual(payload.to, ["contact@makvion.com"]);
  assert.equal(payload.replyTo, "jane@acme.com");
  assert.match(payload.subject, /Jane Smith/);
  for (const v of ["jane@acme.com", "https://acme.com", "Business websites", "$1,500 – $3,000", "storm season"]) { assert.ok(payload.text.includes(v), v); assert.ok(payload.html.includes(v), v); }
  assert.ok(payload.html.includes("Acme &lt;b&gt;Roofing&lt;/b&gt;"), "HTML is escaped");
});
await t("defaults: to contact@makvion.com, default from", async () => {
  await handleContact(valid, { RESEND_API_KEY: "k" }, mock, quiet);
  assert.deepEqual(calls[0].payload.to, ["contact@makvion.com"]); assert.match(calls[0].payload.from, /noreply@makvion\.com/);
});
await t("confirmation only when RESEND_SEND_CONFIRMATION=true", async () => {
  await handleContact(valid, { ...env, RESEND_SEND_CONFIRMATION: "true" }, mock, quiet);
  assert.equal(calls.length, 2); assert.deepEqual(calls[1].payload.to, ["jane@acme.com"]);
});
await t("validation errors -> 422 with field messages", async () => {
  const r = await handleContact({ name: "", email: "nope", message: "hi", website: "acme" }, env, mock, quiet);
  assert.equal(r.status, 422); assert.ok(r.body.fields.name && r.body.fields.email && r.body.fields.message && r.body.fields.website); assert.equal(calls.length, 0);
});
await t("oversized field -> 422", async () => {
  const r = await handleContact({ ...valid, message: "x".repeat(5001) }, env, mock, quiet);
  assert.equal(r.status, 422);
});
await t("header injection in name rejected", async () => {
  const r = await handleContact({ ...valid, name: "Jane\nBcc: x@y.com" }, env, mock, quiet);
  assert.equal(r.status, 422);
});
await t("honeypot -> 200 but nothing sent", async () => {
  const r = await handleContact({ ...valid, _gotcha: "spam" }, env, mock, quiet);
  assert.equal(r.status, 200); assert.equal(calls.length, 0);
});
await t("Resend error -> 502, never fake success", async () => {
  const r = await handleContact(valid, env, async () => ({ error: { message: "domain not verified" } }), quiet);
  assert.equal(r.status, 502); assert.equal(r.body.ok, false);
});
console.log(`\n${pass} tests passed`);
