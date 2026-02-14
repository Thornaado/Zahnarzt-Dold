"use client"

import Image from "next/image"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useAnimateIn } from "@/hooks/use-animate-in"

export function Hero() {
  const { ref: textRef, isVisible: textVisible } = useAnimateIn({ threshold: 0.2 })
  const { ref: imageRef, isVisible: imageVisible } = useAnimateIn({ threshold: 0.2 })

  const handleCTA = () => {
    toast.success("Erfolg! Terminbuchung wird geladen...")
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div
            ref={textRef}
            className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
              textVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl text-balance">
              {"Moderne Zahnmedizin in Rheinfelden. Pr\u00E4zision, der Sie vertrauen."}
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
              {"Spezialisierte Fachkompetenz in Endodontie und Parodontologie. Wir kombinieren modernste Technik mit einf\u00FChlsamer Behandlung."}
            </p>

            <div>
              <Button
                onClick={handleCTA}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg text-sm font-semibold"
              >
                {"Jetzt Termin w\u00E4hlen"}
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div
            ref={imageRef}
            className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-out delay-100 ${
              imageVisible
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          >
            <Image
              src="/images/hero-dental.jpg"
              alt="Moderne Zahnarztpraxis Dold in Rheinfelden - helle und einladende Behandlungsraeume"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
