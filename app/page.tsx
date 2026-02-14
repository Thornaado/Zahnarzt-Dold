import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { FAQ } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta-section"

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <FAQ />
      <CTASection />
    </>
  )
}
