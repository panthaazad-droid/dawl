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

export default async function PostersPage() {
  const sheetPosters = await getApprovedPosters()
  const allPosters = [...sheetPosters, ...posters]

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
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>

              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
                Posters & Abstracts
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Research poster gallery
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Browse selected DAWL posters, abstracts, and conference research
                materials. Open a poster in a new tab or download the PDF.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allPosters.map((poster, index) => {
                const accent = accentClasses[index % accentClasses.length]

                return (
                  <article
                    key={`${poster.title}-${index}`}
                    className="group rounded-3xl border border-border bg-background shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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

                      <div className="relative h-[260px] rounded-2xl bg-muted border border-border overflow-hidden">
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
                    </div>

                    <div className="p-5">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                          {poster.type}
                        </span>

                        <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground line-clamp-1">
                          {poster.event}
                        </span>
                      </div>

                      <h2 className="text-lg font-semibold tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-3 min-h-[4.25rem]">
                        {poster.title}
                      </h2>

                      <p className="mt-3 text-xs text-muted-foreground line-clamp-2 min-h-[2rem]">
                        {poster.authors}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <Link
                          href={poster.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                          Open PDF
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