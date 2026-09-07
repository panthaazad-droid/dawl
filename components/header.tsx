"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-data"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/people", label: "People" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const publicationsActive = pathname === "/publications" || pathname === "/posters"

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md ring-1 ring-black/5">
              <Image src="/images/brand/dawl-logo.png" alt="DAWL logo" fill className="object-cover" sizes="44px" priority />
            </div>
            <div className="hidden sm:block">
              <span className="block text-base font-semibold leading-tight tracking-tight">{siteConfig.labAcronym}</span>
              <span className="text-xs text-muted-foreground">{siteConfig.labName}</span>
            </div>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {navLinks.slice(0, 2).map((link) => {
              const active = pathname === link.href
              return (
                <Link key={link.href} href={link.href} className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${active ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`} aria-current={active ? "page" : undefined}>
                  {link.label}
                </Link>
              )
            })}

            <div className="group relative">
              <Link href="/publications" className={`flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm transition-colors ${publicationsActive ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                Publications <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 w-48 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-xl border border-border bg-background p-2 shadow-lg">
                  <Link href="/publications#journal-publications" className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary">Journal publications</Link>
                  <Link href="/publications#posters" className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary">Posters & abstracts</Link>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => {
              const active = pathname === link.href
              return (
                <Link key={link.href} href={link.href} className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${active ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`} aria-current={active ? "page" : undefined}>
                  {link.label}
                </Link>
              )
            })}
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-3 border-t border-border pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-secondary">About</Link>
              <Link href="/people" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-secondary">People</Link>
              <p className="px-3 pt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Publications</p>
              <Link href="/publications#journal-publications" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-5 py-2 text-sm hover:bg-secondary">Journal publications</Link>
              <Link href="/publications#posters" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-5 py-2 text-sm hover:bg-secondary">Posters & abstracts</Link>
              <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-secondary">Gallery</Link>
              <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-secondary">News</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-secondary">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
