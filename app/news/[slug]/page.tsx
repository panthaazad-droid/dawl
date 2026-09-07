import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { newsStories } from "@/data/site-data"

export function generateStaticParams() {
  return newsStories.map((story) => ({ slug: story.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = newsStories.find((item) => item.slug === slug)
  if (!story) return {}

  return {
    title: `${story.title} | News`,
    description: story.summary,
  }
}

export default async function NewsStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = newsStories.find((item) => item.slug === slug)
  if (!story) return notFound()

  return (
    <>
      <Header />

      <main className="guided-scroll pt-24">
        <article>
          <header className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <Link
                href="/news"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to News
              </Link>

              <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                <span>{story.type}</span>
                {story.date && <span>· {story.date}</span>}
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {story.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                {story.summary}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-6xl px-6">
            {"videoId" in story && story.videoId ? (
              <div className="aspect-video overflow-hidden rounded-3xl border border-border bg-black shadow-sm">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${story.videoId}?start=${"videoStart" in story ? story.videoStart || 0 : 0}`}
                  title={story.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative h-[340px] overflow-hidden rounded-3xl border border-border shadow-sm md:h-[520px]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  priority
                />
              </div>
            )}

            {"externalVideoUrl" in story && story.externalVideoUrl && (
              <Link
                href={story.externalVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center justify-between gap-5 rounded-2xl border border-border bg-secondary/45 px-6 py-5 transition-colors hover:border-primary/30 hover:bg-secondary"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">CTV News video</p>
                  <p className="mt-1 text-base font-semibold md:text-lg">
                    {"externalVideoLabel" in story ? story.externalVideoLabel : "Watch video report"}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>

          <div className="mx-auto max-w-3xl px-6 py-14 md:py-18">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              {story.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {story.sourceUrl && (
              <div className="mt-10 border-t border-border pt-7">
                <Link
                  href={story.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  {story.sourceLabel}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
