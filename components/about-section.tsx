"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  "Programming Languages": ["C++", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "R"],
  "Frameworks & Libraries": ["React.js", "Next.js", "Node.js", "Express.js"],
  Databases: ["MySQL", "MongoDB"],
  "Areas of Expertise": ["Data Structures & Algorithms", "Full Stack Development", "Data Analysis"],
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 mt-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-green-400">Education & Achievements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">The University of Hong Kong</h4>
                <p className="text-gray-400">Bachelor of Engineering, Computer Science</p>
                <p className="text-gray-400">CGPA: 3.41/4.3 (Dean's List 2024-2025)</p>
                <p className="text-sm text-green-400">HKU Undergraduate Entrance Scholarship</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Don Bosco School, Kolkata</h4>
                <p className="text-gray-400">Indian School Certificate: 97.25%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-green-400">Leadership & Activities</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Chairperson - HKU Student's Cricket Club</h4>
                <p className="text-gray-400">September 2024 - Present</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Member - Lead for Life HKU</h4>
                <p className="text-gray-400">September 2023 - Present</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Table Tennis Team - HKU Engineering Society</h4>
                <p className="text-gray-400">September 2023 - September 2024</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-12 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-colors">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-green-400">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
