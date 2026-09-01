import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { posters } from "@/data/site-data"
import { getApprovedPosters } from "@/lib/google-sheet"

export async function Posters() {
  const sheetPosters = await getApprovedPosters()
  const featuredPosters = [...sheetPosters, ...posters].slice(0, 4)
  if (featuredPosters.length === 0) return null

  return (
    <section id="posters" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Posters & Abstracts</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Research at a glance</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Selected conference posters showcasing current DAWL field studies, remote-sensing workflows, and agronomic findings.
            </p>
          </div>
          <Link href="/posters" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            Browse all posters <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosters.map((poster, index) => (
            <article key={`${poster.title}-${index}`} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Link href={poster.pdf} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative h-[360px] overflow-hidden bg-secondary">
                  {"preview" in poster && poster.preview ? (
                    <img src={poster.preview} alt={`${poster.title} poster preview`} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" />
                  ) : (
                    <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground">Poster preview available in the PDF</div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">{poster.year}</span>
                </div>
              </Link>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">{poster.event}</p>
                <h3 className="mt-2 line-clamp-3 text-base font-semibold leading-snug tracking-tight group-hover:text-primary">{poster.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{poster.authors}</p>
                <Link href={poster.pdf} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  View poster <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
