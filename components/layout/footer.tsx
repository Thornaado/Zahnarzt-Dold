import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { PatientInfoModal } from "@/components/modals/patient-info-modal"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Kontakt */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-primary-foreground">Kontakt</h3>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Kirchplatz 2, 79618 Rheinfelden</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+49 (0) 7623 1234</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@zahnarzt-dold.de</span>
              </li>
            </ul>
            <PatientInfoModal
              trigger={
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit border-accent text-accent hover:bg-accent/5 hover:text-accent text-base font-semibold"
                >
                  Ihr erster Besuch? Hier klicken
                </Button>
              }
            />
          </div>

          {/* Oeffnungszeiten */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-primary-foreground">
              {"\u00D6ffnungszeiten"}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{"Mo\u2013Do: 08:00 \u2013 18:00"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{"Fr: 08:00 \u2013 14:00"}</span>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Rechtliches</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-0.5"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-0.5"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          {"\u00A9 2026 Zahnarzt Dold. Alle Rechte vorbehalten."}
        </div>
      </div>
    </footer>
  )
}
