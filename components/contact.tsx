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
    <section className="bg-secondary/15 pb-12 pt-3 md:pb-14 md:pt-4">
      <div className="mx-auto max-w-5xl px-5 md:px-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            const content = (
              <div className="flex min-h-[108px] gap-4 rounded-2xl bg-background p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <p className="text-[clamp(0.9rem,1.3vw,1rem)] font-medium">{item.label}</p>
                  <p className="mt-1 break-words text-[clamp(0.86rem,1.2vw,0.98rem)] leading-relaxed text-muted-foreground">{item.value}</p>
                </div>
              </div>
            )
            return item.href ? <Link key={item.label} href={item.href} className="rounded-2xl transition-colors hover:bg-secondary/30">{content}</Link> : <div key={item.label}>{content}</div>
          })}
        </div>
      </div>
    </section>
  )
}
