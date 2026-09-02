export const revalidate = 180

import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { posters } from "@/data/site-data"
import { getApprovedPosters } from "@/lib/google-sheet"

export const metadata = {
  title: "Posters & Abstracts | Digital Agronomy and Weeds Lab",
  description:
    "Research posters and abstracts from the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

function normalizeTitle(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
}

function formatEvent(event: string, year: string) {
  const normalized = (event || "").trim().toLowerCase()
  if (normalized === "mac poster" || normalized.includes("manitoba agronomists conference")) {
    return `MAC ${year}`
  }
  return event
}

export default async function PostersPage() {
  const sheetPosters = await getApprovedPosters()
  const combined = [...sheetPosters, ...posters]

  const deduped = Array.from(
    combined.reduce((map, poster) => {
      const key = normalizeTitle(poster.title)
      if (!map.has(key)) map.set(key, poster)
      return map
    }, new Map<string, (typeof combined)[number]>()).values(),
  )

  const allPosters = deduped.sort((a, b) => {
    const yearDiff = Number.parseInt(b.year || "0", 10) - Number.parseInt(a.year || "0", 10)
    if (yearDiff !== 0) return yearDiff
    return a.title.localeCompare(b.title)
  })

  const accentClasses = [
    "from-emerald-700 to-green-500",
    "from-teal-700 to-cyan-500",
    "from-slate-800 to-blue-500",
    "from-lime-700 to-emerald-500",
    "from-zinc-800 to-stone-500",
    "from-green-800 to-teal-500",
  ]

  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>

              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Posters & Abstracts
              </p>

              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Research poster gallery
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Browse selected DAWL posters, abstracts, and conference research
                materials. Posters are arranged from newest to oldest.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allPosters.map((poster, index) => {
                const accent = accentClasses[index % accentClasses.length]
                const eventLabel = formatEvent(poster.event, poster.year)

                return (
                  <article
                    key={normalizeTitle(poster.title)}
                    className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className={`h-2 bg-gradient-to-r ${accent}`} />

                    <div className="p-4 pb-0">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>

                        <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] text-muted-foreground">
                          {poster.year}
                        </span>
                      </div>

                      <Link
                        href={poster.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={`Open ${poster.title} poster PDF`}
                      >
                        <div className="relative h-[260px] overflow-hidden rounded-2xl border border-border bg-muted">
                          {"preview" in poster && poster.preview ? (
                            <img
                              src={poster.preview}
                              alt={`${poster.title} poster preview`}
                              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015]"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground">
                              Poster preview available in the PDF
                            </div>
                          )}
                        </div>
                      </Link>
                    </div>

                    <div className="p-5">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                          {poster.type}
                        </span>

                        {eventLabel && (
                          <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                            {eventLabel}
                          </span>
                        )}
                      </div>

                      <h2 className="min-h-[4.25rem] text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary line-clamp-3">
                        <Link
                          href={poster.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {poster.title}
                        </Link>
                      </h2>

                      <p className="mt-3 min-h-[2rem] text-xs text-muted-foreground line-clamp-2">
                        {poster.authors}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <Link
                          href={poster.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          Open PDF
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>

                        <a
                          href={poster.pdf}
                          download
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium transition-colors hover:bg-secondary"
                        >
                          Download
                          <Download className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
