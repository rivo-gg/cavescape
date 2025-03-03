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
      <img src={imageSrc} alt={name} className="h-24 w-24 object-contain" />
      {isHovered && (
        <div className="-top-24 -translate-x-1/2 pointer-events-none absolute left-1/2 w-48 rounded-lg bg-black/90 p-4 text-white">
          <h3 className="mb-1 font-bold">{name}</h3>
          <p className="text-sm">{description}</p>
        </div>
      )}
    </motion.div>
  )
}
