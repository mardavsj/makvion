import Image from "next/image";
import { WhatsAppIcon } from "./WhatsAppIcon";
import Link from "next/link";
import type { ReactNode } from "react";
import { Check as CheckIcon, CircleCheck, Gauge, IndianRupee, KeyRound, Palette, Plus, Search, Sparkles, Wallet, X } from "lucide-react";
import { Arrow, Button, Check, Container, Eyebrow, Icon, Pill, SectionHeading } from "./ui";
import { comparison, concepts, faqs, hours, industries, phoneLink, products, promises, services, site, steps, whatsappLink } from "@/lib/site";

/* ---------- Shared backdrop ---------- */
function Backdrop({ dark }: { dark?: boolean }) {
  return (
    <>
      <div aria-hidden className={`${dark ? "spotlight-dark" : "spotlight"} pointer-events-none absolute inset-0`} />
      <div aria-hidden className={`${dark ? "bg-grid-dark" : "bg-grid"} grid-anim mask-fade-b pointer-events-none absolute inset-0`} />
    </>
  );
}

/* ---------- Inner page hero ---------- */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <Backdrop />
      <Container className="relative py-20 sm:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display mt-6 max-w-4xl text-balance text-[2.5rem] font-extrabold leading-[1.04] tracking-tight sm:text-[4rem]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{intro}</p>
        {children && <div className="mt-9">{children}</div>}
      </Container>
    </section>
  );
}

/* ---------- Home hero ---------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Backdrop />
      <Container className="relative grid items-center gap-16 pb-20 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-6">
          <Pill><span className="relative flex h-2 w-2"><span className="node-glow absolute inset-0 rounded-full bg-gold-400" /><span className="h-2 w-2 rounded-full bg-gold-400" /></span>Web &amp; app studio · Pune · Clients worldwide</Pill>
          <h1 className="font-display mt-7 text-balance text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-[3.4rem] lg:text-[3.6rem]">
            Premium‑agency websites. <span className="text-gradient">Without the premium‑agency price.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            We design and build websites, online stores and apps that make your business look like the leader in its market, for far less than big agencies charge. See your new homepage designed <strong className="font-semibold text-ink">free, before you pay a single rupee.</strong>
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">Get a free quote <Arrow /></Button>
            <Button href={whatsappLink ?? "/contact#call"} external={!!whatsappLink} variant="secondary" size="lg">Book a free call</Button>
          </div>
          <ul className="mt-9 grid gap-x-5 gap-y-3 text-[0.93rem] text-ink/85 sm:grid-cols-2">
            {["Free homepage design concept", "You approve the design first", "Milestone payments via UPI or bank", "You own the code and domain", "Live in as little as 2 weeks", "Support after launch"].map((t) => (
              <li key={t} className="flex items-center gap-2.5"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-white"><CheckIcon className="h-3 w-3" strokeWidth={3} /></span>{t}</li>
            ))}
          </ul>
          <p className="mt-9 flex items-start gap-2.5 rounded-xl bg-white/70 p-4 text-sm text-muted ring-1 ring-line backdrop-blur">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
            We take on a limited number of new projects each month so every client gets our full attention. Reply within one business day.
          </p>
        </div>
        <div className="lg:col-span-6"><HeroMockup /></div>
      </Container>
      <Marquee />
    </section>
  );
}

function Chip({ icon, title, sub, className = "" }: { icon: ReactNode; title: string; sub: string; className?: string }) {
  return (
    <div className={`absolute z-20 flex items-center gap-2.5 rounded-xl bg-white/90 py-2 pl-2 pr-3.5 shadow-[0_18px_40px_-18px_rgba(15,41,37,.55)] ring-1 ring-line backdrop-blur ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">{icon}</span>
      <span className="leading-tight"><span className="block text-[0.72rem] font-bold text-ink">{title}</span><span className="block text-[0.62rem] text-muted">{sub}</span></span>
    </div>
  );
}

export function HeroMockup() {
  const c = concepts[0];
  return (
    <div className="tilt-wrap relative mx-auto max-w-[580px] lg:ml-auto lg:mr-0">
      <div className="tilt relative">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_60px_120px_-50px_rgba(15,41,37,.6),0_0_0_1px_rgba(15,41,37,.06)]">
          <div className="flex items-center gap-2 border-b border-line bg-cream/80 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e8806f]" /><span className="h-2.5 w-2.5 rounded-full bg-gold-300" /><span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
            <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-[0.7rem] text-muted ring-1 ring-line">sahyadrismiles.in</span>
            <span className="ml-auto rounded-full bg-gold-100 px-2 py-0.5 text-[0.62rem] font-semibold text-gold-700">Concept</span>
          </div>
          <div className="flex items-center justify-between px-5 py-3 text-[0.7rem]">
            <span className="font-bold text-brand-700">Sahyadri Smiles</span>
            <span className="hidden gap-4 text-muted sm:flex"><span>Treatments</span><span>Doctors</span><span>Visit</span></span>
            <span className="rounded-md bg-brand-500 px-2.5 py-1 font-semibold text-white">Book visit</span>
          </div>
          <div className="grid grid-cols-5 gap-4 px-5 pb-5">
            <div className="col-span-3 self-center">
              <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-gold-600">Family dental care · Pune</p>
              <p className="font-display mt-2 text-lg font-bold leading-tight sm:text-2xl">{c.hero}</p>
              <div className="mt-4 flex gap-2 text-[0.65rem] font-semibold">
                <span className="whitespace-nowrap rounded-md bg-brand-500 px-2.5 py-1.5 text-white">{c.cta}</span>
                <span className="hidden whitespace-nowrap rounded-md px-2.5 py-1.5 ring-1 ring-line sm:inline">WhatsApp us</span>
              </div>
            </div>
            <div className="relative col-span-2 aspect-[4/5] overflow-hidden rounded-xl">
              <Image src={c.image} alt="" fill priority sizes="220px" className="object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-line text-[0.65rem]">
            {["Check-ups", "Aligners", "Root canal"].map((t) => <div key={t} className="border-r border-line px-4 py-3 last:border-0"><p className="font-semibold">{t}</p><p className="text-muted">Learn more →</p></div>)}
          </div>
        </div>
        <div className="absolute -bottom-12 -right-2 hidden w-[140px] overflow-hidden rounded-[1.5rem] bg-ink p-1.5 shadow-[0_40px_70px_-30px_rgba(15,41,37,.8)] sm:block xl:-right-8" style={{ transform: "translateZ(60px)" }}>
          <div className="overflow-hidden rounded-[1.15rem] bg-cream">
            <div className="relative aspect-[4/3]"><Image src={concepts[2].image} alt="" fill sizes="140px" className="object-cover" /></div>
            <div className="p-2.5"><p className="text-[0.6rem] font-bold">Indigo Loom</p><p className="text-[0.52rem] text-muted">Handwoven, made to last.</p><p className="mt-2 rounded bg-brand-500 py-1 text-center text-[0.52rem] font-semibold text-white">Pay with UPI</p></div>
          </div>
        </div>
      </div>
      <Chip className="float-1 -left-3 top-16 sm:-left-10" icon={<IndianRupee className="h-4 w-4" />} title="Payment received via UPI" sub="Milestone 1 of 3" />
      <Chip className="float-2 -left-2 bottom-6 hidden sm:flex sm:-left-14" icon={<CircleCheck className="h-4 w-4" />} title="Design approved" sub="Before any build starts" />
      <Chip className="float-3 -top-5 right-6" icon={<Gauge className="h-4 w-4" />} title="Lighthouse 98" sub="Mockup label" />
    </div>
  );
}

/* ---------- Marquee ---------- */
const marqueeItems = ["Websites", "Online stores", "Web apps", "Mobile apps", "Landing pages", "SEO", "Next.js", "React", "Shopify", "WordPress", "Razorpay", "UPI", "Vercel", "Figma", "Google Analytics", "Care plans"];
export function Marquee({ dark }: { dark?: boolean }) {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className={`relative border-t py-5 ${dark ? "border-white/10 bg-brand-950" : "border-line bg-white/60 backdrop-blur"}`}>
      <div className="mask-edges overflow-hidden">
        <div className="animate-marquee flex w-max gap-10">
          {row.map((t, i) => (
            <span key={i} className={`flex items-center gap-3 whitespace-nowrap font-display text-sm font-semibold ${dark ? "text-white/60" : "text-ink/55"}`}>
              <Sparkles aria-hidden className="h-3.5 w-3.5 text-gold-400" />{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Promise strip (gold band) ---------- */
const promiseIcons = [Palette, CircleCheck, Wallet, KeyRound];
export function PromiseStrip() {
  return (
    <section className="relative border-b border-gold-200/60 bg-gradient-to-r from-gold-50 via-white to-gold-50">
      <Container className="stagger grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {promises.map((p, i) => {
          const I = promiseIcons[i] ?? Sparkles;
          return (
            <div key={p.title} className="lift flex gap-4 rounded-2xl bg-white/80 p-5 ring-1 ring-gold-200/70">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-300 text-ink"><I aria-hidden className="h-5 w-5" strokeWidth={1.8} /></span>
              <div><p className="font-display font-bold">{p.title}</p><p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p></div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}

/* ---------- Services ---------- */
function ServiceSnippet({ i }: { i: number }) {
  const box = "mt-6 rounded-xl bg-cream/80 p-3.5 ring-1 ring-line text-[0.68rem]";
  switch (i) {
    case 0: return <div className={box}><div className="flex gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-line" /><span className="h-1.5 w-1.5 rounded-full bg-line" /><span className="h-1.5 w-1.5 rounded-full bg-line" /></div><div className="mt-3 h-2 w-2/3 rounded bg-brand-500/80" /><div className="mt-2 h-2 w-1/2 rounded bg-ink/10" /><div className="mt-3 flex gap-2"><span className="rounded bg-brand-500 px-2 py-0.5 font-semibold text-white">Book now</span><span className="rounded px-2 py-0.5 ring-1 ring-line">Call</span></div></div>;
    case 1: return <div className={`${box} flex items-center justify-between`}><span><span className="block font-semibold">Order #1042</span><span className="text-muted">2 items · Paid</span></span><span className="flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 font-semibold text-brand-700"><IndianRupee className="h-3 w-3" />UPI</span></div>;
    case 2: return <div className={`${box} flex h-[74px] items-end gap-1.5`}>{[40, 62, 48, 80, 66, 92, 74].map((h, k) => <span key={k} className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-300" style={{ height: `${h}%` }} />)}</div>;
    case 3: return <div className={`${box} flex items-center gap-3`}><span className="h-12 w-7 rounded-md bg-ink p-0.5"><span className="block h-full rounded bg-brand-300" /></span><span><span className="block font-semibold">New booking</span><span className="text-muted">Tomorrow, 11:30 am</span></span></div>;
    case 4: return <div className={box}><div className="flex items-center justify-between"><span className="font-semibold">Enquiries this week</span><span className="font-semibold text-brand-700">Mockup</span></div><div className="mt-2 h-1.5 overflow-hidden rounded bg-ink/10"><div className="h-full w-3/4 rounded bg-gradient-to-r from-brand-500 to-gold-300" /></div></div>;
    case 5: return <div className={`${box} space-y-1.5`}><div className="flex items-center gap-2 rounded bg-white px-2 py-1 ring-1 ring-line"><Search className="h-3 w-3 text-muted" />dentist near me</div><div className="h-1.5 w-4/5 rounded bg-brand-500/70" /><div className="h-1.5 w-3/5 rounded bg-ink/10" /></div>;
    default: return <div className={`${box} flex items-center gap-2`}><span className="h-2 w-2 rounded-full bg-brand-500" /><span className="font-semibold">All systems normal</span><span className="ml-auto text-muted">Backups daily</span></div>;
  }
}
export function ServicesGrid({ limit = 6 }: { limit?: number }) {
  return (
    <div className="stagger mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.slice(0, limit).map((s, i) => (
        <Link key={s.slug} href={`/services#${s.slug}`} className={`gradient-border lift group flex flex-col rounded-2xl p-7 ${i === 0 || i === 5 ? "lg:col-span-2" : ""}`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_10px_20px_-10px_rgba(29,76,69,.9)]"><Icon name={s.icon} /></span>
          <h3 className="font-display mt-6 text-xl font-bold">{s.title}</h3>
          <p className="mt-2 flex-1 leading-relaxed text-muted">{s.short}</p>
          <ServiceSnippet i={i} />
          <p className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-brand-700">{s.timeline} <Arrow className="ml-auto transition-transform group-hover:translate-x-1" /></p>
        </Link>
      ))}
    </div>
  );
}

export function ServicesDetailed() {
  return (
    <div className="grid gap-6">
      {services.map((s, i) => (
        <article key={s.slug} id={s.slug} className="gradient-border reveal grid scroll-mt-24 gap-8 rounded-3xl p-7 sm:p-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white"><Icon name={s.icon} /></span>
            <h2 className="font-display mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">{s.title}</h2>
            <p className="mt-3"><Pill tone="gold">{s.timeline}</Pill></p>
            <div className="max-w-sm"><ServiceSnippet i={i} /></div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/85">{s.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.includes.map((x) => <li key={x} className="flex gap-2.5 text-[0.95rem]"><Check className="text-brand-500" />{x}</li>)}
            </ul>
            <div className="mt-8"><Button href="/contact" variant="secondary">Get a quote for {s.title.toLowerCase()} <Arrow /></Button></div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- Concept work ---------- */
export function ConceptShowcase({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return (
      <div className="grid gap-24">
        {concepts.map((c, i) => (
          <article key={c.slug} id={c.slug} className="reveal grid scroll-mt-24 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className={`tilt-wrap tilt-still relative lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}><div className="tilt"><ConceptCardImage c={c} big /></div></div>
            <div className="lg:col-span-5">
              <Pill tone="gold">Concept · {c.industry}</Pill>
              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{c.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{c.summary}</p>
              <ul className="mt-6 space-y-2.5">{c.highlights.map((h) => <li key={h} className="flex gap-2.5"><Check className="text-brand-500" />{h}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    );
  }
  return (
    <div className="no-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8">
      {concepts.map((c) => (
        <article key={c.slug} className="reveal group w-[86%] shrink-0 snap-start sm:w-[70%] lg:w-[58%]">
          <Link href={`/work#${c.slug}`} className="block">
            <div className="lift rounded-2xl"><ConceptCardImage c={c} big /></div>
            <div className="mt-5 flex items-center gap-3">
              <Pill tone="gold">Concept · {c.industry}</Pill>
              <h3 className="font-display text-lg font-bold leading-snug group-hover:text-brand-700">{c.client}</h3>
              <Arrow className="ml-auto text-brand-500 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

function ConceptCardImage({ c, big }: { c: (typeof concepts)[number]; big?: boolean }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-45px_rgba(15,41,37,.6)] ring-1 ring-line">
      <div className="flex items-center gap-1.5 border-b border-line bg-cream px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#e8806f]" /><span className="h-2 w-2 rounded-full bg-gold-300" /><span className="h-2 w-2 rounded-full bg-brand-300" />
        <span className="ml-auto rounded-full bg-gold-100 px-2 py-0.5 text-[0.65rem] font-semibold text-gold-700">Concept</span>
      </div>
      <div className={`relative ${big ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image src={c.image} alt={`${c.client} concept homepage`} fill loading="eager" sizes={big ? "(min-width:1024px) 700px, 90vw" : "(min-width:768px) 380px, 100vw"} className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
          <p className="text-xs font-semibold text-gold-200">{c.client}</p>
          <p className={`font-display mt-1 max-w-md font-extrabold leading-tight ${big ? "text-2xl sm:text-[2rem]" : "text-lg"}`}>{c.hero}</p>
          <span className="mt-4 inline-block rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-brand-700">{c.cta}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Comparison ---------- */
function Cell({ v, strong }: { v: string; strong?: boolean }) {
  if (v === "yes") return <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${strong ? "bg-brand-500 text-white shadow-[0_6px_14px_-6px_rgba(29,76,69,.9)]" : "bg-brand-50 text-brand-600"}`}><CheckIcon className="h-4 w-4" strokeWidth={3} /><span className="sr-only">Yes</span></span>;
  if (v === "no") return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink/5 text-ink/35"><X className="h-3.5 w-3.5" strokeWidth={2.5} /><span className="sr-only">No</span></span>;
  if (v === "partly") return <span className="rounded-full bg-gold-50 px-2.5 py-1 text-xs font-semibold text-gold-700">Sometimes</span>;
  return <span className={strong ? "font-semibold text-brand-700" : "text-muted"}>{v}</span>;
}
export function Comparison() {
  return (
    <div className="reveal gradient-border mt-14 overflow-x-auto rounded-3xl shadow-[0_40px_80px_-60px_rgba(15,41,37,.6)]">
      <table className="w-full min-w-[680px] border-collapse text-left text-[0.95rem]">
        <thead>
          <tr>
            <th scope="col" className="p-5 text-sm font-semibold text-muted sm:p-6">What you get</th>
            {comparison.cols.map((c, i) => <th key={c} scope="col" className={`p-5 text-center font-display font-bold sm:p-6 ${i === 0 ? "rounded-t-2xl bg-brand-500 text-white" : "text-ink/70"}`}>{i === 0 ? <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold-200" />{c}</span> : c}</th>)}
          </tr>
        </thead>
        <tbody className="stagger">
          {comparison.rows.map((r) => (
            <tr key={r.label} className="border-t border-line transition-colors hover:bg-cream/60">
              <th scope="row" className="p-5 font-medium sm:px-6">{r.label}</th>
              {r.v.map((v, i) => <td key={i} className={`p-5 text-center ${i === 0 ? "bg-brand-50/70" : ""}`}><Cell v={v} strong={i === 0} /></td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Process (timeline) ---------- */
export function Process({ dark = true }: { dark?: boolean }) {
  return (
    <div className="relative mt-16">
      <div aria-hidden className={`draw-line absolute left-[22px] right-[22px] top-[22px] hidden h-px lg:block ${dark ? "bg-gradient-to-r from-gold-300 via-brand-300 to-gold-300" : "bg-gradient-to-r from-brand-400 via-gold-300 to-brand-400"}`} />
      <div aria-hidden className={`absolute bottom-6 left-[22px] top-6 w-px lg:hidden ${dark ? "bg-white/15" : "bg-line"}`} />
      <ol className="stagger relative grid gap-10 lg:grid-cols-5 lg:gap-6">
        {steps.map((s) => (
          <li key={s.step} className="relative flex gap-5 lg:block">
            <span className={`node-glow relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold ${dark ? "bg-gradient-to-br from-gold-200 to-gold-400 text-ink" : "bg-brand-500 text-white"}`}>{s.step}</span>
            <div className={`lg:mt-6 ${dark ? "lg:rounded-2xl lg:bg-white/[0.04] lg:p-5 lg:ring-1 lg:ring-white/10" : ""}`}>
              <h3 className={`font-display text-lg font-bold ${dark ? "text-white" : ""}`}>{s.title}</h3>
              <p className={`mt-2 text-[0.95rem] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-brand-950 py-24 sm:py-32">
      <Backdrop dark />
      <Container className="relative">
        <SectionHeading tone="dark" eyebrow="How we work" title={<>From first call to launch in <span className="text-gradient-light">five clear steps.</span></>} intro="You always know what's happening, what's next and what you're paying for." action={<Button href="/process" variant="light">See the full process <Arrow /></Button>} />
        <Process />
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="stagger space-y-3">
      {items.map((f) => (
        <details key={f.q} className="group rounded-2xl bg-white px-6 ring-1 ring-line transition-shadow open:shadow-[0_20px_40px_-30px_rgba(15,41,37,.5)] open:ring-brand-200">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-[1.05rem] font-semibold [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all group-open:rotate-45 group-open:bg-brand-500 group-open:text-white"><Plus className="h-4 w-4" /></span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({ items = faqs }: { items?: typeof faqs }) {
  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Questions, answered." intro={<>Something else on your mind? Email <a href={`mailto:${site.email}`} className="font-semibold text-brand-700 underline">{site.email}</a>.</>} />
          </div>
          <div className="lg:col-span-8"><Faq items={items} /></div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- CTA ---------- */
export function WhatsAppButton({ variant = "secondary" }: { variant?: "secondary" | "light" | "gold" }) {
  if (!whatsappLink) return null;
  return <Button href={whatsappLink} external variant={variant}><WhatsAppIcon className="h-4 w-4" />Chat on WhatsApp</Button>;
}
export function CallButton({ variant = "secondary" }: { variant?: "secondary" | "light" | "gold" }) {
  if (!phoneLink) return null;
  return <Button href={phoneLink} external variant={variant}>Call us</Button>;
}

export function CtaBand({ title = "Get your free homepage concept.", body = "Tell us about your business. We'll reply within one business day, set up a free call and show you a homepage concept before you pay anything." }: { title?: string; body?: string }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 px-6 py-16 text-center sm:px-14 sm:py-24">
          <div aria-hidden className="bg-grid-dark grid-anim pointer-events-none absolute inset-0" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(222,181,107,.28),transparent_70%)]" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
          <div className="relative mx-auto max-w-2xl">
            <Pill tone="dark"><Sparkles className="h-3.5 w-3.5" />First concept is free</Pill>
            <h2 className="font-display mt-6 text-balance text-[2.2rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[3.4rem]">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{body}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="gold" size="lg">Get a free quote <Arrow /></Button>
              <Button href="/contact#call" variant="light" size="lg">Book a free call</Button>
              <WhatsAppButton variant="light" />
            </div>
            <p className="mt-7 text-sm text-white/60">{hours.short} · Clients worldwide welcome</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Industries & products ---------- */
export function IndustryGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((ind) => (
        <article key={ind.slug} id={ind.slug} className="gradient-border lift reveal scroll-mt-24 overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/10]"><Image src={ind.image} alt={ind.name} fill sizes="(min-width:1024px) 380px, 100vw" className="object-cover" /></div>
          <div className="p-7">
            <h2 className="font-display text-xl font-bold">{ind.name}</h2>
            <p className="mt-2 leading-relaxed text-muted">{ind.summary}</p>
            <ul className="mt-5 space-y-2 text-[0.95rem]">{ind.needs.map((n) => <li key={n} className="flex gap-2.5"><Check className="text-brand-500" />{n}</li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProductsShowcase() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {products.map((p) => (
        <article key={p.name} className="gradient-border lift reveal flex flex-col rounded-3xl p-8 sm:p-10">
          <p className={`text-sm font-semibold ${p.accent === "gold" ? "text-gold-600" : "text-brand-600"}`}>Our product</p>
          <h2 className="font-display mt-3 text-2xl font-bold">{p.name}</h2>
          <p className="mt-1 font-medium">{p.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
          <ul className="mt-6 flex-1 space-y-2.5">{p.points.map((x) => <li key={x} className="flex gap-2.5"><Check className="text-brand-500" />{x}</li>)}</ul>
          <div className="mt-8"><Button href={p.url} external variant="secondary">Visit {p.url.replace("https://", "")} <Arrow /></Button></div>
        </article>
      ))}
    </div>
  );
}
