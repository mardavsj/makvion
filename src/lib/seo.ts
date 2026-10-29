import type { Metadata } from "next";
import { site, contactConfig } from "@/lib/site";

/** Per-page metadata: absolute title, description, canonical, hreflang, Open Graph and Twitter. */
export function pageMeta({ path, title, description, keywords = [] }: { path: string; title: string; description: string; keywords?: string[] }): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: path, languages: { "en-IN": url, "x-default": url } },
    openGraph: { type: "website", siteName: site.name, url, title, description, locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const ORG_ID = `${site.url}/#organization`;
export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/logo-green.png` },
      email: site.email,
      telephone: `+${contactConfig.phoneNumber}`,
      description: site.description,
      ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: site.name,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      logo: `${site.url}/logo-green.png`,
      email: site.email,
      telephone: `+${contactConfig.phoneNumber}`,
      parentOrganization: { "@id": ORG_ID },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addressParts.street,
        addressLocality: site.addressParts.locality,
        addressRegion: site.addressParts.region,
        postalCode: site.addressParts.postalCode,
        addressCountry: site.addressParts.country,
      },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "19:00" }],
      areaServed: [{ "@type": "City", name: "Pune" }, { "@type": "State", name: "Maharashtra" }, { "@type": "Country", name: "India" }, { "@type": "Place", name: "Worldwide" }],
      knowsAbout: ["Website design", "Web development", "E-commerce website development", "Web apps and SaaS", "Android app development", "Landing pages", "SEO and Google Business Profile"],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: site.url,
      name: site.shortName,
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
