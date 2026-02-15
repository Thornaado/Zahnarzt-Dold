"use client"

import { Microscope, HeartPulse, ShieldCheck } from "lucide-react"
import { useAnimateIn } from "@/hooks/use-animate-in"
import { ServiceCard } from "@/components/sections/service-card"

const services = [
  {
    icon: Microscope,
    title: "Endodontie",
    description:
      "Hochpr\u00E4zise Wurzelkanalbehandlungen unter dem OP-Mikroskop. Wir retten Z\u00E4hne, die andere aufgeben \u2013 mit modernster Technik und jahrelanger Erfahrung.",
  },
  {
    icon: HeartPulse,
    title: "Parodontologie",
    description:
      "Ganzheitliche Behandlung von Zahnfleischerkrankungen. Unser systematischer Ansatz stoppt Parodontitis und sch\u00FCtzt Ihre Z\u00E4hne langfristig.",
  },
  {
    icon: ShieldCheck,
    title: "Prophylaxe",
    description:
      "Professionelle Zahnreinigung und individuelle Vorsorgeprogramme. Wir legen den Grundstein f\u00FCr Ihre lebenslange Zahngesundheit.",
  },
]

export function Services() {
  const { ref, isVisible } = useAnimateIn()

  return (
    <section id="leistungen" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-500 ease-out ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
            }`}
        >
          <h2 className="text-2xl font-semibold leading-tight text-foreground lg:text-3xl text-balance">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-muted-foreground">
            {"Spezialisierte Zahnmedizin auf h\u00F6chstem Niveau"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
