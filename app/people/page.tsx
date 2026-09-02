export const revalidate = 180

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { principalInvestigator, teamMembers } from "@/data/site-data"
import { getApprovedTeamMembers, type SheetTeamMember } from "@/lib/google-sheet"
import { ArrowLeft, BookOpen, ExternalLink, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "People | Digital Agronomy and Weeds Lab",
  description:
    "Meet the people of the Digital Agronomy and Weeds Lab at the University of Manitoba.",
}

type DetailedPerson = {
  name: string
  role: string
  image?: string
  bio?: string
  project?: string
  expertise?: string[]
  email?: string
  profileLink?: string
}

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

  return (
    position.includes("student") ||
    position.includes("m.sc") ||
    position.includes("msc") ||
    position.includes("ph.d") ||
    position.includes("phd")
  )
}

function isAlumni(member: SheetTeamMember) {
  return (member.displayGroup || "").toLowerCase().includes("alumni")
}

function PersonCard({ person }: { person: DetailedPerson }) {
  const description = person.bio || person.project || ""

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
      <div className="p-6">
        <div className="mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl bg-primary/10">
          {person.image ? (
            <Avatar className="h-full w-full rounded-2xl">
              <AvatarImage
                src={person.image}
                alt={person.name}
                className="h-full w-full object-cover"
              />

              <AvatarFallback className="h-full w-full rounded-2xl bg-primary/10 text-4xl font-semibold text-primary">
                {getInitials(person.name)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 text-4xl font-semibold text-primary">
                {getInitials(person.name)}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold tracking-tight">
            {person.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-primary">
            {person.role}
          </p>

          {description && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}

          {person.expertise && person.expertise.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {person.expertise.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto border-t border-border px-6 py-4">
        <div className="flex flex-wrap gap-3">
          {person.email && (
            <Link
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          )}

          {person.profileLink && (
            <Link
              href={person.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Profile
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}

          {!person.email && !person.profileLink && (
            <span className="text-sm text-muted-foreground">
              Profile details available through DAWL.
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default async function PeoplePage() {
  const submittedMembers = await getApprovedTeamMembers()

  const submittedStaff: DetailedPerson[] = submittedMembers
    .filter((member) => !isGraduateStudent(member) && !isAlumni(member))
    .map((member) => ({
      name: member.name,
      role: member.position || member.displayGroup || "Team Member",
      image: member.photo || "",
      bio: member.bio || "DAWL team member.",
      expertise: member.expertise || [],
      email: member.email || "",
      profileLink: member.link || "",
    }))

  const submittedGradStudents: DetailedPerson[] = submittedMembers
    .filter((member) => isGraduateStudent(member))
    .map((member) => ({
      name: member.name,
      role: member.position || "Graduate Student",
      image: member.photo || "",
      project: member.bio || "",
      expertise: member.expertise || [],
      email: member.email || "",
      profileLink: member.link || "",
    }))

  const submittedAlumni = submittedMembers
    .filter((member) => isAlumni(member))
    .map((member) => ({
      name: member.name,
      degree: member.position || "Alumni",
      currentPosition: member.bio || "",
    }))

  const allStaff: DetailedPerson[] = [
    ...teamMembers.staff.map((member) => ({
      name: member.name,
      role: member.role,
      image: member.image,
      bio: member.bio,
      expertise: member.expertise || [],
      email: member.email || "",
      profileLink: "",
    })),
    ...submittedStaff,
  ]

  const allGradStudents: DetailedPerson[] = [
    ...teamMembers.gradStudents.map((student) => ({
      name: student.name,
      role: student.degree,
      image: student.image || "",
      project: student.project,
      expertise: [],
      email: "",
      profileLink: "",
    })),
    ...submittedGradStudents,
  ]

  const allAlumni = [...(teamMembers.alumni || []), ...submittedAlumni]

  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>

              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
                People
              </p>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Meet the DAWL team
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our team brings together expertise in weed science, digital
                agriculture, UAV-based sensing, field experimentation, data
                analytics, and sustainable crop production.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/18 via-secondary/80 to-background p-6 md:p-10 shadow-sm">
              <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
                <div className="mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-[2rem] border border-border bg-primary/10 shadow-sm lg:mx-0">
                  <Avatar className="h-full w-full rounded-[2rem]">
                    <AvatarImage
                      src={principalInvestigator.image}
                      alt={principalInvestigator.name}
                      className="h-full w-full object-cover"
                    />

                    <AvatarFallback className="h-full w-full rounded-[2rem] bg-primary/10 text-5xl font-semibold text-primary">
                      {getInitials(principalInvestigator.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-primary">
                    Principal Investigator
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                    {principalInvestigator.name}
                  </h2>

                  <p className="mt-2 text-xl text-muted-foreground">
                    {principalInvestigator.title}
                  </p>

                  <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                    {principalInvestigator.bio}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {principalInvestigator.credentials.map((credential) => (
                      <span
                        key={credential}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                    {principalInvestigator.email && (
                      <Link
                        href={`mailto:${principalInvestigator.email}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </Link>
                    )}

                    {principalInvestigator.googleScholar && (
                      <Link
                        href={principalInvestigator.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
                      >
                        <BookOpen className="h-4 w-4" />
                        Google Scholar
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {allStaff.length > 0 && (
              <div className="mt-16">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                  Research Staff
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {allStaff.map((member) => (
                    <PersonCard key={member.name} person={member} />
                  ))}
                </div>
              </div>
            )}

            {allGradStudents.length > 0 && (
              <div className="mt-16">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                  Graduate Students
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {allGradStudents.map((student) => (
                    <PersonCard key={student.name} person={student} />
                  ))}
                </div>
              </div>
            )}

            {allAlumni.length > 0 && (
              <div className="mt-16">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                  Alumni
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {allAlumni.map((alum) => (
                    <article
                      key={alum.name}
                      className="rounded-2xl border border-border bg-background p-5 shadow-sm"
                    >
                      <h3 className="font-semibold">{alum.name}</h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {alum.degree}
                      </p>

                      {alum.currentPosition && (
                        <p className="mt-2 text-sm text-primary">
                          {alum.currentPosition}
                        </p>
                      )}
                    </article>
                  ))}
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