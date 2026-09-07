import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { principalInvestigator, teamMembers } from "@/data/site-data"
import { getApprovedTeamMembers, type SheetTeamMember } from "@/lib/google-sheet"

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
}

function isGraduateStudent(member: SheetTeamMember) {
  const group = member.displayGroup?.toLowerCase() || ""
  const position = member.position.toLowerCase()
  return group.includes("graduate") || position.includes("student") || position.includes("m.sc") || position.includes("msc") || position.includes("ph.d") || position.includes("phd")
}

function isAlumni(member: SheetTeamMember) {
  return (member.displayGroup || "").toLowerCase().includes("alumni")
}

export async function Team() {
  const submittedMembers = await getApprovedTeamMembers()
  const submittedStaff = submittedMembers.filter((member) => !isGraduateStudent(member) && !isAlumni(member)).map((member) => ({ name: member.name, role: member.position || member.displayGroup || "Research Staff", image: member.photo || "" }))
  const submittedGradStudents = submittedMembers.filter((member) => isGraduateStudent(member) && member.name.trim().toLowerCase() !== "uthpala ekanayake").map((member) => ({ name: member.name, degree: member.position || "Graduate Student", image: member.photo || "" }))

  const people = [
    { name: principalInvestigator.name, role: "Principal Investigator", image: principalInvestigator.image },
    ...teamMembers.staff.map((m) => ({ name: m.name, role: m.role, image: m.image })),
    ...submittedStaff,
    ...teamMembers.gradStudents.slice(0, 5).map((m) => ({ name: m.name, role: m.degree, image: m.image })),
    ...submittedGradStudents.slice(0, 2).map((m) => ({ name: m.name, role: m.degree, image: m.image })),
  ].slice(0, 8)

  return (
    <section id="team" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">People</h2>
            <p className="mt-3 text-muted-foreground">Researchers and students working across weed science, agronomy, and digital agriculture.</p>
          </div>
          <Link href="/people" className="hidden items-center gap-2 text-sm font-medium text-primary hover:underline sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {people.map((person) => (
            <Link key={person.name} href="/people" className="group text-center">
              <Avatar className="mx-auto h-24 w-24 border border-border bg-primary/10 sm:h-28 sm:w-28">
                {person.image ? <AvatarImage src={person.image} alt={person.name} className="object-cover" /> : null}
                <AvatarFallback className="bg-primary/10 font-semibold text-primary">{getInitials(person.name)}</AvatarFallback>
              </Avatar>
              <h3 className="mt-3 text-sm font-semibold leading-tight group-hover:text-primary">{person.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{person.role}</p>
            </Link>
          ))}
        </div>

        <Link href="/people" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline sm:hidden">View all people <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}
