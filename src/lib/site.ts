// Central content & config. Edit arrays here to add services, industries, products or concepts.

export const site = {
  name: "Makvion Technologies",
  shortName: "Makvion",
  url: "https://makvion.com",
  email: "contact@makvion.com",
  location: "Pune, India",
  description:
    "Win more customers with a fast, trustworthy website or app from Makvion. You approve the design before we build, with fixed quotes and milestone billing.",
  // TODO: add registered business address, phone/WhatsApp and LinkedIn when ready.
  address: null as string | null,
  linkedin: null as string | null,
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  from: string;
  timeline: string;
  includes: string[];
  icon: "globe" | "layers" | "phone" | "gauge" | "shield" | "spark";
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Business websites",
    short: "Turn more visitors into calls, bookings and quote requests.",
    description:
      "Get found on Google, earn trust in seconds and make it effortless for customers to contact you. A custom design built in Next.js, fast on every phone, with a clear next step on every page.",
    from: "$1,500",
    timeline: "2–3 weeks",
    includes: [
      "Custom design for up to 6 pages",
      "Mobile-first, 90+ Lighthouse target",
      "On-page SEO, analytics & sitemap",
      "Contact / quote forms",
      "Easy content updates",
    ],
    icon: "globe",
  },
  {
    slug: "web-apps",
    title: "Web apps & SaaS",
    short: "Launch your product or automate your operations, built to scale from day one.",
    description:
      "Get your idea in front of paying users, or replace spreadsheets with a tool your team enjoys. Auth, payments, databases and admin panels on the same stack we use to run our own SaaS.",
    from: "$7,500",
    timeline: "5–10 weeks",
    includes: [
      "Product scoping & UX flows",
      "Auth, roles & billing",
      "Postgres, Prisma & cloud hosting",
      "Admin dashboards",
      "Launch support",
    ],
    icon: "layers",
  },
  {
    slug: "mobile-apps",
    title: "Mobile apps",
    short: "Put your business on your customers' home screen.",
    description:
      "Make repeat orders, bookings and loyalty effortless with an app that feels native. Android and cross-platform builds, published to the store for you.",
    from: "$6,500",
    timeline: "4–8 weeks",
    includes: [
      "Android & cross-platform builds",
      "API & backend integration",
      "Push notifications",
      "Play Store publishing",
      "Analytics & crash reporting",
    ],
    icon: "phone",
  },
  {
    slug: "speed",
    title: "Speed sprint",
    short: "Stop losing customers to a slow website.",
    description:
      "Win back the visitors who leave before your page loads. We audit your current site and fix what slows it down (images, scripts, fonts, hosting and Core Web Vitals) without a rebuild.",
    from: "$750",
    timeline: "1 week",
    includes: [
      "Performance & Core Web Vitals audit",
      "Image, script & font optimisation",
      "Mobile layout quick fixes",
      "Before/after speed report",
      "Recommendations for next steps",
    ],
    icon: "gauge",
  },
  {
    slug: "redesign",
    title: "Website redesign",
    short: "Turn a dated website into one customers trust.",
    description:
      "Keep your content and search rankings while your site gets a modern design, a faster build and clear calls to action that turn visitors into enquiries.",
    from: "$1,500",
    timeline: "2–3 weeks",
    includes: [
      "UX & conversion review",
      "Fresh design you approve first",
      "Rebuilt fast in Next.js",
      "Redirects to protect SEO",
      "Content migration",
    ],
    icon: "spark",
  },
  {
    slug: "maintenance",
    title: "Care & maintenance",
    short: "Never think about your website's upkeep again.",
    description:
      "Your site stays online, secure and up to date while you run your business. Uptime, SSL and domain monitoring through our own product, Websites With Punch, plus edits, backups and fixes every month.",
    from: "$99/mo",
    timeline: "Monthly plan",
    includes: [
      "Care $99/mo or Care Plus $199/mo",
      "Uptime, SSL & domain monitoring",
      "Security & dependency updates",
      "Daily backups",
      "Up to 3 hours of edits a month on Care Plus",
    ],
    icon: "shield",
  },
];

export const packages = [
  {
    name: "Launch",
    price: "$1,500",
    note: "Starting price",
    blurb: "A professional website for a local or small business.",
    features: ["Up to 6 custom pages", "Mobile-first & fast", "SEO basics + analytics", "Contact & quote forms", "2 revision rounds"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,900",
    note: "Starting price",
    blurb: "A larger site built to win leads and rank in search.",
    features: ["Up to 12 pages", "Booking or CMS integration", "Landing pages for campaigns", "Copywriting help", "30 days of post-launch support"],
    featured: true,
  },
  {
    name: "Product",
    price: "$7,500",
    note: "Starting price",
    blurb: "Web apps, SaaS MVPs and custom platforms.",
    features: ["Scoping workshop", "Auth, payments & database", "Admin dashboard", "Milestone billing", "Launch & handover"],
    featured: false,
  },
];

export const carePlans = [
  { name: "Care", price: "$99", period: "/mo", blurb: "Keep your site online, secure and up to date.", features: ["Uptime, SSL & domain monitoring", "Security & dependency updates", "Daily backups", "Small fixes, replies within 2 business days"] },
  { name: "Care Plus", price: "$199", period: "/mo", blurb: "Everything in Care, plus hands-on edits every month.", features: ["Everything in Care", "Up to 3 hours of content & design edits each month", "Next-business-day replies", "Monthly speed & uptime report"] },
];

export const steps = [
  { step: "01", title: "Discovery call", body: "A short call or email thread to understand your business, goals and budget. You get a fixed quote — no surprises." },
  { step: "02", title: "Design you approve", body: "We design your key pages first. Nothing gets built until you approve the design." },
  { step: "03", title: "Build in milestones", body: "We build in clear stages with a live preview link, so you can see progress and give feedback at every step." },
  { step: "04", title: "Launch & support", body: "We launch, connect your domain and analytics, and stay on hand for fixes and improvements." },
];

export const reasons = [
  { title: "You approve the design before we build", body: "See and sign off on the look of your site before any development starts." },
  { title: "Transparent, published pricing", body: "Starting prices are on this site. Your quote is fixed in writing before work begins." },
  { title: "50% upfront, milestone billing", body: "Pay half to start and the rest on delivery — or in milestones for larger builds." },
  { title: "Secure online payments", body: "Invoices and card payments are handled through a secure online payment provider." },
  { title: "Available on US business hours", body: "We're available Monday–Friday, 9am–6pm US Eastern, so you get quick replies and calls during your working day." },
  { title: "We ship our own products", body: "We build and run our own SaaS, so we know what it takes to launch and maintain software." },
];

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  needs: string[];
  image: string;
};

// Add a new industry by appending an object here — the Industries page and home section update automatically.
export const industries: Industry[] = [
  {
    slug: "local-services",
    name: "Local & home services",
    summary: "More booked jobs from local search. For roofers, plumbers, HVAC, cleaners and contractors whose phone is their sales team.",
    needs: ["Click-to-call & quote forms", "Service-area pages for local SEO", "Fast loading on mobile data"],
    image: "/images/roofing.jpg",
  },
  {
    slug: "healthcare",
    name: "Healthcare & clinics",
    summary: "Fill your calendar with patients who already trust you. For dental practices, clinics and therapists.",
    needs: ["Online booking integration", "Clear treatment & pricing pages", "Accessible, calm design"],
    image: "/images/dental-smile.jpg",
  },
  {
    slug: "real-estate",
    name: "Real estate",
    summary: "Turn listing views into buyer enquiries. For agents, brokers and developers who need properties to look their best.",
    needs: ["Listing galleries & filters", "Lead capture on every listing", "Neighbourhood landing pages"],
    image: "/images/real-estate.jpg",
  },
  {
    slug: "restaurants",
    name: "Restaurants & hospitality",
    summary: "More tables booked and orders placed, straight from a phone. For restaurants, cafés and venues.",
    needs: ["Menus that work on phones", "Reservations & ordering links", "Google Maps & hours"],
    image: "/images/restaurant.jpg",
  },
  {
    slug: "ecommerce",
    name: "E-commerce & retail",
    summary: "More completed checkouts and repeat buyers. For independent brands and shops selling online.",
    needs: ["Fast product pages", "Checkout & payment setup", "Inventory-friendly admin"],
    image: "/images/ecommerce.jpg",
  },
  {
    slug: "startups",
    name: "Startups & SaaS",
    summary: "Get to paying users faster. For founders who need a landing page that converts or an MVP built properly the first time.",
    needs: ["Conversion-focused landing pages", "MVPs with auth & billing", "Dashboards & admin panels"],
    image: "/images/team.jpg",
  },
];

export type Product = {
  name: string;
  url: string;
  tagline: string;
  description: string;
  points: string[];
  pricing?: string;
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
    pricing: "Pro $12/mo · Business $42/mo",
    accent: "brand",
  },
  {
    name: "Lost Seahorse",
    url: "https://lostseahorse.com",
    tagline: "Get faster at typing, one playful test at a time",
    description:
      "A playful typing-speed game. Pick a timed or word-count test, add punctuation or numbers, choose a difficulty — and feed your seahorse as you improve.",
    points: ["Timed tests: 15, 30, 60 or 120s", "Word, punctuation & number modes", "Easy, medium and hard difficulty"],
    pricing: "Free to play",
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
    slug: "roofing",
    client: "Summit Ridge Roofing",
    industry: "Local services",
    title: "A storm-season website built to get the phone ringing",
    summary:
      "A fictional roofing contractor in Oklahoma. Homeowners land here on a phone right after a hail storm, so the design puts a free inspection request and click-to-call above everything else.",
    image: "/images/roofing.jpg",
    hero: "Storm damage? Free roof inspection in 24 hours.",
    cta: "Book free inspection",
    highlights: ["Sticky click-to-call on mobile", "Insurance-claim help page", "Service-area pages for local SEO"],
  },
  {
    slug: "dental",
    client: "Brightside Dental",
    industry: "Healthcare",
    title: "A calm, trustworthy clinic site with booking front and centre",
    summary:
      "A fictional family dental practice. Nervous patients want reassurance, clear prices and an easy way to book, so the site leads with friendly faces, transparent treatment pages and online booking.",
    image: "/images/dental-smile.jpg",
    hero: "Gentle family dentistry, booked in two taps.",
    cta: "Book a visit",
    highlights: ["Online booking flow", "Treatment & pricing pages", "Accessible, high-contrast design"],
  },
  {
    slug: "restaurant",
    client: "Ember & Oak",
    industry: "Restaurants",
    title: "A warm restaurant site where the menu loads in a blink",
    summary:
      "A fictional neighbourhood restaurant. Diners decide in seconds, so the menu, hours and reservation button are all one tap away on mobile.",
    image: "/images/restaurant.jpg",
    hero: "Wood-fired plates, warm rooms, open till late.",
    cta: "Reserve a table",
    highlights: ["Phone-friendly menu", "Reservation integration", "Hours & map at a glance"],
  },
];

export const faqs = [
  { q: "How much does a website cost?", a: "Business websites start at $1,500, larger lead-generation sites at $2,900, web app and SaaS MVPs at $7,500 and mobile app MVPs at $6,500. After a short call you get a fixed written quote, so the price doesn't change unless the scope does." },
  { q: "How do payments work?", a: "Typically 50% upfront to start and 50% on delivery. Larger projects are split into milestones. You pay by card or bank transfer through secure online invoices." },
  { q: "What if I don't like the design?", a: "You approve the design before we build. We design your key pages first and revise them with you — development only begins once you're happy." },
  { q: "When can I reach you?", a: "We're available Monday–Friday, 9am–6pm US Eastern (ET), which is 6am–3pm Pacific and 2pm–11pm in London. Calls are scheduled in those hours, and most updates happen over email with a live preview link you can check anytime." },
  { q: "How long does a project take?", a: "Most business websites take 2–3 weeks from approved design to launch. Web and mobile apps usually take 4–10 weeks depending on scope." },
  { q: "Do I own the website?", a: "Yes. Once the final invoice is paid, the code, design and content are yours, and we can hand over everything or keep maintaining it for you." },
  { q: "Can you work on my existing site?", a: "Yes. A speed sprint ($750) fixes slow loading and Core Web Vitals on your current site. If the site needs more, a full redesign starts at $1,500." },
];

// Company (About page) content
export const values = [
  { title: "Craft over volume", body: "We take on a focused number of projects so every page, interaction and line of code gets real attention." },
  { title: "Clarity, always", body: "Fixed written quotes, published starting prices and a live preview link. You always know what's happening and what it costs." },
  { title: "Performance is a feature", body: "Speed, accessibility and search are built in from day one, not bolted on before launch." },
  { title: "Own what we ship", body: "We run our own SaaS products, so we design for the long life of software, not just launch day." },
];

export const capabilities = [
  { group: "Design", items: ["Brand-aligned UI design", "UX flows & wireframes", "Design systems", "Copy & content structure"] },
  { group: "Engineering", items: ["Next.js & React", "TypeScript & Node.js", "Postgres, Prisma & Neon", "AWS & Vercel hosting"] },
  { group: "Product", items: ["SaaS MVPs", "Auth, roles & billing", "Admin dashboards", "Android & cross-platform apps"] },
  { group: "Growth", items: ["Technical SEO", "Core Web Vitals", "Analytics & conversion tracking", "Ongoing care plans"] },
];

// Our availability, shown in US Eastern and converted to other zones (local times; US and UK daylight saving mostly line up).
export const hours = { label: "Monday–Friday, 9am–6pm US Eastern (ET)", short: "Mon–Fri, 9am–6pm ET" };
export const timezones = [
  { zone: "Eastern", abbr: "ET", example: "New York", local: "9am–6pm", start: 9, end: 18 },
  { zone: "Central", abbr: "CT", example: "Chicago", local: "8am–5pm", start: 8, end: 17 },
  { zone: "Mountain", abbr: "MT", example: "Denver", local: "7am–4pm", start: 7, end: 16 },
  { zone: "Pacific", abbr: "PT", example: "Los Angeles", local: "6am–3pm", start: 6, end: 15 },
  { zone: "London", abbr: "UK", example: "London", local: "2pm–11pm", start: 14, end: 23 },
];
