import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { CtaBand, PageHero, ProductsShowcase } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Makvion builds and runs its own products: Websites With Punch (uptime, SSL & domain monitoring) and Lost Seahorse (a typing-speed game).",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title={<>Proof we can build software <span className="text-brand-600">people rely on.</span></>}
        intro="We design, launch and operate our own products. Everything we learn running them goes into the software we build for you." />
      <section className="relative overflow-hidden bg-sand py-24 sm:py-32">
        <div className="bg-diagonal pointer-events-none absolute inset-0" />
        <Container className="relative"><h2 className="sr-only">Our products</h2><ProductsShowcase detailed /></Container>
      </section>
      <CtaBand title="Have a product idea? Get it in front of users, built properly." body="We bring the same care to your SaaS or app that we bring to our own, from scoping to launch." />
    </>
  );
}
