import { BadgeCheck, Check, Code2, FileText, Gauge, Globe, KeyRound, Rocket, Smartphone, Search, UserCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { Kicker } from "@/components/home/Sections";
import { values } from "@/lib/site";

const lift = "reveal relative overflow-hidden rounded-[1.75rem] p-7 sm:p-9";

function Tile({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return <span className={`grid h-12 w-12 place-items-center rounded-2xl ${dark ? "bg-gold-300/15 text-gold-300 ring-1 ring-gold-300/30" : "bg-brand-500/10 text-brand-500 ring-1 ring-brand-500/15"}`}>{children}</span>;
}
function Num({ i, dark }: { i: number; dark?: boolean }) {
  return <span className={`font-display text-[4.5rem] font-extrabold leading-none tracking-tighter sm:text-[5.5rem] ${dark ? "text-gold-300" : "text-brand-500/15"}`}>{String(i + 1).padStart(2, "0")}</span>;
}

function QualityVignette() {
  const rows = ["Spacing & alignment", "Type scale", "Accessible contrast", "Clean, typed code"];
  return (
    <div className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-white/50"><span>Design review</span><span className="rounded-full bg-gold-300 px-2.5 py-1 text-[10px] text-ink">Before launch</span></div>
      <ul className="mt-4 space-y-2.5">
        {rows.map((r) => (
          <li key={r} className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-3.5 py-2.5 text-sm text-white/85">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500"><Check className="h-3 w-3" strokeWidth={3.5} /></span>{r}
          </li>
        ))}
      </ul>
    </div>
  );
}
function QuoteVignette() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_12px_30px_-18px_rgba(17,52,47,0.45)] ring-1 ring-line">
      <div className="flex items-center gap-2 text-xs font-bold text-ink"><FileText className="h-4 w-4 text-brand-500" />Written quote</div>
      <div className="mt-3 space-y-2">{[88, 72, 80].map((w) => <div key={w} className="flex items-center gap-2"><span className="h-2 rounded-full bg-line" style={{ width: `${w}%` }} /><Check className="h-3 w-3 text-brand-500" strokeWidth={3} /></div>)}</div>
      <p className="mt-3 rounded-lg bg-gold-300/25 px-3 py-2 text-[12px] font-medium text-ink">Scope change? We tell you first.</p>
    </div>
  );
}
function SpeedVignette() {
  const chips = [[Smartphone, "Mobile-first"], [Gauge, "Fast loads"], [Search, "Search-ready"]] as const;
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-line">
      <div className="flex flex-wrap gap-2">{chips.map(([I, t]) => <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-700"><I className="h-3.5 w-3.5" />{t}</span>)}</div>
    </div>
  );
}
function OwnVignette() {
  const items = [[Code2, "Source code"], [Globe, "Domain"], [KeyRound, "Accounts & access"]] as const;
  return (
    <div className="grid gap-2.5 sm:grid-cols-3">
      {items.map(([I, t]) => (
        <div key={t} className="flex items-center gap-3 rounded-2xl bg-white p-3.5 ring-1 ring-line">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-500"><I className="h-4.5 w-4.5" /></span>
          <span className="text-sm font-semibold text-ink">{t}<span className="block text-[11px] font-medium text-brand-600">Handed to you</span></span>
        </div>
      ))}
    </div>
  );
}

export function AboutValues() {
  const [q, h, p, o] = values;
  return (
    <section className="relative bg-cream">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <Container className="relative py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Kicker>What we stand for</Kicker>
            <h2 className="font-display mt-6 max-w-3xl text-[2.5rem] font-extrabold leading-[1] tracking-[-0.04em] sm:text-[4.4rem]">Four promises on <span className="text-brand-600">every project.</span></h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-muted">These aren&apos;t slogans. They&apos;re how we quote, build and hand over, whatever the size of the job.</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-6 lg:gap-5">
          <article className={`${lift} bg-brand-950 text-white shadow-[0_30px_60px_-30px_rgba(17,52,47,0.7)] lg:col-span-4`}>
            <div className="grid h-full gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="flex items-start justify-between"><Tile dark><BadgeCheck className="h-6 w-6" /></Tile><Num i={0} dark /></div>
                <h3 className="font-display mt-8 text-[1.9rem] font-extrabold leading-[1.05] tracking-tight sm:text-[2.3rem]">{q.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-white/70">{q.body}</p>
              </div>
              <QualityVignette />
            </div>
          </article>

          <article className={`${lift} bg-white ring-1 ring-line lg:col-span-2`}>
            <div className="flex items-start justify-between"><Tile><FileText className="h-6 w-6" /></Tile><Num i={1} /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold tracking-tight">{h.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{h.body}</p>
            <div className="mt-6"><QuoteVignette /></div>
          </article>

          <article className={`${lift} bg-white ring-1 ring-line lg:col-span-2`}>
            <div className="flex items-start justify-between"><Tile><Rocket className="h-6 w-6" /></Tile><Num i={2} /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold tracking-tight">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            <div className="mt-6"><SpeedVignette /></div>
          </article>

          <article className={`${lift} bg-gold-200 ring-1 ring-gold-300/60 lg:col-span-4`}>
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <Tile><UserCheck className="h-6 w-6" /></Tile>
                <h3 className="font-display mt-6 text-[1.9rem] font-extrabold leading-[1.05] tracking-tight">{o.title}</h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/70">{o.body}</p>
              </div>
              <Num i={3} />
            </div>
            <div className="mt-7"><OwnVignette /></div>
          </article>
        </div>
      </Container>
    </section>
  );
}

