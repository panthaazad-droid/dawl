import {
  ArrowLeft,
  BarChart3,
  Crosshair,
  Dna,
  ScanLine,
  Sprout,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { researchAreas, selectedResearchProjects } from "@/data/site-data"

export const metadata = {
  title: "Research | Digital Agronomy and Weeds Lab",
  description:
    "Research themes and selected projects from the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

const icons = {
  crosshair: Crosshair,
  sprout: Sprout,
  scan: ScanLine,
  barChart: BarChart3,
  dna: Dna,
}

export default function ResearchPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="border-b border-border bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-4xl">
              <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>

              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Research
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Research at DAWL
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Our research connects weed science and agronomy with remote
                sensing, precision technologies, and data analytics to develop
                practical approaches for sustainable crop and weed management.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {researchAreas.map((area) => {
                const Icon = icons[area.icon as keyof typeof icons] || Sprout

                return (
                  <article
                    key={area.title}
                    className="rounded-2xl border border-border bg-background p-7 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                      {area.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
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
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Selected Current Work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                From research themes to field projects
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Examples of current DAWL projects show how these themes are
                translated into field experiments, sensing workflows, and
                management questions.
              </p>
            </div>

            <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              {selectedResearchProjects.map((project, index) => (
                <article
                  key={project.title}
                  className="grid gap-4 p-6 md:grid-cols-[70px_1fr] md:p-8"
                >
                  <span className="font-mono text-sm font-medium text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {project.theme}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
