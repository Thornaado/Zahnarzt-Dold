"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const sections = [
    { id: "philosophie", label: "Philosophie" },
    { id: "leistungen", label: "Leistungen" },
    { id: "faq", label: "FAQ" },
    { id: "anfahrt", label: "Anfahrt" },
    { id: "zeiten", label: "Zeiten" },
    { id: "kontakt", label: "Kontakt" },
]

export function StickySidebar() {
    const activeSection = useScrollSpy(sections.map((s) => s.id))

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const headerOffset = 80 // Adjust based on header height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="fixed right-0 md:right-4 top-1/2 z-[60] -translate-y-1/2 w-10 flex flex-col items-center pointer-events-none">
            <nav className="flex flex-col gap-6 items-center pointer-events-none">
                {sections.map((section) => {
                    const isActive = activeSection === section.id
                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="group flex items-center justify-center pointer-events-auto transition-all duration-300"
                            aria-label={`Scroll to ${section.label}`}
                        >
                            <div
                                className={cn(
                                    "relative h-3 w-3 rounded-full border-2 transition-all duration-300",
                                    isActive
                                        ? "bg-accent border-accent scale-125 shadow-[0_0_10px_rgba(176,75,209,0.5)]"
                                        : "border-accent/40 group-hover:border-accent group-hover:scale-110"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-ring"
                                        className="absolute -inset-1 rounded-full border border-accent/30"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1.2, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </div>
                        </button>
                    )
                })}
            </nav>
        </div>
    )
}
