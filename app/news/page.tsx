export const revalidate = 180

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { newsStories } from "@/data/site-data"
import { getApprovedNewsItems } from "@/lib/google-sheet"

export const metadata = {
  title: "DAWL News & Stories | Digital Agronomy and Weeds Lab",
  description:
    "Research features, media, field activities, conferences, and lab updates from the Digital Agronomy and Weeds Lab.",
}

export default async function NewsPage() {
  const sheetNews = await getApprovedNewsItems()
  const [featured, ...otherStories] = newsStories

  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="border-b border-border bg-background py-20 md:py-28">
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
                DAWL News & Stories
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Research, people, and field updates
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Follow research features, media coverage, fieldwork, conferences,
                and other highlights from the lab.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href={`/news/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all hover:border-primary/25 hover:shadow-md lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-[430px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Featured Story · {featured.type}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{featured.date}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {featured.summary}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read full story
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {(otherStories.length > 0 || sheetNews.length > 0) && (
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherStories.map((story) => (
                  <Link
                    key={story.slug}
                    href={`/news/${story.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-md"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        {story.type}
                      </p>
                      <h2 className="mt-3 text-xl font-semibold tracking-tight group-hover:text-primary">
                        {story.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {story.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Open story
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}

                {sheetNews.map((item, index) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                  >
                    <div className="mb-3 flex flex-wrap gap-2">
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
                    <h2 className="text-xl font-semibold tracking-tight">{item.title}</h2>
                    {(item.summary || item.description) && (
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {item.summary || item.description}
                      </p>
                    )}
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Visit source
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
