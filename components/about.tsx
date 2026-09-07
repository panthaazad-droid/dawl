import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-background py-11 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">Field research meets digital agriculture</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">We combine weed science, agronomy, remote sensing, and data analysis to study practical crop and weed management questions.</p>
          </div>
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-border">
            <Image src="/images/gallery/dawl-team-group-2026.jpg" alt="Research group photographed from a UAV" fill className="object-cover" style={{ objectPosition: "center 58%" }} sizes="(max-width: 1024px) 100vw, 55vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
