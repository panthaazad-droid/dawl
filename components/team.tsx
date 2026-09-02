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

  return (
    position.includes("student") ||
    position.includes("m.sc") ||
    position.includes("msc") ||
    position.includes("ph.d") ||
    position.includes("phd")
  )
}

function isAlumni(member: SheetTeamMember) {
  const group = member.displayGroup?.toLowerCase() || ""
  return group.includes("alumni")
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
    .filter((member) => isGraduateStudent(member) && member.name.trim().toLowerCase() !== "uthpala ekanayake")
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
      shortInfo:
        member.expertise && member.expertise.length > 0
          ? member.expertise.slice(0, 2).join(" • ")
          : member.bio,
    })),
    ...submittedStaff,
  ]

  const gradStudentPreview = [
    ...teamMembers.gradStudents,
    ...submittedGradStudents,
  ]

  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            People
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Meet the DAWL team
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A quick overview of the researchers, staff, and students advancing
            digital agronomy and weed science at the University of Manitoba.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-border bg-gradient-to-br from-primary/12 via-secondary/60 to-background p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <Avatar className="h-32 w-32 rounded-3xl border border-border bg-primary/10 shadow-sm md:h-40 md:w-40">
              <AvatarImage
                src={principalInvestigator.image}
                alt={principalInvestigator.name}
                className="object-cover"
              />

              <AvatarFallback className="rounded-3xl bg-primary/10 text-3xl font-semibold text-primary">
                {getInitials(principalInvestigator.name)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Principal Investigator
              </p>

              <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                {principalInvestigator.name}
              </h3>

              <p className="mt-2 text-lg text-muted-foreground">
                {principalInvestigator.title}
              </p>

              <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                {principalInvestigator.bio}
              </p>
            </div>
          </div>
        </div>

        {staffPreview.length > 0 && (
          <div className="mb-14">
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              Research Staff
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {staffPreview.map((member) => (
                <article
                  key={member.name}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-primary/30"
                >
                  <Avatar className="h-20 w-20 bg-primary/10 text-primary">
                    {member.image ? (
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="object-cover"
                      />
                    ) : null}

                    <AvatarFallback className="bg-primary/10 text-lg font-semibold text-primary">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0">
                    <h4 className="font-semibold leading-tight">
                      {member.name}
                    </h4>

                    <p className="mt-1 text-sm text-primary">{member.role}</p>

                    {member.shortInfo && (
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {member.shortInfo}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {gradStudentPreview.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              Current Graduate Students
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {gradStudentPreview.map((student) => (
                <article
                  key={student.name}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-primary/30"
                >
                  <Avatar className="h-20 w-20 bg-primary/10 text-primary">
                    {student.image ? (
                      <AvatarImage
                        src={student.image}
                        alt={student.name}
                        className="object-cover"
                      />
                    ) : null}

                    <AvatarFallback className="bg-primary/10 text-lg font-semibold text-primary">
                      {getInitials(student.name)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0">
                    <h4 className="font-semibold leading-tight">
                      {student.name}
                    </h4>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {student.degree}
                    </p>

                    {student.project && (
                      <p className="mt-1 text-sm text-primary line-clamp-2">
                        {student.project}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/people"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Meet the full team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}