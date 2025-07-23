"use client"

import { motion, useAnimation } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, MapPin, GraduationCap, Code, Zap, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Static particles data to avoid hydration mismatch
  const particles = [
    { id: 0, x: 10, y: 20, size: 3, duration: 15, delay: 0 },
    { id: 1, x: 85, y: 15, size: 2, duration: 18, delay: 1 },
    { id: 2, x: 25, y: 80, size: 4, duration: 12, delay: 2 },
    { id: 3, x: 70, y: 60, size: 2.5, duration: 20, delay: 0.5 },
    { id: 4, x: 40, y: 30, size: 3.5, duration: 16, delay: 1.5 },
    { id: 5, x: 90, y: 85, size: 2, duration: 14, delay: 2.5 },
    { id: 6, x: 15, y: 50, size: 3, duration: 17, delay: 3 },
    { id: 7, x: 60, y: 10, size: 2.5, duration: 19, delay: 0.8 },
    { id: 8, x: 35, y: 90, size: 4, duration: 13, delay: 1.8 },
    { id: 9, x: 80, y: 40, size: 3, duration: 21, delay: 2.2 },
  ]

  // Static floating icons data
  const floatingIcons = [
    { icon: Code, x: 10, y: 20, delay: 0 },
    { icon: Zap, x: 85, y: 15, delay: 1 },
    { icon: Star, x: 15, y: 80, delay: 2 },
    { icon: Heart, x: 90, y: 75, delay: 3 },
  ]

  const handleImageClick = () => {
    controls.start({
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: { duration: 1, ease: "easeInOut" },
    })
  }

  // Don't render interactive elements until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <section id="home" className="min-h-screen flex flex-col justify-center relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-blue-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-green-400 font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Available for opportunities</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hello i'm <span className="text-green-400">Divyansh</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 font-light">Computer Science Student</p>
              </div>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Passionate about creating innovative solutions and building scalable applications. Currently pursuing my
                Bachelor's in Computer Science at The University of Hong Kong.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-700/50">
                <img
                  src="/profile.jpeg?height=400&width=320"
                  alt="Divyansh Tulsyan"
                  className="w-80 h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-28 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-blue-400/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(168,85,247,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: "rgba(34, 197, 94, 0.3)",
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-green-400/20"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.icon className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      {/* Interactive cursor follower */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-green-400/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left side - Enhanced Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Animated greeting */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 text-green-400 font-medium"
              >
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Available for opportunities
                </motion.span>
              </motion.div>

              {/* Fixed typewriter effect for name */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span>Hello i'm </span>
                <motion.span
                  className="text-green-400 relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <motion.span
                    animate={
                      isHovered
                        ? {
                            textShadow: [
                              "0 0 0px rgba(34,197,94,0.5)",
                              "0 0 20px rgba(34,197,94,0.8)",
                              "0 0 0px rgba(34,197,94,0.5)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    Divyansh
                  </motion.span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Sparkle effects */}
                  {isHovered && (
                    <>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-green-400 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + (i % 2) * 20}%`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [0, -20],
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.span>
              </div>

              <motion.p
                className="text-2xl md:text-3xl text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  style={{
                    background: "linear-gradient(90deg, #9CA3AF, #22C55E, #3B82F6, #9CA3AF)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Computer Science Student
                </motion.span>
              </motion.p>
            </div>

            {/* Animated description */}
            <motion.p
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Passionate about creating innovative solutions and building scalable applications. Currently pursuing my
              Bachelor's in Computer Science at The University of Hong Kong.
            </motion.p>

            {/* Enhanced stats with animations */}
            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex -space-x-2">
                  <motion.div
                    className="w-8 h-8 bg-green-400 rounded-full border-2 border-black flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                  
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 bg-blue-400 rounded-full border-2 border-black"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-8 h-8 bg-purple-400 rounded-full border-2 border-black"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ scale: 1.05, color: "#22C55E" }}
              >
                <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
                  <MapPin className="w-4 h-4" />
                </motion.div>
                <span className="text-sm">Hong Kong</span>
              </motion.div>
            </motion.div>

            {/* Animated quote */}
            <motion.div
              className="pt-6 border-l-2 border-green-400/30 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.p
                className="text-gray-500 italic font-light"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                "Building with Purpose, Coding for Impact, Innovating for Tomorrow"
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right side - Super Enhanced Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex flex-col justify-center items-center pt-28"
          >
            <div className="relative">
              {/* Animated decorative rings */}
              <motion.div
                className="absolute -inset-8 border-2 border-green-400/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-12 border border-blue-400/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Static floating orbs to avoid hydration issues */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-green-400/30 rounded-full"
                  style={{
                    left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Enhanced decorative elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Main image container with click animation */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-700/50 cursor-pointer"
                onClick={handleImageClick}
                animate={controls}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34,197,94,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/profile.jpeg?height=400&width=320"
                  alt="Divyansh Tulsyan"
                  className="w-80 h-auto object-contain rounded-xl"
                />

                {/* Click me indicator */}
                <motion.div
                  className="absolute top-2 right-2 bg-green-400/20 text-green-400 px-2 py-1 rounded-full text-xs"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Click me!
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced Social links with proper positioning */}
            <motion.div
              className="flex justify-center space-x-4 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/tulsyandivyansh",
                  label: "GitHub",
                  color: "hover:bg-purple-400/20",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/dtulsyan",
                  label: "LinkedIn",
                  color: "hover:bg-blue-400/20",
                },
                {
                  icon: Mail,
                  href: "mailto:tulsyandivyanshh@gmail.com",
                  label: "Email",
                  color: "hover:bg-red-400/20",
                },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group relative p-3 bg-gray-800/50 ${color} rounded-full border border-gray-700/50 hover:border-green-400/50 transition-all duration-300`}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20, rotate: -180 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />

                  {/* Tooltip with animation */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    {label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
                  </motion.div>

                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-green-400/50"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                      scale: 1.5,
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center space-y-8 w-full text-center">
          {/* Mobile content with similar animations but optimized for mobile */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 text-green-400 font-medium text-sm"
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span>Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello i'm{" "}
              <motion.span className="text-green-400 relative" whileTap={{ scale: 1.1 }}>
                Divyansh
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-light"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{
                background: "linear-gradient(90deg, #9CA3AF, #22C55E, #3B82F6, #9CA3AF)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Computer Science Student
            </motion.p>
          </motion.div>

          {/* Mobile image with click animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            onClick={handleImageClick}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-700/50 cursor-pointer"
                animate={controls}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/profile.jpeg?height=350&width=280"
                  alt="Divyansh Tulsyan"
                  className="w-64 h-auto object-contain rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile description and social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 max-w-md"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              Passionate about creating innovative solutions and building scalable applications. Currently pursuing my
              Bachelor's in Computer Science at The University of Hong Kong.
            </p>

            {/* Mobile stats and social links with animations */}
            <div className="flex flex-col items-center space-y-4">
              <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.05 }}>
                <div className="flex -space-x-2">
                  <motion.div
                    className="w-8 h-8 bg-green-400 rounded-full border-2 border-black flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                  
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 bg-blue-400 rounded-full border-2 border-black"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-8 h-8 bg-purple-400 rounded-full border-2 border-black"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ scale: 1.05, color: "#22C55E" }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hong Kong</span>
              </motion.div>
            </div>

            <motion.div
              className="border-l-2 border-green-400/30 pl-4 text-left"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <p className="text-sm text-gray-500 italic font-light">
                "Building with Purpose, Coding for Impact, Innovating for Tomorrow"
              </p>
            </motion.div>

            {/* Mobile social links */}
            <div className="flex justify-center space-x-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/tulsyandivyansh", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/dtulsyan", label: "LinkedIn" },
                { icon: Mail, href: "mailto:tulsyandivyanshh@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 bg-gray-800/50 hover:bg-green-400/20 rounded-full border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-green-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom section with buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection("contact")}
              className="group bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:shadow-lg hover:shadow-green-400/25 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative mr-2">Collaborate With Me</span>
              <motion.div
                className="relative inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.div>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-full transition-all duration-300 bg-transparent hover:shadow-lg hover:shadow-green-400/25 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-green-400"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
              <span className="relative">Discover My Works</span>
            </Button>
          </motion.div>
        </div>

        {/* Super enhanced scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <motion.span
            className="text-xs text-gray-500 uppercase tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{
              y: [0, 5, 0],
              boxShadow: ["0 0 0px rgba(34,197,94,0.5)", "0 0 20px rgba(34,197,94,0.8)", "0 0 0px rgba(34,197,94,0.5)"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="w-5 h-5 text-green-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
