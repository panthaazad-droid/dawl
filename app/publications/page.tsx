import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PublicationSectionNav } from "@/components/publication-section-nav"
import { posters, publications } from "@/data/site-data"

export const metadata = {
  title: "Publications | Digital Agronomy and Weeds Lab",
  description: "Journal publications, posters, and abstracts.",
}

function publicationLink(pub: { doi?: string; link?: string }) {
  const doi = pub.doi?.trim()
  if (doi) {
    if (doi.startsWith("http")) return doi
    if (doi.startsWith("10.")) return `https://doi.org/${doi}`
  }
  return pub.link || ""
}

function normalizeTitle(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
}

export default function PublicationsPage() {
  const uniquePosters = Array.from(
    posters.reduce((map, poster) => {
      const key = normalizeTitle(poster.title)
      if (!map.has(key)) map.set(key, poster)
      return map
    }, new Map<string, (typeof posters)[number]>()).values(),
  ).sort((a, b) => {
    const y = Number.parseInt(b.year || "0", 10) - Number.parseInt(a.year || "0", 10)
    return y || a.title.localeCompare(b.title)
  })

  return (
    <>
      <Header />
      <main className="page-enter pt-20">
        <section className="border-b border-border bg-background py-8 md:py-10">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Publications</h1>
          </div>
        </section>

        <PublicationSectionNav />

        <section id="journal-publications" className="scroll-mt-32 bg-secondary/20 py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">Journal publications</h2>
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              {publications.map((pub, index) => {
                const href = publicationLink(pub)
                return (
                  <article key={`${pub.title}-${index}`} className="grid gap-3 border-b border-border p-5 last:border-b-0 md:grid-cols-[72px_1fr_auto] md:p-6">
                    <span className="font-mono text-sm text-primary">{pub.year || "—"}</span>
                    <div className="min-w-0">
                      <h3 className="font-medium leading-snug md:text-lg">{href ? <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">{pub.title}</Link> : pub.title}</h3>
                      {pub.authors && <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>}
                      {(pub.journal || pub.volume || pub.pages) && <p className="mt-1 text-sm text-muted-foreground"><span className="italic">{pub.journal}</span>{pub.volume ? `, ${pub.volume}` : ""}{pub.pages ? `: ${pub.pages}` : ""}</p>}
                    </div>
                    {href && <Link href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">{pub.doi ? "DOI" : "View record"}<ExternalLink className="h-3.5 w-3.5" /></Link>}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="posters" className="scroll-mt-32 bg-background py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">Posters & abstracts</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {uniquePosters.map((poster) => (
                <article key={normalizeTitle(poster.title)} className="group overflow-hidden rounded-2xl border border-border bg-background">
                  <Link href={poster.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Open ${poster.title}`}>
                    <div className="relative h-[235px] overflow-hidden border-b border-border bg-secondary">
                      {poster.preview ? <img src={poster.preview} alt={`${poster.title} poster preview`} className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]" /> : <div className="flex h-full items-center justify-center p-5 text-sm text-muted-foreground">Open PDF</div>}
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between gap-2 text-xs text-muted-foreground"><span>{poster.event === "MAC Poster" ? "MAC 2025" : poster.event}</span><span>{poster.year}</span></div>
                    <h3 className="font-semibold leading-snug line-clamp-3"><Link href={poster.pdf} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">{poster.title}</Link></h3>
                    {poster.authors && <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{poster.authors}</p>}
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
