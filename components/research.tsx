import { ArrowUpRight, BarChart3, Satellite, Sprout } from "lucide-react"
import Link from "next/link"
import { researchAreas } from "@/data/site-data"

const visualStyles = [
  {
    icon: Satellite,
    label: "Remote sensing systems",
    gradient: "from-emerald-900 via-emerald-700 to-lime-600",
    pattern:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.12)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.12)_75%,transparent_75%,transparent)]",
  },
  {
    icon: Sprout,
    label: "Integrated weed management",
    gradient: "from-green-950 via-green-700 to-amber-500",
    pattern:
      "bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.20),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_22%)]",
  },
  {
    icon: BarChart3,
    label: "Analytics and AI",
    gradient: "from-slate-900 via-emerald-800 to-cyan-600",
    pattern:
      "bg-[linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[length:24px_24px]",
  },
]

export function Research() {
  return (
    <section id="research" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Research Areas
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What we do
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our research integrates traditional weed science with digital
            technologies to advance sustainable crop production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => {
            const visual = visualStyles[index % visualStyles.length]
            const Icon = visual.icon

            return (
              <article
                key={area.title}
                className="bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div
                  className={`relative h-52 overflow-hidden bg-gradient-to-br ${visual.gradient}`}
                >
                  <div className={`absolute inset-0 opacity-35 ${visual.pattern}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10" />

                  <div className="absolute top-6 left-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/18 text-white backdrop-blur-sm border border-white/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      {visual.label}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-4xl font-light text-primary/30">
                      0{index + 1}
                    </span>

                    <Link
                      href="/#contact"
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors"
                      aria-label={`Learn more about ${area.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}