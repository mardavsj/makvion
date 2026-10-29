import type { ReactNode } from "react";
import { Container } from "./ui";
import { Kicker } from "./home/Sections";

export function Legal({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-cream text-ink">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative py-20 sm:py-28">
          <Kicker>Legal</Kicker>
          <h1 className="font-display mt-8 text-[3rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[5.5rem]">{title}</h1>
          <p className="mt-6 text-muted">Last updated {updated}</p>
        </Container>
      </section>
      <section className="bg-cream py-20 sm:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink/85 [&_h2]:font-display [&_h2]:mt-14 [&_h2]:border-t [&_h2]:border-line [&_h2]:pt-8 [&_h2]:text-[1.9rem] [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-semibold [&_a]:text-brand-700 [&_a]:underline">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
