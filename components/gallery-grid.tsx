"use client"

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { createPortal } from "react-dom"
import { useEffect, useMemo, useRef, useState } from "react"
import { galleryImages } from "@/data/gallery-images"

type GalleryImage = (typeof galleryImages)[number]
type GalleryRow = { images: GalleryImage[]; height: number; fill: boolean }

function makeRows(images: readonly GalleryImage[], containerWidth: number) {
  if (!containerWidth) return [] as GalleryRow[]
  const gap = containerWidth < 640 ? 8 : 12
  const target = containerWidth < 520 ? 145 : containerWidth < 900 ? 185 : 235
  const minHeight = target * 0.72
  const maxHeight = target * 1.35
  const rows: GalleryRow[] = []
  let row: GalleryImage[] = []
  let ratioSum = 0

  images.forEach((image, index) => {
    row.push(image)
    ratioSum += image.width / image.height
    const projected = ratioSum * target + gap * (row.length - 1)
    const isLast = index === images.length - 1

    if (projected >= containerWidth || isLast) {
      let height = (containerWidth - gap * (row.length - 1)) / ratioSum
      const fill = !isLast || row.length >= 3
      if (!fill) height = Math.min(target, height)
      height = Math.max(minHeight, Math.min(maxHeight, height))
      rows.push({ images: row, height, fill })
      row = []
      ratioSum = 0
    }
  })

  return rows
}

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const touchStartX = useRef<number | null>(null)
  const active = activeIndex === null ? null : galleryImages[activeIndex]
  const rows = useMemo(() => makeRows(galleryImages, width), [width])

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const update = () => setWidth(node.clientWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null)
      if (event.key === "ArrowRight") setActiveIndex((activeIndex + 1) % galleryImages.length)
      if (event.key === "ArrowLeft") setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [activeIndex])

  const next = () => activeIndex !== null && setActiveIndex((activeIndex + 1) % galleryImages.length)
  const previous = () => activeIndex !== null && setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length)

  let runningIndex = 0

  const lightbox = active && activeIndex !== null ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 opacity-0 animate-[lightbox-fade_180ms_ease-out_forwards]"
      role="dialog"
      aria-modal="true"
      aria-label={active.alt}
      onClick={() => setActiveIndex(null)}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return
        const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
        const distance = endX - touchStartX.current
        if (Math.abs(distance) > 55) distance < 0 ? next() : previous()
        touchStartX.current = null
      }}
    >
      <div className="absolute right-3 top-3 z-20 flex gap-2 sm:right-5 sm:top-5">
        <a href={active.src} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/20" aria-label="Open full-size image"><Maximize2 className="h-5 w-5" /></a>
        <button type="button" onClick={() => setActiveIndex(null)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/20" aria-label="Close image"><X className="h-6 w-6" /></button>
      </div>
      <button type="button" onClick={(event) => { event.stopPropagation(); previous() }} className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/20 sm:left-5" aria-label="Previous image"><ChevronLeft className="h-7 w-7" /></button>
      <button type="button" onClick={(event) => { event.stopPropagation(); next() }} className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/20 sm:right-5" aria-label="Next image"><ChevronRight className="h-7 w-7" /></button>
      <div className="flex h-full w-full items-center justify-center px-14 py-16 opacity-0 animate-[lightbox-image_200ms_ease-out_20ms_forwards] sm:px-20" onClick={(event) => event.stopPropagation()}>
        <img src={active.src} alt={active.alt} className="block max-h-[calc(100vh-5rem)] max-w-[calc(100vw-7rem)] rounded-lg object-contain shadow-2xl sm:max-w-[calc(100vw-10rem)]" />
      </div>
    </div>
  ) : null

  return (
    <>
      <section className="bg-background pb-12 pt-1 md:pb-14 md:pt-2">
        <div ref={containerRef} className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="space-y-2.5 md:space-y-3">
            {rows.map((row, rowIndex) => {
              const startIndex = runningIndex
              runningIndex += row.images.length
              return (
                <div key={rowIndex} className="flex w-full gap-2 md:gap-3" style={{ height: `${row.height}px`, justifyContent: row.fill ? "stretch" : "flex-start" }}>
                  {row.images.map((item, itemIndex) => {
                    const globalIndex = startIndex + itemIndex
                    const ratio = item.width / item.height
                    return (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setActiveIndex(globalIndex)}
                        className="group relative h-full min-w-0 overflow-hidden rounded-xl bg-muted text-left md:rounded-2xl"
                        style={{ width: `${ratio * row.height}px`, flexGrow: row.fill ? ratio : 0, flexShrink: 1 }}
                        aria-label={`Open gallery photo ${globalIndex + 1}`}
                      >
                        <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.012]" loading={globalIndex < 8 ? "eager" : "lazy"} />
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {mounted && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  )
}
