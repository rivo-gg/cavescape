import type { Item } from '@/data/items'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export function ItemCard({ item }: { item: Item }) {
  return (
    <div className="flex gap-4 items-start p-4 max-w-sm rounded-lg bg-accent hover:brightness-110 transition mr-4 cursor-default">
      <div className="min-w-24 max-h-24 aspect-square bg-foreground/5 rounded-lg overflow-hidden ">
        <img
          src={item.image}
          alt={item.name}
          width={64}
          height={64}
          className="min-w-full min-h-full aspect-square object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold -mt-1 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-muted-foreground line-clamp-3">{item.description}</p>
      </div>
    </div>
  )
}

export function ItemCardWithTooltip({ item }: { item: Item }) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger className="flex gap-4 items-start p-4 max-w-sm rounded-lg bg-accent hover:brightness-110 transition mr-4 cursor-default">
          <div className="min-w-24 max-h-24 aspect-square bg-foreground/5 rounded-lg overflow-hidden ">
            <img
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="min-w-full min-h-full aspect-square object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold -mt-1 line-clamp-1">
              {item.name}
            </h3>
            <p className="text-muted-foreground line-clamp-3">
              {item.description}
            </p>
          </div>
        </TooltipTrigger>
        <TooltipContent className="z-index-50">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
