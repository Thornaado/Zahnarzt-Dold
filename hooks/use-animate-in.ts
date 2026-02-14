"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Lightweight IntersectionObserver-based scroll animation hook.
 * Replaces framer-motion's whileInView with zero dependencies.
 * Returns a ref to attach to the element and a boolean for visibility.
 */
export function useAnimateIn<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number
  rootMargin?: string
  once?: boolean
}) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } = options ?? {}
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
