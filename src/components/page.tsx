import { Button } from '@/components/ui/button'
import { FloatingItem } from '@/components/floating-item'
import { ImageGallery } from './image-gallery'
import { LinuxIcon, AppleIcon, WindowsIcon } from '@/icons'
import { items } from '@/data/items'
import { ItemCard, ItemCardWithTooltip } from './item-card'
import Marquee from 'react-fast-marquee'
import { images } from '@/data/images'
import { systemRequirements } from '@/data/requirements'

export function Page() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={images[Math.floor(Math.random() * images.length)].src}
            alt="Cavescape Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6">Cavescape</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-zinc-300">
            Explore mysterious caves, discover powerful weapons, and survive the
            depths in this atmospheric 2D adventure
          </p>
          <a href="/#platforms">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Play Now
            </Button>
          </a>
        </div>
      </section>

      {/* Floating Items Section */}
      <section id="items" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Discover Powerful Items
          </h2>
          <Marquee
            loop={0}
            speed={20}
            pauseOnHover
            gradient
            gradientColor="hsl(var(--background))"
          >
            {items.map((item) => (
              <ItemCardWithTooltip key={item.id} item={item} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Screenshots</h2>
          <ImageGallery images={images} />
        </div>
      </section>

      {/* System Requirements Section */}
      <section id="requirements" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            System Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Minimum</h3>
              <ul className="space-y-2">
                {Object.entries(systemRequirements.minimum).map(
                  ([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-zinc-400 capitalize">{key}:</span>
                      <span>{value}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Recommended</h3>
              <ul className="space-y-2">
                {Object.entries(systemRequirements.recommended).map(
                  ([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-zinc-400 capitalize">{key}:</span>
                      <span>{value}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Available Platforms</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <WindowsIcon className="size-8" />
              <span className="text-lg">Windows</span>
            </div>
            <div className="flex items-center gap-2">
              <AppleIcon className="size-8" />
              <span className="text-lg">macOS</span>
            </div>
            <div className="flex items-center gap-2">
              <LinuxIcon className="size-8" />
              <span className="text-lg">Linux</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
