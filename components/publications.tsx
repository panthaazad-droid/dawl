import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { publications } from "@/data/site-data"
import { getApprovedPublications } from "@/lib/google-sheet"

function linkFor(pub: { doi?: string; link?: string }) {
  const doi = pub.doi?.trim()
  if (doi) {
    if (doi.startsWith("http")) return doi
    if (doi.startsWith("10.")) return `https://doi.org/${doi}`
  }
  return pub.link || ""
}

export async function Publications() {
  const sheetPublications = await getApprovedPublications()
  const featured = [...sheetPublications, ...publications].slice(0, 3)

  return (
    <section id="publications" className="bg-secondary/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Recent publications</h2>
          </div>
          <Link href="/publications" className="hidden items-center gap-2 text-sm font-medium text-primary hover:underline sm:inline-flex">View publications & posters <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-background">
          {featured.map((pub, index) => {
            const href = linkFor(pub)
            return (
              <article key={`${pub.title}-${index}`} className="grid gap-3 border-b border-border p-5 last:border-b-0 md:grid-cols-[70px_1fr_auto] md:items-start">
                <span className="font-mono text-sm text-primary">{pub.year || "—"}</span>
                <div>
                  <h3 className="font-medium leading-snug md:text-lg">{href ? <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">{pub.title}</Link> : pub.title}</h3>
                  {pub.authors && <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>}
                  {pub.journal && <p className="mt-1 text-sm italic text-muted-foreground">{pub.journal}</p>}
                </div>
                {href && <Link href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">Open <ExternalLink className="h-3.5 w-3.5" /></Link>}
              </article>
            )
          })}
        </div>
        <Link href="/publications" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline sm:hidden">View publications & posters <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}
