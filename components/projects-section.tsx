"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"

const projects = [
  {
    title: "Shell System",
    description:
      "POSIX-compliant shell in C++ with advanced features including I/O redirection, pipelines, and interactive REPL. This project implements a fully functional command-line interface that supports complex command chaining, background processes, and custom built-in commands. The shell provides robust error handling and maintains compatibility with standard UNIX shell operations.",
    tech: ["C++", "POSIX", "System Programming"],
    date: "July 2025",
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/tulsyandivyansh/shell-system",
    demo: null,
  },
  {
    title: "Form Builder",
    description:
      "Dynamic drag-and-drop form builder with React.js frontend and MySQL backend for seamless form management. Features include real-time form preview, custom field validation, responsive design templates, and comprehensive analytics dashboard. Users can create complex forms with conditional logic and export data in multiple formats.",
    tech: ["React.js", "Express.js", "MySQL", "Node.js"],
    date: "May 2025",
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/tulsyandivyansh/form-builder",
    demo: "https://form-builder-demo.vercel.app",
  },
  {
    title: "Big Two Card Game",
    description:
      "Multiplayer card game in Java with GUI, multi-threading support, and complete game logic implementation. The game supports up to 4 players with AI opponents, real-time networking capabilities, and a sophisticated scoring system. Features include animated card movements, sound effects, and tournament mode with leaderboards.",
    tech: ["Java", "Multi-threading", "GUI"],
    date: "Nov 2024",
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/tulsyandivyansh/big-two-game",
    demo: null,
  },
  {
    title: "Rocket Shooter Game",
    description:
      "2D game in C++ using NCURSES library with dynamic gameplay, multiple levels, and high-score system. The game features smooth character movement, collision detection, power-ups, and progressively challenging levels. Includes particle effects for explosions, background music integration, and save/load functionality for game progress.",
    tech: ["C++", "NCURSES", "Game Development"],
    date: "Apr 2024",
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/tulsyandivyansh/rocket-shooter",
    demo: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-green-400/10 h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Date badge */}
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                  </div>

                  {/* Quick action buttons on hover */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                      className="bg-gray-900/80 hover:bg-gray-800 text-white border border-gray-600 hover:border-green-400 backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        className="bg-green-400 hover:bg-green-500 text-black"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Project Title */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Scrollable Description */}
                  <div className="flex-1 mb-4">
                    <div className="max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2">
                      <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-green-400/50 text-green-400 hover:bg-green-400/10 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <Button
                      onClick={() => window.open(project.github, "_blank")}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-green-400/50 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    {project.demo && (
                      <Button
                        onClick={() => window.open(project.demo, "_blank")}
                        size="sm"
                        className="flex-1 bg-green-400 hover:bg-green-500 text-black transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.open("https://github.com/tulsyandivyansh", "_blank")}
            variant="outline"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
