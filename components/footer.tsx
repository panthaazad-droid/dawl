import Link from "next/link"
import { Leaf, Twitter, ExternalLink } from "lucide-react"
import { siteConfig } from "@/data/site-data"

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#team", label: "People" },
  { href: "#publications", label: "Publications" },
  { href: "#opportunities", label: "Opportunities" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-lg font-semibold tracking-tight block">{siteConfig.labAcronym}</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
              {siteConfig.labName} at the {siteConfig.university}. {siteConfig.tagline}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {siteConfig.social.twitter && (
                <Link
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
              )}
              {siteConfig.social.googleScholar && (
                <Link
                  href={siteConfig.social.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Google Scholar"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-4">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.slice(3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-medium mb-4">University</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="https://umanitoba.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  University of Manitoba
                </Link>
                <Link
                  href="https://umanitoba.ca/agricultural-food-sciences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Faculty of Ag Sciences
                </Link>
                <Link
                  href="https://umanitoba.ca/agricultural-food-sciences/plant-science"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Dept. of Plant Science
                </Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            {new Date().getFullYear()} {siteConfig.labName}. {siteConfig.university}.
          </p>
        </div>
      </div>
    </footer>
  )
}
