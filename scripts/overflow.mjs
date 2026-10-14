// Reports elements that overflow the viewport horizontally at mobile/tablet widths.
import { chromium } from "playwright";
const base = process.env.BASE_URL || "http://localhost:3457";
const pages = ["/", "/services", "/industries", "/work", "/products", "/about", "/contact", "/privacy", "/terms"];
const b = await chromium.launch();
let total = 0;
for (const w of [320, 360, 390, 430, 768]) {
  const p = await b.newPage({ viewport: { width: w, height: 800 }, isMobile: w < 768 });
  for (const path of pages) {
    await p.goto(base + path, { waitUntil: "networkidle" });
    const r = await p.evaluate((w) => {
      const doc = document.documentElement.scrollWidth;
      const offenders = [];
      for (const el of document.querySelectorAll("main *, footer *")) {
        if (el.closest(".animate-marquee, [aria-hidden=true]")) continue;
        const rc = el.getBoundingClientRect();
        if (rc.width === 0) continue;
        if (rc.right > w + 1 || rc.left < -1) {
          // ignore absolutely positioned decorations (and their children); report everything else, even if clipped by overflow-hidden
          let a = el, deco = false;
          while (a && a !== document.body) { const pos = getComputedStyle(a).position; if (pos === "absolute" || pos === "fixed") { deco = true; break; } a = a.parentElement; }
          const clipped = deco;
          if (!clipped) offenders.push(`${el.tagName}.${String(el.className).slice(0, 50)} [${Math.round(rc.left)}..${Math.round(rc.right)}]`);
        }
        // text clipped inside its own box
        if (el.scrollWidth > el.clientWidth + 2 && /(hidden|clip)/.test(getComputedStyle(el).overflowX) && !el.classList.contains("truncate") && !el.classList.contains("sr-only") && el.children.length === 0 && el.textContent.trim()) offenders.push(`CLIPPED TEXT ${el.tagName}.${String(el.className).slice(0, 40)} "${el.textContent.trim().slice(0, 30)}"`);
      }
      return { doc, offenders: offenders.slice(0, 8) };
    }, w);
    if (r.doc > w || r.offenders.length) { total++; console.log(w, path, "scrollWidth", r.doc, r.offenders); }
  }
  await p.close();
}
console.log(total ? `${total} page/width combos with issues` : "no horizontal overflow");
await b.close();
