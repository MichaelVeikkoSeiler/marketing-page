import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { AppPreview } from "@/components/sections/app-preview";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-gradient-to-b from-sage/35 to-transparent"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-warm-white px-4 py-1.5 text-sm font-medium text-forest-muted ring-1 ring-line">
            <Sparkles className="h-4 w-4 text-sage-dark" aria-hidden />
            Neu: Pflanzen per Foto erkennen
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-forest sm:text-5xl lg:text-6xl">
            Dein Garten,{" "}
            <span className="text-sage-dark">endlich im Überblick</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-forest-muted sm:text-xl">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </ButtonLink>
          </div>

          <p className="mt-5 text-sm text-forest-muted">
            Ohne Kreditkarte · In 3 Minuten eingerichtet · Jederzeit löschbar
          </p>
        </div>

        <AppPreview />
      </Container>
    </section>
  );
}
