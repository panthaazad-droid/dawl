import {
  ArrowRight,
  BarChart3,
  Crosshair,
  Dna,
  ScanLine,
  Sprout,
} from "lucide-react"
import Link from "next/link"
import { researchAreas } from "@/data/site-data"

const icons = {
  crosshair: Crosshair,
  sprout: Sprout,
  scan: ScanLine,
  barChart: BarChart3,
  dna: Dna,
}

export function Research() {
  return (
    <section id="research" className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Our Research
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Research themes
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              DAWL brings together weed science, agronomy, remote sensing, and
              data-driven technologies to address practical crop and weed
              management challenges in Prairie agriculture.
            </p>
          </div>

          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Explore our research
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {researchAreas.map((area) => {
            const Icon = icons[area.icon as keyof typeof icons] || Sprout

            return (
              <article
                key={area.title}
                className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/8 px-2.5 py-1 text-[11px] font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
