'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

interface FloatingItemProps {
  name: string
  description: string
  imageSrc: string
}

export function FloatingItem({
  name,
  description,
  imageSrc
}: FloatingItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      animate={{
        y: [0, 10, 0]
      }}
      transition={{
        duration: 4,
        // biome-ignore lint/style/useNumberNamespace: <explanation>
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={name} className="w-24 h-24 object-contain" />
      {isHovered && (
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-black/90 text-white p-4 rounded-lg w-48 pointer-events-none">
          <h3 className="font-bold mb-1">{name}</h3>
          <p className="text-sm">{description}</p>
        </div>
      )}
    </motion.div>
  )
}
