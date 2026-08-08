import { Section, SectionHeading } from "@/components/ui/section";
import { steps } from "@/lib/site-config";

export function HowItWorks() {
  return (
    <Section id="so-gehts">
      <SectionHeading
        kicker="So funktioniert's"
        title="Einmal einrichten, dann läuft es mit"
        description="Kein Import, keine Tabellen, keine Einarbeitung. Drei Schritte, und die App meldet sich von selbst."
      />

      <ol className="mt-14 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            {/* Verbindungslinie zwischen den Schritten, nur auf breiten Screens */}
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                className="absolute left-14 right-0 top-6 hidden h-px bg-line md:block"
              />
            ) : null}

            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-sage font-display text-lg font-bold text-forest">
              {index + 1}
            </span>
            <h3 className="mt-5 text-lg font-bold text-forest">{step.title}</h3>
            <p className="mt-2.5 leading-relaxed text-forest-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
