"use client"

import { useEffect, useState } from "react"

const items = [
  { id: "journal-publications", label: "Journal publications" },
  { id: "posters", label: "Posters & abstracts" },
]

export function PublicationSectionNav() {
  const [active, setActive] = useState("journal-publications")

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-140px 0px -55% 0px", threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const jumpTo = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="sticky top-14 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl gap-2 px-6 py-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => jumpTo(item.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active === item.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
