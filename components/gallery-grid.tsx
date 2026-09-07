"use client"

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { createPortal } from "react-dom"
import { useEffect, useRef, useState } from "react"

const images = [
  { title: "Field research team", image: "/images/gallery/dawl-team-group-2026.jpg", position: "center 63%" },
  { title: "Field day from above", image: "/images/gallery/field-day-aerial-2024.jpg", position: "center" },
  { title: "UAV demonstration", image: "/images/gallery/drone-field-day-2024.jpg", position: "center" },
  { title: "Conference gathering", image: "/images/gallery/conference-group-2026.jpeg", position: "center" },
  { title: "UAV field team", image: "/images/gallery/uav-demo-team.jpg", position: "center 58%" },
  { title: "GNSS and UAV field demonstration", image: "/images/gallery/gnss-uav-field-demo.jpg", position: "center" },
  { title: "Multispectral sensing equipment", image: "/images/gallery/multispectral-sensor.jpg", position: "center" },
  { title: "Greenhouse research", image: "/images/gallery/greenhouse-tour.jpg", position: "center" },
  { title: "Field seeding demonstration", image: "/images/gallery/field-seeding-demo.jpg", position: "center" },
  { title: "Field discussion", image: "/images/gallery/field-conversation-2026.jpeg", position: "center" },
  { title: "Field tour from above", image: "/images/gallery/field-tour-aerial.jpg", position: "center" },
  { title: "Research fields", image: "/images/gallery/research-fields-aerial-2024.jpg", position: "center" },
]

const tileClasses = [
  "md:col-span-6 aspect-[16/10]",
  "md:col-span-3 aspect-[4/3]",
  "md:col-span-3 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
  "md:col-span-4 aspect-[4/3]",
]

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const active = activeIndex === null ? null : images[activeIndex]

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null)
      if (event.key === "ArrowRight") setActiveIndex((activeIndex + 1) % images.length)
      if (event.key === "ArrowLeft") setActiveIndex((activeIndex - 1 + images.length) % images.length)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [activeIndex])

  const next = () => activeIndex !== null && setActiveIndex((activeIndex + 1) % images.length)
  const previous = () => activeIndex !== null && setActiveIndex((activeIndex - 1 + images.length) % images.length)

  const lightbox = active && activeIndex !== null ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 p-3 opacity-0 animate-[lightbox-fade_180ms_ease-out_forwards] sm:p-5 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={active.title}
      onClick={() => setActiveIndex(null)}
      onTouchStart={(e) => { touchStartX.current = e.touches[0]?.clientX ?? null }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
        const distance = endX - touchStartX.current
        if (Math.abs(distance) > 55) distance < 0 ? next() : previous()
        touchStartX.current = null
      }}
    >
      <div className="absolute right-3 top-3 z-20 flex gap-2 sm:right-5 sm:top-5">
        <a href={active.image} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/20" aria-label="Open full-size image"><Maximize2 className="h-5 w-5" /></a>
        <button type="button" onClick={() => setActiveIndex(null)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/20" aria-label="Close image"><X className="h-6 w-6" /></button>
      </div>

      <button type="button" onClick={(e) => { e.stopPropagation(); previous() }} className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/20 sm:left-5" aria-label="Previous image"><ChevronLeft className="h-7 w-7" /></button>
      <button type="button" onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/20 sm:right-5" aria-label="Next image"><ChevronRight className="h-7 w-7" /></button>

      <div className="flex h-full w-full items-center justify-center px-10 py-12 opacity-0 animate-[lightbox-image_200ms_ease-out_20ms_forwards] sm:px-16" onClick={(e) => e.stopPropagation()}>
        <img src={active.image} alt={active.title} className="block max-h-[calc(100vh-6rem)] max-w-[calc(100vw-7rem)] rounded-lg object-contain shadow-2xl sm:max-h-[calc(100vh-5rem)] sm:max-w-[calc(100vw-9rem)]" />
      </div>
    </div>
  ) : null

  return (
    <>
      <section className="bg-secondary/15 pb-10 pt-4 md:pb-12 md:pt-5">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:gap-4">
            {images.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative block w-full overflow-hidden rounded-2xl bg-muted text-left ${tileClasses[index] || "md:col-span-4 aspect-[4/3]"}`}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.015]"
                  style={{ objectPosition: item.position }}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {mounted && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  )
}
