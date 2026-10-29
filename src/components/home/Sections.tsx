import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check as CheckIcon, MessageSquareText, FileText, PenTool, Code2, Rocket, X, Stethoscope, Coffee, Store, Scissors, GraduationCap, Building2, ShoppingBag, Factory, MessageCircle, MapPin } from "lucide-react";
import { Arrow, Button, Container } from "../ui";
import { BeforeAfter } from "./BeforeAfter";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { comparison, concepts, faqs, hours, phoneLink, promises, site, steps, whatsappLink } from "@/lib/site";
import { Faq, Marquee } from "../sections";

export function Kicker({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-gold-200" : "text-brand-700"}`}><span className={`h-px w-10 ${dark ? "bg-gold-300" : "bg-brand-500"}`} />{children}</p>;
}

/* ---------- 1. Hero: oversized type + before/after slider ---------- */
export function HeroV5() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative pb-16 pt-32 sm:pt-32">
        <h1 className="font-display text-[2.3rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:text-[5.2rem] lg:text-[6.2rem] lg:max-w-[1150px]">
          Premium‑agency websites.<br /><span className="text-brand-600">Without the premium‑agency price.</span>
        </h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl lg:col-span-7">
            We design and build websites, online stores and apps that make your business look like the leader in its market, for far less than big agencies charge. See your new homepage designed <strong className="font-semibold text-ink">free, before you pay a single rupee.</strong>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button href="/contact" size="lg">Get a free quote <Arrow /></Button>
            <Button href={whatsappLink ?? "/contact#call"} external={!!whatsappLink} variant="secondary" size="lg">Book a free call</Button>
          </div>
        </div>
      </Container>
      <Container className="relative pb-20 sm:pb-28">
        <div className="relative">
          <BeforeAfter />
        </div>
        <ul className="mt-12 grid gap-x-8 gap-y-4 border-t border-line pt-10 text-[0.98rem] text-ink sm:grid-cols-2 lg:grid-cols-3">
          {["Free homepage design concept", "You approve the design first", "Milestone payments via UPI or bank", "You own the code and domain", "Live in as little as 2 weeks", "Support after launch"].map((t) => (
            <li key={t} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white"><CheckIcon className="h-3.5 w-3.5" strokeWidth={3} /></span>{t}</li>
          ))}
        </ul>
      </Container>
      <Marquee dark />
    </section>
  );
}

/* ---------- 3. Who we build for ---------- */
const whoFor = [
  { icon: Stethoscope, name: "Clinics & dentists", line: "Appointment requests and doctor pages" },
  { icon: Coffee, name: "Restaurants & cafés", line: "Menus, table booking and Maps" },
  { icon: Store, name: "Kirana & retail", line: "WhatsApp orders and Google listing" },
  { icon: Scissors, name: "Salons & spas", line: "Slot booking that confirms on WhatsApp" },
  { icon: GraduationCap, name: "Coaching & schools", line: "Batch pages and admission enquiries" },
  { icon: Building2, name: "Real estate", line: "Project pages and site-visit leads" },
  { icon: ShoppingBag, name: "D2C brands", line: "Stores with UPI, cards and COD" },
  { icon: Factory, name: "Manufacturers & B2B", line: "Catalogues and quote requests" },
];

function IndustryChip({ icon: I, name, line }: (typeof whoFor)[number]) {
  return (
    <li className="flex w-[19rem] shrink-0 items-center gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500 text-white"><I className="h-5 w-5" strokeWidth={1.8} /></span>
      <span><span className="font-display block font-bold text-white">{name}</span><span className="block text-sm text-white/65">{line}</span></span>
    </li>
  );
}

export function PeopleBand() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-36">
      <Container>
        <div className="reveal">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Kicker>Who we build for</Kicker>
              <h2 className="font-display mt-6 max-w-3xl text-[2.5rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[4rem]">The shop, the clinic, <span className="text-brand-600">the café down the road.</span></h2>
            </div>
            <Button href="/industries" variant="secondary">View all industries <Arrow /></Button>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">Real businesses deserve websites as good as the big brands have. We make that affordable, and we make it simple.</p>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-5 md:grid-cols-12">
          <div className="reveal relative min-h-[26rem] overflow-hidden rounded-[1.75rem] md:col-span-7 md:row-span-2 md:min-h-[36rem]">
            <Image src="/images/shop-owner.jpg" alt="A shopkeeper standing in his drinks and grocery stall" fill sizes="(min-width:768px) 680px, 100vw" className="object-cover" loading="eager" />
            <span className="absolute left-5 top-5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-md">Kirana & retail</span>
            <div className="float-1 absolute bottom-5 left-5 right-5 max-w-xs rounded-2xl bg-white p-4 shadow-[0_20px_40px_-15px_rgba(15,41,37,.45)] sm:bottom-8 sm:left-8">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white"><MessageCircle className="h-4 w-4" /></span>
                <div><p className="text-sm font-bold text-ink">New WhatsApp enquiry</p><p className="text-xs text-muted">from your website · just now</p></div>
              </div>
              <p className="mt-3 rounded-xl bg-cream px-3 py-2 text-sm text-ink/80">Namaste! Do you deliver to Sector 21 this evening?</p>
            </div>
          </div>

          <div className="reveal relative min-h-[17rem] overflow-hidden rounded-[1.75rem] md:col-span-5">
            <Image src="/images/storefront.jpg" alt="A local general store front with a Marathi sign" fill sizes="(min-width:768px) 480px, 100vw" loading="eager" className="object-cover" />
            <div className="float-2 absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[0_20px_40px_-15px_rgba(15,41,37,.45)]">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-300 text-ink"><MapPin className="h-4 w-4" /></span>
              <div><p className="text-sm font-bold text-ink">Your store on Google Maps</p><p className="flex items-center gap-1.5 text-xs text-muted"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" />Open now · Call · Directions</p></div>
            </div>
          </div>

          <div className="reveal relative min-h-[17rem] overflow-hidden rounded-[1.75rem] md:col-span-5">
            <Image src="/images/cafe-barista.jpg" alt="A barista pulling espresso at a Mumbai café" loading="eager" fill sizes="(min-width:768px) 480px, 100vw" className="object-cover" />
            <div className="float-3 absolute bottom-5 right-5 rounded-2xl bg-white p-3.5 shadow-[0_20px_40px_-15px_rgba(15,41,37,.45)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">Table booked</p>
              <p className="mt-1 text-sm font-bold text-ink">4 guests · Sat, 8:00 pm</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted"><CheckIcon className="h-3.5 w-3.5 text-brand-500" strokeWidth={3} />Confirmed on WhatsApp</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-10">
        <div className="reveal overflow-hidden bg-brand-900 py-8">
          <Container><p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gold-300">What we build for</p></Container>
          <div className="mt-5 flex overflow-hidden">
            <ul className="animate-marquee flex shrink-0 gap-4 pl-4 motion-reduce:animate-none">
              {[...whoFor, ...whoFor].map((w, i) => <IndustryChip key={i} {...w} />)}
            </ul>
          </div>
        </div>
      </div>

      <Container className="mt-10">
        <ul className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <li key={p.title} className="flex gap-3 rounded-2xl bg-cream p-5">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><CheckIcon className="h-3.5 w-3.5" strokeWidth={3.5} /></span>
              <span><span className="font-display block font-bold">{p.title}</span><span className="mt-1 block text-sm text-muted">{p.body}</span></span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- 4. Work: full-bleed colour-blocked panels ---------- */
const palettes = [
  { bg: "bg-brand-800", text: "text-white", sub: "text-white/70", chip: "bg-white/10 text-gold-200 ring-white/20" },
  { bg: "bg-[#b9542f]", text: "text-white", sub: "text-white/75", chip: "bg-white/10 text-white ring-white/25" },
  { bg: "bg-gold-200", text: "text-ink", sub: "text-ink/70", chip: "bg-white/60 text-ink ring-ink/10" },
];
export function WorkPanels({ header = true, detailed = false }: { header?: boolean; detailed?: boolean }) {
  return (
    <section className="bg-cream">
      {header && <Container className="py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Concept work</Kicker>
            <h2 className="font-display mt-6 max-w-3xl text-[2.5rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[4.4rem]">See how your business could look online.</h2>
          </div>
          <Button href="/work" variant="secondary">View all work <Arrow /></Button>
        </div>
        <p className="mt-6 max-w-xl text-lg text-muted">Homepage concepts for fictional businesses, clearly labelled. Yours is next, and the first concept is free.</p>
      </Container>}
      {concepts.map((c, i) => {
        const p = palettes[i % palettes.length];
        return (
          <Link key={c.slug} id={detailed ? c.slug : undefined} href={detailed ? "/contact" : `/work#${c.slug}`} className={`group block scroll-mt-20 overflow-hidden ${p.bg}`}>
            <Container className={`grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-12 ${p.text}`}>
              <div className={`lg:col-span-4 ${i % 2 ? "lg:order-2" : ""}`}>
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${p.chip}`}>Concept · {c.industry}</span>
                <h3 className="font-display mt-6 text-[2.2rem] font-extrabold leading-[1] tracking-[-0.03em] sm:text-[3.2rem]">{c.client}</h3>
                <p className={`mt-4 text-lg leading-relaxed ${p.sub}`}>{c.summary}</p>
                {detailed && <ul className="mt-6 space-y-2">{c.highlights.map((h) => <li key={h} className="flex items-center gap-2.5 font-medium"><CheckIcon className="h-4 w-4 shrink-0" strokeWidth={3} />{h}</li>)}</ul>}
                <span className="mt-8 inline-flex items-center gap-2 font-semibold">{detailed ? "Get a concept like this" : "View concept"} <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </div>
              <div className={`lg:col-span-8 ${i % 2 ? "lg:order-1" : ""}`}>
                <div className="parallax relative overflow-hidden rounded-[1.25rem] shadow-[0_50px_100px_-40px_rgba(0,0,0,.6)] ring-1 ring-black/10">
                  <div className="flex items-center gap-1.5 bg-white/95 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#e8806f]" /><span className="h-2 w-2 rounded-full bg-gold-300" /><span className="h-2 w-2 rounded-full bg-brand-300" />
                    <span className="ml-auto rounded-full bg-gold-100 px-2 py-0.5 text-[0.65rem] font-semibold text-gold-700">Concept</span>
                  </div>
                  <div className="relative aspect-[16/9]">
                    <Image src={c.image} alt={`${c.client} concept homepage`} fill sizes="(min-width:1024px) 780px, 100vw" loading="eager" className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
                    <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center p-6 text-white sm:p-10">
                      <p className="font-display text-xl font-extrabold leading-tight sm:text-[2.2rem]">{c.hero}</p>
                      <span className="mt-4 inline-block w-fit rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-brand-700">{c.cta}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Link>
        );
      })}
    </section>
  );
}

/* ---------- 5. Why us: statement + dark comparison ---------- */
function Cell({ v, strong }: { v: string; strong?: boolean }) {
  if (v === "yes") return <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${strong ? "bg-gold-300 text-ink" : "bg-white/10 text-white"}`}><CheckIcon className="h-4 w-4" strokeWidth={3} /><span className="sr-only">Yes</span></span>;
  if (v === "no") return <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/30"><X className="h-4 w-4" strokeWidth={2.5} /><span className="sr-only">No</span></span>;
  if (v === "partly") return <span className="text-sm text-white/55">Sometimes</span>;
  return <span className={strong ? "font-semibold text-gold-200" : "text-white/55"}>{v}</span>;
}
export function WhyUs({ statement = true }: { statement?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24 text-white sm:py-36">
      <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative">
        <Kicker dark>Why Makvion</Kicker>
        {statement ? <><h2 className="font-display stagger mt-8 text-[4.4rem] font-extrabold leading-[0.9] tracking-[-0.05em] sm:text-[7rem] lg:text-[9.5rem]">
          <span className="block">Faster.</span><span className="block text-gold-300">Sharper.</span><span className="block text-brand-300">Fairer.</span>
        </h2>
        <div className="mt-12 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-3">
          <p className="text-lg text-white/75"><b className="text-white">Faster:</b> small senior team, no account-manager relay. Live in weeks, not quarters.</p>
          <p className="text-lg text-white/75"><b className="text-white">Sharper:</b> custom design for your market, approved by you before we build.</p>
          <p className="text-lg text-white/75"><b className="text-white">Fairer:</b> a written quote, milestone payments, and you own everything.</p>
        </div></> : <h2 className="font-display mt-8 max-w-4xl text-[2.6rem] font-extrabold leading-[1] tracking-[-0.04em] sm:text-[4.6rem]">An honest look at your options.</h2>}
        <div className="mt-14 grid gap-5 md:hidden">
          {comparison.cols.map((c, ci) => (
            <div key={c} className={`rounded-[1.5rem] p-6 ${ci === 0 ? "bg-gold-200 text-ink" : "bg-white/[0.05] ring-1 ring-white/10"}`}>
              <p className="font-display text-2xl font-extrabold tracking-tight">{c}</p>
              <ul className="mt-5 space-y-3">
                {comparison.rows.map((r) => { const v = r.v[ci]; return (
                  <li key={r.label} className={`flex items-start justify-between gap-4 border-t pt-3 text-[0.95rem] ${ci === 0 ? "border-ink/10" : "border-white/10"}`}>
                    <span className={ci === 0 ? "text-ink/80" : "text-white/80"}>{r.label}</span>
                    <span className={`shrink-0 text-right font-semibold ${ci === 0 ? "text-brand-800" : v === "yes" ? "text-white" : "text-white/45"}`}>{v === "yes" ? "✓ Yes" : v === "no" ? "✕ No" : v === "partly" ? "Sometimes" : v}</span>
                  </li>); })}
              </ul>
            </div>
          ))}
        </div>
        <div className="reveal mt-20 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/15">
                <th scope="col" className="py-5 pr-4 text-sm font-semibold text-white/50">An honest look at your options</th>
                {comparison.cols.map((c, i) => <th key={c} scope="col" className={`px-4 py-5 text-center font-display text-lg font-bold ${i === 0 ? "rounded-t-xl bg-white/[0.06] text-gold-200" : "text-white/60"}`}>{c}</th>)}
              </tr>
            </thead>
            <tbody className="stagger">
              {comparison.rows.map((r) => (
                <tr key={r.label} className="border-b border-white/10">
                  <th scope="row" className="py-5 pr-4 text-[1.02rem] font-medium">{r.label}</th>
                  {r.v.map((v, i) => <td key={i} className={`px-4 py-5 text-center ${i === 0 ? "bg-white/[0.06]" : ""}`}><Cell v={v} strong={i === 0} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 6. Process: big numbered cards, horizontal scroll ---------- */
const stepIcons = [MessageSquareText, FileText, PenTool, Code2, Rocket];
export function ProcessCards({ title = "Five steps. Zero surprises.", link = true, kicker = "How we work" }: { title?: string; link?: boolean; kicker?: string }) {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-gold-50 to-cream py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>{kicker}</Kicker>
            <h2 className="font-display mt-6 max-w-3xl text-[2.5rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[4.4rem]">{title}</h2>
          </div>
          {link && <Button href="/process" variant="secondary">See the full process <Arrow /></Button>}
        </div>
      </Container>
      <div className="reveal no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4" style={{ paddingInline: "max(1.25rem, calc((100vw - 1200px) / 2 + 2rem))", scrollPaddingInline: "max(1.25rem, calc((100vw - 1200px) / 2 + 2rem))" }}>
        {steps.map((s, i) => {
          const I = stepIcons[i] ?? Rocket;
          const dark = i % 2 === 1;
          return (
            <article key={s.step} className={`relative flex min-h-[380px] w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-[1.75rem] p-8 sm:w-[46%] lg:w-[30%] ${dark ? "bg-brand-900 text-white" : "bg-white ring-1 ring-line"}`}>
              <span aria-hidden className={`font-display absolute -right-3 -top-8 text-[10rem] font-extrabold leading-none tracking-tighter ${dark ? "text-white/[0.06]" : "text-brand-600/[0.07]"}`}>{s.step}</span>
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dark ? "bg-gold-300 text-ink" : "bg-brand-500 text-white"}`}><I className="h-6 w-6" strokeWidth={1.8} /></span>
              <p className={`font-display mt-auto text-sm font-bold ${dark ? "text-gold-200" : "text-gold-600"}`}>Step {s.step}</p>
              <h3 className="font-display mt-2 text-[1.9rem] font-extrabold leading-tight tracking-tight">{s.title}</h3>
              <p className={`mt-3 leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{s.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- 7. FAQ: big split ---------- */
export function FaqV5({ all = false, title = "Questions, answered." }: { all?: boolean; title?: string }) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Kicker>FAQ</Kicker>
          <h2 className="font-display mt-6 text-[2.5rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[4rem]">{title}</h2>
          <p className="mt-6 text-lg text-muted">Something else on your mind? Email <a href={`mailto:${site.email}`} className="font-semibold text-brand-700 underline">{site.email}</a>.</p>
        </div>
        <div className="lg:col-span-7"><Faq items={all ? faqs : faqs.slice(0, 6)} /></div>
      </Container>
    </section>
  );
}

/* ---------- 8. Final CTA: full-bleed oversized ---------- */
export function FinalCta({ title = "Get your free homepage concept.", body = "Tell us about your business. We'll reply within one business day, set up a free call and show you a homepage concept before you pay anything.", tone = "green" }: { title?: string; body?: string; tone?: "green" | "dark" }) {
  return (
    <section className={`relative overflow-hidden text-white ${tone === "dark" ? "bg-brand-950" : "bg-brand-700"}`}>
      <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0" />
      <Container className="relative py-24 sm:py-36">
        <Kicker dark>Your move</Kicker>
        <h2 className="font-display mt-8 max-w-5xl text-[3rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[6rem]">{title}</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-white/80 lg:col-span-6">{body}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-6 lg:flex-nowrap lg:justify-end">
            <Button href="/contact" variant="gold" size="lg">Get a free quote <Arrow /></Button>
            {phoneLink ? <Button href={phoneLink} external variant="light" size="lg">Call us</Button> : <Button href="/contact#call" variant="light" size="lg">Book a free call</Button>}
            {whatsappLink && <Button href={whatsappLink} external variant="light" size="lg"><WhatsAppIcon className="h-4 w-4" />WhatsApp us</Button>}
          </div>
        </div>
        <p className="mt-12 flex items-center gap-2 border-t border-white/15 pt-6 text-sm text-white/65"><ArrowRight className="h-4 w-4 text-gold-300" />{hours.short} · Clients worldwide welcome</p>
      </Container>
    </section>
  );
}
