import { BrainCircuit, Camera, ChartNoAxesCombined, Layers3, Map, Plane } from "lucide-react"

const technologies = [
  { icon: Plane, title: "UAV Platforms", text: "Field-scale aerial data collection" },
  { icon: Layers3, title: "LiDAR", text: "Canopy height, structure, and volume" },
  { icon: Camera, title: "Multispectral Imaging", text: "Crop reflectance and vegetation indices" },
  { icon: Map, title: "GIS & Mapping", text: "Spatial analysis and field variability" },
  { icon: BrainCircuit, title: "Machine Learning", text: "Crop–weed detection and classification" },
  { icon: ChartNoAxesCombined, title: "Data Analytics", text: "Modelling and decision-support tools" },
]

export function Technology() {
  return (
    <section className="relative overflow-hidden bg-[#17351f] py-20 text-white md:py-24">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/65">
              Technology & Methods
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Measuring the field from above and within
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/70">
              Our research combines field experimentation with sensing, spatial
              analysis, and computational tools to turn complex crop and weed
              data into useful agronomic information.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.11]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
