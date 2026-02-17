"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAnimateIn } from "@/hooks/use-animate-in"

export function CTASection() {
  const { ref, isVisible } = useAnimateIn()

  return (
    <section id="kontakt" className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <div
          ref={ref}
          className={`flex flex-col items-center gap-6 text-center transition-all duration-600 ease-out ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
            }`}
        >
          <h2 className="text-2xl font-semibold leading-tight text-primary-foreground lg:text-3xl text-balance">
            {"Bereit f\u00FCr Ihr gesundes L\u00E4cheln?"}
          </h2>
          <p className="max-w-xl text-primary-foreground/80">
            {"W\u00E4hlen Sie jetzt Ihren Wunschtermin bequem online aus."}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-4 rounded-lg bg-background text-foreground hover:bg-background/90 font-semibold"
          >
            <a href="tel:+49762362484">
              <Phone className="mr-2 h-4 w-4" />
              Termin vereinbaren
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
