import type { Metadata } from "next";
import Image from "next/image";
import { Check, Container } from "@/components/ui";
import { CtaBand, IndustryMarquee, PageHero } from "@/components/sections";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "Websites and apps for local services, healthcare, real estate, restaurants, e-commerce and startups, and any industry in between.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title={<>More customers, <span className="text-brand-600">whatever you sell.</span></>}
        intro="Every industry has its own buyer journey. We design around how your customers decide, so more visitors call, book or buy." />
      <IndustryMarquee tone="gold" />
      <section className="py-24 sm:py-32">
        <Container className="space-y-24 sm:space-y-32">
          {industries.map((ind, i) => (
            <article key={ind.slug} id={ind.slug} className="reveal grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={`relative lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image src={ind.image} alt={ind.name} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div aria-hidden className={`absolute -bottom-6 h-28 w-28 rounded-3xl ${i % 2 ? "-left-6 bg-gold-300" : "-right-6 bg-brand-600"} -z-10 hidden sm:block`} />
                <span className="font-display absolute -top-5 left-6 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-lg ring-1 ring-line">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">{ind.name}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{ind.summary}</p>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">What you get</p>
                <ul className="mt-4 space-y-3">
                  {ind.needs.map((n) => <li key={n} className="flex gap-3 border-b border-line pb-3 text-ink/90"><Check className="text-brand-600" />{n}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand title="Don't see your industry? Let's talk anyway." body="We work with businesses of all kinds. Tell us how your customers find and choose you, and we'll design around that." />
    </>
  );
}
