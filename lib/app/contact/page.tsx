import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata = {
  title: "Contact | Digital Agronomy and Weeds Lab",
  description:
    "Contact the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

export default function ContactPage() {
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
                Contact
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Contact DAWL
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Reach out about collaborations, graduate opportunities,
                postdoctoral inquiries, field research, outreach, or media
                requests.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  )
}