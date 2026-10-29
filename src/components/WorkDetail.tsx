import Image from "next/image";
import { Check, IndianRupee, Languages, MapPin, MessageCircle, Truck, UtensilsCrossed } from "lucide-react";
import type { ReactNode } from "react";
import { Arrow, Button, Container } from "@/components/ui";
import { concepts } from "@/lib/site";

type C = (typeof concepts)[number];
type Detail = {
  brief: string; problem: string; built: string[];
  india: { icon: ReactNode; title: string; body: string }[];
  swatches: { hex: string; name: string }[]; fonts: [string, string]; choices: string;
};

const ic = "h-5 w-5";
const details: Record<string, Detail> = {
  dental: {
    brief: "A family dental clinic in Pune with two dentists, serving nearby housing societies.",
    problem: "Patients are often nervous and compare clinics on their phone. A site that only lists services doesn't reassure them or make booking easy, so they call somewhere else.",
    built: ["Home with a one-tap appointment request", "Treatment pages written in plain language", "Meet the dentists page", "Clinic timings, fees policy and FAQs", "Patient-friendly contact page", "Admin inbox for appointment requests"],
    india: [
      { icon: <MessageCircle className={ic} />, title: "WhatsApp booking", body: "A pre-filled WhatsApp message so patients can ask a question or book without a call." },
      { icon: <Languages className={ic} />, title: "English & Marathi", body: "Key pages in Marathi for older patients and families in the area." },
      { icon: <MapPin className={ic} />, title: "Google Maps & reviews", body: "Directions, parking notes and a link to the clinic's Google reviews." },
    ],
    swatches: [{ hex: "#2c7469", name: "Clinic green" }, { hex: "#e6f0ee", name: "Mint" }, { hex: "#deb56b", name: "Warm gold" }, { hex: "#0f2925", name: "Ink" }],
    fonts: ["Plus Jakarta Sans", "Inter"],
    choices: "Soft, rounded shapes and lots of white space to feel calm. Real treatment-room photography instead of stock smiles, and the booking button stays visible on every screen.",
  },
  restaurant: {
    brief: "A neighbourhood North Indian restaurant open for lunch and dinner, with dine-in and delivery.",
    problem: "Diners decide in seconds on mobile. A heavy PDF menu and hidden timings send them straight to a delivery app or a competitor.",
    built: ["Fast, phone-friendly HTML menu", "Table booking request", "Timings, location and parking", "Specials and festive menus", "Private dining & events enquiry", "Simple menu editor for staff"],
    india: [
      { icon: <UtensilsCrossed className={ic} />, title: "Zomato & Swiggy links", body: "Order buttons that open the restaurant's own delivery listings." },
      { icon: <IndianRupee className={ic} />, title: "UPI for advance bookings", body: "Optional UPI deposit for large groups and festive nights." },
      { icon: <MapPin className={ic} />, title: "Maps & timings at a glance", body: "Open-now status, Google Maps directions and a tap-to-call button." },
    ],
    swatches: [{ hex: "#0f2925", name: "Night green" }, { hex: "#deb56b", name: "Kesar gold" }, { hex: "#f7f2e8", name: "Cream" }, { hex: "#2c7469", name: "Leaf" }],
    fonts: ["Fraunces", "Plus Jakarta Sans"],
    choices: "Dark, warm backgrounds that let food photography glow, a classic serif for the menu headings, and large tap targets for hungry thumbs.",
  },
  store: {
    brief: "A D2C handloom clothing brand selling sarees and kurtas made by weavers, shipping across India.",
    problem: "Shoppers can't touch the fabric online, so they need close-up images, honest details and a checkout that supports how they like to pay, or they abandon the cart.",
    built: ["Image-first product pages with zoom", "Collections and filters by fabric and colour", "Cart and checkout with UPI, cards and COD", "Order tracking page", "Order and stock admin", "Weaver stories section"],
    india: [
      { icon: <IndianRupee className={ic} />, title: "UPI, cards & COD", body: "Razorpay checkout with UPI first, plus cash on delivery where it's available." },
      { icon: <Truck className={ic} />, title: "Pincode delivery check", body: "Shoppers check delivery and COD availability for their pincode before paying." },
      { icon: <Languages className={ic} />, title: "English & Hindi", body: "Product care and size guides available in Hindi." },
    ],
    swatches: [{ hex: "#11342f", name: "Deep loom green" }, { hex: "#deb56b", name: "Zari gold" }, { hex: "#f7f2e8", name: "Undyed cotton" }, { hex: "#2c7469", name: "Accent green" }],
    fonts: ["Cormorant Garamond", "Plus Jakarta Sans"],
    choices: "An editorial, magazine-like layout with large fabric close-ups, a refined serif for collection names and a quiet palette so the textiles carry the colour.",
  },
};

function Desktop({ c }: { c: C }) {
  return (
    <div className="group overflow-hidden rounded-[1.25rem] bg-white shadow-[0_50px_100px_-45px_rgba(15,41,37,.55)] ring-1 ring-black/10">
      <div className="flex items-center gap-1.5 border-b border-line bg-cream px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#e8806f]" /><span className="h-2 w-2 rounded-full bg-gold-300" /><span className="h-2 w-2 rounded-full bg-brand-300" />
        <span className="ml-3 hidden truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-muted ring-1 ring-line sm:inline">{c.client.toLowerCase().replace(/\s+/g, "")}.in</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={c.image} alt={`${c.client} concept homepage, desktop view`} fill sizes="(min-width:1024px) 820px, 100vw" className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-y-0 left-0 flex max-w-[62%] flex-col justify-center p-5 text-white sm:max-w-md sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">{c.client}</p>
          <p className="font-display mt-2 text-base font-extrabold leading-tight sm:mt-3 sm:text-[2.1rem]">{c.hero}</p>
          <span className="mt-5 inline-block w-fit rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-brand-700">{c.cta}</span>
        </div>
      </div>
    </div>
  );
}
function PhoneView({ c }: { c: C }) {
  return (
    <div className="group w-[120px] overflow-hidden rounded-[1.5rem] border-[5px] sm:rounded-[2rem] sm:border-[6px] border-ink bg-white shadow-[0_40px_70px_-30px_rgba(15,41,37,.7)] sm:w-[210px]">
      <div className="relative aspect-[9/17] overflow-hidden">
        <Image src={c.image} alt={`${c.client} concept homepage, phone view`} fill sizes="210px" className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2.5 text-[9px] font-semibold text-white"><span>{c.client}</span><span className="h-1.5 w-6 rounded-full bg-white/70" /></div>
        <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
          <p className="font-display text-[11px] font-extrabold sm:text-[15px] leading-tight">{c.hero}</p>
          <span className="mt-3 block rounded-lg bg-white py-2 text-center text-[10px] font-bold text-brand-700">{c.cta}</span>
        </div>
      </div>
    </div>
  );
}
function Mockups({ c, flip }: { c: C; flip?: boolean }) {
  return (
    <div className="relative pb-16 pr-6 sm:pb-20 sm:pr-14" data-flip={flip ? "" : undefined}>
      <Desktop c={c} />
      <div className="absolute bottom-0 right-0"><PhoneView c={c} /></div>
    </div>
  );
}

function Label({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return <p className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-gold-300" : "text-brand-600"}`}>{children}</p>;
}
function Intro({ c, n, dark }: { c: C; n: number; dark?: boolean }) {
  return (
    <div>
      <p className={`text-sm font-semibold ${dark ? "text-white/60" : "text-muted"}`}>{String(n).padStart(2, "0")} · Concept project · {c.industry}</p>
      <h2 className="font-display mt-4 text-[2.4rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[3.6rem]">{c.client}</h2>
      <p className={`mt-5 max-w-xl text-lg leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>{c.title}.</p>
    </div>
  );
}
function BriefProblem({ d, dark }: { d: Detail; dark?: boolean }) {
  const t = dark ? "text-white/75" : "text-ink/75";
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div><Label dark={dark}>The brief</Label><p className={`mt-3 leading-relaxed ${t}`}>{d.brief}</p></div>
      <div><Label dark={dark}>The problem</Label><p className={`mt-3 leading-relaxed ${t}`}>{d.problem}</p></div>
    </div>
  );
}
function Built({ d, dark }: { d: Detail; dark?: boolean }) {
  return (
    <div className={`rounded-[1.5rem] p-7 sm:p-9 ${dark ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-white ring-1 ring-line"}`}>
      <Label dark={dark}>What we built</Label>
      <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {d.built.map((b) => <li key={b} className={`flex gap-3 ${dark ? "text-white/85" : "text-ink/85"}`}><span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-gold-300 text-ink" : "bg-brand-500 text-white"}`}><Check className="h-3 w-3" strokeWidth={3.5} /></span>{b}</li>)}
      </ul>
    </div>
  );
}
function India({ d, dark }: { d: Detail; dark?: boolean }) {
  return (
    <div>
      <Label dark={dark}>Built for India</Label>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {d.india.map((f) => (
          <div key={f.title} className={`rounded-[1.25rem] p-6 ${dark ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-white ring-1 ring-line"}`}>
            <span className={`grid h-11 w-11 place-items-center rounded-2xl ${dark ? "bg-gold-300/15 text-gold-300" : "bg-brand-500/10 text-brand-500"}`}>{f.icon}</span>
            <h3 className="font-display mt-5 text-lg font-extrabold tracking-tight">{f.title}</h3>
            <p className={`mt-2 text-[0.95rem] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function Cta({ c, dark }: { c: C; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button href="/contact" size="lg" variant={dark ? "secondary" : undefined}>Get a concept like this <Arrow /></Button>
      <p className={`text-sm ${dark ? "text-white/60" : "text-muted"}`}>Concept for a fictional business ({c.industry}), designed to show our approach.</p>
    </div>
  );
}

export function WorkDetail() {
  const [a, b, s] = concepts;
  const da = details[a.slug], db = details[b.slug], ds = details[s.slug];
  return (
    <>
      {/* 01: mockup left, story right, details below */}
      <section id={a.slug} className="scroll-mt-20 bg-white">
        <Container className="py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7"><Mockups c={a} /></div>
            <div className="lg:col-span-5"><Intro c={a} n={1} /><div className="mt-8"><BriefProblem d={da} /></div></div>
          </div>
          <div className="mt-14"><Built d={da} /></div>
          <div className="mt-12"><India d={da} /></div>
          <div className="mt-12"><Cta c={a} /></div>
        </Container>
      </section>

      {/* 02: dark, intro top, wide mockup, details bento */}
      <section id={b.slug} className="scroll-mt-20 bg-brand-950 text-white">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6"><Intro c={b} n={2} dark /></div>
            <div className="lg:col-span-6"><BriefProblem d={db} dark /></div>
          </div>
          <div className="mx-auto mt-14 max-w-5xl"><Mockups c={b} flip /></div>
          <div className="mt-14"><India d={db} dark /></div>
          <div className="mt-5"><Built d={db} dark /></div>
          <div className="mt-12"><Cta c={b} dark /></div>
        </Container>
      </section>

      {/* 03: gold, story left, mockup right */}
      <section id={s.slug} className="scroll-mt-20 bg-gold-200 text-ink">
        <Container className="py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5 lg:order-1 order-2"><Intro c={s} n={3} /><div className="mt-8"><BriefProblem d={ds} /></div></div>
            <div className="order-1 lg:order-2 lg:col-span-7"><Mockups c={s} flip /></div>
          </div>
          <div className="mt-14"><Built d={ds} /></div>
          <div className="mt-12"><India d={ds} /></div>
          <div className="mt-12"><Cta c={s} /></div>
        </Container>
      </section>
    </>
  );
}
