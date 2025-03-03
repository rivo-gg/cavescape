import { Button } from '@/components/ui/button'
import { ImageGallery } from './image-gallery'
import { AndroidIcon, AppleIcon, SteamIcon, WindowsIcon } from '@/icons'
import { images } from '@/data/images'
import { systemRequirements } from '@/data/requirements'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ItemCard } from '@/components/item-card'
import Marquee from 'react-fast-marquee'
import { categories, items } from '@/data/items'
import { generateRandomKey } from '@/helpers/secret'

const randomImage = images[Math.floor(Math.random() * images.length)].src

export function Page() {
  const handleRandomSecret = (str: string) => {
    const secret = generateRandomKey()
    const key = `${str}-${secret}`
    return key
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={randomImage}
            alt="Cavescape Background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
          <h1 className="mb-2 font-bold text-5xl sm:text-6xl">Cavescape</h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Explore mysterious caves, discover powerful weapons, and survive the
            depths in this atmospheric 2D adventure
          </p>
          <a
            href="https://store.steampowered.com/app/3094540/Cavescape/"
            target="_blank"
            rel="noreferrer noopener"
            className="w-fit"
          >
            <Button
              size="lg"
              className="bg-green-600 text-foreground hover:bg-green-700"
            >
              <SteamIcon className="mr-1 size-8" />
              Wishlist on Steam
            </Button>
          </a>
          <a
            href="/#platforms"
            className="w-fit text-foreground/70 underline-offset-2 hover:underline"
          >
            See specs & platforms
          </a>
        </div>
      </section>

      {/* Items Section */}
      <section id="items" className="py-24">
        <div className="container mx-auto space-y-4 px-4">
          <h2 className="mb-16 text-center font-bold text-3xl sm:text-4xl">
            Discover Powerful Items
          </h2>
          <Tabs
            defaultValue={categories[0]}
            className="flex w-full flex-col items-center gap-4"
          >
            <div className="flex w-full max-w-full overflow-x-auto">
              <TabsList className="mx-auto h-full w-fit flex-wrap gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={handleRandomSecret(category)}
                    value={category}
                    className="rounded-full bg-muted p-2 transition hover:bg-accent data-[state=active]:bg-blue-400"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="container flex w-full flex-wrap items-center justify-center gap-2 overflow-hidden">
              {categories.map((category) => (
                <TabsContent key={category} value={category} className="w-full">
                  <Marquee
                    loop={0}
                    speed={20}
                    autoFill
                    // pauseOnHover
                    gradient
                    gradientColor="hsl(var(--background))"
                  >
                    {items
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <ItemCard key={item.id} item={item} />
                      ))}
                  </Marquee>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-bold text-3xl sm:text-4xl">
            Screenshots
          </h2>
          <ImageGallery images={images} className="hidden sm:block" />
          <div className="flex flex-col gap-4 sm:hidden">
            {images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="rounded-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements Section */}
      <section id="requirements" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-bold text-3xl sm:text-4xl">
            System Requirements
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="mx-auto w-fit rounded-lg bg-zinc-900 p-6 text-center md:text-start">
              <h3 className="mb-4 font-bold text-2xl">Minimum</h3>
              <ul className="space-y-2">
                {Object.entries(systemRequirements.minimum).map(
                  ([key, value]) => (
                    <li key={key}>
                      <span className="w-full md:flex md:justify-between">
                        <text className="mr-2 text-zinc-400 capitalize">
                          {key}:
                        </text>{' '}
                        {value}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="mx-auto w-fit rounded-lg bg-zinc-900 p-6 text-center md:text-start">
              <h3 className="mb-4 font-bold text-2xl">Recommended</h3>
              <ul className="space-y-2">
                {Object.entries(systemRequirements.recommended).map(
                  ([key, value]) => (
                    <li key={key}>
                      <span className="w-full md:flex md:justify-between">
                        <text className="mr-2 text-zinc-400 capitalize">
                          {key}:
                        </text>{' '}
                        {value}
                      </span>
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
          <h2 className="mb-8 font-bold text-3xl sm:text-4xl">
            Available Platforms
          </h2>
          <div className="flex flex-col flex-wrap items-center justify-center gap-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <WindowsIcon className="size-8" />
              <span className="text-lg">Windows</span>
            </div>
            <div className="flex items-center gap-2">
              <AppleIcon className="size-8" />
              <span className="text-lg">IOS</span>
            </div>
            <div className="flex items-center gap-2">
              <AndroidIcon className="size-8" />
              <span className="text-lg">Android</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
