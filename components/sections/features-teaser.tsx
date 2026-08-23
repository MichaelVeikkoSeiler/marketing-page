import { AlertTriangle, ArrowRight, PawPrint, Stethoscope } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { features } from "@/lib/site-config";

const highlightIcons = {
  stethoscope: Stethoscope,
  alertTriangle: AlertTriangle,
  pawPrint: PawPrint,
} as const;

const accents: Record<string, string> = {
  clay: "bg-clay text-clay-text",
  sun: "bg-sun text-sun-text",
  care: "bg-care text-care-text",
};

/** Drei ausgewählte Funktionen als Teaser — die vollständige Liste lebt auf /features. */
export function FeaturesTeaser() {
  const highlights = features.filter((f) =>
    (["stethoscope", "alertTriangle", "pawPrint"] as const).includes(
      f.icon as "stethoscope" | "alertTriangle" | "pawPrint",
    ),
  );

  return (
    <Section id="funktionen" className="bg-warm-white">
      <SectionHeading
        kicker="Funktionen"
        title="Alles, was zwischen dir und einem gesunden Garten steht"
        description={`${features.length} Bausteine, die zusammenarbeiten — statt ${features.length} Apps, die es nicht tun.`}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {highlights.map((feature) => {
          const Icon =
            highlightIcons[feature.icon as keyof typeof highlightIcons];
          return (
            <article
              key={feature.title}
              className="rounded-card border border-line bg-cream p-7"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${accents[feature.accent]}`}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold text-forest">
                {feature.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-forest-muted">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink href="/features" variant="secondary">
          Alle {features.length} Funktionen ansehen
          <ArrowRight className="h-4 w-4" aria-hidden />
        </ButtonLink>
      </div>
    </Section>
  );
}
