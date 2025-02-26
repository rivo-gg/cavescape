'use client'

import type { Item } from '@/data/items'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function ItemCard({ item }: { item: Item }) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const isAnim = item.animation && item.animation.length > 0

  useEffect(() => {
    if (isAnim && isHovered) {
      const interval = setInterval(() => {
        if (item.animation && currentFrame !== item.animation.length - 1) {
          setCurrentFrame(
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            (prevFrame) => (prevFrame + 1) % item.animation!.length
          )
        }
      }, 250)

      return () => clearInterval(interval)
    }
  }, [item.animation, isHovered, isAnim, currentFrame])

  return (
    <button
      type="button"
      className={cn(
        'group mr-4 flex max-w-sm cursor-default items-center gap-4 rounded-lg bg-accent p-4 transition hover:brightness-110',
        item.size === 'square' ? 'max-w-sm' : 'max-w-md'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setCurrentFrame(0)
      }}
    >
      <div
        className={cn(
          'flex h-full max-h-24 min-h-24 w-full items-center overflow-hidden rounded-lg bg-foreground/5',
          item.size === 'square' ? 'max-w-24' : 'max-w-36',
          item.size === 'square' ? 'aspect-square' : 'aspect-auto'
        )}
      >
        {isAnim && isHovered && item.animation ? (
          <img
            src={item.animation[currentFrame]}
            alt={item.name}
            width={216}
            height={216}
            className={cn(
              item.size === 'square' ? 'aspect-square' : 'aspect-auto',
              'h-full w-full object-cover'
            )}
          />
        ) : (
          <img
            src={item.image}
            alt={item.name}
            width={216}
            height={216}
            className={cn(
              item.size === 'square' ? 'aspect-square' : 'aspect-auto',
              'h-full w-full object-cover'
            )}
          />
        )}
      </div>
      <div className="text-start">
        <h3 className="-mt-1 line-clamp-1 font-semibold text-lg">
          {item.name}
        </h3>
        <p className="line-clamp-3 text-muted-foreground">{item.description}</p>
      </div>
    </button>
  )
}
