"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function MobileActionBar() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show footer only after scrolling more than 300px
            setIsVisible(window.scrollY > 300)
        }

        // Initial check in case page starts scrolled down
        handleScroll()

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 100,
            }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] // Smooth cubic-bezier ease
            }}
            style={{ pointerEvents: isVisible ? "auto" : "none" }}
            className="fixed bottom-0 left-0 z-[40] w-full md:hidden"
        >
            <div className="flex bg-background/80 backdrop-blur-lg border-t border-border/50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] w-full relative">
                <Link
                    href="tel:+49762362484"
                    className="flex-1 flex flex-col items-center justify-center py-3 h-16 hover:bg-accent/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <Phone className="h-5 w-5 text-accent mb-1" />
                    <span className="text-xs font-medium text-foreground">Anrufen</span>
                </Link>
                <div className="h-full w-[1px] bg-border/50 absolute left-1/2 top-0" />
                <Link
                    href="https://www.google.com/maps/dir/?api=1&destination=Friedrichstraße+23+79618+Rheinfelden+(Baden)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center py-3 h-16 hover:bg-accent/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <MapPin className="h-5 w-5 text-accent mb-1" />
                    <span className="text-xs font-medium text-foreground">Anfahrt</span>
                </Link>
            </div>
        </motion.div>
    )
}

