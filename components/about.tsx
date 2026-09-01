import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Mail } from "lucide-react"
import { principalInvestigator } from "@/data/site-data"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              About the Lab
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Bridging traditional weed science with digital agriculture
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                The Digital Agronomy and Weeds Lab (DAWL) at the University of
                Manitoba focuses on advancing sustainable crop production
                through precision agriculture and data-driven weed management.
              </p>

              <p>
                Our research integrates remote sensing, UAV-based technologies,
                and field experimentation to better understand crop–weed
                interactions and improve agricultural decision-making.
              </p>

              <p>
                We aim to bridge the gap between scientific innovation and
                practical applications for farmers and industry stakeholders.
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

          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/14 via-secondary/80 to-background p-6 md:p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-[260px_1fr] md:items-start">
              <div className="space-y-5">
                <div className="relative h-[300px] w-full overflow-hidden rounded-3xl border border-border bg-primary/10 shadow-md">
                  <Image
                    src={principalInvestigator.image}
                    alt={principalInvestigator.name}
                    fill
                    className="object-cover"
                    sizes="260px"
                    priority
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {principalInvestigator.credentials.map((credential) => (
                    <span
                      key={credential}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {credential}
                    </span>
                  ))}
                </div>

                <Link
                  href="/people"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View full profile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Principal Investigator
                </p>

                <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                  {principalInvestigator.name}
                </h3>

                <p className="mt-2 text-xl text-muted-foreground">
                  {principalInvestigator.title}
                </p>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {principalInvestigator.bio}
                </p>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                  {principalInvestigator.email && (
                    <Link
                      href={`mailto:${principalInvestigator.email}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
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
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
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