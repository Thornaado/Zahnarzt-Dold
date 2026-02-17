"use client"

import { motion } from "framer-motion"
import { Car, Map, ParkingCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Directions() {
    // Google Maps Embed URL for Friedrichstraße 23, 79618 Rheinfelden
    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.5898083863773!2d7.788540476882658!3d47.540166692348584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790327f9a1c1303%3A0xc3f345330e86b0d9!2sFriedrichstraße%2023%2C%2079618%20Rheinfelden%20(Baden)!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"

    // Direct Directions URL for the button
    const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Friedrichstraße+23+79618+Rheinfelden+(Baden)"

    return (
        <section id="anfahrt" className="bg-background py-16 lg:py-24 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[400px] lg:h-full min-h-[450px] w-full"
                    >
                        <iframe
                            src={googleMapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl shadow-xl transition-all duration-300 grayscale-[20%] hover:grayscale-0"
                            title="Praxis Standort"
                        />
                    </motion.div>

                    {/* Right Column: Directions Text */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
                                Ihre Anfahrt zu uns
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Zentral gelegen in der Friedrichstraße
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-8 w-full">
                            {/* Section 1: Autobahn */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <Car className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">Anreise über die Autobahn</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:text-base max-w-lg">
                                        Auf der A98 die Ausfahrt Rheinfelden-Süd (grenznahe Ausfahrt) nehmen. Links abbiegen Richtung Rheinfelden (B34).
                                        Dem Straßenverlauf folgen, direkt nach der Eisenbahnunterführung rechts halten.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Section 2: Bundesstraße */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <Map className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">Anreise über die Bundesstraße</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:text-base max-w-lg">
                                        Nach der Ampel (Friedrichsplatz) befindet sich die Praxis an der 2. Kreuzung links (Höhe Blumen Kaiser).
                                        Die Praxis liegt direkt an der Ortsdurchfahrt der B34.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Section 3: Parking */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <ParkingCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">Kostenlose Parkplätze</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:text-base max-w-lg">
                                        Kostenlose Parkplätze stehen rund um das Gebäude zur Verfügung.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex justify-center lg:justify-start"
                        >
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-lg border-accent text-accent hover:bg-accent/5 hover:text-accent font-semibold transition-all duration-300"
                            >
                                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                                    Route in Google Maps öffnen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
