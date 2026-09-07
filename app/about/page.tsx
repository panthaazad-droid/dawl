import Image from "next/image"
import Link from "next/link"
import { BookOpen, ExternalLink, Mail } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { principalInvestigator, siteConfig } from "@/data/site-data"

export const metadata = {
  title: "About | Digital Agronomy and Weeds Lab",
  description: "About the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="guided-scroll pt-20">
        <section className="border-b border-border bg-background py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">About</h1>
          </div>
        </section>

        <section className="bg-secondary/20 py-10 md:py-12">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Field research meets digital agriculture</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>The lab combines weed science, agronomy, remote sensing, and data analysis to study practical crop and weed management questions.</p>
                <p>Our work ranges from field experiments and UAV sensing to quantitative analysis and precision-management tools for Prairie agriculture.</p>
              </div>
            </div>
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-border">
              <Image src="/images/gallery/dawl-team-group-2026.jpg" alt="Lab group" fill className="object-cover" style={{ objectPosition: "center 68%" }} sizes="(max-width: 1024px) 100vw, 55vw" />
            </div>
          </div>
        </section>

        <section id="principal-investigator" className="scroll-mt-24 bg-background py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">Principal Investigator</h2>
            <article className="grid gap-7 rounded-2xl border border-border p-5 md:grid-cols-[220px_1fr] md:items-center md:p-7">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-xl bg-primary/10">
                <Image src={principalInvestigator.image} alt={principalInvestigator.name} fill className="object-cover" sizes="220px" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold tracking-tight">{principalInvestigator.name}</h3>
                <p className="mt-1 text-lg text-muted-foreground">{principalInvestigator.title} · {siteConfig.department}</p>
                <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{principalInvestigator.bio}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  {principalInvestigator.email && <Link href={`mailto:${principalInvestigator.email}`} className="inline-flex items-center gap-1.5 text-primary hover:underline"><Mail className="h-4 w-4" />Email</Link>}
                  {principalInvestigator.googleScholar && <Link href={principalInvestigator.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline"><BookOpen className="h-4 w-4" />Google Scholar</Link>}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/20 py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 flex items-end justify-between gap-4"><h2 className="text-2xl font-semibold tracking-tight">Featured media</h2><Link href="https://www.youtube.com/watch?v=1uOwfE75qiA&t=47s" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 text-sm text-primary hover:underline sm:inline-flex">Watch on YouTube <ExternalLink className="h-4 w-4" /></Link></div>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-black"><div className="aspect-video"><iframe className="h-full w-full" src="https://www.youtube.com/embed/1uOwfE75qiA?start=47" title="Using drones for precision weed control" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
