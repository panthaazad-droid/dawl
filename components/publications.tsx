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
  const allPublications = [...sheetPublications, ...publications]
  const featuredPublications = allPublications.slice(0, 4)

  return (
    <section id="publications" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Publications
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Recent publications
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Selected research outputs from DAWL and collaborators in weed
            science, crop–weed interactions, remote sensing, and sustainable
            agricultural systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-0 border-t border-border">
            {featuredPublications.map((pub, index) => {
              const publicationLink = getPublicationLink(pub.doi)

              return (
                <article
                  key={`${pub.title}-${index}`}
                  className="flex flex-col md:flex-row md:items-start gap-4 py-6 border-b border-border group hover:bg-card/50 px-4 -mx-4 transition-colors"
                >
                  <span className="text-sm font-mono text-primary font-medium w-16 flex-shrink-0">
                    {pub.year || "—"}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors leading-snug">
                      {publicationLink ? (
                        <Link
                          href={publicationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {pub.title}
                        </Link>
                      ) : (
                        pub.title
                      )}
                    </h3>

                    {pub.authors && (
                      <p className="text-sm text-muted-foreground mb-1">
                        {pub.authors}
                      </p>
                    )}

                    {(pub.journal || pub.volume || pub.pages) && (
                      <p className="text-sm text-muted-foreground">
                        {pub.journal && (
                          <span className="italic">{pub.journal}</span>
                        )}
                        {pub.volume && <span>, {pub.volume}</span>}
                        {pub.pages && <span>: {pub.pages}</span>}
                      </p>
                    )}
                  </div>

                  {publicationLink && (
                    <Link
                      href={publicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View publication"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg"
          >
            View all publications
            <ArrowRight className="h-4 w-4" />
          </Link>

          {siteConfig.social.googleScholar && (
            <Link
              href={siteConfig.social.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors rounded-lg"
            >
              Google Scholar
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}