import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { newsStories } from "@/data/site-data"

export async function LatestNews() {
  const stories = newsStories.slice(0, 3)
  if (!stories.length) return null

  return (
    <section id="news" className="border-y border-border bg-background py-11 md:py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="mb-5 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Latest news</h2>
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-x-7 md:grid-cols-3">
          {stories.map((story) => (
            <Link key={story.slug} href={`/news/${story.slug}`} className="group border-t border-border py-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-primary">{story.type.toLowerCase().includes("news") ? "Media" : story.type}</span>
                <span className="text-xs text-muted-foreground">{story.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">{story.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{story.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
