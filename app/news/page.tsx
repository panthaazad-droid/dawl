export const revalidate = 180

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { newsStories } from "@/data/site-data"
import { getApprovedNewsItems } from "@/lib/google-sheet"

export const metadata = {
  title: "News | Digital Agronomy and Weeds Lab",
  description: "Research features, media coverage, and field updates.",
}

function sourceName(slug: string) {
  if (slug.includes("ctv")) return "CTV News Winnipeg"
  if (slug.includes("grow-more")) return "UM Today"
  if (slug.includes("drones")) return "AGronomyTV"
  return "News"
}

export default async function NewsPage() {
  const sheetNews = await getApprovedNewsItems()
  const [featured, ...otherStories] = newsStories

  return (
    <>
      <Header />
      <main className="page-enter pt-16">
        <section className="bg-background pb-8 pt-6 md:pb-10 md:pt-7">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <h1 className="page-title">News</h1>

            <Link href={`/news/${featured.slug}`} className="group mt-5 grid overflow-hidden rounded-2xl bg-secondary/25 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[240px] overflow-hidden sm:min-h-[300px] lg:min-h-[345px]">
                <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-200 group-hover:scale-[1.01]" sizes="(max-width: 1024px) 100vw, 54vw" />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{sourceName(featured.slug)} · {featured.date}</p>
                <h2 className="mt-3 text-balance text-[clamp(1.45rem,2.4vw,2.25rem)] font-semibold leading-[1.1] tracking-tight">{featured.title}</h2>
                <p className="mt-4 max-w-xl text-[clamp(0.95rem,1.2vw,1.05rem)] leading-relaxed text-muted-foreground">{featured.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">Read story <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>

            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherStories.map((story) => (
                <Link key={story.slug} href={`/news/${story.slug}`} className="group overflow-hidden rounded-2xl bg-secondary/20 transition-colors hover:bg-secondary/35">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={story.image} alt={story.title} fill className="object-cover transition-transform duration-200 group-hover:scale-[1.01]" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">{sourceName(story.slug)}</p>
                    <h2 className="mt-2 text-lg font-semibold leading-snug">{story.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{story.summary}</p>
                  </div>
                </Link>
              ))}

              {sheetNews.map((item, index) => (
                <article key={`${item.title}-${index}`} className="rounded-2xl bg-secondary/20 p-5">
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                  <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
                  {item.link && <Link href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline">Visit source <ExternalLink className="h-4 w-4" /></Link>}
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
