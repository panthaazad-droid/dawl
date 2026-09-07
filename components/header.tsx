"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-data"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || (href === "/news" && pathname.startsWith("/news/"))
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-5 py-2 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md ring-1 ring-black/5">
              <Image src="/images/brand/dawl-logo.png" alt="DAWL logo" fill className="object-cover" sizes="40px" priority />
            </div>
            <div className="hidden sm:block">
              <span className="block text-[15px] font-semibold leading-tight tracking-tight">{siteConfig.labAcronym}</span>
              <span className="text-[11px] text-muted-foreground">{siteConfig.labName}</span>
            </div>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${active ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  aria-current={active ? "page" : undefined}
                >
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
          <div className="mt-2 border-t border-border pt-2 lg:hidden">
            <div className="flex flex-col gap-1 pb-1">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm ${active ? "bg-primary/10 font-medium text-primary" : "hover:bg-secondary"}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
