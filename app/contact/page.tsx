import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata = {
  title: "Contact | Digital Agronomy and Weeds Lab",
  description: "Contact information for the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="page-enter pt-16">
        <section className="bg-background pb-5 pt-6 md:pb-6 md:pt-7">
          <div className="mx-auto max-w-5xl px-5 md:px-6">
            <h1 className="page-title">Get in touch</h1>
            <div className="mt-3 flex items-center gap-3 text-[clamp(0.9rem,1.25vw,1rem)] text-muted-foreground">
              <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
              <p><span className="font-medium text-foreground">Dr. Dilshan Benaragama</span> · Principal Investigator</p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
