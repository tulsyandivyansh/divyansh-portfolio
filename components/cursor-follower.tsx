"use client"

import { motion } from "framer-motion"

interface CursorFollowerProps {
  mousePosition: { x: number; y: number }
}

export function CursorFollower({ mousePosition }: CursorFollowerProps) {
  return (
    <motion.div
      className="fixed w-4 h-4 bg-green-400 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}
