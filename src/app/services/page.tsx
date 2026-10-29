import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { services, site } from "@/lib/site";
import { Arrow, Button, Container } from "@/components/ui";
import { FinalCta, Kicker, ProcessCards } from "@/components/home/Sections";
import { ServicesDetail } from "@/components/ServicesDetail";

export const metadata: Metadata = pageMeta({
  path: "/services",
  title: "Web, E-commerce & App Development Services | Makvion",
  description: "Business websites, e-commerce stores with UPI checkout, web apps, Android apps, landing pages, SEO and maintenance for Indian businesses. Free quote today.",
  keywords: ["website development services India", "ecommerce website development", "Android app development company", "web app development India", "landing page design", "local SEO services Pune", "website maintenance services"],
});

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": services.map((sv) => ({
    "@type": "Service",
    name: sv.title,
    description: sv.short,
    serviceType: sv.title,
    url: `${site.url}/services#${sv.slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [{ "@type": "Country", name: "India" }, { "@type": "Place", name: "Worldwide" }],
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <JsonLd data={servicesJsonLd} />
      <section className="relative overflow-hidden bg-cream text-ink">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
          <Kicker>Services</Kicker>
          <h1 className="font-display mt-8 max-w-5xl text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[4.8rem] lg:text-[5.8rem]">
            Websites, stores and apps that <span className="text-brand-600">bring in customers.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">Every project is custom designed, mobile-first and quoted after a free call, so you only pay for what you need.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">Get a free quote <Arrow /></Button>
            <Button href="/services#websites" variant="secondary" size="lg">See what&apos;s included</Button>
          </div>
        </Container>
      </section>
      <ServicesDetail />
      <ProcessCards />
      <FinalCta title="Not sure which service you need?" body="Tell us your goal. We'll recommend the simplest option that gets you there, with a clear written quote." />
    </>
  );
}
