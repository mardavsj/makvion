"use client";
import Link from "next/link";
import { useState } from "react";
import { services, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field = "mt-2 block w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    setFieldErrors({});
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: Record<string, string> };
      if (!res.ok || !json.ok) {
        setFieldErrors(json.fields ?? {});
        setError(json.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setError("We couldn't reach the server.");
      setStatus("error");
    }
  }
  const fe = (n: string) => fieldErrors[n] ? <span id={`${n}-error`} className="mt-1.5 block text-xs font-medium text-red-700">{fieldErrors[n]}</span> : null;
  const aria = (n: string) => fieldErrors[n] ? { "aria-invalid": true, "aria-describedby": `${n}-error` } : {};

  if (status === "sent")
    return (
      <div role="status" className="rounded-2xl border border-brand-200 bg-brand-50 p-10">
        <p className="font-display text-3xl font-semibold text-brand-700">Thanks — message received.</p>
        <p className="mt-3 text-muted">We&apos;ll get back to you within one business day. Need us sooner? Email <a className="font-medium text-brand-700 underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="relative grid gap-6 sm:grid-cols-2" aria-busy={status === "sending"}>
      <label className="text-sm font-medium">Your name<input required name="name" {...aria("name")} autoComplete="name" className={field} placeholder="Your full name" />{fe("name")}</label>
      <label className="text-sm font-medium">Email<input required type="email" name="email" {...aria("email")} autoComplete="email" className={field} placeholder="you@company.com" />{fe("email")}</label>
      <label className="text-sm font-medium">Company<input name="company" {...aria("company")} autoComplete="organization" className={field} placeholder="Company name" />{fe("company")}</label>
      <label className="text-sm font-medium">Current website<input name="website" {...aria("website")} type="url" className={field} placeholder="https://" />{fe("website")}</label>
      <label className="text-sm font-medium">What do you need?
        <select name="service" className={field} defaultValue="">
          <option value="" disabled>Choose a service</option>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Something else</option>
        </select>
      </label>
      <label className="text-sm font-medium">Budget (INR, optional)
        <select name="budget" className={field} defaultValue="">
          <option value="" disabled>Select a range</option>
          <option>Under ₹25k</option><option>₹25k – ₹50k</option><option>₹50k – ₹1L</option><option>₹1L+</option><option>Not sure</option>
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">Tell us about your project
        <textarea required minLength={10} maxLength={5000} name="message" {...aria("message")} rows={5} className={field} placeholder="What does your business do, and what would you like to achieve?" />{fe("message")}
      </label>
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden"><label>Leave this field empty<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">By sending, you agree to our <Link href="/privacy" className="underline">privacy policy</Link>.</p>
        <button type="submit" disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60">
          {status === "sending" && <span aria-hidden className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />}
          {status === "sending" ? "Sending…" : "Get my free quote"}
        </button>
      </div>
      {status === "error" && (
        <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:col-span-2">
          <p className="font-semibold">{error}</p>
          <p className="mt-1">You can also email us at <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll reply within one business day.</p>
        </div>
      )}
    </form>
  );
}
