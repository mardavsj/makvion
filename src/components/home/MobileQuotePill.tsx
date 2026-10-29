"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function MobileQuotePill() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (path === "/contact") return null;
  return (
    <div className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 transition-all duration-300 lg:hidden ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
      <Link href="/contact" className="flex items-center gap-2 rounded-full bg-[#2c7469] hover:bg-[#24625a] px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(15,41,37,.8)] ring-1 ring-white/20">
        Get a free quote <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
