import { ArrowUpRight, Mail } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/data/site-data"

export function ContactCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/70">
            Connect with DAWL
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Research collaboration and opportunities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">
            Contact the Digital Agronomy & Weeds Lab to discuss research
            collaboration, student opportunities, postdoctoral positions, field
            work, or outreach.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`mailto:${siteConfig.contact.email}?subject=DAWL inquiry`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
            >
              Email DAWL
              <Mail className="h-4 w-4" />
            </Link>

            <Link
              href="/opportunities"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View Opportunities
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}