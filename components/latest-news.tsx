import Link from "next/link"
import { ArrowRight, CalendarDays, ExternalLink, Newspaper } from "lucide-react"
import { getApprovedNewsItems } from "@/lib/google-sheet"

export async function LatestNews() {
  const newsItems = await getApprovedNewsItems()
  const latest = newsItems.slice(0, 3)

  return (
    <section id="news" className="border-y border-border bg-background py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              News & Events
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Latest from DAWL
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Research updates, field activities, conferences, awards, and other
              highlights from the lab.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {latest.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {latest.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  {item.type && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {item.type}
                    </span>
                  )}
                </div>

                {item.date && (
                  <p className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {item.date}
                  </p>
                )}

                <h3 className="text-xl font-semibold leading-snug tracking-tight">
                  {item.title}
                </h3>

                {(item.summary || item.description) && (
                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                    {item.summary || item.description}
                  </p>
                )}

                <div className="mt-auto pt-6">
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Read more
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  ) : (
                    <Link
                      href="/news"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      View update
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-primary/25 bg-primary/[0.035] px-6 py-12 text-center">
            <Newspaper className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">News updates are coming soon</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Approved lab news and event updates will automatically appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
