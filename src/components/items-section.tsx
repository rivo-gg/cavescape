import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ItemCard } from '@/components/item-card'
import Marquee from 'react-fast-marquee'
import { categories, items } from '@/data/items'
import { generateRandomKey } from '@/helpers/secret'

export function ItemsSection() {
  const handleRandomSecret = (str: string) => {
    const secret = generateRandomKey()
    const key = `${str}-${secret}`
    return key
  }

  return (
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
  )
}
