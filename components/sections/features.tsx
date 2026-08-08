import {
  Camera,
  CloudSun,
  Droplets,
  Map,
  ScanLine,
  Sprout,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { features, type Feature } from "@/lib/site-config";

const icons = {
  sprout: Sprout,
  map: Map,
  droplets: Droplets,
  cloudSun: CloudSun,
  camera: Camera,
  scan: ScanLine,
} as const;

const accents: Record<Feature["accent"], string> = {
  care: "bg-care text-care-text",
  soil: "bg-soil text-soil-text",
  water: "bg-water text-water-text",
  sun: "bg-sun text-sun-text",
  bloom: "bg-bloom text-bloom-text",
  sage: "bg-sage text-forest",
};

export function Features() {
  return (
    <Section id="funktionen" className="bg-warm-white">
      <SectionHeading
        kicker="Funktionen"
        title="Alles, was zwischen dir und einem gesunden Beet steht"
        description="Sechs Bausteine, die zusammenarbeiten — statt sechs Apps, die es nicht tun."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = icons[feature.icon];
          return (
            <article
              key={feature.title}
              className="rounded-card border border-line bg-cream p-7 transition-shadow hover:shadow-lg hover:shadow-forest/5"
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
    </Section>
  );
}
