import { Check, Clock, Code2, FileText, MessageSquareText, PenTool, Rocket } from "lucide-react";
import { Container } from "@/components/ui";
import { Kicker } from "@/components/home/Sections";
import { Faq } from "@/components/sections";
import { steps } from "@/lib/site";

const icons = [MessageSquareText, FileText, PenTool, Code2, Rocket];

const detail = [
  {
    happens: ["A free call, Google Meet or WhatsApp chat at a time that suits you", "We learn about your business, customers and what's not working today", "We look at your current site, Google profile or competitors", "We suggest what to build first and what can wait"],
    need: ["A rough idea of your goals", "Your current website or social pages, if any", "A budget range you're comfortable with"],
    get: ["Honest advice, even if it's \"you don't need a new site yet\"", "A short summary of what we discussed"],
    time: "Usually within a day or two of your enquiry.",
  },
  {
    happens: ["We turn the call into a clear written scope", "Pages, features and integrations are listed one by one", "We break the work into milestones with a payment for each", "You can ask questions or trim the scope before you agree"],
    need: ["Feedback on the proposal", "Approval to start, and the first milestone payment"],
    get: ["A written proposal and transparent quote", "A milestone plan with dates", "No hidden charges, and changes agreed in writing first"],
    time: "A few working days after the call.",
  },
  {
    happens: ["We design your homepage and key screens for mobile and desktop", "You see real layouts with your content, not wireframes only", "You ask for changes and we refine until it feels right", "Nothing gets built until you approve the look"],
    need: ["Your logo, photos and any brand colours", "Text about your services, or we can help write it", "One person who gives final approval"],
    get: ["Approved designs for every key page", "A clickable preview you can share with your team"],
    time: "Depends on the number of pages; we agree dates in the proposal.",
  },
  {
    happens: ["We build the approved design with fast, clean code", "You get a private live preview link that updates as we go", "WhatsApp, UPI, Google Maps and forms are connected and tested", "We test on real Android phones and slow mobile data"],
    need: ["Feedback on each milestone", "Access to your domain, hosting or payment accounts when needed"],
    get: ["A working site or app on a preview link", "Regular updates on WhatsApp or email", "Each milestone paid only after you've seen it"],
    time: "Split into milestones, each with its own agreed date.",
  },
  {
    happens: ["We connect your domain, SSL and Google Analytics", "Search basics are set up: sitemap, Search Console and Google Business links", "We hand over every login, the code and a short guide", "We stay on to fix issues and make updates"],
    need: ["A final review and go-ahead", "The last milestone payment"],
    get: ["Your live website or app, fully owned by you", "All accounts, code and design files handed over", "Post-launch support, with ongoing maintenance if you want it"],
    time: "Launch day is agreed in advance, with support continuing after.",
  },
];

function List({ title, items, dark }: { title: string; items: string[]; dark: boolean }) {
  return (
    <div>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-gold-300" : "text-gold-600"}`}>{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li key={t} className={`flex gap-3 leading-relaxed ${dark ? "text-white/80" : "text-ink/80"}`}>
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><Check className="h-3 w-3" strokeWidth={3.5} /></span>{t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProcessSteps() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <Kicker>Five steps</Kicker>
        <h2 className="font-display mt-6 max-w-3xl text-[2.5rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[4.4rem]">From first call <span className="text-brand-600">to launch.</span></h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">Every project follows the same five steps, whether it&apos;s a one-page site for a local shop or a full web app. Here&apos;s exactly what happens at each one.</p>
        <div className="mt-14 grid gap-6">
          {steps.map((s, i) => {
            const I = icons[i];
            const d = detail[i];
            const dark = i % 2 === 1;
            return (
              <article key={s.step} id={`step-${s.step}`} className={`reveal relative scroll-mt-24 overflow-hidden rounded-[1.75rem] p-7 sm:p-10 lg:p-12 ${dark ? "bg-brand-900 text-white" : "bg-white ring-1 ring-line"}`}>
                <span aria-hidden className={`font-display pointer-events-none absolute -right-3 -top-10 text-[11rem] font-extrabold leading-none tracking-tighter sm:text-[14rem] ${dark ? "text-white/[0.06]" : "text-brand-600/[0.07]"}`}>{s.step}</span>
                <div className="relative grid gap-10">
                  <div className="max-w-3xl">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dark ? "bg-gold-300 text-ink" : "bg-brand-500 text-white"}`}><I className="h-6 w-6" strokeWidth={1.8} /></span>
                    <p className={`font-display mt-8 text-sm font-bold ${dark ? "text-gold-200" : "text-gold-600"}`}>Step {s.step}</p>
                    <h3 className="font-display mt-2 text-[2.2rem] font-extrabold leading-tight tracking-tight sm:text-[2.6rem]">{s.title}</h3>
                    <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{s.body}</p>
                    <p className={`mt-6 inline-flex items-start gap-2.5 rounded-2xl px-4 py-3 text-sm font-medium ${dark ? "bg-white/[0.07] text-white/85" : "bg-cream text-ink/80"}`}><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />{d.time}</p>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-3">
                    <List title="What happens" items={d.happens} dark={dark} />
                    <List title="What we need from you" items={d.need} dark={dark} />
                    <List title="What you get" items={d.get} dark={dark} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export const processFaqs = [
  { q: "Do I need to have my content ready before we start?", a: "No. A rough idea is enough for the first call. We'll tell you what text and photos are needed, and we can help write and organise content as part of the project." },
  { q: "Can I ask for design changes?", a: "We refine the designs with your feedback before approval. If you want something bigger after approval, we'll agree it in writing before doing the work." },
  { q: "Can I see progress while you build?", a: "Yes. You get a private preview link that updates as we build, plus regular updates on WhatsApp or email." },
  { q: "What if I want to change the scope midway?", a: "That's fine. We'll explain how it affects the timeline and quote, and only go ahead once you agree in writing." },
  { q: "Do we have to meet in person?", a: "No. Most of our clients across India work with us over calls, Google Meet and WhatsApp. If you're in or near Pune and prefer to meet, we can arrange that." },
  { q: "What happens after launch?", a: "We stay on for post-launch support to fix any issues. If you'd like, we can also look after updates, backups and improvements on an ongoing basis." },
];

export function ProcessFaq() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Kicker>FAQ</Kicker>
          <h2 className="font-display mt-6 text-[2.5rem] font-extrabold leading-[1] tracking-[-0.035em] sm:text-[4rem]">Working <span className="text-brand-600">with us.</span></h2>
          <p className="mt-6 text-lg text-muted">Common questions about how a project runs, from first call to after launch.</p>
        </div>
        <div className="lg:col-span-7"><Faq items={processFaqs} /></div>
      </Container>
    </section>
  );
}
