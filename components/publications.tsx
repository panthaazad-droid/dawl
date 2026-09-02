import { ArrowRight, ExternalLink, Link2 } from "lucide-react"
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

function getRecordLink(pub: unknown) {
  if (!pub || typeof pub !== "object") return { href: "", label: "" }
  const record = pub as { doi?: string; link?: string; linkLabel?: string }
  const doiLink = getPublicationLink(record.doi)
  if (doiLink) return { href: doiLink, label: "DOI" }
  if (record.link) return { href: record.link, label: record.linkLabel || "View record" }
  return { href: "", label: "" }
}

function getTopics(title: string) {
  const value = title.toLowerCase()
  const topics: string[] = []

  if (value.includes("weed") || value.includes("herbicide")) topics.push("Weed Science")
  if (value.includes("uav") || value.includes("remote") || value.includes("imagery")) topics.push("Remote Sensing")
  if (value.includes("deep learning") || value.includes("machine learning") || value.includes("segmentation")) topics.push("AI & Computer Vision")
  if (value.includes("crop") || value.includes("agronomy") || value.includes("yield")) topics.push("Agronomy")

  return topics.slice(0, 2)
}

export async function Publications() {
  const sheetPublications = await getApprovedPublications()
  const allPublications = [...sheetPublications, ...publications]
  const featuredPublications = allPublications.slice(0, 4)

  return (
    <section id="publications" className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Publications
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Recent publications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Selected research outputs from DAWL and collaborators in weed
            science, crop–weed interactions, remote sensing, and sustainable
            agricultural systems.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
          {featuredPublications.map((pub, index) => {
            const publicationRecord = getRecordLink(pub)
            const publicationLink = publicationRecord.href
            const topics = getTopics(pub.title)

            return (
              <article
                key={`${pub.title}-${index}`}
                className="group grid gap-4 border-b border-border p-6 transition-colors last:border-b-0 hover:bg-secondary/30 md:grid-cols-[70px_1fr_auto] md:p-7"
              >
                <span className="font-mono text-sm font-medium text-primary">
                  {pub.year || "—"}
                </span>

                <div className="min-w-0">
                  <h3 className="font-medium leading-snug transition-colors group-hover:text-primary md:text-lg">
                    {publicationLink ? (
                      <Link href={publicationLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {pub.title}
                      </Link>
                    ) : pub.title}
                  </h3>

                  {pub.authors && (
                    <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
                  )}

                  {(pub.journal || pub.volume || pub.pages) && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {pub.journal && <span className="italic">{pub.journal}</span>}
                      {pub.volume && <span>, {pub.volume}</span>}
                      {pub.pages && <span>: {pub.pages}</span>}
                    </p>
                  )}

                  {topics.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <span key={topic} className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {publicationLink && (
                  <Link
                    href={publicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 self-start rounded-lg border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    aria-label={`Open ${publicationRecord.label || "publication"}`}
                  >
                    <Link2 className="h-3.5 w-3.5" />
                    {publicationRecord.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/publications" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            View all publications
            <ArrowRight className="h-4 w-4" />
          </Link>

          {siteConfig.social.googleScholar && (
            <Link href={siteConfig.social.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              Google Scholar
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
