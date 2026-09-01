"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { galleryImages } from "@/data/site-data"

const categories = [
  "All",
  "Field Work",
  "Drone & Remote Sensing",
  "Lab Activities",
  "Conferences & Posters",
  "Team & Fun Time",
  "Outreach / Field Days",
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryImages
    return galleryImages.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:border-primary/40 hover:bg-background"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredImages.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((item, index) => (
              <a
                key={`${item.image}-${index}`}
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-semibold leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>

                    <span className="text-sm font-mono text-primary/60">
                      {item.year}
                    </span>
                  </div>

                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-background p-12 text-center">
            <p className="text-muted-foreground">
              No gallery items have been added to this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}