import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Image from "next/image";
import { Arrow, Button, Container } from "@/components/ui";
import { FinalCta, Kicker } from "@/components/home/Sections";
import { IndustryPanels } from "@/components/v6";

export const metadata: Metadata = pageMeta({
  path: "/industries",
  title: "Websites for Clinics, Shops & Startups in India | Makvion",
  description: "Websites and apps for clinics, kirana and retail shops, restaurants, coaching institutes, D2C brands, manufacturers and startups across India. See how we help.",
  keywords: ["website for clinic India", "website for doctors", "website for retail shop", "restaurant website design", "coaching institute website", "D2C brand website", "startup web development India"],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Industries", path: "/industries" }])} />
      <section className="relative overflow-hidden bg-cream text-ink">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative pb-20 pt-32 sm:pb-28 sm:pt-24">
          <Kicker>Industries</Kicker>
          <h1 className="font-display mt-8 max-w-5xl text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[4.8rem] lg:text-[5.8rem]">
            More customers, <span className="text-brand-600">whatever you sell.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">We design around how your customers decide, so more visitors call, book or buy.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">Get a free quote <Arrow /></Button>
            <Button href="/work" size="lg" variant="secondary">See our work</Button>
          </div>
        </Container>
      </section>
      <IndustryPanels />
      <section className="bg-white py-24 text-ink sm:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Kicker>Any industry</Kicker>
            <p className="font-display mt-8 text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[4.4rem]">We start with <span className="text-brand-600">your customers.</span></p>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted">Before we design anything, we learn how your customers find you, what makes them trust you and what makes them call, book or buy. Then we build the website around that.</p>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:aspect-[4/5]">
              <Image src="/images/industries-hero.jpg" alt="Business owners planning together over laptops" fill sizes="(min-width:1024px) 460px, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
      <FinalCta tone="dark" title="Don't see your industry? Let's talk anyway." body="Tell us how your customers find and choose you, and we'll design around that." />
    </>
  );
}
