import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Toaster } from "sonner"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "Zahnarzt Dold | Moderne Zahnmedizin in Rheinfelden",
  description:
    "Dr. med. dent. Christian Dold - Spezialisierte Fachkompetenz in Endodontie und Parodontologie in Rheinfelden.",
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
    <html lang="de" className={geistSans.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
        <Toaster theme="light" position="top-right" richColors />
      </body>
    </html>
  )
}
