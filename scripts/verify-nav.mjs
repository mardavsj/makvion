// Verifies client navigation lands at top without animation; saves footer shots.
import { chromium } from "playwright";
const out = process.argv[2] || "../makvion-shots";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:3457/", { waitUntil: "networkidle" });
for (const href of ["/services", "/about", "/work", "/"]) {
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1200));
  await p.waitForTimeout(300);
  await p.evaluate(() => { window.__ys = []; const f = () => { window.__ys.push(scrollY); if (window.__ys.length < 40) requestAnimationFrame(f); }; requestAnimationFrame(f); });
  await p.click(`footer a[href="${href}"]`);
  await p.waitForURL("**" + href); await p.waitForTimeout(900);
  const ys = await p.evaluate(() => window.__ys);
  const after = ys.slice(ys.findIndex((y) => y < 50));
  console.log(href, "final", await p.evaluate(() => scrollY), "intermediate non-zero frames after first top:", after.filter((y) => y > 0).length, "distinct:", [...new Set(ys)].length);
}
for (const [n, w, h] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
  const q = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
  await q.goto("http://localhost:3457/", { waitUntil: "networkidle" });
  await q.addStyleTag({ content: "header{display:none!important}" });
  await (await q.$("footer")).screenshot({ path: `${out}/footer-${n}.png` });
}
await b.close();
