"use client"

import { AboutSection } from "@/components/about-section"
import { CompetitionsSection } from "@/components/competitions-section"
import { ContactSection } from "@/components/contact-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/projects-section"
import { useActiveSection } from "@/hooks/use-active-section"

export default function Portfolio() {
  const { activeSection, scrollToSection } = useActiveSection()

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden className="page-grid pointer-events-none fixed inset-0 z-0" />
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <div className="relative z-10">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CompetitionsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
