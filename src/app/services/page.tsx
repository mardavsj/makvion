import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { CtaBand, FaqSection, PageHero, CarePlans, PaymentNote, Pricing, Process, ServicesBento, ServicesDetailed } from "@/components/sections";
import { faqs, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Websites from $1,500, web app & SaaS MVPs from $7,500, mobile app MVPs from $6,500, speed sprints from $750, redesigns from $1,500 and care plans from $99/mo. 50% upfront, milestone billing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services & pricing" title={<>Grow your business online. <span className="text-brand-600">Know the price upfront.</span></>}
        intro="More enquiries, smoother operations, fewer headaches. Every project starts with a fixed written quote, and you approve the design before we build."
        aside={
          <ul className="reveal grid grid-cols-2 gap-3">
            {services.slice(0, 4).map((s) => (
              <li key={s.slug}><a href={`#${s.slug}`} className="block rounded-2xl bg-white/80 p-4 ring-1 ring-line backdrop-blur transition hover:ring-brand-300">
                <span className="block text-sm font-semibold text-ink">{s.title}</span>
                <span className="mt-1 block text-sm text-brand-700">From {s.from}</span>
              </a></li>
            ))}
          </ul>
        } />
      <section className="py-24 sm:py-32">
        <Container>
          <h2 className="sr-only">Services overview</h2>
          <ServicesBento />
        </Container>
      </section>
      <section className="bg-white pb-24 sm:pb-32">
        <Container>
          <SectionHeading eyebrow="In detail" title="What you get, in detail" />
          <div className="mt-12"><ServicesDetailed /></div>
        </Container>
      </section>
      <section className="relative overflow-hidden bg-sand py-24 sm:py-32">
        <div className="bg-dots-gold mask-fade-b pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SectionHeading center eyebrowTone="gold" eyebrow="Packages" title="Pick the package that fits your goals" intro="Starting prices for the most common projects. Custom scopes are always welcome." />
          <div className="mt-16"><Pricing /></div>
          <CarePlans />
          <PaymentNote />
        </Container>
      </section>
      <Process />
      <FaqSection items={faqs.slice(0, 5)} />
      <CtaBand title="Get a free mockup and a fixed quote." />
    </>
  );
}
