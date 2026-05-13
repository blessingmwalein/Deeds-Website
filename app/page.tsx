import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhatWeDoSection } from "@/components/home/what-we-do-section"
import { AboutSection } from "@/components/home/about-section"
import { VideoSection } from "@/components/home/video-section"
import { ProgrammesSection } from "@/components/home/programmes-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <AboutSection />
        <VideoSection />
        <ProgrammesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
