import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PiSpotlight() {
  return (
    <section className="bg-background py-11 md:py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-secondary/15 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[430px]">
            <Image
              src="/images/home/dilshan-lab-uav.jpg"
              alt="Dr. Dilshan Benaragama working with UAV research equipment in the lab"
              fill
              className="object-cover"
              style={{ objectPosition: "center 52%" }}
              sizes="(max-width: 1024px) 100vw, 53vw"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">Principal Investigator</p>
            <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.25rem)] font-semibold leading-[1.02] tracking-tight">Dr. Dilshan Benaragama</h2>
            <p className="mt-4 max-w-xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-muted-foreground">
              Assistant Professor in the Department of Plant Science, leading research across weed science, agronomy, remote sensing, and precision agriculture.
            </p>
            <Link href="/people" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary hover:underline">
              Meet the team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
