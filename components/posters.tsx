import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { posters } from "@/data/site-data"
import { getApprovedPosters } from "@/lib/google-sheet"

function normalizeTitle(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
}

export async function Posters() {
  const sheetPosters = await getApprovedPosters()
  const combined = [...sheetPosters, ...posters]

  const allPosters = Array.from(
    combined.reduce((map, poster) => {
      const key = normalizeTitle(poster.title)
      if (!map.has(key)) map.set(key, poster)
      return map
    }, new Map<string, (typeof combined)[number]>()).values(),
  ).sort((a, b) => {
    const yearDiff = Number.parseInt(b.year || "0", 10) - Number.parseInt(a.year || "0", 10)
    if (yearDiff !== 0) return yearDiff
    return a.title.localeCompare(b.title)
  })

  const featuredPosters = allPosters.slice(0, 4)
  if (featuredPosters.length === 0) return null

  return (
    <section id="posters" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Posters & Abstracts
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Research posters and abstracts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Explore selected DAWL posters and conference research materials.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosters.map((poster) => (
            <article
              key={normalizeTitle(poster.title)}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <Link href={poster.pdf} target="_blank" rel="noopener noreferrer">
                <div className="relative h-[260px] overflow-hidden border-b border-border bg-secondary">
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

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    {poster.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{poster.year}</span>
                </div>

                <h3 className="text-base font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary line-clamp-3">
                  <Link
                    href={poster.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {poster.title}
                  </Link>
                </h3>

                <Link
                  href={poster.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  View poster
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/posters"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View all posters & abstracts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
