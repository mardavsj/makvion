import { Arrow, Button, Container } from "@/components/ui";
import { Kicker } from "@/components/home/Sections";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative py-24 sm:py-36">
        <Kicker dark>Error 404</Kicker>
        <p aria-hidden className="font-display mt-6 text-[9rem] font-extrabold leading-[0.85] tracking-[-0.06em] text-gold-300 sm:text-[18rem]">404</p>
        <h1 className="font-display mt-6 max-w-3xl text-[2.6rem] font-extrabold leading-[1] tracking-[-0.04em] sm:text-[4.4rem]">This page wandered off.</h1>
        <p className="mt-6 max-w-md text-lg text-white/70">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="gold" size="lg">Back to home <Arrow /></Button>
          <Button href="/contact" variant="light" size="lg">Contact us</Button>
        </div>
      </Container>
    </section>
  );
}
