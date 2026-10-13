"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line/80 bg-white/85 backdrop-blur-xl" : "border-b border-transparent bg-white/0"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href || pathname.startsWith(n.href + "/");
            return (
              <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[0.93rem] font-medium transition-colors ${active ? "text-brand-700 bg-brand-50" : "text-ink/75 hover:text-ink hover:bg-cream"}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">
            Get a free mockup
          </Link>
        </div>
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
          className="relative -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden">
          <span className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-[1.5px] w-5 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>
      <div id="mobile-nav" hidden={!open} className="fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white px-5 pb-10 pt-4 lg:hidden">
        <nav aria-label="Mobile" className="flex flex-col">
          {[...nav, { href: "/contact", label: "Contact" }].map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display border-b border-line py-4 text-2xl font-semibold text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" onClick={() => setOpen(false)} className="mt-8 flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-4 font-semibold text-white">
          Start a project
        </Link>
      </div>
    </header>
  );
}
