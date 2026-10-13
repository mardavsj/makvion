import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { ConceptShowcase, CtaBand, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Work",
  description: "Concept projects by Makvion showing how we approach websites for roofing, dental and restaurant businesses. Each is clearly labelled as a concept.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow="Work" title={<>See how your business <span className="text-brand-600">could look online.</span></>}
        intro="Each project below is a concept for a fictional business, clearly labelled, showing how we turn a homepage into something that wins customers." />
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="bg-dots mask-fade-b pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative">
          <h2 className="sr-only">Concept projects</h2>
          <ConceptShowcase detailed />
        </Container>
      </section>
      <CtaBand title="Want a free homepage concept for your business?" body="Share your current site or idea. We'll show you how we'd approach it before you commit to anything." />
    </>
  );
}
