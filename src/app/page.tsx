import Image from "next/image";
import { Arrow, BrowserFrame, Button, Check, Container, Eyebrow, Icon, PhoneFrame, SectionHeading } from "@/components/ui";
import { ConceptShowcase, CtaBand, FaqSection, IndustryMarquee, IndustryMosaic, CarePlans, PaymentNote, Pricing, Process, ProductsShowcase, ServicesBento, Statement } from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-hero noise relative overflow-hidden">
        <div className="bg-grid-light mask-fade-b pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 hidden h-full w-[46%] rounded-bl-[4rem] bg-brand-900 lg:block">
          <div className="bg-grid-dark absolute inset-0 rounded-bl-[4rem]" />
        </div>
        <Container className="relative grid items-center gap-14 pb-16 pt-8 sm:pt-14 lg:min-h-[44rem] lg:grid-cols-12 lg:pb-24">
          <div className="lg:col-span-6">
            <Eyebrow>Websites &amp; apps that grow businesses</Eyebrow>
            <h1 className="font-display tracking-display mt-5 text-[2.35rem] font-semibold leading-[1.02] text-ink sm:text-6xl xl:text-[4.15rem]">
              More customers, from a website that <span className="relative inline-block text-brand-600">sells<svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full text-gold-400" preserveAspectRatio="none"><path d="M2 9C50 3 150 3 198 8" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" /></svg></span> while you sleep.
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted sm:mt-6 sm:text-xl">
              Makvion builds fast, trustworthy websites and apps that turn visitors into calls, bookings and sales. You focus on your business; we handle the design, the code and the tech headaches.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <Button href="/contact">Get a free homepage mockup <Arrow /></Button>
              <Button href="/services" variant="secondary">See pricing</Button>
            </div>
            <ul className="mt-7 grid max-w-xl gap-2.5 sm:mt-9 sm:gap-3 text-sm font-medium text-ink/85 sm:grid-cols-2">
              {["You approve the design before we build", "50% upfront, milestone billing", "Websites live in as little as 2 weeks", "Fixed quote, published prices"].map((t) => (
                <li key={t} className="flex items-center gap-2.5"><Check className="text-brand-600" />{t}</li>
              ))}
            </ul>
          </div>

          {/* Layered concept mockups */}
          <div className="relative lg:col-span-6">
            <div aria-hidden className="absolute inset-0 -m-4 rounded-[2.5rem] bg-brand-900 lg:hidden">
              <div className="bg-grid-dark absolute inset-0 rounded-[2.5rem]" />
            </div>
            <div className="relative px-2 py-8 sm:px-6 lg:py-0 lg:pl-10">
              <BrowserFrame url="summitridgeroofing.com" className="relative">
                <div className="relative aspect-[16/11]">
                  <Image src="/images/roofing.jpg" alt="Concept homepage for a fictional roofing company" fill priority sizes="(min-width:1024px) 560px, 92vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
                  <div className="absolute inset-y-0 left-0 flex max-w-[68%] flex-col justify-center p-5 text-white sm:p-8">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-200 sm:text-xs">Summit Ridge Roofing</p>
                    <p className="font-display mt-2 text-lg font-semibold leading-tight sm:text-3xl">Storm damage? Free roof inspection in 24 hours.</p>
                    <span className="mt-4 w-fit rounded-full bg-gold-300 px-3 py-1.5 text-[0.65rem] font-semibold text-ink sm:px-4 sm:py-2 sm:text-xs">Book free inspection</span>
                  </div>
                </div>
              </BrowserFrame>
              <PhoneFrame className="floaty absolute -bottom-6 right-0 w-[34%] max-w-[180px] sm:-bottom-10 lg:-right-4">
                <div className="relative aspect-[9/17]">
                  <Image src="/images/dental-smile.jpg" alt="Concept mobile site for a fictional dental clinic" fill sizes="180px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                    <p className="font-display text-[0.7rem] font-semibold leading-tight sm:text-sm">Gentle dentistry, booked in two taps.</p>
                    <span className="mt-2 block rounded-full bg-gold-300 py-1 text-center text-[0.55rem] font-semibold text-ink sm:text-[0.65rem]">Book a visit</span>
                  </div>
                </div>
              </PhoneFrame>
              <div className="absolute -bottom-10 left-2 hidden items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl ring-1 ring-line sm:flex lg:-bottom-16 lg:-left-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><Icon name="phone" className="h-5 w-5" /></span>
                <span className="text-xs leading-tight"><span className="block font-semibold text-ink">Click-to-call on every page</span><span className="text-muted">so visitors become enquiries</span></span>
              </div>
              <span className="absolute right-4 top-4 z-10 rounded-full bg-ink px-3 py-1 text-[0.65rem] font-semibold text-white sm:right-8 lg:top-[-0.75rem]">Concept designs</span>
            </div>
          </div>
        </Container>
      </section>

      <IndustryMarquee />

      {/* Services bento */}
      <section className="relative py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="How we help" title={<>Win more business online, <span className="text-brand-600">without the tech headaches.</span></>} />
            <div className="reveal"><Button href="/services" variant="secondary">All services &amp; pricing <Arrow /></Button></div>
          </div>
          <div className="mt-14"><ServicesBento /></div>
        </Container>
      </section>

      <Statement />

      {/* Industries */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Industries" title={<>More enquiries from the customers <span className="text-brand-600">you actually want.</span></>}
            intro="We study how buyers in your industry decide, then design every page to move them to the next step: a call, a booking or a sale." />
          <div className="mt-14"><IndustryMosaic /></div>
        </Container>
      </section>

      {/* Work */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
        <div className="bg-dots mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Selected concepts" title="Picture your business here." intro="Concepts for fictional businesses, clearly labelled, showing how we turn a homepage into a sales tool. Ask and we'll make a free one for yours." />
            <div className="reveal"><Button href="/work" variant="secondary">View all concepts <Arrow /></Button></div>
          </div>
          <div className="mt-20"><ConceptShowcase limit={2} /></div>
        </Container>
      </section>

      {/* Products */}
      <section className="relative overflow-hidden bg-sand py-24 sm:py-32">
        <div className="bg-diagonal pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SectionHeading eyebrow="Our products" eyebrowTone="gold" title={<>Software that keeps working <span className="text-brand-600">long after launch.</span></>}
            intro="We build and run our own products every day. That experience goes into every client project, so your site stays fast, secure and online." />
          <div className="mt-14"><ProductsShowcase /></div>
        </Container>
      </section>

      <Process />

      {/* Pricing */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading center eyebrow="Pricing" title="Know exactly what you'll pay." intro="Every project gets a fixed written quote after a short call. No hourly surprises, no hidden fees." />
          <div className="mt-16"><Pricing /></div>
          <CarePlans />
          <PaymentNote />
        </Container>
      </section>

      <div className="border-t border-line"><FaqSection /></div>
      <CtaBand />
    </>
  );
}
