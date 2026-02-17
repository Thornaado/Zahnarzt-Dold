"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShieldCheck, MessageCircle } from "lucide-react"

const philosophyItems = [
    {
        title: "Der Mensch im Fokus",
        content: "„Dabei lassen wir aber nicht außer Acht, dass zu jedem Zahn auch ein Mensch gehört.“ Wir behandeln Sie so, wie wir uns auch selbst behandeln würden.",
        icon: Heart,
    },
    {
        title: "Nachhaltigkeit vor Schnelligkeit",
        content: "Die Nachhaltigkeit unserer Behandlung ist uns wichtiger als kurzfristige Ziele. Wir versuchen möglichst viel „Eigenes“ zu erhalten und ziehen zum Beispiel einen funktionstüchtigen Zahn einem Implantat vor.",
        icon: ShieldCheck,
    },
    {
        title: "Transparente Kommunikation",
        content: "Voraussetzung ist eine individuelle Therapieplanung und ein persönliches Gespräch, bei dem Sie in aller Ruhe verständlich und sachlich über Behandlungsphasen und Möglichkeiten aufgeklärt werden.",
        icon: MessageCircle,
    },
]

export function Philosophy() {
    return (
        <section id="philosophie" className="bg-secondary/50 py-16 lg:py-24 overflow-hidden relative">
            {/* Decorative background shapes */}
            <div className="absolute top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-[1440px] px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <div className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/team.png"
                                alt="Das Team der Zahnarztpraxis Dold in Rheinfelden (Baden)"
                                width={800}
                                height={1000}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -bottom-6 -left-6 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl opacity-50" />
                    </motion.div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground lg:text-4xl 2xl:text-5xl text-balance">
                                Nachhaltige Zahnheilkunde mit Herz
                            </h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl lg:text-lg 2xl:text-xl">
                                Wir kümmern uns primär um Ihre orale Gesundheit, dazu gehören Zähne, Zahnhalteapparat, Kieferknochen, Mundschleimhaut, Speicheldrüsen, Muskulatur und Kiefergelenk.
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-6 w-full">
                            {philosophyItems.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                                    >
                                        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
                                            <div className="flex-shrink-0 rounded-lg bg-accent/10 p-2 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground 2xl:text-2xl">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:text-base 2xl:text-lg">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
