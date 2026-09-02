import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, ExternalLink } from "lucide-react"
import { getApprovedNewsItems } from "@/lib/google-sheet"
import { newsStories } from "@/data/site-data"

export async function LatestNews() {
  const sheetNews = await getApprovedNewsItems()
  const featuredStory = newsStories[0]
  const secondaryStories = newsStories.slice(1, 3)
  const sheetPreview = sheetNews.slice(0, Math.max(0, 2 - secondaryStories.length))

  return (
    <section id="news" className="border-y border-border bg-background py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              DAWL News & Stories
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Latest from the lab
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Research features, media, field activities, conferences, and
              updates from the Digital Agronomy & Weeds Lab.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Link
            href={`/news/${featuredStory.slug}`}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
          >
            <div className="relative h-[300px] overflow-hidden md:h-[360px]">
              <Image
                src={featuredStory.image}
                alt={featuredStory.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider text-white/80">
                  <span>{featuredStory.type}</span>
                  <span>•</span>
                  <span>{featuredStory.date}</span>
                </div>
                <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                  {featuredStory.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                  {featuredStory.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                  Read story
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-6">
            {secondaryStories.map((story) => (
              <Link
                key={story.slug}
                href={`/news/${story.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                  <span>{story.type}</span>
                  {story.date && story.date !== "Featured Media" && (
                    <>
                      <span>•</span>
                      <span>{story.date}</span>
                    </>
                  )}
                </div>
                <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight group-hover:text-primary">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {story.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Open story
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}

            {sheetPreview.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {item.date || "DAWL update"}
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Read more
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
