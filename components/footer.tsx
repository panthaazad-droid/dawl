import Image from "next/image"
import Link from "next/link"
import { BookOpen, ExternalLink, Mail } from "lucide-react"
import { siteConfig } from "@/data/site-data"

const navigation = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/news", label: "News & Events" },
]

const resources = [
  { href: "/publications", label: "Publications" },
  { href: "/posters", label: "Posters" },
  { href: "/gallery", label: "Gallery" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="max-w-md">
            <Link href="/" className="mb-5 inline-flex items-center gap-4">
              <div className="relative h-14 w-24 overflow-hidden">
                <Image
                  src="/images/brand/dawl-header-logo.png"
                  alt="DAWL logo"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <span className="block text-lg font-semibold tracking-tight">{siteConfig.labAcronym}</span>
                <span className="text-xs text-primary-foreground/55">{siteConfig.labName}</span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-primary-foreground/65">
              {siteConfig.labName}, {siteConfig.department}, {siteConfig.university}.
              Advancing sustainable crop production through digital agronomy,
              remote sensing, and weed science.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.contact.email && (
                <Link href={`mailto:${siteConfig.contact.email}`} className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 text-sm text-primary-foreground/75 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground">
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              )}
              {siteConfig.social.googleScholar && (
                <Link href={siteConfig.social.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 text-sm text-primary-foreground/75 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground">
                  <BookOpen className="h-4 w-4" />
                  Scholar
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="mb-4 font-medium">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {navigation.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="mb-4 font-medium">Resources</h4>
              <nav className="flex flex-col gap-3">
                {resources.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="mb-4 font-medium">University</h4>
              <nav className="flex flex-col gap-3">
                <Link href="https://umanitoba.ca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  University of Manitoba <ExternalLink className="h-3 w-3" />
                </Link>
                <Link href="https://umanitoba.ca/agricultural-food-sciences" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  Agricultural & Food Sciences <ExternalLink className="h-3 w-3" />
                </Link>
                <Link href="https://umanitoba.ca/agricultural-food-sciences/plant-science" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  Department of Plant Science <ExternalLink className="h-3 w-3" />
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} {siteConfig.labName}. {siteConfig.university}.
          </p>
          <p className="text-xs text-primary-foreground/35">
            Digital Agronomy & Weeds Lab · Winnipeg, Manitoba, Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
