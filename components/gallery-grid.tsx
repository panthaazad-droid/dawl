"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const images = [
  { title: "Field research team", image: "/images/gallery/dawl-team-group-2026.jpg", position: "center 68%", wide: true },
  { title: "Aerial team photo", image: "/images/gallery/team-aerial-2026.jpg", position: "center 44%", wide: true },
  { title: "Field discussion", image: "/images/gallery/field-conversation-2026.jpeg", position: "center" },
  { title: "UAV in the field", image: "/images/gallery/uav-closeup-2026.jpeg", position: "center" },
  { title: "UAV field operation", image: "/images/gallery/uav-flight-wide-2026.jpg", position: "center", wide: true },
  { title: "Conference gathering", image: "/images/gallery/conference-group-2026.jpeg", position: "center", wide: true },
  { title: "Research fields", image: "/images/gallery/research-fields-aerial-2024.jpg", position: "center", wide: true },
  { title: "Multispectral sensing equipment", image: "/images/gallery/multispectral-sensor.jpg", position: "center" },
  { title: "Field data collection", image: "/images/gallery/field-data-collection.jpg", position: "center" },
  { title: "Research plots from above", image: "/images/gallery/research-plots-drone-view.jpg", position: "center", wide: true },
  { title: "Fieldwork team moment", image: "/images/gallery/team-field-selfie.jpg", position: "center" },
]

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const active = activeIndex === null ? null : images[activeIndex]

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

  return (
    <>
      <section className="bg-secondary/20 py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid auto-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-muted text-left ${item.wide ? "sm:col-span-2" : ""}`}
                aria-label={`Open ${item.title}`}
              >
                <div className={item.wide ? "aspect-[16/8]" : "aspect-[4/3]"}>
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.015]" style={{ objectPosition: item.position }} sizes={item.wide ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-3 md:p-6"
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
          <div className="absolute right-4 top-4 z-20 flex gap-2">
            <a href={active.image} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/20" aria-label="Open full-size image"><Maximize2 className="h-5 w-5" /></a>
            <button type="button" onClick={() => setActiveIndex(null)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/20" aria-label="Close image"><X className="h-6 w-6" /></button>
          </div>
          <button type="button" onClick={(e) => { e.stopPropagation(); previous() }} className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/20 md:left-6" aria-label="Previous image"><ChevronLeft className="h-7 w-7" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/20 md:right-6" aria-label="Next image"><ChevronRight className="h-7 w-7" /></button>
          <div className="relative h-[86vh] w-[92vw] max-w-[1600px]" onClick={(e) => e.stopPropagation()}>
            <Image src={active.image} alt={active.title} fill className="object-contain" sizes="94vw" priority />
          </div>
        </div>
      )}
    </>
  )
}
