import { ArrowUpRight, Briefcase, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import { opportunities } from "@/data/site-data"

const typeIcons = {
  Graduate: GraduationCap,
  Undergraduate: Users,
  Postdoc: Briefcase,
  default: Briefcase,
}

export function Opportunities() {
  return (
    <section id="opportunities" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Opportunities
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Join our team
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are always looking for talented and motivated individuals to join our team
            at the University of Manitoba.
          </p>
        </div>

        {opportunities.length > 0 ? (
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 mb-12">
            {opportunities.map((position, index) => {
              const Icon =
                typeIcons[position.type as keyof typeof typeIcons] ||
                typeIcons.default

              return (
                <article
                  key={index}
                  className="flex min-h-[360px] flex-col bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between mb-7">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    {position.deadline && (
                      <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {position.deadline}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {position.title}
                  </h3>

                  <p className="text-sm text-primary mb-4">{position.type}</p>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {position.description}
                  </p>

                  {position.requirements && position.requirements.length > 0 && (
                    <ul className="space-y-1 mb-6">
                      {position.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-6">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Apply Now
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12 mb-12">
            <p className="text-muted-foreground">
              No specific positions currently open. However, we welcome applications from exceptional candidates.
            </p>
          </div>
        )}

        <div className="mx-auto max-w-4xl bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                {"Don't see a fit?"}
              </h3>

              <p className="text-primary-foreground/80 leading-relaxed max-w-xl">
                We welcome applications from exceptional candidates at any time.
                If you&apos;re passionate about agricultural research and technology,
                we&apos;d love to hear from you.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors rounded-lg flex-shrink-0"
            >
              Send Your CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}