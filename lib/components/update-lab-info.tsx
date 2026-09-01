"use client"

import { useState } from "react"
import { FileText, Newspaper, Upload, UserPlus } from "lucide-react"

const googleForms = [
  {
    id: "people",
    title: "Add Team Member",
    description:
      "Submit student, postdoc, research staff, or alumni information.",
    icon: UserPlus,
    embedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfKso_wPTvDU-TK8htlcOKZRmrvFO0L_sreJptkoKOMWxy3fg/viewform?embedded=true",
  },
  {
    id: "publications",
    title: "Add Publication",
    description:
      "Submit publication title, authors, year, journal, DOI, and related details.",
    icon: FileText,
    embedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScraQ0i4E77WFYamZdustSntK9Sro8U84j-Mm_rK5nzV2IWvw/viewform?embedded=true",
  },
  {
    id: "posters",
    title: "Add Poster or Abstract",
    description:
      "Submit poster title, authors, event, abstract, and PDF link.",
    icon: Upload,
    embedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeAamh3QB7jWrqrbXR7Wolz-3gMOkeIvG93qv8hOhMU45j7lQ/viewform?embedded=true",
  },
  {
    id: "news",
    title: "Add News or Event",
    description:
      "Submit conferences, field days, awards, thesis defenses, and lab updates.",
    icon: Newspaper,
    embedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdbu4QJhJrVb0rdG0bSAt4ZZ2XUk2Tl2nWoO-HaxoGonTA46Q/viewform?embedded=true",
  },
]

export function UpdateLabInfo() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState("")
  const [activeForm, setActiveForm] = useState(googleForms[0])

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    const response = await fetch("/api/update-lab-info-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()

    if (data.success) {
      setIsUnlocked(true)
      setPassword("")
    } else {
      setError(data.message || "Invalid username or password.")
    }
  }

  if (!isUnlocked) {
    return (
      <section className="min-h-[70vh] bg-secondary/30 py-24">
        <div className="mx-auto max-w-md px-6">
          <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              DAWL Admin
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Update Lab Info
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Enter the lab update username and password to access submission
              forms for team members, publications, posters, abstracts, and
              news updates.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Enter password"
                  required
                />
              </div>

              {error && (
                <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open Update Forms
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            DAWL Admin
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Update Lab Info
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Use these forms to submit new lab members, publications, posters,
            abstracts, and news updates. Each button opens the correct Google
            Form for that type of website update.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {googleForms.map((form) => {
            const Icon = form.icon
            const isActive = activeForm.id === form.id

            return (
              <button
                key={form.id}
                type="button"
                onClick={() => setActiveForm(form)}
                className={`rounded-2xl border p-5 text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background hover:border-primary/50"
                }`}
              >
                <Icon className="mb-4 h-6 w-6" />

                <h2 className="font-semibold">{form.title}</h2>

                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isActive
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {form.description}
                </p>
              </button>
            )
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          <div className="border-b border-border px-6 py-5">
            <h2 className="text-xl font-semibold">{activeForm.title}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Complete the selected Google Form below. Submissions will be
              reviewed before appearing on the public website.
            </p>
          </div>

          <iframe
            src={activeForm.embedUrl}
            title={activeForm.title}
            className="h-[1350px] w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  )
}