import { ArrowRight, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { posters } from "@/data/site-data"
import { getApprovedPosters } from "@/lib/google-sheet"

export async function Posters() {
  const sheetPosters = await getApprovedPosters()
  const allPosters = [...sheetPosters, ...posters]

  // Shows up to 4 posters on the homepage
  const featuredPosters = allPosters.slice(0, 4)

  if (featuredPosters.length === 0) {
    return null
  }

  return (
    <section id="posters" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Posters & Abstracts
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Research posters and abstracts
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore selected DAWL posters, abstracts, and conference research
            materials. Poster PDFs can be opened in a new tab or downloaded.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosters.map((poster, index) => (
            <article
              key={`${poster.title}-${index}`}
              className="group rounded-2xl border border-border bg-card shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-[260px] bg-secondary border-b border-border overflow-hidden">
                {"preview" in poster && poster.preview ? (
                  <img
                    src={poster.preview}
                    alt={`${poster.title} poster preview`}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground">
                    Poster preview available in the PDF
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    {poster.type}
                  </span>

                  <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                    {poster.year}
                  </span>
                </div>

                <h3 className="text-base font-semibold tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-3">
                  {poster.title}
                </h3>

                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                  {poster.event}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={poster.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Open
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>

                  <a
                    href={poster.pdf}
                    download
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium hover:bg-secondary transition-colors"
                  >
                    Download
                    <Download className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/posters"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg"
          >
            View all posters & abstracts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}