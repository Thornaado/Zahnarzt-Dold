"use client"

import type { LucideIcon } from "lucide-react"
import { useAnimateIn } from "@/hooks/use-animate-in"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  const { ref, isVisible } = useAnimateIn({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-lg ${isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-8 opacity-0"
        }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="text-lg font-semibold leading-tight text-card-foreground lg:text-xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
        {description}
      </p>
    </div>
  )
}
