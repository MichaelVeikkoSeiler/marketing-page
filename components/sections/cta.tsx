import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { primaryCta } from "@/lib/site-config";

export function Cta() {
  return (
    <Section id="kostenlos-starten">
      <div className="rounded-card bg-forest px-8 py-16 text-center sm:px-16">
        <h2 className="text-3xl font-bold text-warm-white sm:text-4xl">
          Für alle, die ihren Garten besser kennenlernen wollen
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-warm-white/75">
          Leg deine erste Zone an und entdecke, was in deinem Garten wirklich
          passiert.
        </p>
        <div className="mt-9 flex justify-center">
          <ButtonLink
            href={primaryCta.href}
            size="lg"
            className="bg-sage text-forest hover:bg-sage/85"
          >
            {primaryCta.label}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
