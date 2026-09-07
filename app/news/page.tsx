export const revalidate = 180

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { newsStories } from "@/data/site-data"
import { getApprovedNewsItems } from "@/lib/google-sheet"

export const metadata = {
  title: "News | Digital Agronomy and Weeds Lab",
  description: "Research features, media coverage, events, and lab updates.",
}

function sourceName(slug: string) {
  if (slug.includes("ctv")) return "CTV News Winnipeg"
  if (slug.includes("grow-more")) return "UM Today"
  if (slug.includes("drones")) return "AGronomyTV"
  return "News"
}

function category(type: string) {
  if (type.toLowerCase().includes("news")) return "Media"
  return type
}

export default async function NewsPage() {
  const sheetNews = await getApprovedNewsItems()

  return (
    <>
      <Header />
      <main className="page-enter pt-16">
        <section className="bg-background pb-12 pt-6 md:pb-14 md:pt-7">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <div className="mb-5 flex items-end justify-between gap-4 md:mb-7">
              <h1 className="page-title">News</h1>
              <p className="hidden max-w-md text-right text-sm leading-relaxed text-muted-foreground md:block">Media coverage, research updates, events, and milestones.</p>
            </div>

            <div className="grid gap-x-9 gap-y-0 md:grid-cols-2 xl:grid-cols-3">
              {newsStories.map((story) => (
                <Link key={story.slug} href={`/news/${story.slug}`} className="group border-t border-border py-5 md:py-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex min-w-[108px] items-center justify-center rounded-sm bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                      {category(story.type)}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">{story.date}</span>
                  </div>
                  <h2 className="mt-4 text-[clamp(1.15rem,1.6vw,1.35rem)] font-medium leading-snug tracking-tight transition-colors group-hover:text-primary">{story.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{story.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-80 transition-opacity group-hover:opacity-100">{sourceName(story.slug)} <ArrowUpRight className="h-4 w-4" /></span>
                </Link>
              ))}

              {sheetNews.map((item, index) => (
                <article key={`${item.title}-${index}`} className="border-t border-border py-5 md:py-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex min-w-[108px] items-center justify-center rounded-sm border border-primary/30 px-3 py-1.5 text-xs font-semibold text-primary">Update</span>
                    <span className="text-sm font-medium text-muted-foreground">{item.date}</span>
                  </div>
                  <h2 className="mt-4 text-[clamp(1.15rem,1.6vw,1.35rem)] font-medium leading-snug tracking-tight">{item.title}</h2>
                  {item.link && <Link href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">View update <ArrowUpRight className="h-4 w-4" /></Link>}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
