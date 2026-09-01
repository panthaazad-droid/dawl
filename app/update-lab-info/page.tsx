import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UpdateLabInfo } from "@/components/update-lab-info"

export const metadata = {
  title: "Update Lab Info | Digital Agronomy and Weeds Lab",
  description:
    "Internal update forms for Digital Agronomy and Weeds Lab members.",
}

export default function UpdateLabInfoPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <UpdateLabInfo />
      </main>
      <Footer />
    </>
  )
}