"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";

const art: Record<string, { img: string; caption: string }> = {
  websites: { img: "/images/svc-website-browse.jpg", caption: "A clinic site that turns visits into bookings" },
  ecommerce: { img: "/images/svc-pos-checkout.jpg", caption: "Take your shop online with UPI checkout" },
  "web-apps": { img: "/images/svc-dashboard.jpg", caption: "Dashboards and portals built for your team" },
  "mobile-apps": { img: "/images/svc-phone-apps.jpg", caption: "Ordering and loyalty apps for your regulars" },
  "landing-pages": { img: "/images/svc-laptop-analytics.jpg", caption: "One page, one goal: more enquiries" },
  seo: { img: "/images/svc-laptop-phone.jpg", caption: "Be the shop people find when they search nearby" },
  maintenance: { img: "/images/svc-code-laptop.jpg", caption: "We keep it fast, secure and up to date" },
};

export function ServiceTabs({ count = 6, hrefBase = "/services#" }: { count?: number; hrefBase?: string }) {
  const list = services.slice(0, count);
  const [active, setActive] = useState(0);
  const s = list[active];
  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
      <ul role="tablist" aria-label="Services" className="lg:col-span-6">
        {list.map((x, i) => (
          <li key={x.slug}>
            <button role="tab" type="button" aria-selected={i === active} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
              className={`group flex w-full items-baseline gap-5 border-t py-5 text-left transition-colors last:border-b sm:py-6 ${i === active ? "border-ink" : "border-line"}`}>
              <span className={`font-display text-sm font-bold tabular-nums ${i === active ? "text-gold-600" : "text-ink/30"}`}>{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1">
                <span className={`font-display block text-[1.7rem] font-extrabold leading-none tracking-tight transition-colors sm:text-[2.6rem] ${i === active ? "text-ink" : "text-ink/30 group-hover:text-ink/60"}`}>{x.title}</span>
                <span className={`grid transition-all duration-500 ${i === active ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <span className="overflow-hidden text-[0.98rem] leading-relaxed text-muted">{x.short} <span className="font-semibold text-brand-700">{x.timeline}.</span></span>
                </span>
              </span>
              <ArrowUpRight className={`h-6 w-6 shrink-0 transition-all ${i === active ? "rotate-0 text-brand-600" : "-rotate-45 text-ink/20"}`} />
            </button>
          </li>
        ))}
      </ul>
      <div className="lg:col-span-6">
        <div className="sticky top-28 overflow-hidden rounded-[1.75rem] bg-brand-950">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            {list.map((x, i) => (
              <Image key={x.slug} src={art[x.slug]?.img ?? "/images/svc-dashboard.jpg"} alt={i === active ? `${x.title}: ${art[x.slug]?.caption ?? "Makvion service"}` : ""} fill sizes="(min-width:1024px) 560px, 100vw"
                className={`object-cover transition-all duration-700 ${i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-200">{s.title}</p>
              <p className="font-display mt-2 max-w-sm text-2xl font-extrabold leading-tight text-white sm:text-3xl">{art[s.slug]?.caption}</p>
              <Link href={`${hrefBase}${s.slug}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-800">What&apos;s included <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
