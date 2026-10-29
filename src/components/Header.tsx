"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Arrow, Button } from "./ui";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`sticky top-0 z-50 -mb-[72px] border-b transition-all duration-300 ${scrolled || open ? "border-line/80 bg-white/70 shadow-[0_10px_30px_-20px_rgba(15,41,37,.35)] backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-[72px] w-full transition-all max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined}
                className={`px-4 py-1.5 text-[0.92rem] font-medium transition-colors ${active ? "font-semibold text-brand-500" : "text-ink/75 hover:text-ink"}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block"><Button href="/contact">Get a free quote <Arrow /></Button></div>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg ring-1 ring-line lg:hidden">
          <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white px-5 pb-10 pt-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="flex items-center justify-between border-b border-line py-4 text-lg font-semibold">
                {n.label}<Arrow className="text-muted" />
              </Link>
            ))}
          </nav>
          <Button href="/contact" size="lg" className="mt-8 w-full">Get a free quote <Arrow /></Button>
        </div>
      )}
    </header>
  );
}
