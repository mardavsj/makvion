import type { ReactNode } from "react";
import { Container } from "./ui";

export function Legal({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
        <div className="mt-10 space-y-5 leading-relaxed text-ink/85 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-brand-700 [&_a]:underline">
          {children}
        </div>
      </Container>
    </section>
  );
}
