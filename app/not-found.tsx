import { CTAButton } from "@/components/primitives/CTAButton";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gold-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid-faint opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-2xl px-6 py-24 text-center">
        <Eyebrow className="justify-center">404</Eyebrow>
        <h1 className="mt-6 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          That page is not here.
        </h1>
        <p className="mt-5 text-lg text-foreground/80">
          The link you followed may be old, or the page may have moved. The
          mission has not — there is still a way forward.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/">Back to home</CTAButton>
          <CTAButton href="/pilot" variant="secondary">
            Join the pilot
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
