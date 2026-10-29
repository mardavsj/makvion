import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Image from "next/image";
import { Container } from "@/components/ui";
import { FinalCta, Kicker, WhyUs } from "@/components/home/Sections";
import { AboutValues } from "@/components/AboutValues";
import { Capabilities } from "@/components/v6";
import { hours, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  path: "/about",
  title: "About Makvion: Web & App Studio in Pune, India",
  description: "Makvion Technologies is a design and engineering studio in Pune, Maharashtra, building websites, web apps, SaaS and Android apps for India and the world.",
  keywords: ["web design studio Pune", "software development company Pune", "IT company Pimpri Chinchwad", "web agency India"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <section className="relative overflow-hidden bg-cream text-ink">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative pb-20 pt-32 sm:pb-28 sm:pt-24">
          <Kicker>About Makvion</Kicker>
          <h1 className="font-display mt-8 max-w-5xl text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[4.8rem] lg:text-[5.8rem]">
            Big-agency quality, <span className="text-brand-600">made affordable.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">Makvion Technologies is a design and engineering studio in Pune. We help businesses in India and around the world win more customers online, with websites and apps built to perform.</p>
        </Container>
      </section>
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <Container className="relative grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <Kicker dark>Why we exist</Kicker>
            <p className="font-display mt-8 text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[4.4rem]">Great websites shouldn&apos;t be <span className="text-gold-300">only for big budgets.</span></p>
            <div className="mt-10 grid gap-6 text-lg leading-relaxed text-white/75">
              <p>Most businesses are stuck choosing between an expensive agency and a cheap template that doesn&apos;t win customers. We built Makvion to close that gap: careful design and clean engineering, quoted honestly and well below agency rates.</p>
              <p>We also build and run our own software products, so we know what it takes to keep something live, fast and reliable.</p>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image src="/images/team.jpg" alt="A small team working together around a table" fill sizes="(min-width:1024px) 460px, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
      <AboutValues />
      <Capabilities />
      <WhyUs statement={false} />
      <section className="bg-cream">
        <Container className="grid gap-10 py-20 sm:grid-cols-3 sm:py-24">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Registered office</p><address className="mt-3 not-italic text-lg leading-relaxed">{site.address}</address></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Hours</p><p className="mt-3 text-lg">{hours.label}</p><p className="mt-1 text-muted">{hours.global}</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Email</p><a href={`mailto:${site.email}`} className="font-display mt-3 block text-2xl font-extrabold text-brand-700 hover:underline">{site.email}</a></div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
