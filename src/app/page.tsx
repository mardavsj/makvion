import type { Metadata } from "next";
import { pageMeta, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/site";
import { ServicesBento } from "@/components/home/ServicesBento";
import { FaqV5, FinalCta, HeroV5, PeopleBand, ProcessCards, WhyUs, WorkPanels } from "@/components/home/Sections";
import { Button, Arrow, Container } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  path: "/",
  title: "Website Design & App Development Company in Pune | Makvion",
  description: "Makvion builds fast websites, e-commerce stores, web apps and Android apps for businesses in Pune, across India and worldwide. Get a free quote and call.",
  keywords: ["website design company in Pune", "web development company India", "website development Pune", "ecommerce website development", "mobile app development Pune", "business website for small business India", "web design agency Maharashtra"],
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs.slice(0, 6))} />
      <HeroV5 />
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-700"><span className="h-px w-10 bg-brand-500" />What we build</p>
              <h2 className="font-display mt-6 max-w-3xl text-[2.5rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[4.4rem]">Everything your business needs to <span className="text-brand-500">win online</span>, built for India.</h2>
            </div>
            <Button href="/services" variant="secondary">All services <Arrow /></Button>
          </div>
          <ServicesBento />
        </Container>
      </section>
      <WorkPanels />
      <WhyUs />
      <PeopleBand />
      <ProcessCards />
      <FaqV5 />
      <FinalCta />
    </>
  );
}
