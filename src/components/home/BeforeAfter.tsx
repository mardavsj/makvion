"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

/* Draggable before/after comparison. Both sides are illustrative concept mockups of a fictional clinic.
   Each side is designed on a fixed 1280×752 canvas and scaled to fit, so it reads like a real desktop site on any screen. */
const W = 1280, H = 752;
const MW = 390, MH = 720; /* phone-width canvas used below 640px */

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(640);
  const [mobile, setMobile] = useState(false);
  const [dragging, setDragging] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current; if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    const mq = window.matchMedia("(max-width: 639px)");
    const on = () => setMobile(mq.matches); on(); mq.addEventListener("change", on);
    return () => { ro.disconnect(); mq.removeEventListener("change", on); };
  }, []);

  const cw = mobile ? MW : W, ch = mobile ? MH : H;
  const scale = width / cw;
  const move = (clientX: number) => {
    const r = box.current?.getBoundingClientRect(); if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    /* on laptop/desktop, cap width so the framed slider (16:10 + browser bar) never exceeds the viewport height */
    <div className="relative mx-auto sm:max-w-[min(100%,1050px,calc((100dvh-155px)*1.702))]">
      <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[2.2rem] bg-[#1b1f1e] p-2 sm:max-w-none sm:rounded-[1.5rem] sm:p-1.5 shadow-[0_70px_120px_-50px_rgba(15,41,37,.7),0_0_0_1px_rgba(15,41,37,.12)] sm:p-2">
        {/* browser chrome */}
        <div className="flex items-center gap-2 px-3 pb-2 pt-1 sm:px-4">
          <span className="hidden h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:block" /><span className="hidden h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:block" /><span className="hidden h-2.5 w-2.5 rounded-full bg-[#28c840] sm:block" />
          <span className="mx-auto flex min-w-0 items-center gap-1.5 truncate rounded-md bg-white/10 px-3 py-1 text-[0.7rem] text-white/70">
            <ShieldCheck className="h-3 w-3 shrink-0 text-brand-300" />aureldental.in
          </span>
        </div>
        <div
          ref={box}
          className="relative select-none overflow-hidden rounded-[1.6rem] bg-white touch-pan-y sm:rounded-[1.1rem]"
          style={{ aspectRatio: `${cw}/${ch}`, cursor: dragging ? "grabbing" : "ew-resize" }}
          onPointerDown={(e) => { setDragging(true); (e.target as HTMLElement).setPointerCapture?.(e.pointerId); move(e.clientX); }}
          onPointerMove={(e) => dragging && move(e.clientX)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
        >
          <Canvas scale={scale} w={cw} h={ch}>{mobile ? <MobileAfter /> : <After />}</Canvas>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, transition: dragging ? "none" : "clip-path .5s cubic-bezier(.2,.8,.2,1)" }}>
            <Canvas scale={scale} w={cw} h={ch}>{mobile ? <MobileBefore /> : <Before />}</Canvas>
          </div>


          {/* handle */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 z-20" style={{ left: `${Math.min(96, Math.max(4, pos))}%`, transition: dragging ? "none" : "left .5s cubic-bezier(.2,.8,.2,1)" }}>
            <div className="absolute inset-y-0 -left-px w-[3px] bg-[#1b1f1e] shadow-[0_0_0_1px_rgba(255,255,255,.5),0_0_14px_rgba(0,0,0,.35)]" />
            <div className={`absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0 rounded-full bg-[#1b1f1e] text-white shadow-[0_10px_28px_-6px_rgba(0,0,0,.6),0_0_0_3px_rgba(255,255,255,.35)] transition-transform duration-200 sm:h-12 sm:w-12 ${dragging ? "scale-110" : ""}`}>
              <ChevronLeft className="-mr-1 h-4 w-4" strokeWidth={2.25} /><ChevronRight className="-ml-1 h-4 w-4" strokeWidth={2.25} />
            </div>
          </div>
          {mobile && <>
            <span className="pointer-events-none absolute left-3 top-3 z-30 rounded-full bg-[#1b1f1e]/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-lg transition-opacity" style={{ opacity: pos > 25 ? 1 : 0 }}>Before</span>
            <span className="pointer-events-none absolute right-3 top-3 z-30 rounded-full bg-brand-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-lg transition-opacity" style={{ opacity: pos < 75 ? 1 : 0 }}>After</span>
          </>}
          <input aria-label="Compare the outdated site with the Makvion redesign" type="range" min={0} max={100} value={Math.round(pos)}
            onChange={(e) => setPos(Number(e.target.value))} className="sr-only" />
        </div>
      </div>
      <span className="pointer-events-none absolute left-0 top-1/2 z-30 hidden sm:inline bg-[#1b1f1e] rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-lg sm:px-4 sm:py-1.5 sm:text-[0.72rem]" style={{ transform: `translate(${pos > 25 ? -50 : -140}%, -50%)`, opacity: pos > 25 ? 1 : 0, transition: "transform .5s cubic-bezier(.2,.8,.2,1), opacity .4s ease" }}>Before</span>
      <span className="pointer-events-none absolute right-0 top-1/2 z-30 hidden sm:inline bg-brand-500 rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-lg sm:px-4 sm:py-1.5 sm:text-[0.72rem]" style={{ transform: `translate(${pos < 75 ? 50 : 140}%, -50%)`, opacity: pos < 75 ? 1 : 0, transition: "transform .5s cubic-bezier(.2,.8,.2,1), opacity .4s ease" }}>After</span>
    </div>
  );
}

function Canvas({ scale, w, h, children }: { scale: number; w: number; h: number; children: React.ReactNode }) {
  return <div aria-hidden className="absolute left-0 top-0 origin-top-left" style={{ width: w, height: h, transform: `scale(${scale})` }}>{children}</div>;
}

function Before() {
  const T = "#3f7fb8"; const RED = "#b04545";
  return (
    <div className="h-full w-full overflow-hidden bg-[#fafaf8] text-[#8a8a8a]" style={{ filter: "saturate(.88) contrast(.97)",  fontFamily: "'Open Sans', Arial, Helvetica, sans-serif" }}>
      <div className="flex items-center justify-between bg-[#f2f2f2] px-8 py-1.5 text-[13px] text-[#777]">
        <span>✉ info@aureldental.in &nbsp;|&nbsp; Mon - Sat : 10:00 AM - 8:00 PM</span>
        <span>f &nbsp; t &nbsp; in</span>
      </div>
      <div className="flex items-center justify-between px-8 py-2">
        <div className="flex items-center gap-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-[#b04545] bg-[#f3e9a8] text-[28px]" style={{ transform: "rotate(-8deg)" }}>🦷</span>
          <div><p className="text-[24px] font-extrabold italic leading-none" style={{ color: RED }}>AUREL</p><p className="text-[11px] tracking-wide text-[#888]">DENTAL CLINIC</p></div>
        </div>
        <div className="text-right"><p className="text-[12px] text-[#888]">Call Us Now</p><p className="text-[18px] font-bold" style={{ color: RED }}>+91 98XXX XXXXX</p></div>
      </div>
      <div className="flex gap-0 px-8 text-[14px] font-semibold uppercase text-white" style={{ background: T }}>
        {["About", "Treatments ▾", "Gallery", "Contact"].map((t, i) => <span key={t} className={`px-4 py-3 ${i === 0 ? "bg-[#137a8f]" : ""}`}>{t}</span>)}
      </div>
      <div className="relative h-[265px] overflow-hidden">
        <Image src="/images/dental-smile.jpg" alt="" fill sizes="1280px" className="object-cover" style={{ objectPosition: "50% 8%", transform: "scaleX(1.35)", imageRendering: "pixelated", filter: "blur(1.2px) saturate(.85) contrast(.9) brightness(1.03)" }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="text-[38px] font-bold" style={{ textShadow: "1px 1px 0 rgba(0,0,0,.4)" }}>Best Dental Care In Baner, Pune</p>
          <p className="mt-2 text-[16px]">Invisible Aligners | Teeth Whitening | Kids Dentistry</p>
          <span className="mt-5 rounded-none px-6 py-2 text-[13px] font-bold uppercase" style={{ background: RED }}>Book Appointment</span>
        </div>
        <span className="absolute left-4 top-1/2 text-3xl text-white/70">‹</span><span className="absolute right-4 top-1/2 text-3xl text-white/70">›</span>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white" /><span className="h-2.5 w-2.5 rounded-full bg-white/50" /><span className="h-2.5 w-2.5 rounded-full bg-white/50" /></div>
      </div>
      <div className="px-10 pt-4 text-left">
        <p className="text-[22px] font-semibold" style={{ color: T }}>Welcome to <span className="text-[20px]" style={{ color: RED }}>Aurel Dental Clinic</span></p>
        <div className="mt-1 h-1 w-24" style={{ background: T }} />
        <p className="mt-2 max-w-[1000px] text-[11.5px] leading-snug text-[#9a9a9a]">Aurel Dental Clinic is a multi-speciality dental clinic located in Baner, Pune. We provide a wide range of dental treatments using modern equipment and sterilisation. Our experienced team is committed to giving quality treatment at affordable prices to all age groups.</p>
      </div>
      <div className="ml-10 mr-6 mt-4 grid grid-cols-[1fr_1fr_1fr_1.1fr] items-start gap-3">
        {[["😁", "Invisible Aligners"], ["✨", "Teeth Whitening"], ["👶", "Kids First Visit"]].map(([i, t]) => (
          <div key={t} className={`border border-[#d0d0d0] bg-[#f3f3f3] px-3 text-center ${t === "Teeth Whitening" ? "mt-4 py-5" : "py-3"}`}>
            <span className="text-[26px]">{i}</span>
            <p className="mt-1 text-[16px] font-semibold" style={{ color: T }}>{t}</p>
            <p className="mt-1 text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read More »</p>
          </div>
        ))}
        <div className="relative h-[120px] border border-[#ccc] bg-[#e5e3df] text-[11px]" style={{ backgroundImage: "linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)", backgroundSize: "34px 26px" }}>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-[22px]">📍</span>
          <span className="absolute left-1 top-1 bg-white px-1.5 py-0.5 text-[#1a73e8] shadow">View larger map</span>
          <span className="absolute bottom-0 right-0 bg-white/80 px-1 text-[9px]">For development purposes only</span>
        </div>
      </div>
      {/* WhatsApp float + cookie bar */}
      <div className="absolute bottom-[86px] right-6 flex animate-bounce items-center gap-2 rounded-full bg-[#3fae68] py-2 pl-2 pr-4 text-[14px] font-bold text-white shadow-lg"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[18px]">💬</span>WhatsApp us</div>
      <div className="absolute inset-x-0 bottom-[38px] flex items-center justify-between bg-[#333]/95 px-8 py-2.5 text-[12px] text-white/80"><span>This website uses cookies to ensure you get the best experience on our website. <u>Learn more</u></span><span className="bg-[#ddb44a] px-4 py-1 font-bold text-black">Got it!</span></div>
      <div className="absolute inset-x-0 bottom-0 bg-[#2b2b2b] py-3 text-center text-[12px] text-[#aaa]">Copyright © 2018 Aurel Dental Clinic, Baner, Pune. All Rights Reserved. | Powered by WordPress</div>
    </div>
  );
}

function After() {
  const serif = { fontFamily: "'Playfair Display', 'Didot', 'Bodoni 72', Georgia, serif" };
  const sans = { fontFamily: "'Helvetica Neue', Arial, sans-serif" };
  const NAVY = "#0e1a2b", CORAL = "#ff6b4a", BONE = "#f4efe6";
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ ...sans, background: BONE, color: NAVY }}>
      <div className="grid h-full grid-cols-[1fr_460px]">
        {/* full-bleed image hero */}
        <div className="relative overflow-hidden">
          <Image src="/images/dental-smile.jpg" alt="" fill sizes="900px" className="object-cover" style={{ filter: "grayscale(.35) contrast(1.05)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(14,26,43,.92) 0%, rgba(14,26,43,.55) 55%, rgba(14,26,43,.1) 100%)" }} />
          {/* nav */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-12 py-8 text-white">
            <div className="flex items-center gap-3">
              <svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="17" r="16" fill="none" stroke={CORAL} strokeWidth="2" /><path d="M10 12c2-3 5-3 7 0 2-3 5-3 7 0-1 8-2 12-4 12-1.5 0-2-4-3-4s-1.5 4-3 4c-2 0-3-4-4-12z" fill={CORAL} /></svg>
              <span className="text-[26px] italic tracking-tight" style={serif}>Aurel<span style={{ color: CORAL }}>.</span></span>
              <span className="ml-1 text-[10px] uppercase tracking-[0.35em] text-white/60">Dental Atelier</span>
            </div>
            <div className="flex gap-9 text-[12px] uppercase tracking-[0.25em] text-white/80"><span>About</span><span>Treatments</span><span>Gallery</span><span>Contact</span></div>
          </div>
          {/* hero text */}
          <div className="absolute bottom-24 left-12 max-w-[640px] text-white">
            <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.35em] text-white/70"><span className="h-px w-10" style={{ background: CORAL }} />N° 01 — Baner, Pune</p>
            <p className="mt-6 text-[104px] leading-[0.9] tracking-[-0.03em]" style={serif}>The art of<br />an <em style={{ color: CORAL }}>easy</em> smile.</p>
            <p className="mt-7 max-w-[440px] text-[17px] leading-relaxed text-white/75">Quiet rooms, unhurried appointments and modern cosmetic dentistry, designed around how you want to feel.</p>
            <div className="mt-9 flex items-center gap-5">
              <span className="rounded-full px-8 py-4 text-[14px] font-bold uppercase tracking-[0.18em]" style={{ background: CORAL, color: NAVY }}>Reserve a visit</span>
              <span className="flex items-center gap-3 text-[14px] uppercase tracking-[0.18em] text-white"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40">▶</span>Tour the studio</span>
            </div>
          </div>
          {/* vertical marker */}
          <div className="absolute bottom-10 left-12 right-12 flex items-center justify-between border-t border-white/20 pt-4 text-[11px] uppercase tracking-[0.3em] text-white/60">
            <span>Scroll</span><span>Cosmetic · Aligners · Family · Implants</span><span>01 / 04</span>
          </div>
        </div>

        {/* editorial bento column */}
        <div className="flex flex-col" style={{ background: BONE }}>
          <div className="flex items-center justify-between border-b px-8 py-8" style={{ borderColor: "rgba(14,26,43,.12)" }}>
            <span className="text-[11px] uppercase tracking-[0.3em] opacity-60">Open today · 9 — 8</span>
            <span className="rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white" style={{ background: NAVY }}>Book</span>
          </div>
          <div className="grid flex-1 grid-cols-2 grid-rows-[1.25fr_1fr_1fr] gap-3 p-6">
            <div className="col-span-2 flex flex-col justify-between rounded-[28px] p-7 text-white" style={{ background: NAVY }}>
              <div className="flex justify-between text-[11px] uppercase tracking-[0.3em] text-white/50"><span>Signature</span><span>→</span></div>
              <div>
                <p className="text-[42px] leading-[0.95]" style={serif}>Invisible <em style={{ color: CORAL }}>aligners</em></p>
                <p className="mt-3 text-[14px] text-white/60">A 3D scan, a preview of your new smile, then trays that fit your routine.</p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[28px] p-6" style={{ background: CORAL, color: NAVY }}>
              <span className="text-[38px]" style={serif}>✺</span>
              <p className="text-[22px] leading-tight" style={serif}>Whitening, done gently</p>
            </div>
            <div className="flex flex-col justify-between rounded-[28px] border p-6" style={{ borderColor: "rgba(14,26,43,.18)" }}>
              <span className="text-[11px] uppercase tracking-[0.3em] opacity-60">Family</span>
              <p className="text-[22px] leading-tight" style={serif}>First visits for little ones</p>
            </div>
            <div className="col-span-2 flex items-center justify-between rounded-[28px] bg-white p-6 shadow-[0_20px_40px_-30px_rgba(14,26,43,.6)]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">Next opening</p>
                <p className="mt-1 text-[30px] italic" style={serif}>Thu, 11:30</p>
              </div>
              <span className="flex h-16 w-16 items-center justify-center rounded-full text-[26px] text-white" style={{ background: NAVY }}>↗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- phone-width mockups (same sites, designed at 390px) ---------- */
function MobileBefore() {
  const T = "#3f7fb8", RED = "#b04545";
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#fafaf8] text-[#8a8a8a]" style={{ filter: "saturate(.88) contrast(.97)", fontFamily: "'Open Sans', Arial, Helvetica, sans-serif" }}>
      <div className="bg-[#f2f2f2] px-3 py-1 text-[10px] text-[#777]">✉ info@aureldental.in | Mon - Sat 10 AM - 8 PM</div>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-[#b04545] bg-[#f3e9a8] text-[20px]" style={{ transform: "rotate(-8deg)" }}>🦷</span>
          <div><p className="text-[18px] font-extrabold italic leading-none" style={{ color: RED }}>AUREL</p><p className="text-[9px] tracking-wide">DENTAL CLINIC</p></div>
        </div>
        <span className="flex h-9 w-10 flex-col justify-center gap-1 rounded px-2" style={{ background: T }}>{[0, 1, 2].map((i) => <span key={i} className="h-0.5 bg-white" />)}</span>
      </div>
      <div className="py-1.5 text-center text-[13px] font-bold text-white" style={{ background: RED }}>📞 Call Us Now : +91 98XXX XXXXX</div>
      <div className="relative h-[265px] overflow-hidden">
        <Image src="/images/dental-smile.jpg" alt="" fill sizes="400px" className="object-cover" style={{ objectPosition: "50% 8%", transform: "scaleX(1.35)", filter: "blur(1px) saturate(.85) contrast(.9) brightness(1.03)" }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <p className="text-[24px] font-bold leading-tight" style={{ textShadow: "2px 2px 0 rgba(0,0,0,.6)" }}>Best Dental Care In Baner, Pune</p>
          <p className="mt-1 text-[11px]">Aligners | Whitening | Kids Dentistry</p>
          <span className="mt-3 px-5 py-1.5 text-[12px] font-bold uppercase" style={{ background: RED }}>Book Appointment</span>
        </div>
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1"><span className="h-2 w-2 rounded-full bg-white" /><span className="h-2 w-2 rounded-full bg-white/50" /><span className="h-2 w-2 rounded-full bg-white/50" /></div>
      </div>
      <div className="px-3 pt-3">
        <p className="text-[19px] font-semibold" style={{ color: T }}>Welcome to <span className="text-[16px]" style={{ color: RED }}>Aurel Dental Clinic</span></p>
        <div className="mt-1 h-1 w-16" style={{ background: T }} />
        <p className="mt-2 text-[10.5px] leading-snug text-[#9a9a9a]">Aurel Dental Clinic is a multi-speciality dental clinic located in Baner, Pune. We provide a wide range of dental treatments using modern equipment at affordable prices to all age groups.</p>
      </div>
      <div className="mx-3 mt-3 space-y-2">
        {[["😁", "Invisible Aligners"], ["✨", "Teeth Whitening"], ["👶", "Kids First Visit"]].map(([i, t], k) => (
          <div key={t} className={`flex items-center gap-2 border border-[#d0d0d0] bg-[#f3f3f3] px-2 py-2 ${k === 1 ? "ml-3" : ""}`}>
            <span className="text-[20px]">{i}</span>
            <div><p className="text-[13px] font-semibold" style={{ color: T }}>{t}</p><p className="text-[9.5px]">Lorem ipsum dolor sit amet. Read More »</p></div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[78px] right-3 flex animate-bounce items-center justify-center rounded-full bg-[#3fae68] p-3 text-[20px] shadow-lg">💬</div>
      <div className="absolute inset-x-0 bottom-[28px] flex items-center justify-between gap-2 bg-[#333]/95 px-3 py-2 text-[9.5px] text-white/80"><span>This website uses cookies to ensure you get the best experience. <u>Learn more</u></span><span className="shrink-0 bg-[#ddb44a] px-2 py-1 font-bold text-black">Got it!</span></div>
      <div className="absolute inset-x-0 bottom-0 bg-[#2b2b2b] py-2 text-center text-[9px] text-[#aaa]">© 2018 Aurel Dental Clinic, Baner, Pune | Powered by WordPress</div>
    </div>
  );
}

function MobileAfter() {
  const serif = { fontFamily: "'Playfair Display', 'Didot', 'Bodoni 72', Georgia, serif" };
  const NAVY = "#0e1a2b", CORAL = "#ff6b4a", BONE = "#f4efe6";
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: BONE, color: NAVY }}>
      <div className="relative h-[430px] overflow-hidden">
        <Image src="/images/dental-smile.jpg" alt="" fill sizes="400px" className="object-cover" style={{ objectPosition: "60% 30%", filter: "grayscale(.35) contrast(1.05)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,.55) 0%, rgba(14,26,43,.25) 35%, rgba(14,26,43,.95) 100%)" }} />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-12 text-white">
          <div className="flex items-center gap-2">
            <svg width="26" height="26" viewBox="0 0 34 34"><circle cx="17" cy="17" r="16" fill="none" stroke={CORAL} strokeWidth="2" /><path d="M10 12c2-3 5-3 7 0 2-3 5-3 7 0-1 8-2 12-4 12-1.5 0-2-4-3-4s-1.5 4-3 4c-2 0-3-4-4-12z" fill={CORAL} /></svg>
            <span className="text-[22px] italic" style={serif}>Aurel<span style={{ color: CORAL }}>.</span></span>
          </div>
          <span className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/40"><span className="h-px w-4 bg-white" /><span className="h-px w-4 bg-white" /></span>
        </div>
        <div className="absolute inset-x-5 bottom-6 text-white">
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/70"><span className="h-px w-6" style={{ background: CORAL }} />N° 01 — Baner, Pune</p>
          <p className="mt-3 text-[46px] leading-[0.92] tracking-[-0.03em]" style={serif}>The art of an <em style={{ color: CORAL }}>easy</em> smile.</p>
          <p className="mt-3 text-[13px] leading-relaxed text-white/75">Quiet rooms, unhurried appointments and modern cosmetic dentistry.</p>
        </div>
      </div>
      <div className="px-5 pt-5">
        <span className="flex items-center justify-center rounded-full py-3.5 text-[13px] font-bold uppercase tracking-[0.18em]" style={{ background: CORAL, color: NAVY }}>Reserve a visit</span>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <div className="col-span-2 rounded-[22px] p-4 text-white" style={{ background: NAVY }}>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">Signature</p>
            <p className="mt-1 text-[26px] leading-none" style={serif}>Invisible <em style={{ color: CORAL }}>aligners</em></p>
          </div>
          <div className="rounded-[22px] p-4" style={{ background: CORAL }}><span className="text-[20px]" style={serif}>✺</span><p className="mt-2 text-[16px] leading-tight" style={serif}>Whitening, done gently</p></div>
          <div className="rounded-[22px] border p-4" style={{ borderColor: "rgba(14,26,43,.18)" }}><p className="text-[9px] uppercase tracking-[0.3em] opacity-60">Family</p><p className="mt-2 text-[16px] leading-tight" style={serif}>First visits for little ones</p></div>
        </div>
      </div>
    </div>
  );
}
