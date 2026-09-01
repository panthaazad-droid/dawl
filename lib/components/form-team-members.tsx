import Link from "next/link"
import { ExternalLink, UserRound } from "lucide-react"
import { getApprovedTeamMembers } from "@/lib/google-sheet"

export async function FormTeamMembers() {
  const teamMembers = await getApprovedTeamMembers()

  if (teamMembers.length === 0) {
    return null
  }

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Lab Updates
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Newly submitted team members
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Approved team member updates submitted through the DAWL update form.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((person) => (
            <article
              key={`${person.name}-${person.position}`}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <UserRound className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight">
                {person.name}
              </h3>

              {person.position && (
                <p className="mt-2 text-sm font-medium text-primary">
                  {person.position}
                </p>
              )}

              {person.bio && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {person.bio}
                </p>
              )}

              {person.link && (
                <Link
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  View link
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}