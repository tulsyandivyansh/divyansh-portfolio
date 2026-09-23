"use client"

import { motion } from "framer-motion"
import { BookOpen, GraduationCap, School } from "lucide-react"

const skillGroups = [
  { title: "Languages", skills: ["C++", "Python", "Java", "C", "SQL", "JavaScript", "TypeScript", "R", "HTML", "CSS"] },
  { title: "Frameworks", skills: ["Next.js", "React.js", "Node.js", "Express.js", "Flask"] },
  { title: "Data & tools", skills: ["MySQL", "MongoDB", "SQLite", "Linux", "Docker", "Git", "GitHub", "Codex", "Claude Code"] },
  { title: "Focus areas", skills: ["Algorithms & Data Structures", "Full Stack Development", "Data Analysis", "Systems Programming", "Networking", "Performance Engineering", "DBMS", "AI & ML"] },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="section-label">01 · About</p>
            <h2 className="text-balance mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">A broad toolkit, grounded in fundamentals.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              My work spans low-level systems, full-stack products, data pipelines, and applied AI. I care about understanding how things work, measuring what matters, and shipping software people can trust.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3">
              <div className="surface rounded-2xl p-5">
                <p className="text-3xl font-semibold text-green-400">3.44<span className="text-lg text-slate-500">/4.3</span></p>
                <p className="mt-1 text-sm text-slate-400">HKU CGPA</p>
              </div>
              <div className="surface rounded-2xl p-5">
                <p className="text-3xl font-semibold text-green-400">2027</p>
                <p className="mt-1 text-sm text-slate-400">Expected graduation</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface rounded-3xl p-6 sm:p-8">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-400/10 text-green-400"><GraduationCap /></span>
                <div>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">The University of Hong Kong</h3>
                      <p className="mt-1 text-slate-400">Bachelor of Engineering, Computer Science</p>
                    </div>
                    <span className="text-sm text-slate-500">Sep 2023 – Jun 2027</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">CGPA: 3.44/4.3 · Dean’s List 2024–2025 · HKU Undergraduate Entrance Scholarship</p>
                </div>
              </div>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface rounded-3xl p-6 sm:p-8">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300"><BookOpen /></span>
                <div>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">The University of New South Wales</h3>
                      <p className="mt-1 text-slate-400">Exchange semester · Sydney, Australia</p>
                    </div>
                    <span className="text-sm text-slate-500">Jan – May 2026</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">Computer Networks · Algorithm Design and Analysis · Artificial Intelligence</p>
                </div>
              </div>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface rounded-3xl p-6 sm:p-8">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-amber-300"><School /></span>
                <div>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Don Bosco School, Kolkata</h3>
                      <p className="mt-1 text-slate-400">Indian School Certificate · 97.25%</p>
                    </div>
                    <span className="text-sm text-slate-500">Jun 2011 – Jun 2023</span>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Technical toolkit</h3>
            <p className="hidden text-sm text-slate-500 sm:block">Built through coursework, internships, and projects</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="surface rounded-2xl p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-green-400">{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-slate-300">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
