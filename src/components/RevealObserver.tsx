"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SEL = ".reveal:not(.is-in), .stagger:not(.is-in), .draw-line:not(.is-in)";

/**
 * Reveal-on-scroll that can never leave content hidden:
 * - low threshold, generous root margin
 * - anything already above/inside the viewport is shown at once
 * - new elements (client renders, route changes) are picked up by a MutationObserver
 * - a safety timer shows everything after 2.5s regardless
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const show = (el: Element) => el.classList.add("is-in");
    const all = () => Array.from(document.querySelectorAll<HTMLElement>(SEL));
    if (!("IntersectionObserver" in window)) { all().forEach(show); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px 10% 0px", threshold: 0 },
    );
    const watch = () => all().forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) show(el); else io.observe(el);
    });
    watch();
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });
    const t = window.setTimeout(() => all().forEach(show), 2500);
    return () => { io.disconnect(); mo.disconnect(); window.clearTimeout(t); };
  }, [pathname]);
  return null;
}
