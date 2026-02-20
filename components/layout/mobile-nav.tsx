"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Philosophie", href: "/#philosophie" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "FAQ", href: "/#faq" },
  { label: "Anfahrt", href: "/#anfahrt" },
  { label: "Zeiten", href: "/#zeiten" },
  { label: "Kontakt", href: "/#kontakt" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-foreground"
          aria-label="Menu offnen"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left font-bold text-foreground">
            <svg width="220" height="48" viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-[160px] h-auto">
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

              <text x="0" y="30" className="brand primary" fontSize="22">
                Zahnarzt <tspan className="accent">D</tspan>old
              </text>
              <rect x="0" y="36" width="110" height="2" rx="1" fill="#1f9d84" opacity="0.25" />
            </svg>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={true}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground text-left transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg mt-4"
          >
            <a href="tel:+49762362484">
              <Phone className="mr-2 h-4 w-4" />
              Termin vereinbaren
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
