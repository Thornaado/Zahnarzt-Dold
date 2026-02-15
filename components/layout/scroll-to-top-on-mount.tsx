"use client"

import { useEffect } from "react"

export function ScrollToTopOnMount() {
    useEffect(() => {
        // Force the browser to scroll to the top on page load/refresh
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"
        }
        window.scrollTo(0, 0)
    }, [])

    return null
}
