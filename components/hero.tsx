import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { heroConfig, siteConfig } from "@/data/site-data"

export function Hero() {
  const hasBackgroundImage = heroConfig.useBackgroundImage && heroConfig.backgroundImage

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden pt-16">
      {hasBackgroundImage ? (
        <div className="absolute inset-0">
          <Image src={heroConfig.backgroundImage} alt="Aerial view of agricultural research plots and Prairie fields" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/56 to-black/25" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-secondary/50" />
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <Link href="https://umanitoba.ca/agricultural-food-sciences/plant-science" target="_blank" rel="noopener noreferrer" className="group mb-7 inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md transition-colors hover:bg-white/15">
            <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white p-1.5">
              <Image src="/images/brand/umanitoba-crest.png" alt="University of Manitoba logo" fill className="object-contain p-1.5" sizes="56px" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold">{siteConfig.university}<ArrowUpRight className="h-4 w-4 text-white/60" /></div>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">{siteConfig.department}</p>
            </div>
          </Link>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">{siteConfig.labName}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/88 md:text-xl">{siteConfig.tagline}</p>

          <div className="mt-8">
            <Link href="/#research" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90">Our work</Link>
          </div>
        </div>
      </div>

      <Link href="/#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/70 hover:text-white" aria-label="Scroll to next section">
        <ArrowDown className="h-6 w-6" />
      </Link>
    </section>
  )
}
