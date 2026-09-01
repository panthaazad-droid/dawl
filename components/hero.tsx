import Image from "next/image"
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Satellite,
  Sprout,
} from "lucide-react"
import Link from "next/link"
import { heroConfig, heroFeatures, siteConfig } from "@/data/site-data"

const iconMap = {
  satellite: Satellite,
  database: BarChart3,
  leaf: Sprout,
}

export function Hero() {
  const hasBackgroundImage =
    heroConfig.useBackgroundImage && heroConfig.backgroundImage

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {hasBackgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={heroConfig.backgroundImage}
            alt="Aerial view of agricultural research fields"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/62 to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.12),transparent_30%)]" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            {/* University affiliation block */}
            <Link
              href="https://umanitoba.ca/agricultural-food-sciences/plant-science"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the University of Manitoba Department of Plant Science website"
              className="group mb-8 inline-flex max-w-xl items-center gap-5 rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/15 hover:shadow-2xl"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white p-2 shadow-sm md:h-24 md:w-24">
                <Image
                  src="/images/brand/umanitoba-crest.png"
                  alt="University of Manitoba logo"
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                  priority
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold leading-tight md:text-2xl">
                    {siteConfig.university}
                  </p>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/55 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>

                <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-white/72 md:text-sm">
                  {siteConfig.department}
                </p>
              </div>
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-balance text-white">
              {siteConfig.labName}
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed text-white/90">
              {siteConfig.tagline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#research"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                Explore Our Research
              </Link>

              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Join Our Team
              </Link>
            </div>
          </div>

          {/* Stable feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {heroFeatures.map((feature, index) => {
              const Icon =
                iconMap[feature.icon as keyof typeof iconMap] || Sprout
              const isLast = index === heroFeatures.length - 1

              return (
                <Link
                  href="/#research"
                  key={feature.title}
                  className={`group rounded-2xl border border-white/18 bg-white/10 p-5 text-white shadow-lg backdrop-blur-md transition-colors hover:border-white/36 hover:bg-white/14 ${
                    isLast ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/18 text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-semibold leading-tight">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-white/75">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/55 transition-colors group-hover:text-white" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <Link
        href="/#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </Link>
    </section>
  )
}