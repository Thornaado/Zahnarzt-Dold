"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAnimateIn } from "@/hooks/use-animate-in"
import { PatientInfoModal } from "@/components/modals/patient-info-modal"

export function Hero() {
  const { ref: textRef, isVisible: textVisible } = useAnimateIn({ threshold: 0.2 })
  const { ref: imageRef, isVisible: imageVisible } = useAnimateIn({ threshold: 0.2 })

  return (
    <section className="bg-background py-8 lg:py-24 min-h-[90svh] flex items-center relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div
            ref={textRef}
            className={`flex flex-col items-center text-center lg:items-start lg:text-left gap-2 lg:gap-6 transition-all duration-700 ease-out ${textVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
              }`}
          >
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl 2xl:text-6xl text-balance">
              {"Moderne Zahnmedizin in Rheinfelden. Pr\u00E4zision, der Sie vertrauen."}
            </h1>

            <p className="text-sm leading-relaxed text-muted-foreground lg:text-lg 2xl:text-xl">
              {"Spezialisierte Fachkompetenz in Endodontie und Parodontologie. Wir kombinieren modernste Technik mit einf\u00FChlsamer Behandlung."}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4">
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
                    className="rounded-lg border-accent text-accent hover:bg-accent/5 hover:text-accent text-base font-semibold"
                  >
                    Ihr erster Besuch?
                  </Button>
                }
              />
            </div>
          </div>

          {/* Hero image */}
          <div
            ref={imageRef}
            className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-out delay-100 -mt-4 lg:mt-0 aspect-[4/2.85] sm:aspect-auto ${imageVisible
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
              }`}
          >
            <Image
              src="/hero image.png"
              alt="Zahnarztpraxis Dold Rheinfelden - Moderne Zahnheilkunde für die ganze Familie"
              width={800}
              height={600}
              priority
              className="w-full h-full object-cover"
            /></div>
        </div>
      </div>
    </section>
  )
}
