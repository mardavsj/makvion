// Pre-launch audit: crawl internal links, check status codes, console errors, mobile menu, visible TODOs, contact form error state.
import { chromium } from "playwright";
const base = process.env.BASE_URL || "http://localhost:3457";
const b = await chromium.launch();
const page = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(`${page.url()}: ${m.text()}`); });
page.on("pageerror", (e) => errors.push(`${page.url()}: ${e.message}`));
const seen = new Set(), queue = ["/"], external = new Set(), bad = [], anchors = [];
while (queue.length) {
  const path = queue.shift(); if (seen.has(path)) continue; seen.add(path);
  const res = await page.goto(base + path, { waitUntil: "networkidle" });
  if (!res || res.status() >= 400) { bad.push(`${path} -> ${res?.status()}`); continue; }
  const txt = await page.evaluate(() => document.body.innerText);
  if (/TODO|lorem|placeholder/i.test(txt)) bad.push(`${path}: visible TODO/placeholder text`);
  const links = await page.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href")));
  for (const h of links) {
    if (!h || h === "#") { bad.push(`${path}: empty href`); continue; }
    if (h.startsWith("mailto:") || h.startsWith("tel:")) continue;
    if (/^https?:/.test(h)) { external.add(h); continue; }
    const [p, hash] = h.split("#");
    if (hash) anchors.push([p || path, hash]);
    if (p) queue.push(p);
  }
}
for (const [p, hash] of anchors) {
  await page.goto(base + p, { waitUntil: "domcontentloaded" });
  if (!(await page.$(`[id="${hash}"]`))) bad.push(`missing anchor ${p}#${hash}`);
}
for (const u of ["/sitemap.xml", "/robots.txt", "/opengraph-image", "/icon.png", "/apple-icon.png", "/favicon.ico", "/does-not-exist"]) {
  const r = await page.request.get(base + u); console.log("asset", u, r.status(), r.headers()["content-type"]);
}
const sm = await (await page.request.get(base + "/sitemap.xml")).text();
console.log("sitemap urls:", [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]).join(" "));
console.log("robots:", (await (await page.request.get(base + "/robots.txt")).text()).replace(/\n/g, " | "));
await page.goto(base + "/");
console.log("og:image", await page.getAttribute('meta[property="og:image"]', "content"), "| canonical", await page.getAttribute('link[rel="canonical"]', "href"));
// mobile menu
const m = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
await m.goto(base + "/");
await m.click('button[aria-controls="mobile-nav"]');
const vis = await m.isVisible("#mobile-nav");
await m.evaluate(() => scrollTo(0, 0)); await m.click('#mobile-nav a[href="/services"]'); await m.waitForURL("**/services"); await m.waitForTimeout(500);
console.log("mobile menu opens:", vis, "| navigates & closes:", !(await m.isVisible("#mobile-nav")), "| scrollY", await m.evaluate(() => scrollY));
if (process.env.AUDIT_FORM === "1") {
// contact form against server without RESEND_API_KEY
await page.goto(base + "/contact");
await page.fill('input[name="name"]', "Test User"); await page.fill('input[name="email"]', "test@example.com");
await page.fill('textarea[name="message"]', "Testing the contact form end to end.");
await page.click('button[type="submit"]');
await page.waitForSelector('form [role="alert"]', { timeout: 8000 });
console.log("form error state:", (await page.textContent('form [role="alert"]')).trim().slice(0, 160));
await page.screenshot({ path: process.argv[2] || "/tmp/contact-error.png" });
const api = async (body, headers = { "content-type": "application/json" }) => { const r = await page.request.post(base + "/api/contact", { data: body, headers }); return `${r.status()} ${await r.text()}`.slice(0, 150); };
console.log("API valid (no key):", await api({ name: "A B", email: "a@b.co", message: "Hello there, testing." }));
console.log("API invalid:", await api({ name: "", email: "x", message: "" }));
console.log("API bad JSON:", await api("{nope"));
console.log("API wrong type:", await api("x=1", { "content-type": "text/plain" }));
}
console.log("\npages crawled:", [...seen].join(" "));
console.log("external links:", [...external].join(" "));
console.log("problems:", bad.length ? bad : "none");
console.log("console errors:", errors.length ? errors.filter((e) => !e.includes("/api/contact")) : "none");
await b.close();
