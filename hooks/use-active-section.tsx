"use client"

import { useState } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return { activeSection, scrollToSection }
}
