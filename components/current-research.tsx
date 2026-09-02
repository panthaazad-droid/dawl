import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Critical period of weed control in corn",
    text: "UAV imagery and weed ground-cover estimates are being evaluated as field-scale indicators for identifying effective weed-control timing in corn.",
    tag: "Corn · Remote Sensing",
  },
  {
    title: "Remote sensing for pulse crop management",
    text: "UAV-LiDAR and multispectral sensing are used to quantify crop growth and management responses under contrasting seeding practices in pulse crops.",
    tag: "Pulse Crops · LiDAR",
  },
  {
    title: "Soybean canopy development and weed competition",
    text: "Plot-scale LiDAR measurements are being used to track soybean canopy development, crop competition, and responses to seeding rate and row spacing.",
    tag: "Soybean · Crop–Weed Competition",
  },
  {
    title: "Kochia seed production management",
    text: "Alternative wheat seeding systems are being studied as non-chemical approaches to suppress kochia growth and reduce seed production.",
    tag: "Kochia · Integrated Weed Management",
  },
]

export function CurrentResearch() {
  return (
    <section className="bg-background py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Selected Research Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Current areas of investigation
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Representative projects illustrate how the lab combines field experiments
              with sensing and analytical tools across crop and weed management systems.
            </p>
          </div>
          <Link href="/posters" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            View research posters <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-x-10 gap-y-0 border-t border-border md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="border-b border-border py-7 md:pr-6">
              <div className="flex gap-5">
                <span className="pt-0.5 text-sm font-semibold tabular-nums text-primary/65">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {project.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
