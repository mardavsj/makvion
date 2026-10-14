// Screenshots each product card on /products at a given width. Usage: node scripts/product-shots.mjs outDir [widths]
import { chromium } from "playwright";
const out = process.argv[2] || "/tmp"; const widths = (process.argv[3] || "390").split(",").map(Number);
const b = await chromium.launch();
for (const w of widths) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, isMobile: true, deviceScaleFactor: 2 });
  await p.goto((process.env.BASE_URL || "http://localhost:3457") + "/products", { waitUntil: "networkidle" });
  await p.addStyleTag({ content: "header{display:none!important} .reveal{opacity:1!important;transform:none!important} .floaty{animation:none!important}" });
  const cards = p.locator("main article");
  for (let i = 0; i < await cards.count(); i++) {
    const name = i === 0 ? "websites-with-punch" : "lost-seahorse";
    await cards.nth(i).screenshot({ path: `${out}/products-mobile-${name}${widths.length > 1 ? "-" + w : ""}.png` });
  }
}
await b.close();
