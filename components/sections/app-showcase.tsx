import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";

const shots = [
  {
    src: "/screenshots/pflanzen.png",
    alt: "Pflanzenliste in HORTTIA mit Fotos jeder Pflanze",
    title: "Jede Pflanze im Blick",
    description:
      "Alle Pflanzen mit eigenem Foto und Steckbrief — sofort erkennbar statt anonym in einer Liste.",
  },
  {
    src: "/screenshots/bodencheck.png",
    alt: "Anleitung für eine Bodenprobe in HORTTIA",
    title: "Bodencheck Schritt für Schritt",
    description:
      "Eine geführte Anleitung nimmt dich an die Hand, bis die Bodenprobe für die Analyse bereit ist.",
  },
  {
    src: "/screenshots/wetter.png",
    alt: "Wetteransicht in HORTTIA mit 12-Tage-Vorhersage für den Garten-Standort",
    title: "Wetter für deinen Standort",
    description:
      "Temperatur, Regen und Wind für die nächsten Tage — genau dort, wo dein Garten steht.",
  },
];

export function AppShowcase() {
  return (
    <Section className="bg-cream">
      <SectionHeading
        kicker="Einblick"
        title="So sieht HORTTIA in Aktion aus"
        description="Echte Ansichten aus der App — keine Mockups."
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {shots.map((shot) => (
          <figure key={shot.src} className="text-center">
            <div className="relative mx-auto w-full max-w-[220px]">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-sage/25 blur-xl"
              />
              <Image
                src={shot.src}
                alt={shot.alt}
                width={710}
                height={1500}
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-5">
              <p className="font-semibold text-forest">{shot.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-forest-muted">
                {shot.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
