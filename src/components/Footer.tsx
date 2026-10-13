import Link from "next/link";
import { Logo } from "./Logo";
import { nav, products, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden bg-brand-950 text-white/80">
      <div className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-white"><Logo variant="gold" /></div>
            <p className="mt-6 max-w-sm leading-relaxed text-white/70">
              A design and engineering studio building websites, web apps, SaaS and mobile apps for businesses worldwide.
            </p>
            <a href={`mailto:${site.email}`} className="mt-6 inline-block text-[0.95rem] font-medium text-gold-200 underline decoration-gold-400/40 underline-offset-4 transition hover:decoration-gold-200">
              {site.email}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {[
              { h: "Company", links: [...nav, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }].map((n) => ({ ...n, ext: false })) },
              { h: "Our products", links: products.map((p) => ({ href: p.url, label: p.name, ext: true })) },
              { h: "Legal", links: [{ href: "/privacy", label: "Privacy policy", ext: false }, { href: "/terms", label: "Terms of service", ext: false }] },
            ].map((col) => (
              <div key={col.h}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">{col.h}</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      {l.ext ? <a className="transition hover:text-white" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                        : <Link className="transition hover:text-white" href={l.href}>{l.label}</Link>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div aria-hidden className="pointer-events-none mt-14 h-[13vw] select-none overflow-hidden lg:h-[11rem]">
          <p className="font-display footer-wordmark text-center text-[20vw] font-semibold leading-[0.9] tracking-[-0.06em] lg:text-[17rem]">makvion</p>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Makvion Technologies. All rights reserved.</p>
          <p>India · Working with clients worldwide</p>
        </div>
      </div>
    </footer>
  );
}
