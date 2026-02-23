import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id))
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options || {
      rootMargin: "-25% 0% -70% 0%",
      threshold: 0,
    })

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return activeId
}
