import { BarChart3, Crosshair, Dna, ScanLine, Sprout } from "lucide-react"
import { researchAreas } from "@/data/site-data"

const icons = { crosshair: Crosshair, sprout: Sprout, scan: ScanLine, barChart: BarChart3, dna: Dna }

export function Research() {
  return (
    <section id="research" className="bg-secondary/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-9 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Research themes</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">We combine weed science, agronomy, remote sensing, and data-driven methods to study crop and weed management in Prairie agriculture.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {researchAreas.map((area) => {
            const Icon = icons[area.icon as keyof typeof icons] || Sprout
            return (
              <article key={area.title} className="rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/30">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-semibold leading-snug">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-4">{area.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
