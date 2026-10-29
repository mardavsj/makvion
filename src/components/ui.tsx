import Link from "next/link";
import type { ReactNode } from "react";
import { Gauge, Globe, Layers, Search, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Target, type LucideIcon } from "lucide-react";

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "gold" | "light" | "ghost"; size?: "md" | "lg"; className?: string; external?: boolean };

export function Button({ href, children, variant = "primary", size = "md", className = "", external }: BtnProps) {
  const base = `group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-3 text-[0.95rem]"}`;
  const styles = {
    primary: "bg-[#2c7469] text-white shadow-[0_10px_24px_-10px_rgba(29,76,69,.8)] hover:bg-[#24625a] hover:-translate-y-0.5 transition-transform",
    secondary: "bg-white/80 text-ink ring-1 ring-inset ring-line backdrop-blur hover:ring-brand-400 hover:-translate-y-0.5 transition-transform",
    gold: "bg-[#deb56b] text-ink shadow-[0_10px_24px_-10px_rgba(198,145,65,.9)] hover:bg-[#d4a85a] hover:-translate-y-0.5 transition-transform",
    light: "bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/15",
    ghost: "!px-0 !py-0 text-brand-700 hover:text-brand-900",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  if (external) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
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
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity=".14" />
      <path d="m6.5 10.2 2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ring-1 ${tone === "dark" ? "bg-white/5 text-gold-200 ring-white/15" : "bg-white text-brand-700 ring-line"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, center, tone = "light", action }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; center?: boolean; tone?: "light" | "dark"; action?: ReactNode }) {
  return (
    <div className={`reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${center ? "items-center text-center lg:flex-col lg:items-center" : ""}`}>
      <div className={`max-w-2xl ${center ? "mx-auto" : ""}`}>
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        <h2 className={`font-display mt-4 text-balance text-[2rem] font-extrabold leading-[1.08] sm:text-[2.9rem] ${tone === "dark" ? "text-white" : "text-ink"}`}>{title}</h2>
        {intro && <p className={`mt-4 text-[1.05rem] leading-relaxed sm:text-lg ${tone === "dark" ? "text-white/70" : "text-muted"}`}>{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}><Container>{children}</Container></section>;
}

const icons: Record<string, LucideIcon> = { globe: Globe, cart: ShoppingCart, layers: Layers, phone: Smartphone, target: Target, search: Search, shield: ShieldCheck, gauge: Gauge, spark: Sparkles };
export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const I = icons[name] ?? Sparkles;
  return <I aria-hidden strokeWidth={1.7} className={`h-5 w-5 ${className}`} />;
}

export function Pill({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" | "gold" }) {
  const t = { light: "bg-white/80 text-brand-700 ring-line", dark: "bg-white/5 text-gold-200 ring-white/15", gold: "bg-gold-50 text-gold-700 ring-gold-200" }[tone];
  return <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 backdrop-blur ${t}`}>{children}</span>;
}
