"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ["home", "about", "experience", "projects", "contact"]

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-green-400"
          >
            DT
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:text-green-400 ${
                  activeSection === item ? "text-green-400" : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left capitalize py-2 hover:text-green-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
