"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAnimateIn } from "@/hooks/use-animate-in"
import { PatientInfoModal } from "@/components/modals/patient-info-modal"

export function Hero() {
  const { ref: textRef, isVisible: textVisible } = useAnimateIn({ threshold: 0.2 })

  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden py-8 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero image.webp"
          alt="Zahnarztpraxis Dold Rheinfelden - Moderne Zahnheilkunde für die ganze Familie"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 lg:px-8 w-full relative z-10 flex flex-col items-center">
        {/* Text content */}
        <div
          ref={textRef}
          className={`flex flex-col items-center text-center max-w-3xl gap-4 lg:gap-8 transition-all duration-700 ease-out ${
            textVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl 2xl:text-6xl text-balance">
            {"Moderne Zahnmedizin in Rheinfelden. Pr\u00E4zision, der Sie vertrauen."}
          </h1>

          <p className="text-base leading-relaxed text-teal-50 lg:text-xl">
            {"Spezialisierte Fachkompetenz in Endodontie und Parodontologie. Wir kombinieren modernste Technik mit einf\u00FChlsamer Behandlung."}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-semibold"
            >
              <a href="tel:+49762362484">
                <Phone className="mr-2 h-4 w-4" />
                Termin vereinbaren
              </a>
            </Button>
            <PatientInfoModal
              trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm text-base font-semibold"
                >
                  Ihr erster Besuch?
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
