import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LatestNews } from "@/components/latest-news"
import { Publications } from "@/components/publications"
import { PiSpotlight } from "@/components/pi-spotlight"
import { Research } from "@/components/research"

export const revalidate = 180

export default function Home() {
  return (
    <>
      <Header />
      <main className="page-enter">
        <Hero />
        <About />
        <Research />
        <PiSpotlight />
        <LatestNews />
        <Publications />
      </main>
      <Footer />
    </>
  )
}
