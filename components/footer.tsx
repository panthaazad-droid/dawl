import Image from "next/image"
import Link from "next/link"
import { BookOpen, ExternalLink, Mail } from "lucide-react"
import { siteConfig } from "@/data/site-data"

const navigation = [
  { href: "/about", label: "About" },
  { href: "/#research", label: "Research" },
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
    <footer className="bg-[#14291a] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-white/95 p-1.5">
                <Image src="/images/brand/dawl-logo.png" alt="DAWL logo" fill className="object-contain p-1" sizes="64px" />
              </div>
              <div>
                <span className="block text-xl font-semibold tracking-tight">{siteConfig.labAcronym}</span>
                <span className="text-sm text-white/55">Digital Agronomy & Weeds Lab</span>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-white/65">
              {siteConfig.department}, {siteConfig.university}. Advancing sustainable crop production through digital agronomy, remote sensing, and weed science.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.contact.email && (
                <Link href={`mailto:${siteConfig.contact.email}`} className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/10 px-3 text-sm text-white/75 hover:bg-white/15 hover:text-white">
                  <Mail className="h-4 w-4" /> Email
                </Link>
              )}
              {siteConfig.social.googleScholar && (
                <Link href={siteConfig.social.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/10 px-3 text-sm text-white/75 hover:bg-white/15 hover:text-white">
                  <BookOpen className="h-4 w-4" /> Scholar
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="mb-4 font-medium text-white">Explore</h4>
              <nav className="flex flex-col gap-3">
                {navigation.map((link) => <Link key={link.href} href={link.href} className="text-sm text-white/55 hover:text-white">{link.label}</Link>)}
              </nav>
            </div>
            <div>
              <h4 className="mb-4 font-medium text-white">Research</h4>
              <nav className="flex flex-col gap-3">
                {resources.map((link) => <Link key={link.href} href={link.href} className="text-sm text-white/55 hover:text-white">{link.label}</Link>)}
              </nav>
            </div>
            <div>
              <h4 className="mb-4 font-medium text-white">University</h4>
              <nav className="flex flex-col gap-3">
                <Link href="https://umanitoba.ca/agricultural-food-sciences/plant-science" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white">Plant Science <ExternalLink className="h-3 w-3" /></Link>
                <Link href="https://umanitoba.ca/agricultural-food-sciences" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white">Agricultural & Food Sciences <ExternalLink className="h-3 w-3" /></Link>
                <Link href="https://umanitoba.ca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white">University of Manitoba <ExternalLink className="h-3 w-3" /></Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} {siteConfig.labName}. {siteConfig.university}.</p>
          <p className="text-xs text-white/35">Winnipeg, Manitoba, Canada</p>
        </div>
      </div>
    </footer>
  )
}
