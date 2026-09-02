import Image from "next/image"
import { ArrowDown, ArrowUpRight, BarChart3, Satellite, Sprout } from "lucide-react"
import Link from "next/link"
import { heroConfig, heroFeatures, siteConfig } from "@/data/site-data"

const iconMap = {
  satellite: Satellite,
  database: BarChart3,
  leaf: Sprout,
}

export function Hero() {
  const hasBackgroundImage = heroConfig.useBackgroundImage && heroConfig.backgroundImage

  return (
    <section className="relative min-h-[88vh] overflow-hidden pt-20">
      {hasBackgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={heroConfig.backgroundImage}
            alt="Aerial view of agricultural research fields"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/60 to-black/42" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      )}

      <div className="relative z-10 mx-auto flex min-h-[calc(88vh-5rem)] max-w-7xl items-center px-6 py-20 md:py-24">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-3xl">
            <Link
              href="https://umanitoba.ca/agricultural-food-sciences/plant-science"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the University of Manitoba Department of Plant Science website"
              className="group mb-8 inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-black/15 px-4 py-3 text-white backdrop-blur-md transition-colors hover:bg-black/25"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white p-1.5">
                <Image
                  src="/images/brand/umanitoba-crest.png"
                  alt="University of Manitoba logo"
                  fill
                  className="object-contain p-1.5"
                  sizes="56px"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold md:text-lg">{siteConfig.university}</p>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/60 transition-colors group-hover:text-white" />
                </div>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 md:text-xs">
                  {siteConfig.department}
                </p>
              </div>
            </Link>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              Digital Agronomy & Weed Science
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
              {siteConfig.labName}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              {siteConfig.tagline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#research"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                Explore Research
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                About DAWL
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/18 bg-black/20 p-6 text-white backdrop-blur-md md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Research Focus
            </p>
            <div className="mt-5 divide-y divide-white/15">
              {heroFeatures.map((feature) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || Sprout
                return (
                  <div key={feature.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold">{feature.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </aside>
        </div>
      </div>

      <Link
        href="/#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </Link>
    </section>
  )
}
