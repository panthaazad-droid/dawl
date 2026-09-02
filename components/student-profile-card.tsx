"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowUpRight, GraduationCap, Microscope } from "lucide-react"

export type StudentProfile = {
  name: string
  role: string
  image?: string
  project?: string
  education?: string[]
  researchInterests?: string[]
  detailedBio?: string[]
  highlights?: string[]
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function StudentCardBody({ student, interactive }: { student: StudentProfile; interactive: boolean }) {
  return (
    <div className="flex h-full flex-col text-left">
      <div className="p-6">
        <div className="mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl bg-primary/10">
          <Avatar className="h-full w-full rounded-2xl">
            <AvatarImage
              src={student.image}
              alt={student.name}
              className="h-full w-full object-cover"
            />
            <AvatarFallback className="h-full w-full rounded-2xl bg-primary/10 text-4xl font-semibold text-primary">
              {getInitials(student.name)}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold tracking-tight">{student.name}</h3>
          <p className="mt-1 text-sm font-medium text-primary">{student.role}</p>
          {student.project && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {student.project}
            </p>
          )}
        </div>
      </div>

      {interactive && (
        <div className="mt-auto border-t border-border px-6 py-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            View profile
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      )}
    </div>
  )
}

export function StudentProfileCard({ student }: { student: StudentProfile }) {
  const hasProfile = Boolean(
    student.detailedBio?.length ||
      student.education?.length ||
      student.researchInterests?.length ||
      student.highlights?.length,
  )

  if (!hasProfile) {
    return (
      <article className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
        <StudentCardBody student={student} interactive={false} />
      </article>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group h-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={`View profile for ${student.name}`}
        >
          <StudentCardBody student={student} interactive />
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[88vh] max-w-4xl overflow-y-auto p-0 sm:rounded-3xl">
        <div className="grid md:grid-cols-[280px_1fr]">
          <div className="bg-secondary/45 p-6 md:p-8">
            <div className="mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl border border-border bg-primary/10 shadow-sm">
              <Avatar className="h-full w-full rounded-2xl">
                <AvatarImage
                  src={student.image}
                  alt={student.name}
                  className="h-full w-full object-cover"
                />
                <AvatarFallback className="h-full w-full rounded-2xl bg-primary/10 text-5xl font-semibold text-primary">
                  {getInitials(student.name)}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Graduate Student
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{student.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{student.role}</p>
            </div>

            {student.researchInterests && student.researchInterests.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Research interests
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {student.researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8 md:pr-10">
            <DialogHeader className="text-left">
              <DialogTitle className="text-3xl tracking-tight">{student.name}</DialogTitle>
              <DialogDescription className="text-base">
                {student.project || student.role}
              </DialogDescription>
            </DialogHeader>

            {student.detailedBio && student.detailedBio.length > 0 && (
              <div className="mt-7 space-y-4 leading-relaxed text-muted-foreground">
                {student.detailedBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            {student.education && student.education.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Education
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {student.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {student.highlights && student.highlights.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Microscope className="h-4 w-4 text-primary" />
                  Highlights
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {student.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
