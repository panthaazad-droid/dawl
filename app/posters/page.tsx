export const revalidate = 180

import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { posters } from "@/data/site-data"
import { getApprovedPosters } from "@/lib/google-sheet"

export const metadata = {
  title: "Posters & Abstracts | Digital Agronomy and Weeds Lab",
  description: "Research posters and abstracts from the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

export default async function PostersPage() {
  const sheetPosters = await getApprovedPosters()
  const allPosters = [...sheetPosters, ...posters]

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <ArrowLeft className="h-4 w-4" /> Back to home
              </Link>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Posters & Abstracts</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Research poster gallery</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Browse DAWL conference posters and research visuals across remote sensing, weed science, crop management, and digital agriculture.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 pb-20 pt-4 md:pb-28 md:pt-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allPosters.map((poster, index) => (
                <article key={`${poster.title}-${index}`} className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <Link href={poster.pdf} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-[430px] overflow-hidden bg-muted">
                      {"preview" in poster && poster.preview ? (
                        <img src={poster.preview} alt={`${poster.title} poster preview`} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                      ) : (
                        <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground">Poster preview available in the PDF</div>
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-background/92 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">{poster.year}</span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-medium uppercase tracking-wider text-primary">{poster.type}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{poster.event}</span>
                    </div>
                    <h2 className="mt-3 line-clamp-3 min-h-[4.8rem] text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">{poster.title}</h2>
                    <p className="mt-3 line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed text-muted-foreground">{poster.authors}</p>
                    {poster.abstract && <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{poster.abstract}</p>}

                    <div className="mt-6 flex gap-2 border-t border-border pt-5">
                      <Link href={poster.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                        View poster <ExternalLink className="h-4 w-4" />
                      </Link>
                      <a href={poster.pdf} download aria-label={`Download ${poster.title}`} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:bg-secondary">
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
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
