import { Hero } from "@/components/sections/hero"
import { Philosophy } from "@/components/sections/philosophy"
import { Services } from "@/components/sections/services"
import { FAQ } from "@/components/sections/faq"
import { Directions } from "@/components/sections/directions"
import { CTASection } from "@/components/sections/cta-section"

export default function Page() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <FAQ />
      <Directions />
      <CTASection />
    </>
  )
}
