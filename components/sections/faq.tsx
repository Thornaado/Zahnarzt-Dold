"use client"

import { useAnimateIn } from "@/hooks/use-animate-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    id: "faq-1",
    question: "Wie l\u00E4uft eine Wurzelkanalbehandlung ab?",
    answer:
      "Eine Wurzelkanalbehandlung bei uns erfolgt unter dem OP-Mikroskop mit h\u00F6chster Pr\u00E4zision. Nach einer gr\u00FCndlichen Diagnostik mit digitalem R\u00F6ntgen entfernen wir das entz\u00FCndete Gewebe schonend, desinfizieren den Kanal und verschlie\u00DFen ihn dicht. Die meisten Behandlungen sind in ein bis zwei Sitzungen abgeschlossen.",
  },
  {
    id: "faq-2",
    question: "Was kostet eine professionelle Zahnreinigung?",
    answer:
      "Die Kosten f\u00FCr eine professionelle Zahnreinigung h\u00E4ngen vom individuellen Aufwand ab. Nach einer kurzen Untersuchung erstellen wir Ihnen einen transparenten Kostenvoranschlag. Viele gesetzliche Krankenkassen bezuschussen die PZR \u2013 sprechen Sie uns gerne an.",
  },
  {
    id: "faq-3",
    question: "Bieten Sie auch Termine au\u00DFerhalb der regul\u00E4ren Sprechzeiten an?",
    answer:
      "Ja, nach Vereinbarung bieten wir auch Termine in den fr\u00FChen Morgenstunden oder am sp\u00E4ten Nachmittag an. Kontaktieren Sie uns einfach telefonisch oder \u00FCber unser Online-Buchungssystem, um einen passenden Termin zu finden.",
  },
]

export function FAQ() {
  const { ref: headingRef, isVisible: headingVisible } = useAnimateIn()
  const { ref: contentRef, isVisible: contentVisible } = useAnimateIn()

  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <div
          ref={headingRef}
          className={`mb-12 text-center transition-all duration-500 ease-out ${headingVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
            }`}
        >
          <h2 className="text-2xl font-semibold leading-tight text-foreground lg:text-3xl 2xl:text-4xl text-balance">
            {"H\u00E4ufig gestellte Fragen"}
          </h2>
          <p className="mt-4 text-muted-foreground lg:text-lg 2xl:text-xl">
            Antworten auf die wichtigsten Fragen unserer Patienten
          </p>
        </div>

        <div
          ref={contentRef}
          className={`mx-auto max-w-3xl transition-all duration-500 ease-out delay-100 ${contentVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-lg border border-border bg-card px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-center justify-center text-base font-medium text-card-foreground hover:no-underline py-4 2xl:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-center text-sm leading-relaxed text-muted-foreground pb-4 lg:text-base 2xl:text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
