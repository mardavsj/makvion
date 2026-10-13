// Contact form logic, kept framework-free so it can be unit tested with a mocked sender.

export type ContactEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
  RESEND_SEND_CONFIRMATION?: string;
};

export type EmailPayload = { from: string; to: string[]; subject: string; html: string; text: string; replyTo?: string };
export type Sender = (apiKey: string, payload: EmailPayload) => Promise<{ error?: { message: string } | null }>;
export type ContactResult = { status: number; body: { ok: boolean; error?: string; fields?: Record<string, string> } };

const LIMITS = { name: 100, email: 200, company: 150, website: 300, service: 100, budget: 50, message: 5000 } as const;
type Field = keyof typeof LIMITS;
const FIELDS = Object.keys(LIMITS) as Field[];
const LABELS: Record<Field, string> = { name: "Name", email: "Email", company: "Company", website: "Current website", service: "Service", budget: "Budget", message: "Message" };
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export function validate(raw: unknown): { data?: Record<Field, string>; errors?: Record<string, string> } {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return { errors: { form: "Invalid request body." } };
  const r = raw as Record<string, unknown>;
  const data = {} as Record<Field, string>;
  const errors: Record<string, string> = {};
  for (const f of FIELDS) {
    const v = r[f];
    if (v != null && typeof v !== "string") { errors[f] = "Invalid value."; continue; }
    const s = typeof v === "string" ? v.trim() : "";
    if (s.length > LIMITS[f]) errors[f] = `Must be ${LIMITS[f]} characters or fewer.`;
    data[f] = s.replace(/\r\n/g, "\n");
  }
  if (!data.name) errors.name = "Please enter your name.";
  if (!data.email || !EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.message || data.message.length < 10) errors.message = "Please tell us a little about your project (10+ characters).";
  if (data.website && !/^https?:\/\/\S+$/i.test(data.website)) errors.website = "Please enter a full URL starting with http:// or https://.";
  for (const f of ["name", "email", "company", "service", "budget"] as Field[]) if (/[\r\n]/.test(data[f])) errors[f] = "Invalid value.";
  return Object.keys(errors).length ? { errors } : { data };
}

export function buildEnquiryEmail(d: Record<Field, string>) {
  const rows = FIELDS.filter((f) => f !== "message").map((f) => [LABELS[f], d[f] || "—"]);
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", "Message:", d.message].join("\n");
  const html = `<!doctype html><html><body style="margin:0;background:#faf8f3;font-family:Inter,Arial,sans-serif;color:#13201e">
<div style="max-width:600px;margin:0 auto;padding:32px 20px">
<p style="margin:0 0 4px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#855c26;font-weight:600">New enquiry · makvion.com</p>
<h1 style="margin:0 0 24px;font-size:22px;color:#13201e">${esc(d.name)}${d.company ? ` · ${esc(d.company)}` : ""}</h1>
<table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #e7e3d9;border-radius:12px">
${rows.map(([k, v]) => `<tr><td style="padding:10px 16px;border-bottom:1px solid #e7e3d9;width:150px;color:#52605c;font-size:14px">${esc(k)}</td><td style="padding:10px 16px;border-bottom:1px solid #e7e3d9;font-size:14px">${esc(v)}</td></tr>`).join("\n")}
</table>
<h2 style="margin:28px 0 8px;font-size:15px;color:#2c7469">Message</h2>
<div style="background:#fff;border:1px solid #e7e3d9;border-radius:12px;padding:16px;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(d.message)}</div>
<p style="margin-top:24px;font-size:12px;color:#52605c">Reply to this email to respond directly to ${esc(d.email)}.</p>
</div></body></html>`;
  return { subject: `New enquiry from ${d.name}${d.service ? ` · ${d.service}` : ""}`, html, text };
}

export function buildConfirmationEmail(d: Record<Field, string>, contactTo: string) {
  const first = d.name.split(/\s+/)[0];
  const text = `Hi ${first},\n\nThanks for getting in touch with Makvion. We've received your message and will reply within one business day.\n\nIf anything changes in the meantime, just reply to this email.\n\nMakvion Technologies\n${contactTo}`;
  const html = `<!doctype html><html><body style="margin:0;background:#faf8f3;font-family:Inter,Arial,sans-serif;color:#13201e"><div style="max-width:560px;margin:0 auto;padding:32px 20px;font-size:15px;line-height:1.6">
<p>Hi ${esc(first)},</p><p>Thanks for getting in touch with Makvion. We've received your message and will reply within one business day.</p><p>If anything changes in the meantime, just reply to this email.</p>
<p style="margin-top:28px;color:#2c7469;font-weight:600">Makvion Technologies</p><p style="margin:0;color:#52605c">${esc(contactTo)}</p></div></body></html>`;
  return { subject: "We've received your message · Makvion", html, text };
}

export async function handleContact(raw: unknown, env: ContactEnv, send: Sender, log: Pick<Console, "error" | "warn"> = console): Promise<ContactResult> {
  if (raw && typeof raw === "object" && typeof (raw as Record<string, unknown>)._gotcha === "string" && (raw as Record<string, string>)._gotcha.trim()) {
    log.warn("[contact] honeypot triggered; dropping submission");
    return { status: 200, body: { ok: true } }; // silently accept so bots don't retry
  }
  const { data, errors } = validate(raw);
  if (!data) return { status: 422, body: { ok: false, error: "Please check the highlighted fields.", fields: errors } };

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    log.error("[contact] RESEND_API_KEY is not set; cannot send enquiry email.");
    return { status: 500, body: { ok: false, error: "Our contact form isn't configured yet. Please email us directly." } };
  }
  const from = env.RESEND_FROM_EMAIL || "Makvion <noreply@makvion.com>";
  const to = env.CONTACT_TO_EMAIL || "contact@makvion.com";

  const mail = buildEnquiryEmail(data);
  try {
    const res = await send(apiKey, { from, to: [to], replyTo: data.email, ...mail });
    if (res?.error) throw new Error(res.error.message);
  } catch (e) {
    log.error("[contact] Resend send failed:", e instanceof Error ? e.message : e);
    return { status: 502, body: { ok: false, error: "We couldn't send your message right now. Please email us directly." } };
  }

  if (env.RESEND_SEND_CONFIRMATION === "true") {
    try {
      const c = buildConfirmationEmail(data, to);
      const res = await send(apiKey, { from, to: [data.email], replyTo: to, ...c });
      if (res?.error) throw new Error(res.error.message);
    } catch (e) {
      log.warn("[contact] confirmation email failed (enquiry was delivered):", e instanceof Error ? e.message : e);
    }
  }
  return { status: 200, body: { ok: true } };
}
