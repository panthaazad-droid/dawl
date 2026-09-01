import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { publications, siteConfig } from "@/data/site-data"

export const metadata = {
  title: "Publications | Digital Agronomy and Weeds Lab",
  description:
    "Selected publications from the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

function getPublicationLink(doi?: string) {
  if (!doi) return ""

  const value = doi.trim()

  if (!value) return ""
  if (value.startsWith("http://") || value.startsWith("https://")) return value
  if (value.startsWith("doi.org/")) return `https://${value}`
  if (value.startsWith("10.")) return `https://doi.org/${value}`

  return value
}

export default function PublicationsPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="py-20 md:py-28 bg-background">
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
                Publications
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Research publications
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                A complete list of selected research outputs related to weed
                science, crop–weed interactions, integrated weed management,
                remote sensing, and sustainable cropping systems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-0 border-t border-border bg-background/60 rounded-2xl overflow-hidden">
                {publications.map((pub, index) => {
                  const publicationLink = getPublicationLink(pub.doi)

                  return (
                    <article
                      key={`${pub.title}-${index}`}
                      className="flex flex-col md:flex-row md:items-start gap-4 py-6 border-b border-border group hover:bg-card/80 px-6 transition-colors"
                    >
                      <span className="text-sm font-mono text-primary font-medium w-16 flex-shrink-0">
                        {pub.year || "—"}
                      </span>

                      <div className="flex-1 min-w-0">
                        <h2 className="font-medium mb-2 group-hover:text-primary transition-colors leading-snug">
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
                        </h2>

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

              {siteConfig.social.googleScholar && (
                <div className="mt-12 text-center">
                  <Link
                    href={siteConfig.social.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors rounded-lg"
                  >
                    View all on Google Scholar
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}