import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight, Check as CheckIcon } from "lucide-react";
import { Arrow, Button, Container } from "./ui";
import { Kicker } from "./home/Sections";
import { capabilities, industries, products, services, values } from "@/lib/site";

/* ---------- Inner page hero: oversized type, optional photo ---------- */
export function PageHeroV6({ eyebrow, title, intro, image, imageAlt = "", children, tone = "light" }: { eyebrow: string; title: ReactNode; intro: ReactNode; image?: string; imageAlt?: string; children?: ReactNode; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-brand-950 text-white" : "bg-cream text-ink"}`}>
      <div aria-hidden className={`${dark ? "bg-grid-dark" : "bg-grid"} pointer-events-none absolute inset-0 opacity-60`} />
      <Container className={`relative grid gap-12 pb-20 pt-32 sm:pb-28 sm:pt-24 ${image ? "lg:grid-cols-12 lg:items-end" : ""}`}>
        <div className={image ? "lg:col-span-7" : ""}>
          <Kicker dark={dark}>{eyebrow}</Kicker>
          <h1 className={`font-display mt-8 font-extrabold leading-[0.95] tracking-[-0.045em] ${image ? "text-[2.7rem] sm:text-[4.6rem] lg:text-[5.2rem]" : "max-w-5xl text-[2.9rem] sm:text-[5.2rem] lg:text-[6.4rem]"}`}>{title}</h1>
          <p className={`mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl ${dark ? "text-white/75" : "text-muted"}`}>{intro}</p>
          {children && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
        {image && (
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_50px_100px_-50px_rgba(15,41,37,.6)]">
              <Image src={image} alt={imageAlt} fill priority sizes="(min-width:1024px) 460px, 100vw" className="object-cover" />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

/* ---------- Big statement band ---------- */
export function Statement({ kicker, children, body, tone = "dark" }: { kicker: string; children: ReactNode; body?: ReactNode; tone?: "dark" | "gold" | "terracotta" }) {
  const bg = tone === "gold" ? "bg-gold-200 text-ink" : tone === "terracotta" ? "bg-[#b9542f] text-white" : "bg-brand-950 text-white";
  const light = tone !== "gold";
  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <Container className="relative py-24 sm:py-36">
        <Kicker dark={light}>{kicker}</Kicker>
        <p className="font-display mt-8 max-w-5xl text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[5rem] lg:text-[6rem]">{children}</p>
        {body && <div className={`mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed md:grid-cols-2 ${light ? "text-white/75" : "text-ink/75"}`}>{body}</div>}
      </Container>
    </section>
  );
}

/* ---------- Services index: big numbered rows ---------- */
export function ServicesIndex() {
  return (
    <section className="bg-brand-950 text-white">
      <Container className="py-24 sm:py-32">
        <Kicker dark>What&apos;s included</Kicker>
        <h2 className="font-display mt-6 max-w-4xl text-[2.5rem] font-extrabold leading-[1] tracking-[-0.04em] sm:text-[4.4rem]">Every service, in detail.</h2>
        <div className="mt-16 border-b border-white/15">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="reveal grid scroll-mt-24 gap-6 border-t border-white/15 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
              <p className="font-display text-[3.5rem] font-extrabold leading-none tracking-tighter text-gold-300 lg:col-span-2 lg:text-[5rem]">{String(i + 1).padStart(2, "0")}</p>
              <div className="lg:col-span-4">
                <h3 className="font-display text-[1.9rem] font-extrabold leading-[1.05] tracking-tight sm:text-[2.5rem]">{s.title}</h3>
                <p className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-gold-200">{s.timeline}</p>
              </div>
              <div className="lg:col-span-6">
                <p className="text-lg leading-relaxed text-white/75">{s.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.includes.map((x) => <li key={x} className="flex gap-2.5 text-[0.98rem]"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" strokeWidth={3} />{x}</li>)}
                </ul>
                <a href="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:text-gold-200">Get a quote for {s.title.toLowerCase()} <ArrowUpRight className="h-5 w-5" /></a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Colour panels for industries ---------- */
const pals = [
  { bg: "bg-white", text: "text-ink", sub: "text-muted", tick: "text-brand-600", num: "text-brand-600/15" },
  { bg: "bg-brand-800", text: "text-white", sub: "text-white/70", tick: "text-gold-300", num: "text-white/10" },
  { bg: "bg-gold-200", text: "text-ink", sub: "text-ink/70", tick: "text-brand-700", num: "text-ink/10" },
  { bg: "bg-brand-950", text: "text-white", sub: "text-white/70", tick: "text-gold-300", num: "text-white/10" },
  { bg: "bg-[#b9542f]", text: "text-white", sub: "text-white/80", tick: "text-gold-200", num: "text-white/15" },
  { bg: "bg-cream", text: "text-ink", sub: "text-muted", tick: "text-brand-600", num: "text-brand-600/15" },
];
export function IndustryPanels() {
  return (
    <div>
      {industries.map((ind, i) => {
        const p = pals[i % pals.length];
        return (
          <section key={ind.slug} id={ind.slug} className={`scroll-mt-20 overflow-hidden ${p.bg} ${p.text}`}>
            <Container className="grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-14">
              <div className={`relative lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="parallax relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_50px_100px_-50px_rgba(0,0,0,.6)]">
                  <Image src={ind.image} alt={ind.name} fill loading="eager" sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
                </div>
              </div>
              <div className={`relative lg:col-span-6 ${i % 2 ? "lg:order-1" : ""}`}>
                <p className={`font-display text-sm font-bold tracking-[0.2em] ${p.tick}`}>{String(i + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}</p>
                <h2 className="font-display relative mt-5 text-[2.3rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[3.6rem]">{ind.name}</h2>
                <p className={`mt-5 text-lg leading-relaxed ${p.sub}`}>{ind.summary}</p>
                <ul className="mt-8 space-y-3">{ind.needs.map((n) => <li key={n} className="flex items-center gap-3 text-[1.05rem] font-medium"><CheckIcon className={`h-5 w-5 shrink-0 ${p.tick}`} strokeWidth={3} />{n}</li>)}</ul>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}

/* ---------- Product panels ---------- */
export function ProductPanels() {
  return (
    <div>
      {products.map((p, i) => {
        const gold = p.accent === "gold";
        return (
          <section key={p.name} className={gold ? "bg-gold-200 text-ink" : "bg-brand-800 text-white"}>
            <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className={`text-sm font-bold uppercase tracking-[0.2em] ${gold ? "text-brand-800" : "text-gold-200"}`}>Our product · {String(i + 1).padStart(2, "0")}</p>
                <h2 className="font-display mt-6 text-[3rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[5.5rem]">{p.name}</h2>
                <p className="font-display mt-6 max-w-xl text-2xl font-bold leading-snug">{p.tagline}</p>
                <p className={`mt-5 max-w-xl text-lg leading-relaxed ${gold ? "text-ink/75" : "text-white/75"}`}>{p.description}</p>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <ul className={`border-b ${gold ? "border-ink/15" : "border-white/15"}`}>
                  {p.points.map((x) => <li key={x} className={`flex items-center gap-3 border-t py-5 text-lg font-semibold ${gold ? "border-ink/15" : "border-white/15"}`}><CheckIcon className={`h-5 w-5 ${gold ? "text-brand-700" : "text-gold-300"}`} strokeWidth={3} />{x}</li>)}
                </ul>
                <div className="mt-8"><Button href={p.url} external variant={gold ? "primary" : "gold"} size="lg">Visit {p.url.replace("https://", "")} <Arrow /></Button></div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}

/* ---------- About: values + capabilities ---------- */
export function ValuesGrid() {
  return (
    <section className="bg-white">
      <Container className="py-24 sm:py-32">
        <Kicker>What we stand for</Kicker>
        <h2 className="font-display mt-6 max-w-3xl text-[2.5rem] font-extrabold leading-[1] tracking-[-0.04em] sm:text-[4.4rem]">Four promises on every project.</h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-line ring-1 ring-line sm:grid-cols-2">
          {values.map((v, i) => (
            <div key={v.title} className="reveal bg-white p-8 sm:p-12">
              <p className="font-display text-[4rem] font-extrabold leading-none tracking-tighter text-brand-600/20">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display mt-6 text-2xl font-extrabold tracking-tight sm:text-[1.9rem]">{v.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export function Capabilities() {
  return (
    <section className="bg-gold-200 text-ink">
      <Container className="py-24 sm:py-32">
        <Kicker>Capabilities</Kicker>
        <h2 className="font-display mt-6 text-[2.5rem] font-extrabold leading-[1] tracking-[-0.04em] sm:text-[4.4rem]">One team, end to end.</h2>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.group} className="border-t-2 border-ink pt-6">
              <h3 className="font-display text-[1.7rem] font-extrabold tracking-tight">{c.group}</h3>
              <ul className="mt-5 space-y-3 text-[1rem] text-ink/80">{c.items.map((i) => <li key={i} className="flex gap-2.5"><CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-500" strokeWidth={3} />{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
