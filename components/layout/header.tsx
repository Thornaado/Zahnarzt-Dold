"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/layout/mobile-nav"

const navLinks = [
  { label: "Philosophie", href: "/#philosophie" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "FAQ", href: "/#faq" },
  { label: "Anfahrt", href: "/#anfahrt" },
  { label: "Zeiten", href: "/#zeiten" },
  { label: "Kontakt", href: "/#kontakt" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 flex h-16 items-center transition-all duration-300 ease-out ${scrolled
        ? "border-b border-border bg-background/95 backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link
          href="/"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          aria-label="Zur Startseite"
        >
          <svg width="220" height="48" viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-[180px] h-auto lg:w-[220px]">
            <style>
              {`
                .brand {
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                  font-weight: 600;
                  letter-spacing: 0.5px;
                }
                .primary {
                  fill: #111827; /* dark modern navy */
                }
                .accent {
                  fill: #1f9d84; /* soft medical green */
                  font-weight: 700;
                }
              `}
            </style>

            {/* Main Brand Name */}
            <text x="0" y="30" className="brand primary" fontSize="22">
              Zahnarzt <tspan className="accent">D</tspan>old
            </text>

            {/* Subtle underline accent */}
            <rect x="0" y="36" width="110" height="2" rx="1" fill="#1f9d84" opacity="0.25" />
          </svg>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={true}
              className="group relative text-lg font-bold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-2 h-[2px] w-0 bg-accent transition-all duration-300 ease-in-out group-hover:w-[calc(100%-16px)]" />
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg"
            size="sm"
          >
            <a href="tel:+49762362484">
              <Phone className="mr-2 h-4 w-4" />
              Termin vereinbaren
            </a>
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}
