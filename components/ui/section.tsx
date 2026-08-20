import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

/** Section mit einheitlichem vertikalem Rhythmus. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Kicker + Überschrift + Fliesstext, zentriert über einer Section.
 * `as="h1"` auf eigenständigen Unterseiten (z.B. /features, /faq), wo diese
 * Überschrift die einzige H1 der Seite ist — auf der Startseite bleibt es
 * beim Default `h2`, da dort die H1 bereits im Hero steht.
 */
export function SectionHeading({
  kicker,
  title,
  description,
  className,
  as: Heading = "h2",
}: {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {kicker ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-sage-dark">
          {kicker}
        </p>
      ) : null}
      <Heading className="mt-3 text-3xl font-bold text-forest sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-forest-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
