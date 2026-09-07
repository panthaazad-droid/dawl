import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Mail } from "lucide-react"
import { siteConfig } from "@/data/site-data"

const links = [
  { href: "/about", label: "About" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground py-10 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-md"><Image src="/images/brand/dawl-logo.png" alt="DAWL logo" fill className="object-cover" sizes="44px" /></div>
              <div><span className="block font-semibold">{siteConfig.labAcronym}</span><span className="text-xs text-primary-foreground/55">{siteConfig.department} · {siteConfig.university}</span></div>
            </Link>
            {siteConfig.contact.email && <Link href={`mailto:${siteConfig.contact.email}`} className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/65 hover:text-primary-foreground"><Mail className="h-4 w-4" />{siteConfig.contact.email}</Link>}
          </div>

          <div className="flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-sm">
            {links.map((link) => <Link key={link.href} href={link.href} className="text-primary-foreground/65 hover:text-primary-foreground">{link.label}</Link>)}
            <Link href="https://umanitoba.ca/agricultural-food-sciences/plant-science" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-foreground/65 hover:text-primary-foreground">Plant Science <ExternalLink className="h-3 w-3" /></Link>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-5 text-xs text-primary-foreground/40">© {new Date().getFullYear()} {siteConfig.labName}</div>
      </div>
    </footer>
  )
}
