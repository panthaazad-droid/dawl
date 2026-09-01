import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/data/site-data"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Get in touch
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in collaboration, graduate opportunities, research
            partnerships, or learning more about DAWL? Contact us directly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight">
              Contact information
            </h3>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              The Digital Agronomy & Weeds Lab is based in the Department of
              Plant Science at the University of Manitoba.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium">Email</p>
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </Link>
                </div>
              </div>

              {siteConfig.contact.phone && (
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-medium">Phone</p>
                    <Link
                      href={`tel:${siteConfig.contact.phone}`}
                      className="mt-1 block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </Link>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium">Address</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {siteConfig.contact.officeHours && (
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-medium">Office hours</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {siteConfig.contact.officeHours}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-sm">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/70">
              Contact DAWL
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight">
              Start a conversation
            </h3>

            <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/80">
              For graduate student inquiries, research collaboration, producer
              engagement, media requests, or general questions, please contact
              the lab by email. Including your CV and research interests is
              recommended for student and postdoctoral inquiries.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`mailto:${siteConfig.contact.email}?subject=DAWL inquiry`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-medium text-primary hover:bg-primary-foreground/90 transition-colors"
              >
                Email the Lab
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/#opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                View Opportunities
              </Link>
            </div>

            <div className="mt-10 rounded-2xl bg-primary-foreground/10 p-6">
              <h4 className="font-semibold">For applicants</h4>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                Please include your academic background, research interests,
                relevant skills, and preferred program or position when
                contacting the lab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}