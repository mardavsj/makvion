import Image from "next/image";
import { ArrowUpRight, Check, CheckCircle2, MessageCircle, Phone, Send } from "lucide-react";
import type { ReactNode } from "react";
import { services } from "@/lib/site";
import { Button, Arrow, Container } from "@/components/ui";
import { BookingMock, LanguageMock, MapsMock, PhoneMock, UpiMock } from "@/components/home/ServicesBento";

/* ---------- extra mockups ---------- */
function SiteMock() {
  return (
    <div className="mx-auto w-[15rem] rounded-[2rem] border-[7px] border-brand-950 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,.35)]">
      <div className="rounded-t-[1.5rem] bg-brand-500 px-4 pb-6 pt-5 text-white">
        <p className="text-[0.6rem] font-bold uppercase tracking-widest text-gold-200">Sharma Dental · Pune</p>
        <p className="font-display mt-2 text-lg font-extrabold leading-tight">Gentle dental care, close to home.</p>
      </div>
      <div className="space-y-2 p-4">
        <div className="h-2 w-full rounded bg-black/10" /><div className="h-2 w-4/5 rounded bg-black/10" />
        <div className="mt-3 grid grid-cols-2 gap-2 text-[0.68rem] font-bold">
          <span className="flex items-center justify-center gap-1 rounded-lg bg-brand-50 py-2 text-brand-800"><Phone className="h-3 w-3" />Call</span>
          <span className="flex items-center justify-center gap-1 rounded-lg bg-brand-500 py-2 text-white"><MessageCircle className="h-3 w-3" />WhatsApp</span>
        </div>
      </div>
      <p className="pb-3 text-center text-[0.55rem] font-semibold uppercase tracking-widest text-muted">Concept</p>
    </div>
  );
}
function DashMock() {
  const rows = [["Rohit K.", "Paid", true], ["Ananya S.", "Pending", false], ["Vikram P.", "Paid", true]];
  return (
    <div className="rounded-2xl bg-white p-4 text-ink shadow-[0_24px_50px_-20px_rgba(0,0,0,.5)]">
      <div className="flex items-center justify-between"><p className="text-xs font-bold">Orders · Today</p><span className="rounded-full bg-gold-100 px-2 py-0.5 text-[0.6rem] font-bold text-gold-700">Admin</span></div>
      <div className="mt-3 divide-y divide-line text-[0.75rem]">
        {rows.map(([n, s, ok]) => (
          <div key={String(n)} className="flex items-center justify-between py-2"><span className="font-medium">{n}</span>
            <span className={`rounded-full px-2 py-0.5 text-[0.65rem] font-bold ${ok ? "bg-brand-50 text-brand-700" : "bg-gold-100 text-gold-700"}`}>{s}</span></div>
        ))}
      </div>
      <div className="mt-2 rounded-lg bg-brand-500 py-1.5 text-center text-[0.7rem] font-bold text-white">Download GST report</div>
    </div>
  );
}
function LandingMock() {
  return (
    <div className="mx-auto max-w-[19rem] rounded-2xl bg-white p-5 shadow-[0_24px_50px_-24px_rgba(0,0,0,.3)] ring-1 ring-black/5">
      <p className="text-[0.6rem] font-bold uppercase tracking-widest text-brand-600">New batch · JEE foundation</p>
      <p className="font-display mt-2 text-xl font-extrabold leading-tight text-ink">Book a free demo class</p>
      <div className="mt-4 space-y-2">
        {["Student name", "Parent’s mobile number", "Class: 8th / 9th / 10th"].map((p) => <div key={p} className="rounded-lg border border-line px-3 py-2 text-[0.75rem] text-muted">{p}</div>)}
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-gold-300 py-2 text-[0.8rem] font-bold text-brand-950"><Send className="h-3.5 w-3.5" />Send enquiry</div>
      <p className="mt-2 text-center text-[0.65rem] text-muted">Alert goes to your email and WhatsApp</p>
    </div>
  );
}
function CareMock() {
  const items = ["Site is online", "SSL certificate valid", "Domain renewal tracked", "Weekly backup complete", "Plugins & packages updated"];
  return (
    <div className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
      <p className="text-xs font-semibold text-white/60">Monthly care check</p>
      <ul className="mt-3 space-y-2.5">
        {items.map((t) => <li key={t} className="flex items-center gap-2.5 text-[0.85rem] text-white"><CheckCircle2 className="h-4 w-4 text-gold-300" />{t}</li>)}
      </ul>
    </div>
  );
}

/* ---------- copy per service ---------- */
type Extra = { lead: string; hi: string; who: string[]; india: string[]; visual: ReactNode; photo?: { src: string; alt: string; caption: string } };
const extra: Record<string, Extra> = {
  websites: { lead: "A website that brings in", hi: "calls and WhatsApp chats.",
    who: ["Clinics & doctors", "Kirana & retail shops", "CA, lawyers & consultants", "Salons & gyms"],
    india: ["WhatsApp & tap-to-call on every page", "Hindi, Marathi or any regional language", "Fast on budget Android phones and 4G"],
    visual: <div className="grid items-center gap-8 sm:grid-cols-2"><SiteMock /><LanguageMock /></div> },
  ecommerce: { lead: "An online store with checkout", hi: "Indians trust.",
    who: ["D2C brands", "Boutiques & sarees", "Sweets, snacks & spices", "Home-grown makers"],
    india: ["Razorpay: UPI, cards, net banking, wallets", "Cash on delivery and shipping options", "GST-ready invoices"],
    visual: <UpiMock /> },
  "web-apps": { lead: "Software that replaces", hi: "your spreadsheets.",
    who: ["Startups launching a product", "Distributors & wholesalers", "Clinics with many branches", "Coaching institutes"],
    india: ["Bookings that confirm on WhatsApp", "UPI subscriptions via Razorpay", "GST reports your CA can use"],
    visual: <div className="grid gap-4 sm:grid-cols-2"><BookingMock /><DashMock /></div>,
    photo: { src: "/images/in-team-laptop.jpg", alt: "Two Indian colleagues discussing a project at a laptop", caption: "Built around how your team already works" } },
  "mobile-apps": { lead: "An app on your customers’", hi: "home screen.",
    who: ["Cafes & restaurants", "Delivery & field teams", "Gyms & classes", "Retail chains"],
    india: ["Tested on budget Android phones", "UPI payments inside the app", "Published to Google Play for you"],
    visual: <PhoneMock />,
    photo: { src: "/images/in-cafe-counter.jpg", alt: "A young man leaning on the counter of a bright cafe", caption: "Ordering and loyalty apps for your regulars" } },
  "landing-pages": { lead: "One page that turns ad clicks into", hi: "real enquiries.",
    who: ["Coaching & courses", "Real estate projects", "Clinics running ads", "Product launches"],
    india: ["Lead alerts on email and WhatsApp", "Google & Meta ads tracking", "Loads fast on mobile data"],
    visual: <LandingMock /> },
  seo: { lead: "Be the business that shows up for", hi: "“near me”.",
    who: ["Clinics & dentists", "Restaurants & cafes", "Shops & showrooms", "Local services"],
    india: ["Google Business Profile & Maps", "Local pages for your area and city", "Hindi & regional keywords"],
    visual: <MapsMock /> },
  maintenance: { lead: "We look after your site,", hi: "you run the business.",
    who: ["Any business with a live site", "Stores taking payments", "Teams without a developer"],
    india: ["Support on WhatsApp", "Domain & SSL renewals tracked", "Speed checks on Indian mobile networks"],
    visual: <CareMock /> },
};

const tones = ["light", "cream", "dark", "light", "cream", "light", "dark"] as const;

export function ServicesDetail() {
  return (
    <div>
      {services.map((s, i) => {
        const e = extra[s.slug];
        if (!e) return null;
        const tone = tones[i % tones.length];
        const dark = tone === "dark";
        const flip = i % 2 === 1;
        const bg = dark ? "bg-brand-950 text-white" : tone === "cream" ? "bg-[#f6f4ee]" : "bg-white";
        const panel = dark ? "bg-brand-900 ring-white/10" : tone === "cream" ? "bg-white ring-black/[0.05]" : "bg-[#f6f4ee] ring-black/[0.05]";
        const mut = dark ? "text-white/70" : "text-muted";
        const wide = s.slug === "seo";
        const whoCard = (
          <div className={`rounded-[1.75rem] p-6 ring-1 ${panel}`}>
            <p className={`text-[0.7rem] font-bold uppercase tracking-[0.18em] ${dark ? "text-gold-300" : "text-brand-600"}`}>Who it&apos;s for</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {e.who.map((w) => <span key={w} className={`rounded-full px-3 py-1.5 text-[0.82rem] font-semibold ${dark ? "bg-white/10 text-white" : "bg-brand-50 text-brand-800"}`}>{w}</span>)}
            </div>
          </div>
        );
        const indiaCard = (
          <div className={`rounded-[1.75rem] p-6 ${dark ? "bg-gold-300 text-brand-950" : "bg-brand-500 text-white"}`}>
            <p className={`text-[0.7rem] font-bold uppercase tracking-[0.18em] ${dark ? "text-brand-800" : "text-gold-200"}`}>Built for India</p>
            <ul className="mt-4 space-y-2.5">
              {e.india.map((x) => <li key={x} className="flex gap-2 text-[0.9rem] font-medium leading-snug"><ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />{x}</li>)}
            </ul>
          </div>
        );
        if (wide) return (
          <section key={s.slug} id={s.slug} className={`scroll-mt-20 py-20 sm:py-28 ${bg}`}>
            <Container>
              <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-14">
                <div className="lg:col-span-7">
                  <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-700"><span className="font-display tabular-nums">{String(i + 1).padStart(2, "0")}</span><span className="h-px w-10 bg-brand-500" />{s.title}</p>
                  <h2 className="font-display mt-5 text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[3.6rem]">{e.lead} <span className="text-brand-500">{e.hi}</span></h2>
                </div>
                <div className="lg:col-span-5">
                  <p className={`text-[1.05rem] leading-relaxed ${mut}`}>{s.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4"><Button href="/contact" size="lg">Get a free quote <Arrow /></Button><span className="rounded-full bg-gold-100 px-3.5 py-1.5 text-sm font-semibold text-gold-700">{s.timeline}</span></div>
                </div>
              </div>
              <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
                <div className={`flex items-center rounded-[1.75rem] p-6 ring-1 sm:p-9 md:col-span-2 lg:col-span-5 lg:row-span-2 ${panel}`}><div className="w-full">{e.visual}</div></div>
                <div className={`rounded-[1.75rem] p-6 ring-1 md:col-span-2 lg:col-span-7 ${panel}`}>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-600">What&apos;s included</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {s.includes.map((x) => <li key={x} className="flex gap-2.5 text-[0.96rem] font-medium"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white"><Check className="h-3 w-3" strokeWidth={3} /></span>{x}</li>)}
                  </ul>
                </div>
                <div className="lg:col-span-3">{whoCard}</div>
                <div className="lg:col-span-4">{indiaCard}</div>
              </div>
            </Container>
          </section>
        );
        return (
          <section key={s.slug} id={s.slug} className={`scroll-mt-20 py-20 sm:py-28 ${bg}`}>
            <Container>
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                {/* copy */}
                <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
                  <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-gold-300" : "text-brand-700"}`}>
                    <span className="font-display tabular-nums">{String(i + 1).padStart(2, "0")}</span><span className={`h-px w-10 ${dark ? "bg-gold-300" : "bg-brand-500"}`} />{s.title}
                  </p>
                  <h2 className="font-display mt-5 text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[3.2rem]">
                    {e.lead} <span className={dark ? "text-gold-300" : "text-brand-500"}>{e.hi}</span>
                  </h2>
                  <p className={`mt-5 text-[1.05rem] leading-relaxed ${mut}`}>{s.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.includes.map((x) => (
                      <li key={x} className="flex gap-2.5 text-[0.96rem] font-medium">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dark ? "bg-gold-300 text-brand-950" : "bg-brand-500 text-white"}`}><Check className="h-3 w-3" strokeWidth={3} /></span>{x}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button href="/contact" size="lg">Get a free quote <Arrow /></Button>
                    <span className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${dark ? "bg-white/10 text-gold-200" : "bg-gold-100 text-gold-700"}`}>{s.timeline}</span>
                  </div>
                </div>
                {/* bento */}
                <div className={`grid gap-4 sm:grid-cols-2 lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
                  {e.photo && (
                    <div className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] bg-brand-950 sm:col-span-2 sm:min-h-[20rem]">
                      <Image src={e.photo.src} alt={e.photo.alt} fill quality={85} sizes="(min-width:1024px) 700px, 100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" />
                      <p className="font-display absolute inset-x-6 bottom-6 max-w-sm text-xl font-extrabold leading-tight text-white sm:text-2xl">{e.photo.caption}</p>
                    </div>
                  )}
                  <div className={`flex items-center justify-center rounded-[1.75rem] p-6 ring-1 sm:col-span-2 sm:p-9 ${panel}`}>
                    <div className="w-full">{e.visual}</div>
                  </div>
                  <div className={`rounded-[1.75rem] p-6 ring-1 ${panel}`}>
                    <p className={`text-[0.7rem] font-bold uppercase tracking-[0.18em] ${dark ? "text-gold-300" : "text-brand-600"}`}>Who it&apos;s for</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.who.map((w) => <span key={w} className={`rounded-full px-3 py-1.5 text-[0.82rem] font-semibold ${dark ? "bg-white/10 text-white" : "bg-brand-50 text-brand-800"}`}>{w}</span>)}
                    </div>
                  </div>
                  <div className={`rounded-[1.75rem] p-6 ${dark ? "bg-gold-300 text-brand-950" : "bg-brand-500 text-white"}`}>
                    <p className={`text-[0.7rem] font-bold uppercase tracking-[0.18em] ${dark ? "text-brand-800" : "text-gold-200"}`}>Built for India</p>
                    <ul className="mt-4 space-y-2.5">
                      {e.india.map((x) => <li key={x} className="flex gap-2 text-[0.9rem] font-medium leading-snug"><ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />{x}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
