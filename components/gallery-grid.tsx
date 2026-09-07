"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect, useState } from "react"
import { galleryImages } from "@/data/site-data"

const removedImages = new Set([
  "/images/gallery/research-plots-aerial.jpg",
  "/images/gallery/drone-lab-activity.jpg",
  "/images/gallery/conference-team.jpg",
  "/images/gallery/research-presentation.jpg",
])

const images = galleryImages.filter((item) => !removedImages.has(item.image))

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex === null ? null : images[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null)
      if (event.key === "ArrowRight") setActiveIndex((activeIndex + 1) % images.length)
      if (event.key === "ArrowLeft") setActiveIndex((activeIndex - 1 + images.length) % images.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeIndex])

  return (
    <>
      <section className="bg-secondary/20 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((item, index) => {
              const isGroup = item.image.includes("dawl-team-group")
              return (
                <button key={item.image} type="button" onClick={() => setActiveIndex(index)} className={`group relative overflow-hidden rounded-2xl border border-border bg-muted text-left ${isGroup ? "sm:col-span-2 lg:col-span-2" : ""}`} aria-label={`Open ${item.title}`}>
                  <div className={isGroup ? "aspect-[16/7]" : "aspect-[4/3]"}>
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.015]" style={{ objectPosition: isGroup ? "center 58%" : "center" }} sizes={isGroup ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"} />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {active && activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActiveIndex(null)}>
          <button type="button" onClick={() => setActiveIndex(null)} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close image"><X className="h-6 w-6" /></button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); setActiveIndex((activeIndex - 1 + images.length) % images.length) }} className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-6" aria-label="Previous image"><ChevronLeft className="h-7 w-7" /></button>
              <button type="button" onClick={(e) => { e.stopPropagation(); setActiveIndex((activeIndex + 1) % images.length) }} className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-6" aria-label="Next image"><ChevronRight className="h-7 w-7" /></button>
            </>
          )}
          <div className="relative h-[80vh] w-[88vw] max-w-7xl" onClick={(e) => e.stopPropagation()}>
            <Image src={active.image} alt={active.title} fill className="object-contain" sizes="90vw" priority />
          </div>
        </div>
      )}
    </>
  )
}
