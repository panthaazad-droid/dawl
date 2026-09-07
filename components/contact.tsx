import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/data/site-data"

export function Contact() {
  const items = [
    { label: "Email", value: siteConfig.contact.email, icon: Mail, href: `mailto:${siteConfig.contact.email}` },
    siteConfig.contact.phone ? { label: "Phone", value: siteConfig.contact.phone, icon: Phone, href: `tel:${siteConfig.contact.phone}` } : null,
    { label: "Address", value: siteConfig.contact.address, icon: MapPin, href: "" },
    siteConfig.contact.officeHours ? { label: "Office hours", value: siteConfig.contact.officeHours, icon: Clock, href: "" } : null,
  ].filter(Boolean) as { label: string; value: string; icon: typeof Mail; href: string }[]

  return (
    <section className="bg-secondary/20 py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            const content = (
              <div className="flex gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/25">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
                </div>
              </div>
            )
            return item.href ? <Link key={item.label} href={item.href}>{content}</Link> : <div key={item.label}>{content}</div>
          })}
        </div>
      </div>
    </section>
  )
}
