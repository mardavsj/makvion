// Screenshots of services bento + pricing sections. Usage: node scripts/pricing-shots.mjs outDir
import { chromium } from "playwright";
const out = process.argv[2] || "../makvion-shots";
const b = await chromium.launch();
for (const [n, w, h, s] of [["desktop", 1440, 900, 1], ["mobile", 390, 844, 1]]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: s });
  for (const path of ["/", "/services"]) {
    await p.goto("http://localhost:3457" + path, { waitUntil: "networkidle" });
    await p.addStyleTag({ content: "header{display:none!important} .reveal{opacity:1!important;transform:none!important}" });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); } await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }))); });
    const tag = path === "/" ? "home" : "services";
    const pricing = p.locator("section", { has: p.locator("text=Care plans") }).last();
    await pricing.screenshot({ path: `${out}/pricing-${tag}-${n}.png` });
    const bento = p.locator("section", { has: p.locator("text=Speed sprint") }).first();
    await bento.screenshot({ path: `${out}/services-bento-${tag}-${n}.png` });
  }
}
await b.close();
