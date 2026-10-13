import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { CtaBand, IndustryMarquee, PageHero, Process } from "@/components/sections";
import { capabilities, coreHoursIST, products, timezones, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Makvion Technologies is a design and engineering studio building websites, web apps, SaaS and mobile apps for businesses worldwide.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Makvion" title={<>Your business, online at its best. <span className="text-brand-600">Without the hassle.</span></>}
        intro="Makvion Technologies is a design and engineering studio that helps businesses worldwide win more customers online, with websites, web apps and mobile apps built to perform." />

      {/* Mission: overlapping images + text */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[2rem]">
              <Image src="/images/team.jpg" alt="A team working together around laptops" fill sizes="(min-width:1024px) 38vw, 78vw" className="object-cover" />
            </div>
            <div className="absolute bottom-[-2rem] right-0 aspect-square w-[52%] overflow-hidden rounded-[2rem] ring-8 ring-white">
              <Image src="/images/workspace.jpg" alt="A minimal desk with a laptop" fill sizes="(min-width:1024px) 26vw, 52vw" className="object-cover" />
            </div>
            <div aria-hidden className="bg-dots-gold absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-3xl" />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Our mission" title="Give every business software it can be proud of." />
            <div className="reveal mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>Great websites and apps used to be something only large companies could afford. We exist to change that, bringing product-grade design and engineering to small and growing businesses without agency overheads, vague estimates or surprise invoices.</p>
              <p>Every engagement is built on the same foundation: understand how your customers decide, design an experience around that, and engineer it to be fast, accessible and easy to grow.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values: deep green bento */}
      <section className="noise relative overflow-hidden bg-brand-900 py-24 text-white sm:py-32">
        <div className="bg-grid-dark mask-radial pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SectionHeading tone="dark" eyebrow="What we value" title={<>Principles we <span className="text-gold-300">don&apos;t compromise on.</span></>} />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className={`reveal relative overflow-hidden rounded-[1.75rem] p-8 sm:p-10 ${i === 0 || i === 3 ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-gold-300 text-ink"}`} style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
                <span className={`font-display text-6xl font-semibold ${i === 0 || i === 3 ? "text-white/15" : "text-ink/15"}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-4 text-2xl font-semibold">{v.title}</h3>
                <p className={`mt-3 max-w-md text-lg leading-relaxed ${i === 0 || i === 3 ? "text-white/75" : "text-ink/80"}`}>{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Capabilities" title="One team for everything. Nothing lost in hand-offs." intro="Design, engineering and product thinking under one roof, so you have one point of contact from first sketch to launch and beyond." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <div key={c.group} className="reveal bg-white p-8 transition-colors hover:bg-cream" style={{ transitionDelay: `${i * 70}ms` }}>
                <p className="font-display text-sm font-semibold text-gold-700">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-3 text-2xl font-semibold">{c.group}</h3>
                <ul className="mt-6 space-y-3 text-muted">
                  {c.items.map((x) => <li key={x} className="flex items-center gap-2.5"><span className="h-1 w-3 rounded-full bg-brand-500" />{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 text-muted">
            We also build and operate our own products: {products.map((p, i) => (
              <span key={p.name}>{i > 0 && " and "}<a className="font-medium text-brand-700 underline underline-offset-4" href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a></span>
            ))}.
          </p>
        </Container>
      </section>

      {/* Global / time zones: gold-tinted */}
      <section className="relative overflow-hidden bg-sand py-24 sm:py-32">
        <div className="bg-dots-gold mask-fade-b pointer-events-none absolute inset-0" />
        <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading eyebrowTone="gold" eyebrow="Global by default" title="Quick replies and calls in your business hours." intro="Our team is based in India (IST, UTC+5:30) and works with clients across North America, Europe and Asia-Pacific. We plan our day around yours." />
            <ul className="reveal mt-8 space-y-3 text-ink/85">
              {["Scheduled calls inside your business hours", "Replies within one business day, usually faster", "Async updates with a live preview link you can check anytime", "Written summaries after every call"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="reveal rounded-[2rem] bg-white p-6 shadow-[0_40px_80px_-50px_rgba(19,32,30,.5)] ring-1 ring-gold-200 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="font-display font-semibold">Working-hours overlap</p>
                <Eyebrow tone="gold">Makvion · IST</Eyebrow>
              </div>
              <div aria-hidden className="mt-6 grid grid-cols-[7.5rem_1fr] gap-4 text-[0.65rem] font-medium text-muted sm:grid-cols-[9rem_1fr_auto]">
                <span>Local time</span>
                <span className="flex justify-between"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></span>
                <span className="hidden w-40 sm:block" />
              </div>
              <ul className="mt-2 divide-y divide-line">
                {timezones.map((t) => (
                  <li key={t.city} className="grid grid-cols-[7.5rem_1fr] items-center gap-4 py-4 sm:grid-cols-[9rem_1fr_auto]">
                    <span className="font-semibold">{t.city}</span>
                    <span aria-hidden className="relative h-3 rounded-full bg-cream ring-1 ring-line">
                      <span className="absolute inset-y-0 rounded-full bg-gold-100" style={{ left: `${(9 / 24) * 100}%`, width: `${(10 / 24) * 100}%` }} />
                      <span className="absolute inset-y-0 rounded-full bg-brand-500" style={{ left: `${(t.start / 24) * 100}%`, width: `${((t.end - t.start) / 24) * 100}%` }} />
                    </span>
                    <span className="col-span-2 text-sm text-muted sm:col-span-1 sm:w-40">{t.overlap}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">Gold: a 9am–7pm local working day. Green: overlap with our core hours ({coreHoursIST}). Daylight saving can shift this by an hour.</p>
            </div>
          </div>
        </Container>
      </section>

      <IndustryMarquee />
      <Process />
      <CtaBand />
    </>
  );
}
