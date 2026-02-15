"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/layout/mobile-nav"

const navLinks = [
  { label: "Philosophie", href: "#philosophie" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
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

  const handleCTA = () => {
    toast.success("Erfolg! Terminbuchung wird geladen...")
  }

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
          className="text-lg font-bold tracking-tight text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Zahnarzt Dold
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={handleCTA}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg"
            size="sm"
          >
            Termin online buchen
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}
