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

function getRecordLink(pub: unknown) {
  if (!pub || typeof pub !== "object") return { href: "", label: "" }
  const record = pub as { doi?: string; link?: string; linkLabel?: string }
  const doiLink = getPublicationLink(record.doi)
  if (doiLink) return { href: doiLink, label: "DOI" }
  if (record.link) return { href: record.link, label: record.linkLabel || "View record" }
  return { href: "", label: "" }
}

export default function PublicationsPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>

              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Publications
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Research publications
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Selected research outputs related to weed science, crop–weed
                interactions, integrated weed management, remote sensing, and
                sustainable cropping systems.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-2xl border-t border-border bg-background/60">
                {publications.map((pub, index) => {
                  const publicationRecord = getRecordLink(pub)
                  const publicationLink = publicationRecord.href

                  return (
                    <article
                      key={`${pub.title}-${index}`}
                      className="group flex flex-col gap-4 border-b border-border px-6 py-6 transition-colors hover:bg-card/80 md:flex-row md:items-start"
                    >
                      <span className="w-16 flex-shrink-0 font-mono text-sm font-medium text-primary">
                        {pub.year || "—"}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h2 className="mb-2 font-medium leading-snug transition-colors group-hover:text-primary">
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
                          <p className="mb-1 text-sm text-muted-foreground">{pub.authors}</p>
                        )}

                        {(pub.journal || pub.volume || pub.pages) && (
                          <p className="text-sm text-muted-foreground">
                            {pub.journal && <span className="italic">{pub.journal}</span>}
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
                          className="inline-flex flex-shrink-0 items-center gap-1.5 self-start rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                          aria-label={`Open ${publicationRecord.label || "publication"}`}
                        >
                          {publicationRecord.label}
                          <ExternalLink className="h-3.5 w-3.5" />
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
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
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
