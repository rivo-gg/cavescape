import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { generateRandomKey } from '@/helpers/secret'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
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

  const handleArrayKey = () => {
    const key = generateRandomKey()
    return key
  }

  return (
    <Carousel setApi={setApi} className={className}>
      <div className="overflow-hidden rounded-xl">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={handleArrayKey()}>
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
      <div className="flex justify-between gap-4 py-2">
        <div className="flex gap-2">
          <CarouselPrevious
            variant="outline"
            className="static size-10 translate-y-0"
          />
          <CarouselNext
            variant="outline"
            className="static size-10 translate-y-0"
          />
        </div>
        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <span
              key={handleArrayKey()}
              className={cn(
                'size-3 cursor-pointer rounded-full md:size-4',
                index === current - 1
                  ? 'bg-primary'
                  : 'border border-white/25 md:border-2'
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
