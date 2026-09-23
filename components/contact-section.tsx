"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const links = [
  { icon: Mail, label: "Email", value: "tulsyandivyanshh@gmail.com", href: "mailto:tulsyandivyanshh@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/dtulsyan", href: "https://www.linkedin.com/in/dtulsyan" },
  { icon: Github, label: "GitHub", value: "@tulsyandivyansh", href: "https://github.com/tulsyandivyansh" },
  { icon: Phone, label: "Phone", value: "+852 5631 6338", href: "tel:+85256316338" },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface relative overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:p-16">
          <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="section-label">05 · Contact</p>
              <h2 className="text-balance mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">Have an interesting problem to solve?</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">I’m open to software engineering roles, ambitious technical projects, and conversations about systems, AI, or product engineering.</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4 text-green-400" /> Based in Hong Kong</div>
            </div>

            <div className="grid content-start gap-3">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-green-400/30 hover:bg-green-400/[0.06]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-green-400"><Icon className="h-5 w-5" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.15em] text-slate-500">{label}</span>
                    <span className="mt-1 block truncate text-sm font-medium text-slate-200">{value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-400" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
