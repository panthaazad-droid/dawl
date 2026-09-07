import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-background py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">Field research meets digital agriculture</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">We combine weed science, agronomy, remote sensing, and data analysis to study practical crop and weed management questions.</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">About <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-border">
            <Image src="/images/gallery/research-fields-aerial-2024.jpg" alt="Aerial view of agricultural research plots" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
