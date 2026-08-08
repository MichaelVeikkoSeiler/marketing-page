import { Section } from "@/components/ui/section";

/** Schmale Textspalte mit Prose-Abständen für Impressum & Datenschutz. */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-forest sm:text-4xl">{title}</h1>
        <div className="mt-10 space-y-6 leading-relaxed text-forest-muted [&_a]:text-forest [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-forest">
          {children}
        </div>
      </div>
    </Section>
  );
}
