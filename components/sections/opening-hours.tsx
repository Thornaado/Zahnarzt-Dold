"use client"

import { Clock } from "lucide-react"
import { motion } from "framer-motion"

export function OpeningHours() {
    return (
        <section id="zeiten" className="bg-secondary/30 py-16 lg:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-8"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                            <Clock className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                            Öffnungszeiten
                        </h2>
                    </div>

                    <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                        >
                            <h3 className="text-xl font-semibold text-foreground">Vormittags</h3>
                            <p className="text-lg font-medium text-muted-foreground">Mo. bis Fr.</p>
                            <p className="text-2xl font-bold text-accent">8:30 – 11:00 Uhr</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                        >
                            <h3 className="text-xl font-semibold text-foreground">Nachmittags</h3>
                            <p className="text-lg font-medium text-muted-foreground">Mo. bis Do.</p>
                            <p className="text-2xl font-bold text-accent">14:00 – 16:00 Uhr</p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-sm text-muted-foreground italic"
                    >
                        {"Freitagnachmittag ist unsere Praxis geschlossen."}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
