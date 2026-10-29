import Link from "next/link";
import { Logo } from "./Logo";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { contactConfig, hours, nav, phoneLink, services, site, whatsappLink } from "@/lib/site";

export function Footer() {
  const cols = [
    { title: "Services", links: services.slice(0, 6).map((s) => ({ href: `/services#${s.slug}`, label: s.title })) },
    { title: "Company", links: [...nav.filter((n) => n.href !== "/contact"), { href: "/industries", label: "Industries" }, { href: "/products", label: "Our products" }] },
    { title: "Get started", links: [{ href: "/contact", label: "Get a free quote" }, { href: "/contact#call", label: "Book a free call" }, { href: "/privacy", label: "Privacy policy" }, { href: "/terms", label: "Terms of service" }, { href: "/refund-policy", label: "Refund policy" }] },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-line bg-gradient-to-b from-cream to-brand-50/60">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Logo />
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">Websites, online stores and apps with premium-agency quality, quoted well below agency rates. Based in Pune, working with clients worldwide.</p>
            </div>
            <div className="lg:self-end lg:text-right">
              <a href={`mailto:${site.email}`} className="inline-block font-semibold text-brand-700 hover:underline">{site.email}</a>
              <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm lg:justify-end">
                {phoneLink && <a href={phoneLink} className="inline-flex items-center gap-1.5 font-semibold text-ink"><Phone className="h-4 w-4 text-brand-500" />{contactConfig.phoneDisplay}</a>}
                {whatsappLink && <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-ink"><WhatsAppIcon className="h-4 w-4 text-brand-500" />WhatsApp us</a>}
              </p>
              <p className="mt-2 text-sm text-muted">{hours.label}</p>
            </div>
          </div>
          <div className="grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-sm font-semibold text-ink">{c.title}</p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => <li key={l.href + l.label}><Link href={l.href} className="text-[0.94rem] text-muted transition-colors hover:text-brand-700">{l.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-6 border-t border-line pt-8 text-sm text-muted lg:grid-cols-2">
          <div>
            <p className="font-semibold text-ink">Registered office</p>
            <address className="mt-1 not-italic leading-relaxed">{site.address}</address>
          </div>
          <p className="lg:self-end lg:text-right">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
        <p aria-hidden className="font-display pointer-events-none mt-10 select-none bg-gradient-to-b from-brand-600/15 to-transparent bg-clip-text text-center text-[22vw] font-extrabold leading-[0.8] tracking-tighter text-transparent lg:text-[15rem]">makvion</p>
      </div>
    </footer>
  );
}
