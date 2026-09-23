"use client"

import { motion } from "framer-motion"
import { Code2, Trophy } from "lucide-react"

const competitions = [
  {
    icon: Trophy,
    result: "Winner",
    title: "HKU Pitch New Tech Ideas",
    subtitle: "VibeUI · March 2026",
    description: "Building VibeUI, a startup bringing AI into the graphical era. Our team earned up to HK$100,000 in funding support after winning HKU’s 2026 pitch competition.",
  },
  {
    icon: Code2,
    result: "Top 5",
    title: "UBS Coding Challenge",
    subtitle: "Python · September 2025",
    description: "Designed algorithmic solutions spanning graphs, networks, cybersecurity, computer vision, and API integrations under competition constraints.",
  },
]

export function CompetitionsSection() {
  return (
    <section id="competitions" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015] py-24 sm:py-32">
      <div className="section-shell">
        <p className="section-label">04 · Competitions</p>
        <h2 className="text-balance mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Ideas tested beyond the classroom.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {competitions.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }} className="surface relative overflow-hidden rounded-3xl p-7 sm:p-9">
              <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-green-400/5 blur-3xl" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-400/10 text-green-400"><item.icon /></span>
                <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-green-300">{item.result}</span>
              </div>
              <h3 className="relative mt-8 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="relative mt-2 text-sm text-slate-500">{item.subtitle}</p>
              <p className="relative mt-5 leading-7 text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
