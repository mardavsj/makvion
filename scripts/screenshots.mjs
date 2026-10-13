// Usage: npm run build && npx next start -p 3457, then: node scripts/screenshots.mjs [outDir]
import { chromium } from "playwright";
const out = process.argv[2] || "../makvion-shots";
const base = process.env.BASE_URL || "http://localhost:3457";
const pages = (process.env.PAGES || "/,/services").split(",");
const vps = [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844, isMobile: true, deviceScaleFactor: 1 }];
const browser = await chromium.launch();
for (const vp of vps) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: !!vp.isMobile, deviceScaleFactor: vp.deviceScaleFactor || 1 });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
      document.querySelectorAll(".reveal").forEach((e) => e.classList.add("is-in"));
      await Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; })));
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(900);
    const name = (p === "/" ? "home" : p.slice(1).replace(/\//g, "-")) + "-" + vp.name + ".png";
    await page.screenshot({ path: `${out}/${name}`, fullPage: true });
    console.log("saved", name);
  }
  await ctx.close();
}
await browser.close();
