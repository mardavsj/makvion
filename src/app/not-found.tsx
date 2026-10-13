import { Arrow, Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mesh-hero py-28 sm:py-40">
      <Container className="text-center">
        <p className="font-display tracking-display text-8xl font-semibold text-brand-600 sm:text-9xl">404</p>
        <h1 className="font-display mt-6 text-3xl font-semibold sm:text-5xl">This page wandered off.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Back to home <Arrow /></Button>
          <Button href="/contact" variant="secondary">Contact us</Button>
        </div>
      </Container>
    </section>
  );
}
