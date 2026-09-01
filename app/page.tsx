import { About } from "@/components/about"
import { ContactCTA } from "@/components/contact-cta"
import { CurrentResearch } from "@/components/current-research"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LatestNews } from "@/components/latest-news"
import { Posters } from "@/components/posters"
import { Publications } from "@/components/publications"
import { Research } from "@/components/research"
import { Team } from "@/components/team"
import { Technology } from "@/components/technology"

export const revalidate = 180

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <CurrentResearch />
        <Technology />
        <Team />
        <LatestNews />
        <Publications />
        <Posters />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
