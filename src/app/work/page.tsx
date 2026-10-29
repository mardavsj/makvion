import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Arrow, Button, Container } from "@/components/ui";
import { FinalCta, Kicker } from "@/components/home/Sections";
import { Statement } from "@/components/v6";
import { WorkDetail } from "@/components/WorkDetail";

export const metadata: Metadata = pageMeta({
  path: "/work",
  title: "Website Design Portfolio & Concept Projects | Makvion",
  description: "Explore Makvion concept projects for a dental clinic, a restaurant and a D2C clothing brand, each clearly labelled as a concept, with what we built and why.",
  keywords: ["website design portfolio", "web design examples India", "dental clinic website design", "restaurant website design", "clothing brand ecommerce website"],
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Work", path: "/work" }])} />
      <section className="relative overflow-hidden bg-cream text-ink">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
          <Kicker>Work</Kicker>
          <h1 className="font-display mt-8 max-w-5xl text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[4.8rem] lg:text-[5.8rem]">
            See how your business <span className="text-brand-600">could look online.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">Three concept projects for fictional Indian businesses, shown in detail: the brief, the problem, what we built and why. Every one is clearly labelled as a concept.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">Get your free concept <Arrow /></Button>
            <Button href="#dental" size="lg" variant="secondary">See the projects</Button>
          </div>
        </Container>
      </section>
      <WorkDetail />
      <Statement kicker="How we design" body={<><p>We start from how your customers decide: what they need to see, trust and tap before they call, book or buy.</p><p>Then we design one homepage around that, show it to you free, and only build once you approve it.</p></>}>Designed around <span className="text-gold-300">how your customers decide.</span></Statement>
      <FinalCta title="Want a free homepage concept for your business?" body="Share your current site or idea. We'll show you how we'd approach it before you commit to anything." />
    </>
  );
}
