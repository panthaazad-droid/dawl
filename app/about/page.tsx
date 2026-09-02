import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BarChart3, BookOpen, ExternalLink, Mail, Plane, Sprout } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { principalInvestigator, siteConfig } from "@/data/site-data"

export const metadata = {
  title: "About | Digital Agronomy and Weeds Lab",
  description:
    "Learn about the Digital Agronomy and Weeds Lab at the University of Manitoba and our approach to precision agriculture, weed science, and UAV-based research.",
}

const focusAreas = [
  {
    title: "Digital agronomy",
    description:
      "Using data-driven approaches to better understand crop production and support practical agricultural decision-making.",
    icon: BarChart3,
  },
  {
    title: "UAV & remote sensing",
    description:
      "Applying UAV-based sensing and remote-sensing technologies to measure crop and weed responses efficiently in the field.",
    icon: Plane,
  },
  {
    title: "Weed science & field research",
    description:
      "Combining traditional field experimentation with emerging technologies to improve sustainable weed and crop management.",
    icon: Sprout,
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-secondary/40 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                  About DAWL
                </p>

                <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  Connecting weed science with the future of digital agriculture
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                  The Digital Agronomy and Weeds Lab at the University of Manitoba
                  advances sustainable crop production by combining field-based
                  agronomy and weed science with precision technologies, remote
                  sensing, and data-driven research.
                </p>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border shadow-lg md:min-h-[400px]">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Agricultural research fields"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
                    {siteConfig.department}
                  </p>
                  <p className="mt-2 text-xl font-semibold">{siteConfig.university}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="principal-investigator" className="border-b border-border bg-background py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Principal Investigator</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Research leadership</h2>
            </div>
            <div className="grid gap-10 rounded-3xl border border-border bg-secondary/30 p-6 shadow-sm md:p-8 lg:grid-cols-[300px_1fr] lg:items-center">
              <div className="relative mx-auto h-[340px] w-full max-w-[300px] overflow-hidden rounded-2xl border border-border bg-primary/10 shadow-sm">
                <Image src={principalInvestigator.image} alt={principalInvestigator.name} fill className="object-cover" sizes="300px" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Lab Director / Principal Investigator</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{principalInvestigator.name}</h3>
                <p className="mt-2 text-lg text-muted-foreground">{principalInvestigator.title} · {siteConfig.department}</p>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{principalInvestigator.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {principalInvestigator.credentials.map((credential) => <span key={credential} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{credential}</span>)}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`mailto:${principalInvestigator.email}`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"><Mail className="h-4 w-4" />Email</Link>
                  <Link href={principalInvestigator.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"><BookOpen className="h-4 w-4" />Google Scholar</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/35 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">Featured Media</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Using drones for precision weed control</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">In this AGronomyTV feature, Dr. Dilshan Benaragama discusses how UAV technologies can support precision weed management and more targeted agricultural decision-making.</p>
                <Link href="https://www.youtube.com/watch?v=1uOwfE75qiA&t=47s" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Watch on YouTube<ExternalLink className="h-4 w-4" /></Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-sm">
                <div className="aspect-video"><iframe className="h-full w-full" src="https://www.youtube.com/embed/1uOwfE75qiA?start=47" title="AGronomyTV: Using drones for precision weed control" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Our approach
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  From field observations to actionable information
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Our research integrates remote sensing, UAV-based technologies,
                  and field experimentation to better understand crop–weed
                  interactions and improve agricultural decision-making.
                </p>
                <p>
                  We are especially interested in translating scientific and
                  technological advances into useful tools and management insights
                  for farmers, researchers, and agricultural stakeholders.
                </p>
                <p>
                  By bringing traditional agronomy together with digital methods,
                  DAWL works across the full research process — from field trials
                  and sensing to analysis, interpretation, and communication.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {focusAreas.map((area) => {
                const Icon = area.icon
                return (
                  <article
                    key={area.title}
                    className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{area.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/45 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-8 rounded-3xl border border-border bg-background p-8 shadow-sm md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Explore the lab
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Meet the people and see what we are working on
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Explore research
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/people"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Meet the team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
