import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "UAV-based weed control in corn",
    text: "Using UAV imagery and weed ground-cover estimates to improve field-scale understanding of the critical period of weed control.",
    image: "/posters/previews/Kenneth_CPWC_2026_Critical_Weed_Control.jpg",
    href: "/posters/Kenneth_CPWC_2026_Critical_Weed_Control.pdf",
    tag: "Corn · Remote Sensing",
  },
  {
    title: "Remote sensing for pulse crop management",
    text: "Developing UAV-LiDAR tools to quantify crop growth and management responses under different seeding practices in pulse crops.",
    image: "/posters/previews/Pantha_MAC_Poster.jpg",
    href: "/posters/Pantha_MAC_Poster.pdf",
    tag: "Pulses · LiDAR",
  },
  {
    title: "Soybean canopy and weed competition",
    text: "Tracking soybean canopy development, weed pressure, and management effects using plot-scale UAV-LiDAR measurements.",
    image: "/posters/previews/Matt_Fallis_Digital_Ag_Soybean_LiDAR.jpg",
    href: "/posters/Matt_Fallis_Digital_Ag_Soybean_LiDAR.pdf",
    tag: "Soybean · LiDAR",
  },
  {
    title: "Kochia seed production management",
    text: "Evaluating alternative wheat seeding systems as non-chemical strategies to reduce kochia seed production and improve weed management.",
    image: "/posters/previews/Shamima_Sultana_Kochia_Seed_Production.jpg",
    href: "/posters/Shamima_Sultana_Kochia_Seed_Production.pdf",
    tag: "Kochia · Weed Science",
  },
]

export function CurrentResearch() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Current Research
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Research happening in the field right now
            </h2>
          </div>
          <Link href="/posters" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            See research posters <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-h-[330px] overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <Image
                src={project.image}
                alt="Research project poster"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm">
                  {project.tag}
                </span>
                <h3 className="mt-4 max-w-xl text-2xl font-semibold text-white md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-white/78">
                  {project.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
                  View project poster
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
