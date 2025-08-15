import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Integrations from "@/components/Integrations"
import Introduction from "@/components/Introduction"
import LogoTicker from "@/components/LogoTicker"
import Navbar from "@/components/Navbar"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
    </>
  )
}

export default Home
