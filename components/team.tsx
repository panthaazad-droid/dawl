import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { principalInvestigator, teamMembers } from "@/data/site-data"
import { getApprovedTeamMembers, type SheetTeamMember } from "@/lib/google-sheet"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function isGraduateStudent(member: SheetTeamMember) {
  const group = member.displayGroup?.toLowerCase() || ""
  const position = member.position.toLowerCase()
  if (group.includes("graduate")) return true
  return position.includes("student") || position.includes("m.sc") || position.includes("msc") || position.includes("ph.d") || position.includes("phd")
}

function isAlumni(member: SheetTeamMember) {
  return (member.displayGroup || "").toLowerCase().includes("alumni")
}

export async function Team() {
  const submittedMembers = await getApprovedTeamMembers()

  const submittedStaff = submittedMembers
    .filter((member) => !isGraduateStudent(member) && !isAlumni(member))
    .map((member) => ({
      name: member.name,
      role: member.position || member.displayGroup || "Team Member",
      image: member.photo || "",
      shortInfo: member.bio || "DAWL team member.",
    }))

  const submittedGradStudents = submittedMembers
    .filter((member) => isGraduateStudent(member))
    .map((member) => ({
      name: member.name,
      degree: member.position || "Graduate Student",
      image: member.photo || "",
      project: member.bio || "",
    }))

  const staffPreview = [
    ...teamMembers.staff.map((member) => ({
      name: member.name,
      role: member.role,
      image: member.image,
      shortInfo: member.expertise?.slice(0, 2).join(" • ") || member.bio,
    })),
    ...submittedStaff,
  ].slice(0, 3)

  const gradStudentPreview = [...teamMembers.gradStudents, ...submittedGradStudents].slice(0, 3)

  return (
    <section id="team" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">People</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Meet the people behind DAWL</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Researchers, staff, and graduate students working across weed science, agronomy, remote sensing, and digital agriculture.
            </p>
          </div>
          <Link href="/people" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            Meet the full team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.95fr]">
          <article className="overflow-hidden rounded-3xl border border-border bg-secondary/35 shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
              <Avatar className="h-full w-full rounded-none">
                <AvatarImage src={principalInvestigator.image} alt={principalInvestigator.name} className="h-full w-full object-cover" />
                <AvatarFallback className="rounded-none bg-primary/10 text-4xl font-semibold text-primary">
                  {getInitials(principalInvestigator.name)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="p-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Principal Investigator</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{principalInvestigator.name}</h3>
              <p className="mt-1 text-muted-foreground">{principalInvestigator.title}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Leading DAWL research in digital agriculture, UAV-based sensing, and sustainable weed and crop management.
              </p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {staffPreview.map((member) => (
              <article key={member.name} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                <Avatar className="h-24 w-24 rounded-2xl bg-primary/10">
                  {member.image && <AvatarImage src={member.image} alt={member.name} className="object-cover" />}
                  <AvatarFallback className="rounded-2xl bg-primary/10 text-xl font-semibold text-primary">{getInitials(member.name)}</AvatarFallback>
                </Avatar>
                <h4 className="mt-5 text-lg font-semibold leading-tight">{member.name}</h4>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                {member.shortInfo && <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">{member.shortInfo}</p>}
              </article>
            ))}

            {gradStudentPreview.map((student) => (
              <article key={student.name} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                <Avatar className="h-24 w-24 rounded-2xl bg-primary/10">
                  {student.image && <AvatarImage src={student.image} alt={student.name} className="object-cover" />}
                  <AvatarFallback className="rounded-2xl bg-primary/10 text-xl font-semibold text-primary">{getInitials(student.name)}</AvatarFallback>
                </Avatar>
                <h4 className="mt-5 text-lg font-semibold leading-tight">{student.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{student.degree}</p>
                {student.project && <p className="mt-3 text-sm font-medium leading-relaxed text-primary line-clamp-2">{student.project}</p>}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/people" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
            Meet the full team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
