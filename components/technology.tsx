import { BrainCircuit, Camera, ChartNoAxesCombined, Layers3, Map, Plane } from "lucide-react"

const technologies = [
  { icon: Plane, title: "UAV Platforms", text: "Field-scale aerial data acquisition" },
  { icon: Layers3, title: "LiDAR", text: "Canopy height, structure, and volume" },
  { icon: Camera, title: "Multispectral Imaging", text: "Crop reflectance and vegetation indices" },
  { icon: Map, title: "GIS & Spatial Analysis", text: "Mapping and field variability" },
  { icon: BrainCircuit, title: "Machine Learning", text: "Crop and weed detection and classification" },
  { icon: ChartNoAxesCombined, title: "Statistical Analysis", text: "Modelling, inference, and decision support" },
]

export function Technology() {
  return (
    <section className="border-y border-border bg-secondary/25 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Research Capabilities
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Digital tools supporting field research
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              DAWL combines conventional field experimentation with spatial sensing,
              image analysis, and quantitative methods to evaluate agronomic and weed
              management questions.
            </p>
          </div>

          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-b border-r border-border bg-background p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
