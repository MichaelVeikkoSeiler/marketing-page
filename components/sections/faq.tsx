import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { faqs } from "@/lib/site-config";

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading
        as="h1"
        kicker="FAQ"
        title="Häufige Fragen"
        description="Antworten auf die Fragen, die uns am häufigsten gestellt werden."
      />

      {/* <details> statt State: aufklappbar ohne Client-Komponente */}
      <div className="mx-auto mt-14 max-w-3xl divide-y divide-line border-y border-line">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-forest marker:hidden">
              {faq.question}
              <ChevronDown
                className="h-5 w-5 shrink-0 text-sage-dark transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-forest-muted">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
