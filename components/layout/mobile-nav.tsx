"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Philosophie", href: "#philosophie" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "FAQ", href: "#faq" },
  { label: "Anfahrt", href: "#anfahrt" },
  { label: "Kontakt", href: "#kontakt" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      const target = document.querySelector(href)
      target?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  const handleCTA = () => {
    setOpen(false)
    toast.success("Erfolg! Terminbuchung wird geladen...")
  }

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
            Zahnarzt Dold
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-base font-medium text-foreground text-left transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={handleCTA}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg mt-4"
          >
            Termin online buchen
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
