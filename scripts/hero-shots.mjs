// Above-the-fold hero screenshots + overlap check. Usage: node scripts/hero-shots.mjs outDir
import { chromium } from "playwright";
const out = process.argv[2] || "../makvion-shots";
const base = process.env.BASE_URL || "http://localhost:3457";
const b = await chromium.launch();
for (const vp of [{ n: "desktop", width: 1440, height: 900 }, { n: "laptop", width: 1280, height: 800 }, { n: "tablet", width: 768, height: 1024 }, { n: "mobile", width: 390, height: 844, m: true, s: 2 }]) {
  const ctx = await b.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: !!vp.m, deviceScaleFactor: vp.s || 1 });
  const p = await ctx.newPage(); await p.goto(base + "/", { waitUntil: "networkidle" }); await p.waitForTimeout(1200);
  const hit = await p.evaluate(() => {
    const badge = [...document.querySelectorAll("section span")].find((e) => e.textContent?.startsWith("Click-to-call"))?.closest("div");
    if (!badge || getComputedStyle(badge).display === "none") return "badge hidden";
    const r = badge.getBoundingClientRect();
    const hits = [...document.querySelectorAll("section a, section span.rounded-full, section button")].filter((e) => !badge.contains(e)).filter((e) => { const q = e.getBoundingClientRect(); return q.width && !(q.right < r.left || q.left > r.right || q.bottom < r.top || q.top > r.bottom); });
    return hits.length ? "OVERLAPS: " + hits.map((h) => h.textContent).join(" | ") : "no overlap";
  });
  console.log(vp.n, hit);
  await p.screenshot({ path: `${out}/hero-${vp.n}.png` });
}
await b.close();
