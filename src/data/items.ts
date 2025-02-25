export type Item = {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
  size: string
  details?: Item[]
  uses?: string | string[]
  animation?: string[]
}
export type Category = string
export type Categories = Category[]

export const items: Item[] = [
  {
    id: 1,
    name: 'Basic Grappler',
    price: 100,
    description:
      'A standard grappling gun with limited reach, perfect for beginners.',
    image: '/sprites/basic_grappler.png',
    category: 'Grappling Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 2,
    name: 'Uncommon Grappler',
    price: 200,
    description:
      'An improved grappler with enhanced reach for intermediate exploration.',
    image: '/sprites/uncommon_grappler.png',
    category: 'Grappling Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 3,
    name: 'Rare Grappler',
    price: 300,
    description:
      'Equipped for steady climbing, ideal for tackling challenging caves.',
    image: '/sprites/rare_grappler.png',
    category: 'Grappling Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 4,
    name: 'Mythical Grappler',
    price: 500,
    description:
      'High-powered and efficient, handles tough obstacles effortlessly.',
    image: '/sprites/mythical_grappler.png',
    category: 'Grappling Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 5,
    name: 'Legendary Grappler',
    price: 1000,
    description:
      'The ultimate grappling tool, reaching extreme heights with unmatched precision.',
    image: '/sprites/legendary_grappler.png',
    category: 'Grappling Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 6,
    name: 'Basic Magazine',
    price: 50,
    description:
      'Compact and lightweight, holds a small amount of ammo for quick trips.',
    image: '/sprites/basic_mag.png',
    category: 'Magazines',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 7,
    name: 'Uncommon Magazine',
    price: 100,
    description: 'Balanced capacity for extended exploration.',
    image: '/sprites/uncommon_mag.png',
    category: 'Magazines',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 8,
    name: 'Rare Magazine',
    price: 150,
    description: 'Reliable and efficient, ideal for mid-length journeys.',
    image: '/sprites/rare_mag.png',
    category: 'Magazines',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 9,
    name: 'Mythical Magazine',
    price: 250,
    description: 'High-capacity magazine for longer, tougher expeditions.',
    image: '/sprites/mythical_mag.png',
    category: 'Magazines',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 10,
    name: 'Legendary Magazine',
    price: 500,
    description: 'The largest capacity magazine, made for elite explorers.',
    image: '/sprites/legendary_mag.png',
    category: 'Magazines',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 11,
    name: 'Basic Hook',
    price: 25,
    description:
      'A basic hook with minimal durability, suited for light climbing.',
    image: '/sprites/basic_hook.png',
    category: 'Hooks',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 12,
    name: 'Uncommon Hook',
    price: 50,
    description: 'Provides solid grip for more challenging areas.',
    image: '/sprites/uncommon_hook.png',
    category: 'Hooks',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 13,
    name: 'Rare Hook',
    price: 100,
    description: 'Specialized for tricky surfaces with added shock resistance.',
    image: '/sprites/rare_hook.png',
    category: 'Hooks',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 14,
    name: 'Mythical Hook',
    price: 200,
    description: 'Lightweight and strong, perfect for deep cave climbs.',
    image: '/sprites/mythical_hook.png',
    category: 'Hooks',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 15,
    name: 'Legendary Hook',
    price: 400,
    description:
      'The pinnacle of hook technology, grips almost any surface securely.',
    image: '/sprites/legendary_hook.png',
    category: 'Hooks',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 16,
    name: 'Basic Chest',
    price: 75,
    description: 'Basic storage for essentials and small finds.',
    image: '/sprites/basic_chest.png',
    category: 'Chests',
    details: [],
    uses: '',
    animation: [
      '/sprites/basic_chest_stage2.png',
      '/sprites/basic_chest_stage3.png'
    ],
    size: 'square'
  },
  {
    id: 17,
    name: 'Uncommon Chest',
    price: 150,
    description: 'Secure storage with moderate space for loot.',
    image: '/sprites/uncommon_chest.png',
    category: 'Chests',
    details: [],
    uses: '',
    animation: [
      '/sprites/uncommon_chest_stage2.png',
      '/sprites/uncommon_chest_stage3.png'
    ],
    size: 'square'
  },
  {
    id: 18,
    name: 'Rare Chest',
    price: 250,
    description: 'Larger storage with compartments for various items.',
    image: '/sprites/rare_chest.png',
    category: 'Chests',
    details: [],
    uses: '',
    animation: [
      '/sprites/rare_chest_stage2.png',
      '/sprites/rare_chest_stage3.png'
    ],
    size: 'square'
  },
  {
    id: 19,
    name: 'Mythical Chest',
    price: 400,
    description: 'Built for valuable resources and high-end items.',
    image: '/sprites/mythical_chest.png',
    category: 'Chests',
    details: [],
    uses: '',
    animation: [
      '/sprites/mythical_chest_stage2.png',
      '/sprites/mythical_chest_stage3.png'
    ],
    size: 'square'
  },
  {
    id: 20,
    name: 'Legendary Chest',
    price: 800,
    description:
      'Enchanted with near-limitless storage, ideal for top-tier treasures.',
    image: '/sprites/legendary_chest.png',
    category: 'Chests',
    details: [],
    uses: '',
    animation: [
      '/sprites/legendary_chest_stage2.png',
      '/sprites/legendary_chest_stage3.png'
    ],
    size: 'square'
  },
  {
    id: 21,
    name: 'Basic Pistol',
    price: 0,
    description:
      'A basic pistol that gets the job done. Damages enemies when hit by its bullets.',
    image: '/sprites/basic_pistol.png',
    category: 'Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 22,
    name: 'Uncommon Pistol',
    price: 250,
    description:
      'A strong pistol with deadly bullets. Damages enemies when hit by its bullets.',
    image: '/sprites/uncommon_pistol.png',
    category: 'Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 23,
    name: 'Rare Shotgun',
    price: 500,
    description:
      'The perfect gun for close combat. Fires multiple bullets at once.',
    image: '/sprites/rare_shotgun.png',
    category: 'Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'auto'
  },
  {
    id: 24,
    name: 'Mythical Machine Gun',
    price: 800,
    description: 'A gun for waves of enemies. Fires bullets rapidly.',
    image: '/sprites/mythical_machinegun.png',
    category: 'Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'auto'
  },
  {
    id: 25,
    name: 'Legendary Machine Gun',
    price: 1200,
    description: 'A gun to get out of trouble quickly. Fires bullets rapidly.',
    image: '/sprites/legendary_machinegun.png',
    category: 'Guns',
    details: [],
    uses: '',
    animation: [],
    size: 'auto'
  },
  {
    id: 26,
    name: 'Leaf Blower',
    price: 50,
    description:
      'A tool to clean your front yard... or to escape a gigantic cave. Boosts you in the opposite of your aim direction.',
    image: '/sprites/leaf_blower.png',
    category: 'Miscellaneous',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 27,
    name: 'Dynamite',
    price: 75,
    description:
      'More fun than a pickaxe... Breaks a small area of rock and damages enemies.',
    image: '/sprites/dynamite.png',
    category: 'Miscellaneous',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 28,
    name: 'Super Dynamite',
    price: 150,
    description:
      'The ultimate tool for total destruction. Breaks a large area of rock and damages enemies.',
    image: '/sprites/super_dynamite.png',
    category: 'Miscellaneous',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  },
  {
    id: 29,
    name: 'Pickaxe',
    price: 25,
    description: "Breaks rocks... That's it.",
    image: '/sprites/pickaxe.png',
    category: 'Miscellaneous',
    details: [],
    uses: '',
    animation: [],
    size: 'square'
  }
]

export const categories: Categories = [
  'Grappling Guns',
  'Magazines',
  'Hooks',
  'Chests',
  'Guns',
  'Miscellaneous'
]
