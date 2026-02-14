import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Impressum | Zahnarzt Dold",
  description: "Impressum der Zahnarztpraxis Dr. med. dent. Christian Dold in Rheinfelden.",
}

export default function ImpressumPage() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        >
          <ArrowLeft className="h-4 w-4" />
          {"Zur\u00FCck zur Startseite"}
        </Link>

        <h1 className="mt-8 text-3xl font-bold leading-tight text-foreground lg:text-4xl">
          Impressum
        </h1>

        <div className="mt-8 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Angaben gem&auml;&szlig; &sect; 5 TMG
            </h2>
            <p className="mt-2">
              Dr. med. dent. Christian Dold
              <br />
              Zahnarztpraxis Dold
              <br />
              Kirchplatz 2
              <br />
              79618 Rheinfelden
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
            <p className="mt-2">
              Telefon: +49 (0) 7623 1234
              <br />
              E-Mail: info@zahnarzt-dold.de
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="mt-2">
              Berufsbezeichnung: Zahnarzt (verliehen in der Bundesrepublik
              Deutschland)
              <br />
              {"Zust\u00E4ndige Kammer: Landeszahn\u00E4rztekammer Baden-W\u00FCrttemberg"}
              <br />
              {"Zust\u00E4ndige Aufsichtsbeh\u00F6rde: Regierungspr\u00E4sidium Freiburg"}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Berufsrechtliche Regelungen
            </h2>
            <p className="mt-2">
              {"Zahnarztgesetz (Zahn\u00E4rztegesetz)"}
              <br />
              {"Berufsordnung der Landeszahn\u00E4rztekammer Baden-W\u00FCrttemberg"}
              <br />
              {"Geb\u00FChrenordnung f\u00FCr Zahn\u00E4rzte (GOZ)"}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Haftung f&uuml;r Inhalte
            </h2>
            <p className="mt-2">
              {"Als Diensteanbieter sind wir gem\u00E4\u00DF \u00A7 7 Abs. 1 TMG f\u00FCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00A7\u00A7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00FCbermittelte oder gespeicherte fremde Informationen zu \u00FCberwachen."}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Haftung f&uuml;r Links
            </h2>
            <p className="mt-2">
              {"Unser Angebot enth\u00E4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00F6nnen wir f\u00FCr diese fremden Inhalte auch keine Gew\u00E4hr \u00FCbernehmen. F\u00FCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
