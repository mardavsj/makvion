import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { FinalCta } from "@/components/home/Sections";
import { PageHeroV6, ProductPanels } from "@/components/v6";

export const metadata: Metadata = pageMeta({
  path: "/products",
  title: "Our Products: Uptime Monitoring & Typing Game | Makvion",
  description: "Makvion builds and runs its own products: Websites With Punch for uptime, SSL and domain monitoring, and Lost Seahorse, a fun typing-speed game. Take a look.",
  keywords: ["website uptime monitoring", "SSL expiry monitoring", "domain expiry monitoring", "typing speed game"],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Products", path: "/products" }])} />
      <PageHeroV6 eyebrow="Products" title={<>We build and run <span className="text-brand-600">our own software, too.</span></>}
        intro="Everything we learn operating our own products goes into the software we build for you." />
      <ProductPanels />
      <FinalCta tone="dark" title="Have a product idea? Let's build it properly." body="From scoping to launch, with the same care we give our own products." />
    </>
  );
}
