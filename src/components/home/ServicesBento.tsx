import Image from "next/image";
import { ArrowUpRight, Check, MapPin, MessageCircle, Search, ShieldCheck, Smartphone } from "lucide-react";
import type { ReactNode } from "react";

function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`text-[0.7rem] font-bold uppercase tracking-[0.18em] ${dark ? "text-gold-300" : "text-brand-600"}`}>{children}</p>;
}
const card = "relative flex flex-col overflow-hidden rounded-[1.75rem] ring-1 ring-black/[0.06]";

function PhotoCard({ img, alt, tag, title, className = "", sizes }: { img: string; alt: string; tag: string; title: string; href: string; className?: string; sizes: string }) {
  return (
    <div className={`${card} min-h-[22rem] bg-brand-950 ${className}`}>
      <Image src={img} alt={alt} fill quality={85} sizes={sizes} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
      <div className="relative mt-auto flex items-end justify-between gap-4 p-6 sm:p-7">
        <div><Tag dark>{tag}</Tag><p className="font-display mt-2 max-w-sm text-xl font-extrabold leading-tight text-white sm:text-2xl">{title}</p></div>
      </div>
    </div>
  );
}

function CopyCard({ tag, title, body, dark = false, children, className = "" }: { tag: string; title: string; body: string; href: string; dark?: boolean; children: ReactNode; className?: string }) {
  return (
    <div className={`${card} p-6 sm:p-7 ${dark ? "bg-brand-900 text-white" : "bg-[#f6f4ee]"} ${className}`}>
      <div className="flex-1">{children}</div>
      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <Tag dark={dark}>{tag}</Tag>
          <p className="font-display mt-2 text-xl font-extrabold leading-tight sm:text-[1.45rem]">{title}</p>
          <p className={`mt-2 text-[0.94rem] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{body}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- mini UI mockups (pure JSX, illustrative) ---------- */
export function WhatsAppMock() {
  return (
    <div className="absolute right-5 top-5 w-[14rem] rounded-2xl bg-white p-3 sm:w-[15.5rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,.35)] sm:right-7 sm:top-7">
      <div className="flex items-center gap-2 border-b border-line pb-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white"><MessageCircle className="h-4 w-4" /></span>
        <div className="leading-tight"><p className="text-xs font-bold text-ink">New enquiry from your website</p><p className="text-[0.65rem] text-muted">via WhatsApp button</p></div>
      </div>
      <p className="mt-2 rounded-xl rounded-tl-sm bg-brand-50 px-3 py-2 text-[0.78rem] leading-snug text-ink">Hi, do you deliver groceries to Sector 21 today?</p>
    </div>
  );
}
export function UpiMock() {
  return (
    <div className="mx-auto max-w-[17rem] rounded-2xl bg-white p-4 shadow-[0_16px_36px_-16px_rgba(0,0,0,.25)] ring-1 ring-black/5">
      <p className="text-xs font-bold text-ink">Checkout</p>
      <div className="mt-3 space-y-2">
        {[["UPI", true], ["Card / Netbanking", false], ["Cash on delivery", false]].map(([l, on]) => (
          <div key={String(l)} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-[0.78rem] ${on ? "border-brand-500 bg-brand-50 font-semibold text-brand-800" : "border-line text-muted"}`}>
            <span className={`h-3 w-3 rounded-full border-2 ${on ? "border-brand-500 bg-brand-500" : "border-line"}`} />{l}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-brand-500 py-2 text-center text-[0.8rem] font-bold text-white">Pay securely</div>
      <p className="mt-2 flex items-center justify-center gap-1 text-[0.68rem] text-muted"><Check className="h-3 w-3 text-brand-600" />GST invoice emailed automatically</p>
    </div>
  );
}
export function MapsMock() {
  return (
    <div className="mx-auto max-w-[17rem]">
      <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[0.8rem] text-ink shadow-sm ring-1 ring-black/5"><Search className="h-4 w-4 text-muted" />dentist near me</div>
      <div className="mt-3 rounded-2xl bg-white p-3 ring-2 ring-gold-300">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-gold-300 text-brand-950"><MapPin className="h-4 w-4" /></span>
          <div className="leading-tight"><p className="text-[0.82rem] font-bold text-ink">Your clinic</p><p className="mt-0.5 text-[0.7rem] text-muted">Open now · Call · Directions</p></div>
        </div>
      </div>
      <div className="mt-2 rounded-2xl bg-white/60 p-3 opacity-60"><div className="h-2 w-24 rounded bg-black/10" /><div className="mt-2 h-2 w-16 rounded bg-black/10" /></div>
    </div>
  );
}
export function BookingMock() {
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "4:30"];
  return (
    <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
      <p className="text-xs font-semibold text-white/60">Choose a slot · Tomorrow</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {slots.map((s) => <span key={s} className={`rounded-lg py-2 text-center text-[0.78rem] font-semibold ${s === "11:00" ? "bg-gold-300 text-brand-950" : "bg-white/10 text-white/80"}`}>{s}</span>)}
      </div>
      <p className="mt-3 flex items-center gap-1.5 text-[0.72rem] text-white/60"><MessageCircle className="h-3.5 w-3.5 text-gold-300" />Confirmation sent on WhatsApp</p>
    </div>
  );
}
export function LanguageMock() {
  return (
    <div>
      <div className="inline-flex rounded-full bg-white p-1 text-[0.78rem] font-semibold ring-1 ring-black/5">
        {["English", "हिंदी", "मराठी"].map((l, i) => <span key={l} className={`rounded-full px-3 py-1.5 ${i === 1 ? "bg-brand-500 text-white" : "text-muted"}`}>{l}</span>)}
      </div>
      <p className="font-display mt-5 text-[1.6rem] font-extrabold leading-tight text-ink">आज ही अपॉइंटमेंट बुक करें</p>
      <p className="mt-1 text-sm text-muted">Book your appointment today</p>
    </div>
  );
}
export function PhoneMock() {
  return (
    <div className="flex items-end gap-4">
      <div className="w-24 rounded-[1.25rem] border-[5px] border-brand-950 bg-white p-2">
        <div className="h-2 w-10 rounded bg-brand-500" /><div className="mt-2 h-14 rounded-md bg-brand-100" />
        <div className="mt-2 h-1.5 w-full rounded bg-black/10" /><div className="mt-1 h-1.5 w-2/3 rounded bg-black/10" />
        <div className="mt-2 rounded bg-gold-300 py-1 text-center text-[0.5rem] font-bold text-brand-950">ORDER</div>
      </div>
      <ul className="space-y-2 text-[0.82rem] font-medium text-brand-950">
        {[[Smartphone, "Fast on budget Android phones"], [ShieldCheck, "Backups, security and updates"]].map(([I, t]) => {
          const Icon = I as typeof Smartphone;
          return <li key={String(t)} className="flex items-center gap-2"><Icon className="h-4 w-4 text-brand-700" />{String(t)}</li>;
        })}
      </ul>
    </div>
  );
}

export function ServicesBento({ hrefBase = "/services#" }: { hrefBase?: string }) {
  const h = (s: string) => `${hrefBase}${s}`;
  return (
    <div className="mt-14 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 lg:grid-cols-12">
      {/* row 1 */}
      <div className={`${card} min-h-[36rem] sm:min-h-[30rem] bg-brand-950 md:col-span-6 lg:col-span-7 lg:row-span-2`}>
        <Image src="/images/in-grocery-shopkeeper.jpg" alt="A young shopkeeper standing in his local grocery store among hanging snack packets" fill priority={false} quality={85}
          sizes="(min-width:1024px) 720px, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/25 to-transparent" />
        <WhatsAppMock />
        <div className="relative mt-auto flex items-end justify-between gap-4 p-6 sm:p-9">
          <div>
            <Tag dark>Business websites</Tag>
            <p className="font-display mt-3 max-w-md text-[1.75rem] font-extrabold leading-[1.08] text-white sm:text-[2.4rem]">
              A website that turns local searches into <span className="text-gold-300">WhatsApp enquiries</span>.
            </p>
          </div>
        </div>
      </div>
      <CopyCard className="md:col-span-3 lg:col-span-5" tag="Online stores" title="Checkout Indians actually use."
        body="UPI, cards and COD through Razorpay, with GST-ready invoices." href={h("ecommerce")}><UpiMock /></CopyCard>
      <CopyCard className="md:col-span-3 lg:col-span-5" tag="Local SEO & Google Maps" title="Show up for “near me” searches."
        body="We set up your Google Business Profile and local pages so nearby customers find you first." href={h("seo")}><MapsMock /></CopyCard>

      {/* row 2 */}
      <CopyCard dark className="md:col-span-3 lg:col-span-4" tag="Web apps & booking" title="Bookings without phone tag."
        body="Appointment, table and class booking that confirms on WhatsApp." href={h("web-apps")}><BookingMock /></CopyCard>
      <PhotoCard className="md:col-span-3 lg:col-span-4" img="/images/in-clinic-consult.jpg" alt="A doctor in a white coat consulting a patient in a bright clinic"
        tag="Clinics & doctors" title="Sites that fill your appointment book." href={h("websites")} sizes="(min-width:1024px) 420px, (min-width:768px) 50vw, 100vw" />
      <CopyCard className="md:col-span-6 lg:col-span-4" tag="Hindi & regional languages" title="Speak your customer’s language."
        body="Add Hindi, Marathi or any regional language alongside English." href={h("websites")}><LanguageMock /></CopyCard>

      {/* row 3 */}
      <PhotoCard className="md:col-span-6 lg:col-span-5" img="/images/in-boutique-owner.jpg" alt="A shop owner in a silk saree among shelves of packaged products"
        tag="D2C brands & boutiques" title="Take your shop online and ship across India." href={h("ecommerce")} sizes="(min-width:1024px) 520px, 100vw" />
      <PhotoCard className="md:col-span-3 lg:col-span-4" img="/images/in-coaching-class.jpg" alt="Students in uniform at desks in a classroom with a digital board"
        tag="Coaching & schools" title="Batch pages and admission enquiries." href={h("landing-pages")} sizes="(min-width:1024px) 420px, (min-width:768px) 50vw, 100vw" />
      <CopyCard className="bg-gold-100 md:col-span-3 lg:col-span-3" tag="Mobile-first & care" title="Built for Indian phones."
        body="Quick on slow 4G, and looked after every month." href={h("maintenance")}><PhoneMock /></CopyCard>
    </div>
  );
}
