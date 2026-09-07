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

export default async function NewsPage() {
  const sheetNews = await getApprovedNewsItems()
  const [featured, ...otherStories] = newsStories

  return (
    <>
      <Header />
      <main className="guided-scroll pt-20">
        <section className="border-b border-border bg-background py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6"><h1 className="text-4xl font-semibold tracking-tight md:text-5xl">News</h1></div>
        </section>
        <section className="bg-secondary/20 py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <Link href={`/news/${featured.slug}`} className="group grid overflow-hidden rounded-2xl border border-border bg-background lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]"><Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.01]" sizes="(max-width: 1024px) 100vw, 55vw" /></div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="text-xs uppercase tracking-wider text-primary">{featured.type} · {featured.date}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{featured.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{featured.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">Read story <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherStories.map((story) => (
                <Link key={story.slug} href={`/news/${story.slug}`} className="overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-primary/30">
                  <div className="relative h-44"><Image src={story.image} alt={story.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
                  <div className="p-5"><p className="text-xs uppercase tracking-wider text-primary">{story.type}</p><h2 className="mt-2 text-lg font-semibold leading-snug">{story.title}</h2></div>
                </Link>
              ))}
              {sheetNews.map((item, index) => (
                <article key={`${item.title}-${index}`} className="rounded-2xl border border-border bg-background p-5">
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
