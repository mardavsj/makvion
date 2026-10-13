import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow, BrowserFrame, Button, Check, Container, Eyebrow, Icon, PhoneFrame, SectionHeading } from "./ui";
import { carePlans, concepts, faqs, industries, packages, products, reasons, services, site, steps } from "@/lib/site";

/* ---------- Page hero (inner pages) ---------- */
export function PageHero({ eyebrow, title, intro, children, aside }: { eyebrow: string; title: ReactNode; intro: ReactNode; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section className="mesh-hero noise relative overflow-hidden">
      <div className="bg-grid-light mask-fade-b pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full border border-gold-300/50" />
      <div aria-hidden className="pointer-events-none absolute -right-8 top-40 h-40 w-40 rounded-full border border-brand-300/50" />
      <Container className={`relative pb-20 pt-14 sm:pb-28 sm:pt-20 ${aside ? "grid items-end gap-12 lg:grid-cols-12" : ""}`}>
        <div className={aside ? "lg:col-span-7" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display tracking-display mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.0] text-ink sm:text-6xl lg:text-[5rem]">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{intro}</p>
          {children}
        </div>
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </Container>
    </section>
  );
}

/* ---------- Industry marquee ---------- */
export function IndustryMarquee({ tone = "dark" }: { tone?: "dark" | "gold" }) {
  const items = [...industries.map((i) => i.name), "SaaS founders", "Agencies", "Non-profits", "Professional services"];
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((n) => (
        <li key={n} className="flex items-center gap-10 whitespace-nowrap">
          <span className={`font-display text-2xl font-medium sm:text-3xl ${tone === "dark" ? "text-white/90" : "text-ink"}`}>{n}</span>
          <svg aria-hidden viewBox="0 0 24 24" className={`h-5 w-5 ${tone === "dark" ? "text-gold-300" : "text-brand-600"}`} fill="currentColor"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" /></svg>
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Industries we work with" className={`relative overflow-hidden py-8 ${tone === "dark" ? "bg-brand-900" : "bg-gold-200"}`}>
      <div className="mask-edges flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}

/* ---------- Services bento ---------- */
function Price({ v, dark }: { v: string; dark?: boolean }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${dark ? "bg-white/10 text-gold-200 ring-white/15" : "bg-white text-gold-700 ring-gold-200"}`}>From {v}</span>
  );
}

export function ServicesBento() {
  const [web, apps, mobile, speed, redesign, care] = services;
  const tile = "reveal group relative overflow-hidden rounded-[1.75rem] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1";
  return (
    <div className="grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-6">
      {/* Websites — big image tile */}
      <Link href={`/services#${web.slug}`} className={`${tile} flex min-h-[26rem] flex-col justify-end bg-ink text-white md:col-span-4 md:row-span-2`}>
        <Image src="/images/workspace.jpg" alt="" fill sizes="(min-width:768px) 60vw, 100vw" className="object-cover opacity-55 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />
        <div className="relative">
          <div className="flex items-center gap-3"><Icon name={web.icon} className="h-7 w-7 text-gold-300" /><Price v={web.from} dark /></div>
          <h3 className="font-display mt-5 text-3xl font-semibold sm:text-4xl">{web.title}</h3>
          <p className="mt-3 max-w-lg text-lg text-white/80">{web.description}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-200">Get more enquiries <Arrow /></span>
        </div>
      </Link>
      {/* Web apps — green */}
      <Link href={`/services#${apps.slug}`} className={`${tile} bg-brand-600 text-white md:col-span-2`}>
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="relative">
          <div className="flex items-center justify-between"><Icon name={apps.icon} className="h-7 w-7 text-gold-200" /><Price v={apps.from} dark /></div>
          <h3 className="font-display mt-8 text-2xl font-semibold">{apps.title}</h3>
          <p className="mt-2 text-white/80">{apps.short}</p>
        </div>
      </Link>
      {/* Mobile — gold */}
      <Link href={`/services#${mobile.slug}`} className={`${tile} bg-gold-100 text-ink md:col-span-2`}>
        <div className="bg-diagonal absolute inset-0" />
        <div className="relative">
          <div className="flex items-center justify-between"><Icon name={mobile.icon} className="h-7 w-7 text-gold-700" /><Price v={mobile.from} /></div>
          <h3 className="font-display mt-8 text-2xl font-semibold">{mobile.title}</h3>
          <p className="mt-2 text-ink/75">{mobile.short}</p>
        </div>
      </Link>
      {/* Speed — meter */}
      <Link href={`/services#${speed.slug}`} className={`${tile} border border-line bg-white md:col-span-2`}>
        <div className="flex flex-col gap-5">
          <div className="relative h-24 w-24 shrink-0" aria-hidden>
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle cx="60" cy="60" r="50" stroke="#eef6f4" strokeWidth="12" fill="none" />
              <circle cx="60" cy="60" r="50" stroke="#2c7469" strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray="314" strokeDashoffset="22" />
            </svg>
            <span className="font-display absolute inset-0 flex items-center justify-center text-2xl font-semibold text-brand-700">90+</span>
          </div>
          <div>
            <div className="flex items-center gap-3"><h3 className="font-display text-2xl font-semibold">{speed.title}</h3></div>
            <p className="mt-2 text-muted">{speed.short} We target a 90+ mobile Lighthouse score.</p>
            <p className="mt-4"><Price v={speed.from} /></p>
          </div>
        </div>
      </Link>
      {/* Redesign — before/after */}
      <Link href={`/services#${redesign.slug}`} className={`${tile} bg-brand-50 md:col-span-2`}>
        <div className="bg-dots absolute inset-0 opacity-50" />
        <div className="relative">
          <div aria-hidden className="flex h-24 items-end gap-2">
            <span className="flex h-16 w-1/2 flex-col gap-1.5 rounded-lg bg-white/70 p-2 ring-1 ring-line"><span className="h-1.5 w-3/4 rounded bg-ink/15" /><span className="h-1.5 w-1/2 rounded bg-ink/10" /><span className="mt-auto h-3 w-8 rounded bg-ink/15" /></span>
            <span className="flex h-24 w-1/2 flex-col gap-1.5 rounded-lg bg-white p-2 shadow-sm ring-1 ring-brand-200"><span className="h-2 w-5/6 rounded bg-brand-600" /><span className="h-1.5 w-2/3 rounded bg-ink/20" /><span className="mt-auto h-4 w-12 rounded-full bg-gold-300" /></span>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3"><h3 className="font-display text-2xl font-semibold">{redesign.title}</h3><Price v={redesign.from} /></div>
          <p className="mt-2 text-muted">{redesign.short}</p>
        </div>
      </Link>
      {/* Care — uptime bars */}
      <Link href={`/services#${care.slug}`} className={`${tile} bg-cream md:col-span-2`}>
        <div className="bg-dots absolute inset-0 opacity-60" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3"><h3 className="font-display text-2xl font-semibold">{care.title}</h3><Price v={care.from} /></div>
          <p className="mt-2 text-muted">{care.short}</p>
          <div className="mt-6 flex h-10 items-end gap-1" aria-hidden>
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className={`flex-1 rounded-sm ${i === 15 ? "h-5 bg-gold-400" : "h-10 bg-brand-500/80"}`} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

/* ---------- Detailed services (alternating rows) ---------- */
export function ServicesDetailed() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {services.map((s, i) => (
        <article key={s.slug} id={s.slug} className="reveal grid scroll-mt-28 gap-8 py-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="font-display text-sm font-semibold text-gold-600">{String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">{s.title}</h2>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-brand-600 px-4 py-1.5 font-semibold text-white">From {s.from}</span>
              <span className="rounded-full bg-cream px-4 py-1.5 font-medium text-ink ring-1 ring-line">{s.timeline}</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted">{s.description}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {s.includes.map((x) => (
                <li key={x} className="flex gap-2.5 rounded-xl bg-cream/70 px-4 py-3 text-[0.95rem] text-ink/90"><Check className="text-brand-600" />{x}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- Statement (deep green) ---------- */
export function Statement() {
  return (
    <section className="noise relative overflow-hidden bg-brand-900 py-24 text-white sm:py-36">
      <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0" />
      <Container className="relative">
        <Eyebrow tone="dark">Our principle</Eyebrow>
        <p className="reveal font-display tracking-display mt-8 max-w-5xl text-[2.1rem] font-semibold leading-[1.08] sm:text-6xl lg:text-[4.4rem]">
          No risk, no guesswork. <span className="text-gradient-gold">You see your design</span> before we write a line of code<span className="text-white/45">, and the price is fixed before either.</span>
        </p>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="reveal bg-brand-900/90 p-7 transition-colors hover:bg-brand-800" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <span className="font-display text-sm font-semibold text-gold-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Process timeline (cream, diagonal) ---------- */
export function Process() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="bg-diagonal mask-fade-b pointer-events-none absolute inset-0" />
      <Container className="relative">
        <SectionHeading eyebrow="How we work" eyebrowTone="gold" title={<>Launch with confidence. <span className="text-brand-600">Zero surprises.</span></>}
          intro="You always know what's happening, what it costs and what comes next, with a live preview link at every stage." />
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute left-[1.35rem] top-0 h-full w-px bg-gradient-to-b from-brand-500 via-gold-400 to-transparent lg:left-0 lg:top-[1.35rem] lg:h-px lg:w-full lg:bg-gradient-to-r" />
          {steps.map((p, i) => (
            <li key={p.step} className="reveal relative pl-16 lg:pl-0 lg:pt-16" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-white font-display text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200">{p.step}</span>
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------- Product mockups ---------- */
function PunchMock() {
  const sites = [["acme-roofing.com", "99.98%", true], ["brightside.dental", "100%", true], ["emberandoak.co", "SSL · 12 days", false]] as const;
  return (
    <BrowserFrame url="websiteswithpunch.com/dashboard">
      <div className="bg-white p-5 text-left">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-semibold text-ink">Monitors</p>
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[0.65rem] font-semibold text-brand-700">All systems normal</span>
        </div>
        <ul className="mt-4 space-y-2.5">
          {sites.map(([d, v, ok]) => (
            <li key={d} className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5">
              <span className={`h-2 w-2 rounded-full ${ok ? "bg-brand-500" : "bg-gold-400"}`} />
              <span className="flex-1 truncate text-xs font-medium text-ink">{d}</span>
              <span className="hidden h-4 flex-1 items-end gap-[2px] sm:flex" aria-hidden>
                {Array.from({ length: 20 }).map((_, i) => <span key={i} className={`flex-1 rounded-[1px] ${!ok && i > 16 ? "h-2 bg-gold-300" : "h-4 bg-brand-200"}`} />)}
              </span>
              <span className={`text-[0.7rem] font-semibold ${ok ? "text-brand-700" : "text-gold-700"}`}>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

function SeahorseMock() {
  return (
    <PhoneFrame className="w-[230px]">
      <div className="bg-gold-50 px-4 pb-6 pt-9 text-left">
        <div className="flex items-center justify-between text-[0.65rem] font-semibold text-gold-700"><span>30s</span><span>medium</span></div>
        <p className="mt-5 text-[0.82rem] leading-relaxed text-ink/40">
          <span className="text-ink">the quick seahorse drifts past</span><span className="caret ml-px inline-block h-3.5 w-[2px] translate-y-0.5 bg-brand-600" /> a reef of bright coral and waits for the tide
        </p>
        <div className="mt-6 rounded-2xl bg-white p-3 ring-1 ring-gold-200">
          <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-muted">Your seahorse</p>
          <div className="mt-2 h-2 rounded-full bg-gold-100"><div className="h-2 w-2/3 rounded-full bg-gold-400" /></div>
          <p className="mt-2 text-[0.65rem] text-muted">Keep typing to feed it</p>
        </div>
      </div>
    </PhoneFrame>
  );
}

export function ProductsShowcase({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="space-y-6">
      {products.map((p, i) => {
        const gold = p.accent === "gold";
        return (
          <article key={p.name} className={`reveal relative grid items-center gap-10 overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:grid-cols-2 ${gold ? "bg-white ring-1 ring-gold-200" : "bg-brand-900 text-white"}`}>
            <div className={`${gold ? "bg-dots-gold" : "bg-grid-dark"} mask-radial pointer-events-none absolute inset-0`} />
            <div className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${gold ? "bg-gold-50 text-gold-700 ring-gold-200" : "bg-white/10 text-gold-200 ring-white/15"}`}>Built &amp; run by Makvion</span>
              <h3 className="font-display mt-6 text-3xl font-semibold sm:text-5xl">{p.name}</h3>
              <p className={`mt-3 text-lg font-medium ${gold ? "text-gold-700" : "text-gold-200"}`}>{p.tagline}</p>
              <p className={`mt-5 max-w-md leading-relaxed ${gold ? "text-muted" : "text-white/75"}`}>{p.description}</p>
              {detailed && (
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((x) => <li key={x} className={`flex gap-2.5 ${gold ? "text-ink/85" : "text-white/85"}`}><Check className={gold ? "text-brand-600" : "text-gold-300"} />{x}</li>)}
                </ul>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button href={p.url} external variant={gold ? "primary" : "gold"}>Visit {p.name} <Arrow /></Button>
                {p.pricing && <span className={`text-sm ${gold ? "text-muted" : "text-white/70"}`}>{p.pricing}</span>}
              </div>
            </div>
            <div className={`relative flex justify-center ${i % 2 ? "lg:order-1" : ""}`}>
              <div className="floaty relative w-full max-w-md">{gold ? <div className="flex justify-center"><SeahorseMock /></div> : <PunchMock />}</div>
            </div>
          </article>
        );
      })}
      <p className="text-center text-xs text-muted">Product screens are simplified illustrations.</p>
    </div>
  );
}

/* ---------- Pricing ---------- */
export function Pricing() {
  return (
    <div className="grid gap-5 lg:grid-cols-3 lg:items-center">
      {packages.map((p) => (
        <div key={p.name}
          className={`reveal relative flex flex-col overflow-hidden rounded-[2rem] p-8 ${p.featured ? "bg-brand-900 text-white shadow-[0_50px_100px_-40px_rgba(15,41,37,.8)] lg:py-12" : "bg-white ring-1 ring-line"}`}>
          {p.featured && <div className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0" />}
          <div className="relative flex flex-1 flex-col">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              {p.featured && <span className="rounded-full bg-gold-300 px-3 py-1 text-xs font-semibold text-ink">Most popular</span>}
            </div>
            <p className={`mt-2 text-sm ${p.featured ? "text-white/70" : "text-muted"}`}>{p.blurb}</p>
            <p className="mt-7 flex items-baseline gap-2">
              <span className="font-display text-5xl font-semibold">{p.price}</span>
              <span className={`text-sm ${p.featured ? "text-white/65" : "text-muted"}`}>{p.note}</span>
            </p>
            <ul className={`mt-8 space-y-3 border-t pt-8 ${p.featured ? "border-white/10" : "border-line"}`}>
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[0.95rem]"><Check className={p.featured ? "text-gold-300" : "text-brand-600"} />{f}</li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <Button href="/contact" variant={p.featured ? "gold" : "secondary"} className="w-full">Get a fixed quote <Arrow /></Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CarePlans() {
  return (
    <div className="reveal mt-12 grid gap-4 rounded-[2rem] bg-cream p-4 ring-1 ring-line sm:p-6 lg:grid-cols-[1fr_1.4fr_1.4fr] lg:items-stretch">
      <div className="flex flex-col justify-center p-3 sm:p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">After launch</p>
        <h3 className="font-display mt-2 text-2xl font-semibold">Care plans</h3>
        <p className="mt-2 text-muted">Keep your site fast, secure and fresh without lifting a finger.</p>
      </div>
      {carePlans.map((c, i) => (
        <div key={c.name} className={`flex flex-col rounded-2xl p-6 ${i ? "bg-white ring-1 ring-brand-200" : "bg-white/70 ring-1 ring-line"}`}>
          <div className="flex items-baseline justify-between gap-3">
            <h4 className="font-display text-lg font-semibold">{c.name}</h4>
            <p><span className="font-display text-3xl font-semibold">{c.price}</span><span className="text-sm text-muted">{c.period}</span></p>
          </div>
          <p className="mt-1 text-sm text-muted">{c.blurb}</p>
          <ul className="mt-4 space-y-2 text-[0.92rem]">
            {c.features.map((f) => <li key={f} className="flex gap-2"><Check className="text-brand-600" />{f}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function PaymentNote() {
  return (
    <p className="reveal mt-10 text-center text-sm text-muted">
      50% upfront · balance on delivery or by milestone · secure online invoices &amp; card payments · prices in USD
    </p>
  );
}

/* ---------- FAQ (split, sticky heading) ---------- */
export function FaqSection({ items = faqs }: { items?: typeof faqs }) {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="FAQ" title="Everything you need to decide." intro={<>Anything else? Email <a className="font-medium text-brand-700 underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.</>} />
          </div>
        </div>
        <div className="lg:col-span-8"><Faq items={items} /></div>
      </Container>
    </section>
  );
}

export function Faq({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="group rounded-2xl bg-cream px-6 py-5 ring-1 ring-line transition open:bg-white open:shadow-[0_20px_50px_-30px_rgba(19,32,30,.35)] [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-ink">
            {f.q}
            <span className="relative h-8 w-8 shrink-0 rounded-full bg-white ring-1 ring-line transition group-open:rotate-45 group-open:bg-brand-600">
              <span className="absolute left-1/2 top-1/2 h-[1.5px] w-3 -translate-x-1/2 -translate-y-1/2 bg-ink group-open:bg-white" />
              <span className="absolute left-1/2 top-1/2 h-3 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-ink group-open:bg-white" />
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- Concepts in browser frames ---------- */
export function ConceptShowcase({ limit, detailed = false }: { limit?: number; detailed?: boolean }) {
  const list = limit ? concepts.slice(0, limit) : concepts;
  return (
    <div className="space-y-20 sm:space-y-28">
      {list.map((c, i) => (
        <article key={c.slug} id={c.slug} className="reveal grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className={`relative lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
            <div aria-hidden className={`absolute -inset-4 rounded-[2.5rem] sm:-inset-6 ${i % 3 === 0 ? "bg-brand-100" : i % 3 === 1 ? "bg-gold-100" : "bg-cream"}`} />
            <div aria-hidden className="bg-dots absolute -inset-4 rounded-[2.5rem] opacity-50 sm:-inset-6" />
            <BrowserFrame url={`${c.client.toLowerCase().replace(/[^a-z]+/g, "")}.com`} className="relative">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={c.image} alt={`${c.client}, ${c.industry} concept homepage`} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
                <div className="absolute inset-y-0 left-0 flex max-w-[70%] flex-col justify-center p-5 text-white sm:p-10">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-200 sm:text-xs">{c.client}</p>
                  <p className="font-display mt-2 text-lg font-semibold leading-tight sm:text-3xl">{c.hero}</p>
                  <span className="mt-4 hidden w-fit rounded-full bg-gold-300 px-4 py-2 text-xs font-semibold text-ink sm:inline-block">{c.cta}</span>
                </div>
              </div>
            </BrowserFrame>
            <span className="absolute -top-2 right-4 z-10 rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-white shadow sm:-top-3">Concept · fictional business</span>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">{String(i + 1).padStart(2, "0")} · {c.industry}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{c.client}</h3>
            <p className="mt-3 text-lg font-medium text-brand-700">{c.title}</p>
            {detailed && <p className="mt-5 leading-relaxed text-muted">{c.summary}</p>}
            <ul className="mt-7 flex flex-wrap gap-2">
              {c.highlights.map((h) => <li key={h} className="rounded-full bg-white px-3.5 py-1.5 text-sm text-ink/85 ring-1 ring-line">{h}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- Industries ---------- */
export function IndustryMosaic() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((ind, i) => (
        <Link key={ind.slug} href={`/industries#${ind.slug}`}
          className={`reveal group relative flex min-h-[15rem] flex-col justify-end overflow-hidden rounded-[1.75rem] p-6 text-white sm:min-h-[19rem] ${i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-full" : ""} ${i === industries.length - 1 && industries.length % 3 === 0 ? "sm:col-span-2 lg:col-span-3 lg:min-h-[16rem]" : ""}`}
          style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
          <Image src={ind.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
          <div className="relative">
            <h3 className="font-display text-2xl font-semibold">{ind.name}</h3>
            <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100">{ind.summary}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-200">See what we build <Arrow /></span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ---------- CTA ---------- */
export function CtaBand({ title = "Ready for a website that brings you customers?", body }: { title?: string; body?: string }) {
  return (
    <section className="noise relative overflow-hidden bg-brand-600 py-24 text-white sm:py-32">
      <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0" />
      <Container className="relative text-center">
        <h2 className="reveal font-display tracking-display mx-auto max-w-4xl text-[2.3rem] font-semibold leading-[1.04] sm:text-6xl">{title}</h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/85">
          {body ?? "Get a free homepage mockup for your business. If you like it, you'll get a fixed quote, and you approve the full design before we build."}
        </p>
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="gold">Get my free mockup <Arrow /></Button>
          <Button href={`mailto:${site.email}`} external variant="light">{site.email}</Button>
        </div>
      </Container>
    </section>
  );
}
