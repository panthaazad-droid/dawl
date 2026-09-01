export const revalidate = 180

import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { getApprovedNewsItems } from "@/lib/google-sheet"

export const metadata = {
  title: "News & Events | Digital Agronomy and Weeds Lab",
  description:
    "News, events, field days, awards, and lab updates from the Digital Agronomy and Weeds Lab.",
}

export default async function NewsPage() {
  const newsItems = await getApprovedNewsItems()

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
                News & Events
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Lab updates
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Field days, conferences, awards, lab activities, outreach, and
                research updates from DAWL.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6">
            {newsItems.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsItems.map((item, index) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="mb-4 flex flex-wrap gap-2">
                      {item.type && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {item.type}
                        </span>
                      )}

                      {item.date && (
                        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h2>

                    {item.summary && (
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {item.summary}
                      </p>
                    )}

                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    )}

                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Learn more
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-background p-12 text-center">
                <h2 className="text-2xl font-semibold">No updates yet</h2>
                <p className="mt-3 text-muted-foreground">
                  Approved news and event updates will appear here.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}