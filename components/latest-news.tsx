import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { newsStories } from "@/data/site-data"

export async function LatestNews() {
  const stories = newsStories.slice(0, 3)
  if (!stories.length) return null

  return (
    <section id="news" className="border-y border-border bg-background py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Latest news</h2>
          <Link href="/news" className="hidden items-center gap-2 text-sm font-medium text-primary hover:underline sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <Link href={`/news/${stories[0].slug}`} className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-border">
            <Image src={stories[0].image} alt={stories[0].title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.01]" sizes="(max-width: 1024px) 100vw, 62vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="text-xs uppercase tracking-wider text-white/70">{stories[0].type} · {stories[0].date}</p>
              <h3 className="mt-2 max-w-3xl text-2xl font-semibold leading-tight">{stories[0].title}</h3>
            </div>
          </Link>
          <div className="grid gap-4">
            {stories.slice(1).map((story) => (
              <Link key={story.slug} href={`/news/${story.slug}`} className="rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/30">
                <p className="text-xs uppercase tracking-wider text-primary">{story.type}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug hover:text-primary">{story.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{story.summary}</p>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/news" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline sm:hidden">View all news <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}
