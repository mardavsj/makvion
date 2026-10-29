import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealObserver } from "@/components/RevealObserver";
import { MobileQuotePill } from "@/components/home/MobileQuotePill";
import { site } from "@/lib/site";
import { siteJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Makvion — Premium Websites & Apps Without the Agency Price | Pune, India",
    template: "%s · Makvion",
  },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: "Makvion Technologies" }],
  alternates: { canonical: "/", languages: { "en-IN": site.url, "x-default": site.url } },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Makvion — Websites, Online Stores & Apps That Win You Customers",
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makvion — Websites, Online Stores & Apps | Pune, India",
    description: site.description,
  },
};

export const viewport: Viewport = { themeColor: "#ffffff" };


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" suppressHydrationWarning className={`${jakarta.variable}`}>
      <body className="min-h-screen font-sans">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
        <MobileQuotePill />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c") }} />
        <Analytics />
      </body>
    </html>
  );
}
