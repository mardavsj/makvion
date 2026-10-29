import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Arrow, Button, Container } from "@/components/ui";
import { ProcessFaq, ProcessSteps, processFaqs } from "@/components/ProcessDetail";
import { FinalCta, Kicker } from "@/components/home/Sections";
import { payments } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  path: "/process",
  title: "Our Website Design Process, Step by Step | Makvion",
  description: "How we work: a free call, a written quote, design approval before development, a milestone-based build, then launch and support. Clear steps, no surprises.",
  keywords: ["website design process", "web development process", "how website development works", "milestone payment website project"],
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Process", path: "/process" }])} />
      <JsonLd data={faqJsonLd(processFaqs)} />
      <section className="relative overflow-hidden bg-cream text-ink">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
          <Kicker>Process</Kicker>
          <h1 className="font-display mt-8 max-w-5xl text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[4.8rem] lg:text-[5.8rem]">
            Clear steps. <span className="text-brand-600">No surprises.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">You see the design before we build, pay in milestones as work is delivered, and own everything at the end. Here&apos;s how every project runs, step by step.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">Get a free quote <Arrow /></Button>
            <Button href="#step-01" size="lg" variant="secondary">See the five steps</Button>
          </div>
        </Container>
      </section>
      <ProcessSteps />
      <section className="bg-brand-950 text-white">
        <Container className="grid gap-14 py-24 sm:py-36 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Kicker dark>Payments</Kicker>
            <h2 className="font-display mt-8 text-[3rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[5.5rem]">Pay as work <span className="text-gold-300">is delivered.</span></h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/75">A part to start, then the rest in stages as you approve each milestone.</p>
          </div>
          <ul className="self-end border-b border-white/15 lg:col-span-5">
            {[...payments.india, payments.international].map((p, i) => <li key={p} className="flex items-baseline gap-5 border-t border-white/15 py-6 text-lg font-semibold"><span className="font-display text-sm text-gold-300">{String(i + 1).padStart(2, "0")}</span>{p}</li>)}
          </ul>
        </Container>
      </section>
      <ProcessFaq />
      <FinalCta />
    </>
  );
}
