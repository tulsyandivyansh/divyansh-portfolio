"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const items = ["about", "experience", "projects", "competitions", "contact"]

export function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [open, setOpen] = useState(false)

  const navigate = (id: string) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#090d10]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <button onClick={() => navigate("home")} className="flex items-center gap-3 text-left" aria-label="Go to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-green-400 text-sm font-black text-[#07100b]">DT</span>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">Divyansh Tulsyan</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => navigate(item)}
              className={`rounded-xl px-3 py-2 text-sm capitalize transition-colors ${
                activeSection === item ? "bg-white/8 text-green-400" : "text-slate-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href="/DivyanshTulsyan_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-400 hover:text-[#07100b] sm:flex"
        >
          Résumé <ArrowUpRight className="h-4 w-4" />
        </a>

        <button onClick={() => setOpen(!open)} className="rounded-xl p-2 text-slate-300 lg:hidden" aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#090d10]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {items.map((item) => (
              <button key={item} onClick={() => navigate(item)} className="block w-full rounded-xl px-4 py-3 text-left capitalize text-slate-300 hover:bg-white/5 hover:text-white">
                {item}
              </button>
            ))}
            <a href="/DivyanshTulsyan_CV.pdf" target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-between rounded-xl bg-green-400 px-4 py-3 font-semibold text-[#07100b]">
              View résumé <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
