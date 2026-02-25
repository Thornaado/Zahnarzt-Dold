import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Toaster } from "sonner"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { ScrollToTopOnMount } from "@/components/layout/scroll-to-top-on-mount"
import { LocalBusinessSchema } from "@/components/seo/local-business-schema"
import { MobileActionBar } from "@/components/layout/mobile-action-bar"
import { StickySidebar } from "@/components/ui/sticky-sidebar"
import { cn } from "@/lib/utils"
import Script from "next/script"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zahnarzt-dold.vercel.app'),
  title: "Zahnarzt Dold Rheinfelden | Ihre Praxis für nachhaltige Zahnheilkunde",
  description:
    "Moderne Zahnarztpraxis in Rheinfelden (Baden). Wir setzen auf Zahnerhalt, Prophylaxe und eine persönliche Behandlung. Jetzt Termin vereinbaren: 07623 62484.",
  keywords: [
    "Zahnarzt Rheinfelden",
    "Zahnarztpraxis Rheinfelden Baden",
    "Zahnersatz",
    "Prophylaxe",
    "Zahnreinigung Rheinfelden",
    "Dr. Dold",
  ],
  openGraph: {
    title: "Zahnarzt Dold Rheinfelden | Ihre Praxis für nachhaltige Zahnheilkunde",
    description:
      "Moderne Zahnarztpraxis in Rheinfelden (Baden). Wir setzen auf Zahnerhalt, Prophylaxe und eine persönliche Behandlung. Jetzt Termin vereinbaren: 07623 62484.",
    images: ["/team.png"],
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#2C3E50",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={cn(geistSans.variable, "overflow-x-hidden")}>
      <body className="font-sans antialiased pb-20 md:pb-0 overflow-x-hidden">
        <ScrollToTopOnMount />
        <LocalBusinessSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <StickySidebar />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileActionBar />
        <BackToTop />
        <Toaster theme="light" position="top-right" richColors />
        <Script id="voiceflow-widget" strategy="afterInteractive">
          {`
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '6856f7c4466a50b614777bb4' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    },
                    render: {
                      offsetX: 12,
                      offsetY: 12
                    }
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `}
        </Script>
      </body>
    </html>
  )
}
