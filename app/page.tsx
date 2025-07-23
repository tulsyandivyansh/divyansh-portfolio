"use client"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { CursorFollower } from "@/components/cursor-follower"
import { Footer } from "@/components/footer"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { useActiveSection } from "@/hooks/use-active-section"

export default function Portfolio() {
  const mousePosition = useMousePosition()
  const { activeSection, scrollToSection } = useActiveSection()

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CursorFollower mousePosition={mousePosition} />
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
