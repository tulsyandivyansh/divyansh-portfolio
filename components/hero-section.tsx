"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="section-shell flex min-h-screen scroll-mt-24 items-center pb-16 pt-32 sm:pt-36">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5 text-sm text-green-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Open to software engineering opportunities
          </div>

          <p className="section-label mb-5">Computer Science · HKU</p>
          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.25rem]">
            I build software where <span className="text-green-400">systems meet intelligence.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I’m Divyansh Tulsyan, a final-year computer science student who enjoys solving complex problems across systems, software, and AI. I care about strong fundamentals, measurable performance, and building reliable technology that works well in the real world.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => scrollToSection("projects")} className="inline-flex items-center gap-2 rounded-xl bg-green-400 px-5 py-3 font-semibold text-[#07100b] transition hover:-translate-y-0.5 hover:bg-green-300">
              Explore my work <ArrowDown className="h-4 w-4" />
            </button>
            <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/10">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-green-400" /> Hong Kong</span>
            <a href="https://github.com/tulsyandivyansh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/dtulsyan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="mailto:tulsyandivyanshh@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white"><Mail className="h-4 w-4" /> Email</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div aria-hidden className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-green-400/20 via-transparent to-cyan-400/10 blur-2xl" />
          <div className="surface relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-slate-900">
              <Image src="/profile-boat.jpg" alt="Divyansh Tulsyan standing on a boat with the ocean and an island behind him" fill priority sizes="(max-width: 1024px) 90vw, 420px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07100b] via-[#07100b]/65 to-transparent p-6 pt-24">
                <p className="text-xl font-semibold text-white">Divyansh Tulsyan</p>
                <p className="mt-1 text-sm text-slate-300">BEng Computer Science · Class of 2027</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
