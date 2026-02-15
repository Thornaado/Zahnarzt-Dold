"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    X,
    MapPin,
    CheckCircle2,
    FileText,
    Download,
    Info,
    ExternalLink
} from "lucide-react"

interface PatientInfoModalProps {
    trigger?: React.ReactNode
}

export function PatientInfoModal({ trigger }: PatientInfoModalProps) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => setIsOpen(!isOpen)

    const checklistItems = [
        {
            text: "Einen aktuellen, ausgefüllten Anamnesebogen, den Sie hier herunterladen können.",
            hasLink: true,
            linkText: "Anamnesebogen herunterladen",
            linkUrl: "#", // Placeholder for actual download link
        },
        { text: "Evtl. vorhandene Impf- und Allergieausweise." },
        { text: "Die Versichertenkarte." },
        { text: "Eine Liste Ihrer regelmäßig eingenommenen Medikamente." },
    ]

    return (
        <>
            {trigger ? (
                <div onClick={toggleModal}>{trigger}</div>
            ) : (
                <button
                    onClick={toggleModal}
                    className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/80 hover:shadow-md"
                >
                    Neu hier? Ihr erster Besuch
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleModal}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-card shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-border bg-muted/30 px-6 py-4">
                                <h2 className="text-xl font-bold text-foreground">Ihr erster Besuch</h2>
                                <button
                                    onClick={toggleModal}
                                    className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="max-h-[80vh] overflow-y-auto p-6 lg:p-8">
                                <div className="flex flex-col gap-8">
                                    {/* Location Section */}
                                    <section className="flex gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                Die Praxis befindet sich in Rheinfelden (Baden) in der Friedrichstr. 23.
                                                Nähe Blumen Kaiser und Hiebers Frische Center, im gleichen Haus mit dem
                                                Hausarztzentrum Friedrichstraße, Kieferorthopädie Möller und anderen.
                                                Kostenlose Parkplätze stehen rund um das Gebäude zur Verfügung.
                                            </p>
                                        </div>
                                    </section>

                                    {/* Checklist Section */}
                                    <section>
                                        <div className="mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-accent" />
                                            <h3 className="font-bold text-foreground">
                                                Checkliste: Was Sie mitbringen sollten
                                            </h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {checklistItems.map((item, index) => (
                                                <li key={index} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                                    <span>
                                                        {item.text}
                                                        {item.hasLink && (
                                                            <a
                                                                href={item.linkUrl}
                                                                className="ml-2 inline-flex items-center font-semibold text-accent hover:underline"
                                                            >
                                                                <span>{item.linkText}</span>
                                                                <Download className="ml-1 h-3 w-3" />
                                                            </a>
                                                        )}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Footer Note */}
                                    <section className="rounded-xl border border-border bg-muted/20 p-4">
                                        <div className="flex gap-3 text-xs leading-relaxed text-muted-foreground">
                                            <Info className="h-4 w-4 flex-shrink-0 text-accent" />
                                            <p>
                                                Sie benötigen zum Öffnen unseres Anamnesebogens den Adobe Acrobat Reader.
                                                Falls Sie ihn noch nicht besitzen, können Sie ihn{" "}
                                                <a
                                                    href="https://get.adobe.com/reader/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-semibold text-accent hover:underline inline-flex items-center"
                                                >
                                                    hier kostenlos herunterladen
                                                    <ExternalLink className="ml-1 h-3 w-3" />
                                                </a>.
                                            </p>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            {/* Bottom bar */}
                            <div className="border-t border-border bg-muted/30 px-6 py-4 flex justify-end">
                                <button
                                    onClick={toggleModal}
                                    className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                                >
                                    Verstanden
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
