"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useAnimateIn } from "@/hooks/use-animate-in"

export function CTASection() {
  const { ref, isVisible } = useAnimateIn()

  const handleCTA = () => {
    toast.success("Erfolg! Terminbuchung wird geladen...")
  }

  return (
    <section id="kontakt" className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
            onClick={handleCTA}
            size="lg"
            className="mt-4 rounded-lg bg-background text-foreground hover:bg-background/90 text-sm font-semibold"
          >
            Termin online buchen
          </Button>
        </div>
      </div>
    </section>
  )
}
