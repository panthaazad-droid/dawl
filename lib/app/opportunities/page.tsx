import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Opportunities } from "@/components/opportunities"

export const metadata = {
  title: "Opportunities | Digital Agronomy and Weeds Lab",
  description:
    "Graduate student, postdoctoral, and research opportunities at the Digital Agronomy and Weeds Lab.",
}

export default function OpportunitiesPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>

              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
                Opportunities
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Join our team
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                DAWL welcomes motivated students and researchers interested in
                weed science, precision agriculture, UAV-based sensing, field
                experimentation, and data-driven agricultural systems.
              </p>
            </div>
          </div>
        </section>

        <Opportunities />
      </main>

      <Footer />
    </>
  )
}