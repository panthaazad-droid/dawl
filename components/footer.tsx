import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Mail } from "lucide-react"
import { siteConfig } from "@/data/site-data"

export function Footer() {
  return (
    <footer className="bg-foreground py-8 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Home">
            <div className="relative h-10 w-10 overflow-hidden rounded-md"><Image src="/images/brand/dawl-logo.png" alt="DAWL logo" fill className="object-cover" sizes="40px" /></div>
            <div>
              <span className="block text-sm font-semibold">{siteConfig.labAcronym}</span>
              <span className="text-xs text-primary-foreground/55">{siteConfig.department} · {siteConfig.university}</span>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <Link href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-1.5 text-primary-foreground/65 hover:text-primary-foreground"><Mail className="h-4 w-4" />Email</Link>
            <Link href="https://umanitoba.ca/agricultural-food-sciences/plant-science" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-foreground/65 hover:text-primary-foreground">Plant Science <ExternalLink className="h-3 w-3" /></Link>
          </div>
        </div>
        <div className="mt-6 border-t border-primary-foreground/10 pt-4 text-xs text-primary-foreground/40">© {new Date().getFullYear()} {siteConfig.labName}</div>
      </div>
    </footer>
  )
}
