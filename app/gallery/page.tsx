import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { Header } from "@/components/header"

export const metadata = {
  title: "Gallery | Digital Agronomy and Weeds Lab",
  description: "Field work, research activities, and lab life at the University of Manitoba.",
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="border-b border-border bg-background py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Gallery</h1>
          </div>
        </section>
        <GalleryGrid />
      </main>
      <Footer />
    </>
  )
}
