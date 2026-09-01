import { FlaskConical, GraduationCap, Microscope, ScrollText } from "lucide-react"
import { publications, teamMembers } from "@/data/site-data"

const stats = [
  {
    value: teamMembers.gradStudents.length,
    label: "Graduate students",
    icon: GraduationCap,
  },
  {
    value: teamMembers.staff.length,
    label: "Research staff",
    icon: Microscope,
  },
  {
    value: 3,
    label: "Core research areas",
    icon: FlaskConical,
  },
  {
    value: `${publications.length}+`,
    label: "Selected publications",
    icon: ScrollText,
  },
]

export function LabStats() {
  return (
    <section className="bg-primary py-8 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-primary-foreground/15 px-6 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className={`flex items-center gap-3 px-4 py-4 md:px-7 ${index >= 2 ? "border-t border-primary-foreground/15 md:border-t-0" : ""}`}
            >
              <Icon className="hidden h-6 w-6 shrink-0 text-primary-foreground/70 sm:block" />
              <div>
                <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-primary-foreground/70 md:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
