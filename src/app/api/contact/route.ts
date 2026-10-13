import { NextResponse } from "next/server";
import { Resend } from "resend";
import { handleContact, type Sender } from "@/lib/contact";

export const runtime = "nodejs";

const MAX_BYTES = 20_000;
// Best-effort in-memory rate limit (per server instance): 5 submissions / 10 min per IP.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return list.length > MAX_HITS;
}

const send: Sender = async (apiKey, payload) => {
  const { error } = await new Resend(apiKey).emails.send(payload);
  return { error };
};

export async function POST(req: Request) {
  if (!(req.headers.get("content-type") ?? "").includes("application/json"))
    return NextResponse.json({ ok: false, error: "Expected application/json." }, { status: 415 });
  const len = Number(req.headers.get("content-length") ?? 0);
  if (len > MAX_BYTES) return NextResponse.json({ ok: false, error: "Message is too large." }, { status: 413 });

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip))
    return NextResponse.json({ ok: false, error: "Too many messages. Please try again in a few minutes or email us directly." }, { status: 429 });

  let raw: unknown;
  try {
    const text = await req.text();
    if (text.length > MAX_BYTES) return NextResponse.json({ ok: false, error: "Message is too large." }, { status: 413 });
    raw = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_SEND_CONFIRMATION } = process.env;
  const result = await handleContact(raw, { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_SEND_CONFIRMATION }, send);
  return NextResponse.json(result.body, { status: result.status });
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
}
