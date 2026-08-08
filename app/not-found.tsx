import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="font-display text-6xl font-bold text-sage-dark">404</p>
      <h1 className="mt-6 text-3xl font-bold text-forest sm:text-4xl">
        Hier wächst nichts
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-forest-muted">
        Diese Seite gibt es nicht (mehr). Vielleicht findest du auf der
        Startseite, was du suchst.
      </p>
      <div className="mt-9 flex justify-center">
        <ButtonLink href="/" size="lg">
          Zur Startseite
        </ButtonLink>
      </div>
    </Section>
  );
}
