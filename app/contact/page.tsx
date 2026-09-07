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
      <main className="pt-20">
        <section className="border-b border-border bg-background py-10 md:py-12">
          <div className="mx-auto max-w-5xl px-6">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Get in touch</h1>
            <p className="mt-3 text-muted-foreground">Department of Plant Science · University of Manitoba</p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
