import { ArrowUpRight, BarChart3, Satellite, Sprout } from "lucide-react"
import Link from "next/link"
import { researchAreas } from "@/data/site-data"

const researchIcons = [Satellite, Sprout, BarChart3]

export function Research() {
  return (
    <section id="research" className="border-y border-border bg-secondary/25 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Research Areas
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Research at a glance
            </h2>
          </div>
          <p className="max-w-2xl leading-relaxed text-muted-foreground lg:justify-self-end">
            DAWL integrates field agronomy, weed science, remote sensing, and data
            analytics to study crop–weed systems and develop practical approaches
            for sustainable crop production.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {researchAreas.map((area, index) => {
            const Icon = researchIcons[index % researchIcons.length]
            return (
              <article
                key={area.title}
                className="rounded-2xl border border-border bg-background p-7 shadow-sm transition-colors hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {area.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary/45 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8">
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Learn more about our research approach
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
