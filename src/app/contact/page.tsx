import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Makvion. Tell us what you need and get a fixed written quote. Email contact@makvion.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Get your free <span className="text-brand-600">homepage mockup.</span></>}
        intro="Tell us about your business. Within one business day we'll reply with next steps, and we'll show you how your new homepage could look before you commit to anything." />
      <section className="relative py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_40px_90px_-50px_rgba(19,32,30,.5)] ring-1 ring-line sm:p-10 lg:col-span-7 lg:-mt-40 lg:relative lg:z-10">
            <h2 className="font-display mb-8 text-2xl font-semibold">Tell us about your project</h2>
            <ContactForm />
          </div>
          <aside className="space-y-5 lg:col-span-5">
            <div className="noise relative overflow-hidden rounded-[2rem] bg-brand-900 p-8 text-white">
              <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-70" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">Email us directly</p>
                <a href={`mailto:${site.email}`} className="font-display mt-3 block break-all text-2xl font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white sm:text-3xl">{site.email}</a>
                <p className="mt-4 text-white/75">Team based in India · Calls scheduled in your time zone.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-sand p-8">
              <div className="bg-diagonal pointer-events-none absolute inset-0" />
              <div className="relative">
                <h2 className="font-display text-xl font-semibold">What happens next</h2>
                <ol className="mt-6 space-y-5">
                  {["We reply within one business day.", "A short call or email exchange to understand your goals.", "You receive a fixed written quote and timeline.", "50% upfront to start; you approve the design before we build."].map((s, i) => (
                    <li key={s} className="flex gap-4 text-ink/85"><span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-700 ring-1 ring-gold-200">{i + 1}</span><span className="pt-1">{s}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
