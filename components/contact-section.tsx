"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="mailto:tulsyandivyanshh@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105 text-center">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">tulsyandivyanshh@gmail.com</p>
              </CardContent>
            </Card>
          </motion.a>

          <motion.a
            href="tel:+85256316338"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105 text-center">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">(+852) 56316338</p>
              </CardContent>
            </Card>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dtulsyan"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105 text-center">
              <CardContent className="p-8">
                <Linkedin className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400">Connect with me</p>
              </CardContent>
            </Card>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
