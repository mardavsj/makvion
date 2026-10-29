import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Check, Container } from "@/components/ui";
import { CallButton, WhatsAppButton } from "@/components/sections";
import { Kicker } from "@/components/home/Sections";
import { ContactForm } from "@/components/ContactForm";
import { contactConfig, hours, payments, phoneLink, site, whatsappLink } from "@/lib/site";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = pageMeta({
  path: "/contact",
  title: "Contact Makvion: Free Website Quote in Pune & India",
  description: "Get a free quote for your website, online store or app. Call or WhatsApp +91 74992 83045 or email contact@makvion.com. Mon-Sat, 10am-7pm IST, Pune, India.",
  keywords: ["website quote Pune", "contact web developer Pune", "hire web developer India", "website design cost enquiry"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <section className="relative overflow-hidden bg-cream">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative pb-16 pt-16 sm:pb-20 sm:pt-24">
          <Kicker>Contact</Kicker>
          <h1 className="font-display mt-8 max-w-5xl text-[2.9rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[5.2rem] lg:text-[6.4rem]">Get a free quote. <span className="text-brand-600">No obligation.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">Tell us about your business. We reply within one business day to set up a free call, then send a clear written quote and a free homepage concept.</p>
        </Container>
      </section>
      <section className="bg-cream pb-24 sm:pb-32">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_40px_80px_-60px_rgba(15,41,37,.6)] ring-1 ring-line sm:p-12 lg:col-span-7">
            <h2 className="font-display mb-8 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-[2.6rem]">Tell us about your project</h2>
            <ContactForm />
          </div>
          <aside className="flex flex-col gap-6 lg:col-span-5">
            <div id="call" className="scroll-mt-24 relative overflow-hidden rounded-[1.75rem] bg-brand-950 p-8 text-white sm:p-10 shadow-[0_40px_80px_-40px_rgba(15,41,37,.7)]">
              <p className="text-sm font-semibold text-gold-200">Prefer a call?</p>
              <p className="font-display mt-3 text-[1.9rem] font-extrabold leading-tight tracking-tight">Book a free 20-minute consultation</p>
              <p className="mt-3 leading-relaxed text-white/75">Email <a className="font-semibold text-white underline" href={`mailto:${site.email}?subject=${encodeURIComponent("Free consultation call")}`}>{site.email}</a> with a couple of times that suit you, or tick &ldquo;call me&rdquo; in your message. We&apos;ll confirm within one business day.</p>
              <p className="mt-4 text-sm text-white/60">{hours.label}. {hours.global}</p>
              <div className="mt-5 flex flex-wrap gap-3"><WhatsAppButton variant="light" /><CallButton variant="light" /></div>
            </div>
            <div className="flex-1 rounded-[1.75rem] bg-gold-200 p-8 sm:p-10">
              <h2 className="font-display text-[1.6rem] font-extrabold tracking-tight">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {["We reply within one business day.", "A free call to understand your goals and budget.", "A written quote, timeline and a free homepage concept.", "You approve the design, then we build. Pay in milestones."].map((s, i) => (
                  <li key={s} className="flex gap-3.5"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-gold-200">{i + 1}</span><span className="pt-0.5 text-ink/85">{s}</span></li>
                ))}
              </ol>
            </div>
          </aside>
          <div className="grid gap-8 rounded-[1.75rem] bg-white p-8 ring-1 ring-line sm:p-10 md:grid-cols-3 lg:col-span-12">
            <div>
              <p className="text-sm font-semibold text-gold-600">Registered office</p>
              <address className="mt-2 not-italic leading-relaxed text-muted">{site.address}</address>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold-600">Hours &amp; email</p>
              <p className="mt-2 leading-relaxed text-muted">{hours.label}<br /><a className="font-semibold text-brand-700 underline" href={`mailto:${site.email}`}>{site.email}</a></p>
              <ul className="mt-3 space-y-1.5">
                {phoneLink && <li><a href={phoneLink} className="inline-flex items-center gap-2 font-semibold text-ink"><Phone className="h-4 w-4 text-brand-500" />Call {contactConfig.phoneDisplay}</a></li>}
                {whatsappLink && <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-ink"><WhatsAppIcon className="h-4 w-4 text-brand-500" />WhatsApp {contactConfig.phoneDisplay}</a></li>}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold-600">Payments</p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-muted">{payments.india.map((p) => <li key={p} className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-500" />{p}</li>)}</ul>
              <p className="mt-2 text-sm text-muted">{payments.international}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
