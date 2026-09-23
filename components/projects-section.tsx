"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Calendar, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Low-Latency Electronic Trading Engine",
    eyebrow: "Systems engineering",
    description: "A complete C++ electronic trading stack: binary UDP market data, sequence-gap detection, a price-time-priority matching engine, TCP order entry, and an autonomous market-making client. Latency-critical paths are measured and tuned with allocation-free serialization, CPU affinity experiments, sanitizers, and Linux perf.",
    tech: ["C++", "Linux", "Networking", "Performance"],
    date: "July 2026",
    image: "/projects/trading-engine.jpg",
    github: "https://github.com/tulsyandivyansh/low-latency-trading-engine",
    featured: true,
  },
  {
    title: "Unix Shell & Process Runtime",
    eyebrow: "Operating systems",
    description: "A C++ Unix shell and runtime with a custom lexer and parser, pipelines, redirection, conditional execution, history, autocompletion, job control, signals, /proc inspection, resource limits, Linux namespaces, and ptrace tracing. Stress tests, fuzzing, ASan, and UBSan support reliability.",
    tech: ["C++", "POSIX", "Linux"],
    date: "July 2025",
    image: "/projects/unix-shell.jpg",
    github: "https://github.com/tulsyandivyansh/shell",
  },
  {
    title: "Form Builder",
    eyebrow: "Full-stack product",
    description: "A responsive drag-and-drop form builder with live previews, custom validation, reusable templates, conditional logic, analytics, and multi-format exports. Built with a React interface and an Express, Node.js, and MySQL backend.",
    tech: ["React", "Express", "MySQL", "Node.js"],
    date: "May 2025",
    image: "/projects/form-builder.jpg",
    github: "https://github.com/tulsyandivyansh/Form_builder",
  },
  {
    title: "Big Two Card Game",
    eyebrow: "Multiplayer Java",
    description: "A complete multiplayer implementation of Big Two with a desktop GUI, real-time multi-client gameplay, card validation, turn management, win conditions, AI opponents, animated card movement, sound effects, and tournament scoring.",
    tech: ["Java", "Multithreading", "GUI"],
    date: "Nov 2024",
    image: "/projects/big-two-game.png",
    github: "https://github.com/tulsyandivyansh/Big-Two",
  },
  {
    title: "Rocket Rampage",
    eyebrow: "Terminal game",
    description: "A fast 2D C++ game built with NCURSES, featuring responsive movement, collision detection, power-ups, multiple levels, progressive difficulty, a high-score system, particle effects, background audio, and save/load support.",
    tech: ["C++", "NCURSES", "Game Design"],
    date: "Apr 2024",
    image: "/projects/rocket-rampage.jpg",
    github: "https://github.com/tulsyandivyansh/ENGG1340--Rocket-Rampage",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="section-shell">
        <p className="section-label">03 · Selected work</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-balance max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Projects built from the protocol up.</h2>
          <a href="https://github.com/tulsyandivyansh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300">
            View GitHub profile <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.06, 0.18) }}
              viewport={{ once: true, margin: "-60px" }}
              className={`surface group overflow-hidden rounded-3xl ${project.featured ? "md:col-span-2" : ""}`}
            >
              <div className={project.featured ? "grid lg:grid-cols-[1.2fr_.8fr]" : ""}>
                <a href={project.github} target="_blank" rel="noreferrer" className={`relative block overflow-hidden ${project.featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[410px]" : "aspect-[16/10]"}`} aria-label={`View ${project.title} on GitHub`}>
                  <Image src={project.image} alt={`${project.title} project visual`} fill sizes={project.featured ? "(max-width: 1024px) 100vw, 700px" : "(max-width: 768px) 100vw, 560px"} className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c0f]/70 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-black/35 text-white backdrop-blur-md transition group-hover:bg-green-400 group-hover:text-[#07100b]"><ArrowUpRight className="h-4 w-4" /></span>
                </a>

                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em]">
                    <span className="font-semibold text-green-400">{project.eyebrow}</span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500"><Calendar className="h-3.5 w-3.5" />{project.date}</span>
                  </div>
                  <h3 className={`${project.featured ? "text-3xl sm:text-4xl" : "text-2xl"} mt-5 font-semibold tracking-[-0.03em] text-white`}>{project.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => <span key={tech} className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-slate-300">{tech}</span>)}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-green-400">
                    <Github className="h-4 w-4" /> View source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
