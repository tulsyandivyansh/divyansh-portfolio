"use client"

import { motion } from "framer-motion"

const experience = [
  {
    title: "Web Development Intern",
    company: "Decoder",
    period: "June 2025 - Present",
    description: [
      "Developed scalable modular CRM system using Next.js, TypeScript, React.js, Node.js and MongoDB",
      "Revamped authentication with role-based access control for multi-company management",
      "Integrated WhatsApp Manager for automated client communication via webhooks",
      "Created web scraping pipelines for AI-powered chatbot automation",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-green-400"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-green-400">{exp.title}</h3>
                <h4 className="text-xl font-semibold mb-2">{exp.company}</h4>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
