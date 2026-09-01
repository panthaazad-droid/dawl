import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { Header } from "@/components/header"

export const metadata = {
  title: "Gallery | Digital Agronomy and Weeds Lab",
  description:
    "Photos from DAWL field work, UAV operations, conferences, outreach activities, lab activities, and team events.",
}

export default function GalleryPage() {
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
                Gallery
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                DAWL in the field
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Explore photos from field work, drone and remote sensing
                operations, lab activities, conferences, team moments, and
                outreach events.
              </p>
            </div>
          </div>
        </section>

        <GalleryGrid />
      </main>

      <Footer />
    </>
  )
}