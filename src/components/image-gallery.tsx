import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { div } from 'motion/react-client'
import { useEffect, useState } from 'react'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleIndex = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <Carousel setApi={setApi}>
      <div className="rounded-xl overflow-hidden">
        <CarouselContent>
          {images.map((image, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <CarouselItem key={index}>
              <img
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                className="rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <div className="flex gap-4 justify-between py-2">
        <div className="flex gap-2">
          <CarouselPrevious
            variant="outline"
            className="static translate-y-0 size-10"
          />
          <CarouselNext
            variant="outline"
            className="static translate-y-0 size-10"
          />
        </div>
        <div className="flex items-center gap-2">
          {images.map((image, index) => (
            <span
              key={image.src}
              className={cn(
                'size-3 md:size-4 rounded-full cursor-pointer',
                index === current - 1
                  ? 'bg-primary'
                  : 'border md:border-2 border-white/25'
              )}
              onClick={() => handleIndex(index)}
              onKeyUp={(e) => e.key === 'Enter' && handleIndex(index)}
              tabIndex={0}
              role="button"
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Carousel>
  )
}
