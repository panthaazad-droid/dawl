export const revalidate = 180

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { principalInvestigator, teamMembers } from "@/data/site-data"
import { getApprovedTeamMembers, type SheetTeamMember } from "@/lib/google-sheet"
import { BookOpen, Mail } from "lucide-react"
import Link from "next/link"
import { StudentProfileCard, type StudentProfile } from "@/components/student-profile-card"

export const metadata = {
  title: "People | Digital Agronomy and Weeds Lab",
  description: "People in the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

type Person = { name: string; role: string; image?: string; email?: string; profileLink?: string }

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

function CompactPersonCard({ person }: { person: Person }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="p-4">
        <div className="mx-auto aspect-[4/5] w-full overflow-hidden rounded-xl bg-primary/10">
          <Avatar className="h-full w-full rounded-xl">
            {person.image ? <AvatarImage src={person.image} alt={person.name} className="h-full w-full object-cover" /> : null}
            <AvatarFallback className="h-full w-full rounded-xl bg-primary/10 text-3xl font-semibold text-primary">{getInitials(person.name)}</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="mt-4 text-base font-semibold leading-tight">{person.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
        {(person.email || person.profileLink) && (
          <div className="mt-3 flex flex-wrap gap-3 text-xs">
            {person.email && <Link href={`mailto:${person.email}`} className="text-primary hover:underline">Email</Link>}
            {person.profileLink && <Link href={person.profileLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Profile</Link>}
          </div>
        )}
      </div>
    </article>
  )
}

export default async function PeoplePage() {
  const submittedMembers = await getApprovedTeamMembers()

  const submittedStaff: Person[] = submittedMembers.filter((member) => !isGraduateStudent(member) && !isAlumni(member)).map((member) => ({
    name: member.name,
    role: member.position || member.displayGroup || "Research Staff",
    image: member.photo || "",
    email: member.email || "",
    profileLink: member.link || "",
  }))

  const submittedGradStudents = submittedMembers.filter((member) => isGraduateStudent(member) && member.name.trim().toLowerCase() !== "uthpala ekanayake").map((member) => ({
    name: member.name,
    role: member.position || "Graduate Student",
    image: member.photo || "",
    project: member.bio || "",
  }))

  const submittedAlumni = submittedMembers.filter((member) => isAlumni(member)).map((member) => ({
    name: member.name,
    degree: member.position || "Alumni",
    image: member.photo || "",
    currentPosition: member.bio || "",
  }))

  const allStaff: Person[] = [
    ...teamMembers.staff.map((member) => ({ name: member.name, role: member.role, image: member.image, email: member.email || "" })),
    ...submittedStaff,
  ]

  const allGradStudents: StudentProfile[] = [
    ...teamMembers.gradStudents.map((student) => ({
      name: student.name,
      role: student.degree,
      image: student.image || "",
      project: student.project,
      detailedBio: "detailedBio" in student ? student.detailedBio : undefined,
    })),
    ...submittedGradStudents,
  ]

  const allAlumni = [...(teamMembers.alumni || []), ...submittedAlumni]

  return (
    <>
      <Header />
      <main className="guided-scroll pt-20">
        <section className="border-b border-border bg-background py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">People</h1>
          </div>
        </section>

        <section className="bg-secondary/20 py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6">
            <article className="grid gap-6 rounded-2xl border border-border bg-background p-5 md:grid-cols-[180px_1fr] md:items-center md:p-6">
              <div className="mx-auto aspect-[4/5] w-full max-w-[180px] overflow-hidden rounded-xl bg-primary/10">
                <Avatar className="h-full w-full rounded-xl">
                  <AvatarImage src={principalInvestigator.image} alt={principalInvestigator.name} className="h-full w-full object-cover" />
                  <AvatarFallback className="h-full w-full rounded-xl bg-primary/10 text-4xl font-semibold text-primary">{getInitials(principalInvestigator.name)}</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Principal Investigator</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{principalInvestigator.name}</h2>
                <p className="mt-1 text-muted-foreground">{principalInvestigator.title}</p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{principalInvestigator.bio}</p>
                <div className="mt-5 flex gap-4 text-sm">
                  {principalInvestigator.email && <Link href={`mailto:${principalInvestigator.email}`} className="inline-flex items-center gap-1.5 text-primary hover:underline"><Mail className="h-4 w-4" />Email</Link>}
                  {principalInvestigator.googleScholar && <Link href={principalInvestigator.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline"><BookOpen className="h-4 w-4" />Google Scholar</Link>}
                </div>
              </div>
            </article>

            {allStaff.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-5 text-2xl font-semibold tracking-tight">Research Staff</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {allStaff.map((member) => <CompactPersonCard key={member.name} person={member} />)}
                </div>
              </div>
            )}

            {allGradStudents.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-5 text-2xl font-semibold tracking-tight">Current Graduate Students</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {allGradStudents.map((student) => <StudentProfileCard key={student.name} student={student} />)}
                </div>
              </div>
            )}

            {allAlumni.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-5 text-2xl font-semibold tracking-tight">Alumni & Former Graduate Students</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {allAlumni.map((alum) => <CompactPersonCard key={alum.name} person={{ name: alum.name, role: alum.degree, image: alum.image }} />)}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
