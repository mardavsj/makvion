// Screenshot the About availability section. Usage: node scripts/about-hours-shots.mjs outDir
import { chromium } from "playwright";
const out = process.argv[2] || "/tmp";
const b = await chromium.launch();
for (const [n, w] of [["desktop", 1440], ["mobile", 390]]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: n === "mobile" ? 2 : 1, isMobile: n === "mobile" });
  await p.goto((process.env.BASE_URL || "http://localhost:3457") + "/about", { waitUntil: "networkidle" });
  await p.addStyleTag({ content: "header{display:none!important} .reveal{opacity:1!important;transform:none!important;transition:none!important}" });
  await p.waitForTimeout(400);
  await p.locator("section", { has: p.locator("text=Our hours in your time zone") }).last().screenshot({ path: `${out}/about-hours-${n}.png` });
}
await b.close();
