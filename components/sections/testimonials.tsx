import { Section, SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  return (
    <Section id="stimmen" className="bg-warm-white">
      <SectionHeading
        kicker="Stimmen"
        title="So könnten Stimmen aussehen"
        description="Konzept-Beispiel: HORTTIA ist aktuell ein privates Familienprojekt ohne aussenstehende Nutzer:innen. Diese Zitate sind fiktiv und veranschaulichen, wie echtes Feedback hier künftig aussehen könnte."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex flex-col rounded-card border border-line bg-cream p-7"
          >
            <blockquote className="flex-1 text-lg leading-relaxed text-forest">
              &bdquo;{testimonial.quote}&ldquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-5">
              <span className="block font-semibold text-forest">
                {testimonial.name}
              </span>
              <span className="block text-sm text-forest-muted">
                {testimonial.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
