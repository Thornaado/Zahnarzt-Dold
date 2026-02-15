import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Datenschutz | Zahnarzt Dold",
  description: "Datenschutzerkl\u00E4rung der Zahnarztpraxis Dr. med. dent. Christian Dold in Rheinfelden.",
}

export default function DatenschutzPage() {
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
          {"Datenschutzerkl\u00E4rung"}
        </h1>

        <div className="mt-8 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              {"Verantwortlich f\u00FCr die Datenverarbeitung auf dieser Website ist:"}
              <br />
              <br />
              Dr. med. dent. Christian Dold
              <br />
              Friedrichstr. 23
              <br />
              79618 Rheinfelden
              <br />
              E-Mail: praxis@zahnarzt-dold.de
              <br />
              Telefon: 07623 62484
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="mt-2">
              {"Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und \u00C4hnliches. Hierbei handelt es sich ausschlie\u00DFlich um Informationen, welche keine R\u00FCckschl\u00FCsse auf Ihre Person zulassen."}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              3. Cookies
            </h2>
            <p className="mt-2">
              {"Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Die meisten der von uns verwendeten Cookies sind sogenannte Session-Cookies, die nach Ende Ihres Besuchs automatisch gel\u00F6scht werden."}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              4. Kontaktformular
            </h2>
            <p className="mt-2">
              {"Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f\u00FCr den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              5. Rechte der betroffenen Person
            </h2>
            <p className="mt-2">
              {"Sie haben das Recht, jederzeit unentgeltlich Auskunft \u00FCber Herkunft, Empf\u00E4nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au\u00DFerdem ein Recht, die Berichtigung oder L\u00F6schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k\u00F6nnen Sie diese Einwilligung jederzeit f\u00FCr die Zukunft widerrufen."}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {"6. Aufsichtsbeh\u00F6rde"}
            </h2>
            <p className="mt-2">
              {"Sollten Sie der Ansicht sein, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verst\u00F6\u00DFt oder Ihre datenschutzrechtlichen Anspr\u00FCche in einer anderen Weise verletzt worden sind, k\u00F6nnen Sie sich bei der zust\u00E4ndigen Aufsichtsbeh\u00F6rde beschweren. In Baden-W\u00FCrttemberg ist dies der Landesbeauftragte f\u00FCr den Datenschutz und die Informationsfreiheit."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
