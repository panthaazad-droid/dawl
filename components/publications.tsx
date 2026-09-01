import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { publications, siteConfig } from "@/data/site-data"
import { getApprovedPublications } from "@/lib/google-sheet"

function getPublicationLink(doi?: string) {
  if (!doi) return ""
  const value = doi.trim()
  if (!value) return ""
  if (value.startsWith("http://") || value.startsWith("https://")) return value
  if (value.startsWith("doi.org/")) return `https://${value}`
  if (value.startsWith("10.")) return `https://doi.org/${value}`
  return value
}

export async function Publications() {
  const sheetPublications = await getApprovedPublications()
  const featuredPublications = [...sheetPublications, ...publications].slice(0, 4)

  return (
    <section id="publications" className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Publications</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Recent scholarly work</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Selected peer-reviewed research from DAWL and collaborators across weed science, agronomy, remote sensing, and digital agriculture.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
          {featuredPublications.map((pub, index) => {
            const publicationLink = getPublicationLink(pub.doi)
            return (
              <article key={`${pub.title}-${index}`} className="group grid gap-5 border-b border-border p-6 last:border-b-0 hover:bg-secondary/25 md:grid-cols-[90px_1fr_auto] md:p-8">
                <div>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{pub.year || "—"}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary md:text-xl">
                    {publicationLink ? <Link href={publicationLink} target="_blank" rel="noopener noreferrer">{pub.title}</Link> : pub.title}
                  </h3>
                  {pub.authors && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pub.authors}</p>}
                  {(pub.journal || pub.volume || pub.pages) && (
                    <p className="mt-3 text-sm font-medium text-foreground/75">
                      {pub.journal && <span className="italic">{pub.journal}</span>}
                      {pub.volume && <span> · {pub.volume}</span>}
                      {pub.pages && <span> · {pub.pages}</span>}
                    </p>
                  )}
                </div>
                {publicationLink && (
                  <Link href={publicationLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 self-start rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary">
                    DOI <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/publications" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            View all publications <ArrowRight className="h-4 w-4" />
          </Link>
          {siteConfig.social.googleScholar && (
            <Link href={siteConfig.social.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-secondary">
              Google Scholar <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
