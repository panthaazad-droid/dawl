import Image from "next/image"
import { ArrowUpRight, BarChart3, Satellite, Sprout } from "lucide-react"
import Link from "next/link"
import { researchAreas } from "@/data/site-data"

const researchVisuals = [
  {
    icon: Satellite,
    image: "/posters/previews/Pantha_MAC_Poster.jpg",
    label: "Remote sensing systems",
    position: "object-[50%_52%]",
  },
  {
    icon: Sprout,
    image: "/posters/previews/Shamima_Sultana_Kochia_Seed_Production.jpg",
    label: "Integrated weed management",
    position: "object-[50%_42%]",
  },
  {
    icon: BarChart3,
    image: "/posters/previews/Kenneth_CPWC_2026_Critical_Weed_Control.jpg",
    label: "Analytics and digital tools",
    position: "object-[50%_48%]",
  },
]

export function Research() {
  return (
    <section id="research" className="bg-secondary/35 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Research Areas
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Where field science meets digital agriculture
            </h2>
          </div>
          <p className="max-w-2xl text-muted-foreground leading-relaxed lg:justify-self-end">
            DAWL combines agronomy, weed science, UAV-based sensing, and data
            analytics to understand crop–weed systems and develop practical,
            field-scale decision tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {researchAreas.map((area, index) => {
            const visual = researchVisuals[index % researchVisuals.length]
            const Icon = visual.icon

            return (
              <article
                key={area.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={visual.image}
                    alt="DAWL research visualization"
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.035] ${visual.position}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/25 text-white backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                      {visual.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <p className="leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/about"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Explore our approach
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
