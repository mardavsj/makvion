// Central content & config. Edit arrays here to add services, industries, products or concepts.

export const site = {
  name: "Makvion Technologies",
  shortName: "Makvion",
  url: "https://makvion.com",
  email: "contact@makvion.com",
  location: "Pune, India",
  registered: "Registered in Pune, Maharashtra, India",
  address: "Flat No 809, Luxury Square, GAT No 606 P, Jadhavwadi, Chikhali, Haveli, Pune 411062, Maharashtra, India",
  addressParts: { street: "Flat No 809, Luxury Square, GAT No 606 P, Jadhavwadi, Chikhali, Haveli", locality: "Pune", region: "Maharashtra", postalCode: "411062", country: "IN" },
  description:
    "Makvion Technologies builds fast, professional websites, e-commerce stores, web apps and Android apps for growing businesses in India and worldwide. Premium quality, budget-friendly quotes. Get a free consultation.",
  // TODO: add LinkedIn when ready.
  linkedin: null as string | null,
};

// WhatsApp / phone CTA. Numbers in international format without "+" or spaces.
export const contactConfig = {
  whatsappNumber: "917499283045" as string | null,
  phoneNumber: "917499283045" as string | null,
  phoneDisplay: "+91 74992 83045",
  whatsappMessage: "Hi Makvion, I'd like a free quote",
};
export const whatsappLink = contactConfig.whatsappNumber
  ? `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`
  : null;
export const phoneLink = contactConfig.phoneNumber ? `tel:+${contactConfig.phoneNumber}` : null;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  timeline: string;
  includes: string[];
  icon: "globe" | "layers" | "phone" | "gauge" | "shield" | "spark" | "cart" | "search" | "target";
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Business websites",
    short: "Look established online and turn visitors into calls, WhatsApp chats and enquiries.",
    description:
      "A custom website that makes your business look as professional as it is. Fast on every phone, easy to find on Google, with a clear way to call, WhatsApp or enquire from every page.",
    timeline: "Typically 2–3 weeks",
    includes: ["Custom design, no templates", "Mobile-first and fast on 4G", "On-page SEO, sitemap & analytics", "Enquiry, call & WhatsApp buttons", "Easy content updates"],
    icon: "globe",
  },
  {
    slug: "ecommerce",
    title: "E-commerce stores",
    short: "Sell online with a smooth checkout: UPI, cards and wallets via Razorpay.",
    description:
      "An online store your customers trust with their money. Fast product pages, Razorpay checkout with UPI, cards, net banking and wallets, order emails and a simple admin to manage stock.",
    timeline: "Typically 3–6 weeks",
    includes: ["Razorpay / UPI checkout", "Product catalogue & variants", "Order & inventory admin", "Shipping & COD options", "Order confirmation emails"],
    icon: "cart",
  },
  {
    slug: "web-apps",
    title: "Web apps & SaaS",
    short: "Launch your product or replace spreadsheets with software built to scale.",
    description:
      "Get your idea in front of paying users, or give your team a tool that saves hours every week. Logins, payments, dashboards and admin panels on the same modern stack we use for our own products.",
    timeline: "Typically 5–10 weeks",
    includes: ["Scoping & UX flows", "Logins, roles & subscriptions", "Postgres, Prisma & cloud hosting", "Admin dashboards & reports", "Launch support"],
    icon: "layers",
  },
  {
    slug: "mobile-apps",
    title: "Android apps",
    short: "Put your business on your customers' home screen.",
    description:
      "Android and cross-platform apps for bookings, orders, field teams or internal operations. Built, tested and published to the Google Play Store for you.",
    timeline: "Typically 4–8 weeks",
    includes: ["Android & cross-platform builds", "API & backend integration", "Push notifications", "Play Store publishing", "Crash reporting & analytics"],
    icon: "phone",
  },
  {
    slug: "landing-pages",
    title: "Landing pages",
    short: "One focused page that turns ad clicks into leads.",
    description:
      "Running Google or Meta ads, launching a course or a new product? A fast, focused landing page with a single goal, so more of your ad spend turns into enquiries.",
    timeline: "Typically 1 week",
    includes: ["Conversion-focused copy layout", "Lead form with email alerts", "WhatsApp & call buttons", "Ad & analytics tracking setup", "A/B-ready sections"],
    icon: "target",
  },
  {
    slug: "seo",
    title: "SEO & Google Business",
    short: "Show up when people nearby search for what you sell.",
    description:
      "Technical SEO, page speed and a fully set up Google Business Profile, so customers in your city find you on Search and Maps, see your hours and call you directly.",
    timeline: "Setup in 1–2 weeks",
    includes: ["Google Business Profile setup", "Local SEO & Maps listing", "Search Console & analytics", "Speed & Core Web Vitals fixes", "Keyword-focused page structure"],
    icon: "search",
  },
  {
    slug: "maintenance",
    title: "Support & maintenance",
    short: "Never worry about your website's upkeep again.",
    description:
      "Your site stays online, secure and up to date while you run your business. Uptime, SSL and domain monitoring through our own product, Websites With Punch, plus edits, backups and fixes.",
    timeline: "Monthly support",
    includes: ["Uptime, SSL & domain monitoring", "Security & dependency updates", "Regular backups", "Content & design edits", "Priority fixes"],
    icon: "shield",
  },
];

export const steps = [
  { step: "01", title: "Discuss", body: "A free call or WhatsApp chat to understand your business, goals and budget. No obligation." },
  { step: "02", title: "Proposal & quote", body: "You get a clear written proposal with scope, timeline and a transparent quote that fits your budget." },
  { step: "03", title: "Design", body: "We design your key screens first. Nothing gets built until you approve the look." },
  { step: "04", title: "Build", body: "We build in milestones with a live preview link, so you see progress and give feedback at every step." },
  { step: "05", title: "Launch & support", body: "We go live, connect your domain and analytics, hand over everything, and stay on for support." },
];

// Real commitments only. No invented stats, clients or testimonials.
export const reasons = [
  { title: "Premium quality, fair pricing", body: "The same standard as big agencies, with transparent, budget-friendly quotes and no hidden charges." },
  { title: "You approve the design first", body: "See and sign off on the look before any development starts." },
  { title: "Milestone-based payments", body: "Pay in stages as work is delivered, so you're never paying for something you haven't seen." },
  { title: "You own everything", body: "Code, design, domain and hosting accounts are handed over to you. No lock-in." },
  { title: "Mobile-first and fast", body: "Built for the phones your customers actually use, and quick even on patchy mobile data." },
  { title: "Ongoing support", body: "We stay on after launch for fixes, updates and improvements whenever you need them." },
];

export const payments = {
  india: ["UPI", "Bank transfer (NEFT / IMPS / RTGS)"],
  international: "Card or online payment through a secure Dodo Payments link, when needed.",
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  needs: string[];
  image: string;
};

// Add a new industry by appending an object here. The Industries page and home section update automatically.
export const industries: Industry[] = [
  {
    slug: "local-services",
    name: "Shops & local businesses",
    summary: "Get found on Google Maps and get more calls and walk-ins. For shops, showrooms, salons, service providers and contractors.",
    needs: ["Google Business Profile & Maps", "Click-to-call & WhatsApp buttons", "Fast loading on mobile data"],
    image: "/images/ind-shop-counter.jpg",
  },
  {
    slug: "healthcare",
    name: "Clinics & healthcare",
    summary: "Help patients trust you before they walk in. For clinics, dental practices, diagnostic centres and therapists.",
    needs: ["Appointment requests & booking", "Doctor & treatment pages", "Calm, accessible design"],
    image: "/images/ind-clinic-interior.jpg",
  },
  {
    slug: "education",
    name: "Coaching & education",
    summary: "Fill more batches with a site parents and students trust. For coaching institutes, tutors, schools and course creators.",
    needs: ["Course & batch pages", "Enquiry & demo-class forms", "Results and faculty sections"],
    image: "/images/ind-classroom.jpg",
  },
  {
    slug: "ecommerce",
    name: "D2C brands & e-commerce",
    summary: "More completed checkouts and repeat buyers. For D2C brands and retailers selling across India and beyond.",
    needs: ["Razorpay / UPI checkout", "Fast product pages", "Inventory-friendly admin"],
    image: "/images/ind-clothing-store.jpg",
  },
  {
    slug: "manufacturing",
    name: "Manufacturers & B2B",
    summary: "Win bigger buyers with a site that looks as solid as your factory. For manufacturers, exporters, traders and suppliers.",
    needs: ["Product catalogues & spec sheets", "RFQ / bulk-enquiry forms", "Internal tools & Android apps"],
    image: "/images/real-estate.jpg",
  },
  {
    slug: "startups",
    name: "Startups & SaaS",
    summary: "Get to paying users faster. For founders who need a landing page that converts or an MVP built properly the first time.",
    needs: ["Conversion-focused landing pages", "MVPs with logins & payments", "Dashboards & admin panels"],
    image: "/images/ind-startup-team.jpg",
  },
];

export type Product = {
  name: string;
  url: string;
  tagline: string;
  description: string;
  points: string[];
  accent: "brand" | "gold";
};

// Makvion's own products. Append to add more.
export const products: Product[] = [
  {
    name: "Websites With Punch",
    url: "https://websiteswithpunch.com",
    tagline: "Know your website is down before your customers do",
    description:
      "Know the moment a website goes down, an SSL certificate is about to expire, or a domain needs renewing — before your customers notice.",
    points: ["Uptime monitoring with alerts", "SSL certificate expiry tracking", "Domain expiry reminders"],
    accent: "brand",
  },
  {
    name: "Lost Seahorse",
    url: "https://lostseahorse.com",
    tagline: "Get faster at typing, one playful test at a time",
    description:
      "A playful typing-speed game. Pick a timed or word-count test, add punctuation or numbers, choose a difficulty — and feed your seahorse as you improve.",
    points: ["Timed tests: 15, 30, 60 or 120s", "Word, punctuation & number modes", "Easy, medium and hard difficulty"],
    accent: "gold",
  },
];

export type Concept = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  image: string;
  hero: string;
  cta: string;
  highlights: string[];
};

export const concepts: Concept[] = [
  {
    slug: "dental",
    client: "Sahyadri Smiles Dental",
    industry: "Healthcare",
    title: "A calm, trustworthy clinic site with appointments front and centre",
    summary:
      "A fictional family dental clinic. Nervous patients want reassurance, clear treatment information and an easy way to book, so the site leads with friendly faces, treatment pages and a one-tap appointment request.",
    image: "/images/case-dentist-xray.jpg",
    hero: "Gentle family dentistry. Book your visit in two taps.",
    cta: "Book appointment",
    highlights: ["Appointment request flow", "Treatment pages", "WhatsApp & call buttons"],
  },
  {
    slug: "restaurant",
    client: "Kesar Kitchen",
    industry: "Restaurants",
    title: "A warm restaurant site where the menu loads in a blink",
    summary:
      "A fictional neighbourhood restaurant. Diners decide in seconds, so the menu, timings, Google Maps and the table-booking button are all one tap away on mobile.",
    image: "/images/restaurant.jpg",
    hero: "Slow-cooked classics, warm rooms, open till late.",
    cta: "Reserve a table",
    highlights: ["Phone-friendly menu", "Table booking & ordering links", "Timings & map at a glance"],
  },
  {
    slug: "store",
    client: "Indigo Loom",
    industry: "D2C e-commerce",
    title: "A D2C store with a checkout that just works",
    summary:
      "A fictional handloom clothing brand. Shoppers want to see the fabric up close and pay the way they like, so product pages are image-first and checkout supports UPI, cards and COD.",
    image: "/images/ecommerce.jpg",
    hero: "Handwoven, made to last. Free shipping across India.",
    cta: "Shop the collection",
    highlights: ["Razorpay / UPI checkout", "Image-first product pages", "Order & stock admin"],
  },
];

export const faqs = [
  { q: "How much will my project cost?", a: "Every project is different, so we quote after a free call. You get a transparent, written quote based on your scope, usually well below typical agency rates for the same quality. Share your budget range in the form and we'll suggest what fits." },
  { q: "Why don't you list prices on the website?", a: "A five-page site for a clinic and a store with 500 products are very different jobs. Instead of a one-size price, we listen first and send a fixed, itemised quote, so you only pay for what you actually need." },
  { q: "How do payments work?", a: "Payments are milestone-based: a part to start, and the rest in stages as work is delivered and approved. Indian clients pay by UPI or bank transfer. When needed, you can also pay by card or online through a secure Dodo Payments link." },
  { q: "What if I don't like the design?", a: "You approve the design before we build. We design your key pages first and revise them with you. Development starts only once you're happy." },
  { q: "When can I reach you?", a: "We're available Monday to Saturday, 10am–7pm IST. We work with clients worldwide, so if you're in another time zone, just tell us and we'll find a call time that works." },
  { q: "How long does a project take?", a: "Landing pages usually take about a week and business websites 2–3 weeks from approved design. E-commerce stores, web apps and Android apps usually take 3–10 weeks depending on scope." },
  { q: "Do I own the website and the code?", a: "Yes. Once the project is paid for, the code, design, content and domain are yours. We hand over all accounts and access, or keep maintaining it for you if you prefer." },
  { q: "Do you provide support after launch?", a: "Yes. Every project includes a period of post-launch support, and we offer ongoing maintenance for updates, backups, monitoring and edits." },
];

// Company (About page) content
export const values = [
  { title: "Quality you'd expect from a big agency", body: "Careful design, clean code and real attention to detail on every project, big or small." },
  { title: "Honest, transparent quotes", body: "A written quote before work starts and no hidden charges. If the scope changes, we tell you first." },
  { title: "Performance is a feature", body: "Speed, mobile experience and search are built in from day one, not bolted on before launch." },
  { title: "Your business, your ownership", body: "Code, domain and accounts are handed over to you. We earn repeat work by doing good work, not by lock-in." },
];

export const capabilities = [
  { group: "Design", items: ["Brand-aligned UI design", "UX flows & wireframes", "Design systems", "Copy & content structure"] },
  { group: "Engineering", items: ["Next.js & React", "TypeScript & Node.js", "Postgres, Prisma & Neon", "AWS & Vercel hosting"] },
  { group: "Product", items: ["SaaS MVPs", "Auth, roles & billing", "Admin dashboards", "Android & cross-platform apps"] },
  { group: "Growth", items: ["Technical SEO", "Core Web Vitals", "Analytics & conversion tracking", "Ongoing support & maintenance"] },
];

// Our working hours, in India Standard Time.
export const hours = { label: "Monday–Saturday, 10am–7pm IST", short: "Mon–Sat · 10am–7pm IST", global: "We work with clients worldwide and can schedule calls across time zones." };

// Hero offer: honest risk-reversal commitments (no stats, no clients claimed).
export const promises = [
  { title: "Free homepage concept", body: "See your new homepage designed before you pay anything." },
  { title: "Approve the design first", body: "Nothing gets built until you're happy with the look." },
  { title: "Pay in milestones", body: "UPI or bank transfer, or a secure Dodo Payments link, only as work is delivered." },
  { title: "You own everything", body: "Code, design, domain and accounts are handed to you." },
];

// Comparison table (qualitative, no invented numbers).
export const comparison = {
  cols: ["Makvion", "Typical big agency", "Freelancer / template"],
  rows: [
    { label: "Custom design, no templates", v: ["yes", "yes", "partly"] },
    { label: "Price", v: ["Well below agency rates", "Premium", "Low"] },
    { label: "Free homepage concept before you pay", v: ["yes", "no", "no"] },
    { label: "Approve design before development", v: ["yes", "yes", "partly"] },
    { label: "Milestone payments", v: ["yes", "partly", "no"] },
    { label: "You own the code and domain", v: ["yes", "partly", "partly"] },
    { label: "Fast, mobile-first build with SEO basics", v: ["yes", "yes", "partly"] },
    { label: "Support after launch", v: ["yes", "yes", "no"] },
  ],
};
