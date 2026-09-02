import { ArrowUpRight, Mail } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/data/site-data"

export function ContactCTA() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 rounded-2xl border border-border bg-secondary/35 px-7 py-9 md:grid-cols-[1fr_auto] md:items-center md:px-10 md:py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Research & Academic Opportunities
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Research collaboration and opportunities with DAWL
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              We welcome inquiries related to research collaboration, graduate and
              postdoctoral opportunities, field research, and knowledge exchange.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href={`mailto:${siteConfig.contact.email}?subject=DAWL inquiry`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact the Lab
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="/opportunities"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
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
