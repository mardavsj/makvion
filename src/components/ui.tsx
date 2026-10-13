import Link from "next/link";
import type { ReactNode } from "react";

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "gold" | "ghost" | "light"; className?: string; external?: boolean };

export function Button({ href, children, variant = "primary", className = "", external }: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";
  const styles = {
    primary: "bg-brand-600 text-white shadow-[0_10px_30px_-10px_rgba(36,95,86,.7)] hover:bg-brand-700 hover:-translate-y-0.5",
    secondary: "bg-white text-ink ring-1 ring-ink/10 hover:ring-brand-400 hover:-translate-y-0.5",
    gold: "bg-gold-300 text-ink shadow-[0_10px_30px_-12px_rgba(198,145,65,.8)] hover:bg-gold-200 hover:-translate-y-0.5",
    light: "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/15 hover:-translate-y-0.5",
    ghost: "w-fit !px-0 !py-0 text-brand-700 hover:text-brand-900",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  if (external)
    return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="none" className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 ${className}`}>
      <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="none" className={`h-5 w-5 shrink-0 ${className}`}>
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity=".12" />
      <path d="m6.5 10.2 2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Eyebrow({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "gold" | "dark" }) {
  const t = { brand: "text-brand-700 bg-brand-50 ring-brand-100", gold: "text-gold-700 bg-gold-50 ring-gold-200", dark: "text-gold-200 bg-white/5 ring-white/15" }[tone];
  return (
    <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] ring-1 ${t}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "dark" ? "bg-gold-300" : "bg-gold-400"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, center, tone = "light", eyebrowTone }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; center?: boolean; tone?: "light" | "dark"; eyebrowTone?: "brand" | "gold" | "dark" }) {
  return (
    <div className={`reveal max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow tone={eyebrowTone ?? (tone === "dark" ? "dark" : "brand")}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display mt-5 text-[2.1rem] font-semibold leading-[1.05] sm:text-5xl lg:text-[3.4rem] ${tone === "dark" ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${center ? "mx-auto" : ""} ${tone === "dark" ? "text-white/75" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const paths: Record<string, ReactNode> = {
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  gauge: <><path d="M4.5 17a8.5 8.5 0 1 1 15 0" /><path d="m12 13 4-4.5" /><circle cx="12" cy="13" r="1.2" /></>,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></>,
  eye: <><path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" /><circle cx="12" cy="12" r="3" /></>,
};

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}

export function BrowserFrame({ url, children, className = "", tone = "light" }: { url: string; children: ReactNode; className?: string; tone?: "light" | "dark" }) {
  return (
    <div className={`overflow-hidden rounded-2xl ring-1 shadow-[0_40px_90px_-40px_rgba(19,32,30,.55)] ${tone === "dark" ? "bg-brand-950 ring-white/10" : "bg-white ring-ink/10"} ${className}`}>
      <div className={`flex items-center gap-3 border-b px-4 py-2.5 ${tone === "dark" ? "border-white/10" : "border-line bg-cream/70"}`}>
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#e9796f]" /><span className="h-2.5 w-2.5 rounded-full bg-[#e8bf5a]" /><span className="h-2.5 w-2.5 rounded-full bg-[#6cc08a]" />
        </span>
        <span className={`mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-md px-3 py-1 text-[0.7rem] ${tone === "dark" ? "bg-white/5 text-white/70" : "bg-white text-muted ring-1 ring-line"}`}>
          <svg aria-hidden viewBox="0 0 16 16" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3.5" y="7" width="9" height="6.5" rx="1.5" /><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" /></svg>
          {url}
        </span>
        <span className="w-10" aria-hidden />
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2.2rem] bg-ink p-2 shadow-[0_40px_80px_-30px_rgba(19,32,30,.6)] ring-1 ring-black/20 ${className}`}>
      <div className="relative overflow-hidden rounded-[1.8rem] bg-white">
        <span aria-hidden className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
        {children}
      </div>
    </div>
  );
}
