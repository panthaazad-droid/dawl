import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LatestNews } from "@/components/latest-news"
import { Publications } from "@/components/publications"
import { Research } from "@/components/research"
import { Team } from "@/components/team"

export const revalidate = 180

export default function Home() {
  return (
    <>
      <Header />
      <main className="homepage-sections">
        <Hero />
        <About />
        <Research />
        <Team />
        <LatestNews />
        <Publications />
      </main>
      <Footer />
    </>
  )
}
