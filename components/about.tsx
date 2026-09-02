import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Mail } from "lucide-react"
import { principalInvestigator, siteConfig } from "@/data/site-data"

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              About the Lab
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Bridging traditional weed science with digital agriculture
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                The Digital Agronomy and Weeds Lab (DAWL) at the University of
                Manitoba advances sustainable crop production by combining weed
                science, precision agriculture, remote sensing, and field research.
              </p>

              <p>
                We translate data and emerging technologies into practical insights
                for crop management, research, and agricultural decision-making.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/5 px-5 py-3 text-sm font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary/10"
            >
              Learn more about DAWL
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm md:p-8">
            <div className="grid gap-8 md:grid-cols-[250px_1fr] md:items-start">
              <div>
                <div className="relative h-[310px] w-full overflow-hidden rounded-2xl border border-border bg-primary/10 shadow-sm">
                  <Image
                    src={principalInvestigator.image}
                    alt={principalInvestigator.name}
                    fill
                    className="object-cover"
                    sizes="250px"
                    priority
                  />
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {principalInvestigator.credentials.map((credential) => (
                    <span
                      key={credential}
                      className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Principal Investigator
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {principalInvestigator.name}
                </h3>

                <p className="mt-2 text-lg text-muted-foreground">
                  {principalInvestigator.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteConfig.department} · {siteConfig.university}
                </p>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Dr. Benaragama leads DAWL's research in weed science, digital
                  agriculture, UAV-based sensing, and precision crop management,
                  with an emphasis on practical decision-support tools for Prairie
                  agriculture.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-6">
                  <Link
                    href="/about#principal-investigator"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Full profile
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {principalInvestigator.email && (
                    <Link
                      href={`mailto:${principalInvestigator.email}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </Link>
                  )}

                  {principalInvestigator.googleScholar && (
                    <Link
                      href={principalInvestigator.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      <BookOpen className="h-4 w-4" />
                      Google Scholar
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
