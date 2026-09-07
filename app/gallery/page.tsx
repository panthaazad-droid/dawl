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
      <main className="page-enter pt-16">
        <section className="bg-background pb-4 pt-6 md:pb-5 md:pt-7">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <h1 className="page-title">Gallery</h1>
          </div>
        </section>
        <GalleryGrid />
      </main>
      <Footer />
    </>
  )
}
