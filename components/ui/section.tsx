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

/** Kicker + Überschrift + Fließtext, zentriert über einer Section. */
export function SectionHeading({
  kicker,
  title,
  description,
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {kicker ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-sage-dark">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold text-forest sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-forest-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
