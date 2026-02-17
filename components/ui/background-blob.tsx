import { cn } from "@/lib/utils"

interface BackgroundBlobProps {
    position: "left" | "right"
    className?: string
}

export function BackgroundBlob({ position, className }: BackgroundBlobProps) {
    return (
        <div
            className={cn(
                "absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none z-0",
                position === "left" ? "-left-32 sm:-left-64" : "-right-32 sm:-right-64",
                className
            )}
            aria-hidden="true"
        />
    )
}
