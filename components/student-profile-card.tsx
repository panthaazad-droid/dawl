"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowUpRight } from "lucide-react"

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
  return name.split(" ").map((part) => part[0]).join("").toUpperCase().slice(0, 2)
}

function StudentCardBody({ student, interactive }: { student: StudentProfile; interactive: boolean }) {
  return (
    <div className="flex h-full flex-col text-left">
      <div className="p-4">
        <div className="mx-auto aspect-[4/5] w-full overflow-hidden rounded-xl bg-primary/10">
          <Avatar className="h-full w-full rounded-xl">
            <AvatarImage src={student.image} alt={student.name} className="h-full w-full object-cover" />
            <AvatarFallback className="h-full w-full rounded-xl bg-primary/10 text-3xl font-semibold text-primary">{getInitials(student.name)}</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="mt-4 text-base font-semibold leading-tight tracking-tight">{student.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{student.role}</p>
      </div>
      {interactive && (
        <div className="mt-auto border-t border-border px-4 py-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">View profile <ArrowUpRight className="h-3.5 w-3.5" /></span>
        </div>
      )}
    </div>
  )
}

export function StudentProfileCard({ student }: { student: StudentProfile }) {
  const hasProfile = Boolean(student.detailedBio?.length)
  if (!hasProfile) {
    return <article className="overflow-hidden rounded-2xl border border-border bg-background"><StudentCardBody student={student} interactive={false} /></article>
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="group h-full overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={`View profile for ${student.name}`}>
          <StudentCardBody student={student} interactive />
        </button>
      </DialogTrigger>
      <DialogContent className="!w-[94vw] !max-w-[1420px] max-h-[90vh] overflow-hidden p-0 sm:rounded-3xl">
        <div className="grid max-h-[90vh] overflow-y-auto md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[340px_minmax(0,1fr)]">
          <div className="bg-secondary/35 p-6 md:p-7">
            <div className="mx-auto aspect-[4/5] w-full max-w-[250px] overflow-hidden rounded-2xl border border-border bg-primary/10">
              <Avatar className="h-full w-full rounded-2xl">
                <AvatarImage src={student.image} alt={student.name} className="h-full w-full object-cover" />
                <AvatarFallback className="h-full w-full rounded-2xl bg-primary/10 text-4xl font-semibold text-primary">{getInitials(student.name)}</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">{student.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{student.role}</p>
          </div>

          <div className="min-w-0 p-6 md:p-9 lg:p-11">
            <DialogHeader className="max-w-5xl text-left">
              <DialogTitle className="text-3xl tracking-tight md:text-4xl">{student.name}</DialogTitle>
              {student.project && <DialogDescription className="text-base leading-relaxed md:text-lg">{student.project}</DialogDescription>}
            </DialogHeader>
            {student.detailedBio && (
              <div className="mt-7 max-w-5xl space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                {student.detailedBio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
