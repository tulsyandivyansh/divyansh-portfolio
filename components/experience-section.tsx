"use client"

import { motion } from "framer-motion"
import { Building2, MapPin } from "lucide-react"

const experience = [
  {
    role: "System Analyst Intern",
    company: "Aereve Company Ltd",
    period: "Jul – Sep 2026",
    location: "Hong Kong",
    summary: "Made AI-assisted compliance investigations significantly faster and more reliable.",
    bullets: [
      "Reduced end-to-end latency in an AI-powered eKYC screening pipeline by approximately 80% using concurrency, caching, and inference optimization.",
      "Improved classification accuracy to over 97% across a Python, Flask, SQLite, SerpAPI, and DeepSeek stack.",
      "Designed identity-aware entity clustering and an MCP workflow with traceable tool calls and human validation.",
    ],
    metrics: ["~80% lower latency", ">97% accuracy"],
  },
  {
    role: "Web Development Intern",
    company: "Decoder",
    period: "Jun 2025 – Present",
    location: "Hong Kong",
    summary: "Built core CRM workflows and the data infrastructure behind an AI chatbot knowledge base.",
    bullets: [
      "Developed a modular CRM using Next.js, TypeScript, React, Node.js, and MongoDB, including a centralized booking workflow.",
      "Implemented role-based access control, granular permissions, tenant-level data isolation, and dynamic interface access.",
      "Integrated WhatsApp Manager through webhooks and built seven multiprocessing scraping pipelines with supporting APIs.",
      "Reduced data aggregation time by 70% while supplying structured data to the chatbot knowledge base.",
    ],
    metrics: ["7 data pipelines", "70% faster aggregation"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015] py-24 sm:py-32">
      <div className="section-shell">
        <p className="section-label">02 · Experience</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-balance max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Engineering experience with measurable outcomes.</h2>
          <p className="max-w-md leading-7 text-slate-400">From AI compliance systems to CRM infrastructure, I focus on performance, reliability, and clear product value.</p>
        </div>

        <div className="mt-14 space-y-5">
          {experience.map((item, index) => (
            <motion.article key={item.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }} className="surface rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
                <div>
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-green-400/10 text-green-400"><Building2 className="h-5 w-5" /></span>
                  <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-2 text-lg text-green-300">{item.company}</p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span>{item.period}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {item.location}</span>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => <span key={metric} className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-xs font-semibold text-green-300">{metric}</span>)}
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium leading-8 text-slate-200">{item.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-7 text-slate-400"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
