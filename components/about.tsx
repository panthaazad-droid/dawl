import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Mail } from "lucide-react"
import { principalInvestigator, siteConfig } from "@/data/site-data"

export function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">Bridging weed science with digital agriculture</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">We combine field research, remote sensing, precision agriculture, and data analysis to improve crop and weed management.</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">About the lab <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <article className="rounded-3xl border border-border bg-background p-5 shadow-sm md:p-6">
            <div className="grid gap-6 sm:grid-cols-[190px_1fr] sm:items-center">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[190px] overflow-hidden rounded-2xl bg-primary/10">
                <Image src={principalInvestigator.image} alt={principalInvestigator.name} fill className="object-cover" sizes="190px" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Principal Investigator</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{principalInvestigator.name}</h3>
                <p className="mt-1 text-muted-foreground">{principalInvestigator.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.department} · {siteConfig.university}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Dr. Benaragama’s research spans weed science, precision agriculture, remote sensing, and data-driven crop management.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/about#principal-investigator" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Full profile <ArrowRight className="h-4 w-4" /></Link>
                  {principalInvestigator.email && <Link href={`mailto:${principalInvestigator.email}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><Mail className="h-4 w-4" />Email</Link>}
                  {principalInvestigator.googleScholar && <Link href={principalInvestigator.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><BookOpen className="h-4 w-4" />Scholar</Link>}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
