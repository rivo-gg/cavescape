export type Item = {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
}

export const items: Item[] = [
  {
    id: 1,
    name: 'Basic Grappler',
    price: 100,
    description:
      'A standard grappling gun with limited reach, perfect for beginners.',
    image: 'basic_grappler_image_url',
    category: 'Grappling Guns'
  },
  {
    id: 2,
    name: 'Uncommon Grappler',
    price: 200,
    description:
      'An improved grappler with enhanced reach for intermediate exploration.',
    image: 'uncommon_grappler_image_url',
    category: 'Grappling Guns'
  },
  {
    id: 3,
    name: 'Rare Grappler',
    price: 300,
    description:
      'Equipped for steady climbing, ideal for tackling challenging caves.',
    image: 'rare_grappler_image_url',
    category: 'Grappling Guns'
  },
  {
    id: 4,
    name: 'Mythical Grappler',
    price: 500,
    description:
      'High-powered and efficient, handles tough obstacles effortlessly.',
    image: 'mythical_grappler_image_url',
    category: 'Grappling Guns'
  },
  {
    id: 5,
    name: 'Legendary Grappler',
    price: 1000,
    description:
      'The ultimate grappling tool, reaching extreme heights with unmatched precision.',
    image: 'legendary_grappler_image_url',
    category: 'Grappling Guns'
  },
  {
    id: 6,
    name: 'Basic Magazine',
    price: 50,
    description:
      'Compact and lightweight, holds a small amount of ammo for quick trips.',
    image: 'basic_magazine_image_url',
    category: 'Magazines'
  },
  {
    id: 7,
    name: 'Uncommon Magazine',
    price: 100,
    description: 'Balanced capacity for extended exploration.',
    image: 'uncommon_magazine_image_url',
    category: 'Magazines'
  },
  {
    id: 8,
    name: 'Rare Magazine',
    price: 150,
    description: 'Reliable and efficient, ideal for mid-length journeys.',
    image: 'rare_magazine_image_url',
    category: 'Magazines'
  },
  {
    id: 9,
    name: 'Mythical Magazine',
    price: 250,
    description: 'High-capacity magazine for longer, tougher expeditions.',
    image: 'mythical_magazine_image_url',
    category: 'Magazines'
  },
  {
    id: 10,
    name: 'Legendary Magazine',
    price: 500,
    description: 'The largest capacity magazine, made for elite explorers.',
    image: 'legendary_magazine_image_url',
    category: 'Magazines'
  },
  {
    id: 11,
    name: 'Basic Hook',
    price: 25,
    description:
      'A basic hook with minimal durability, suited for light climbing.',
    image: 'basic_hook_image_url',
    category: 'Hooks'
  },
  {
    id: 12,
    name: 'Uncommon Hook',
    price: 50,
    description: 'Provides solid grip for more challenging areas.',
    image: 'uncommon_hook_image_url',
    category: 'Hooks'
  },
  {
    id: 13,
    name: 'Rare Hook',
    price: 100,
    description: 'Specialized for tricky surfaces with added shock resistance.',
    image: 'rare_hook_image_url',
    category: 'Hooks'
  },
  {
    id: 14,
    name: 'Mythical Hook',
    price: 200,
    description: 'Lightweight and strong, perfect for deep cave climbs.',
    image: 'mythical_hook_image_url',
    category: 'Hooks'
  },
  {
    id: 15,
    name: 'Legendary Hook',
    price: 400,
    description:
      'The pinnacle of hook technology, grips almost any surface securely.',
    image: 'legendary_hook_image_url',
    category: 'Hooks'
  },
  {
    id: 16,
    name: 'Basic Chest',
    price: 75,
    description: 'Basic storage for essentials and small finds.',
    image: 'basic_chest_image_url',
    category: 'Chests'
  },
  {
    id: 17,
    name: 'Uncommon Chest',
    price: 150,
    description: 'Secure storage with moderate space for loot.',
    image: 'uncommon_chest_image_url',
    category: 'Chests'
  },
  {
    id: 18,
    name: 'Rare Chest',
    price: 250,
    description: 'Larger storage with compartments for various items.',
    image: 'rare_chest_image_url',
    category: 'Chests'
  },
  {
    id: 19,
    name: 'Mythical Chest',
    price: 400,
    description: 'Built for valuable resources and high-end items.',
    image: 'mythical_chest_image_url',
    category: 'Chests'
  },
  {
    id: 20,
    name: 'Legendary Chest',
    price: 800,
    description:
      'Enchanted with near-limitless storage, ideal for top-tier treasures.',
    image: 'legendary_chest_image_url',
    category: 'Chests'
  },
  {
    id: 21,
    name: 'Basic Pistol',
    price: 0,
    description:
      'A basic pistol that gets the job done. Damages enemies when hit by its bullets.',
    image: 'basic_pistol_image_url',
    category: 'Guns'
  },
  {
    id: 22,
    name: 'Uncommon Pistol',
    price: 250,
    description:
      'A strong pistol with deadly bullets. Damages enemies when hit by its bullets.',
    image: 'uncommon_pistol_image_url',
    category: 'Guns'
  },
  {
    id: 23,
    name: 'Rare Shotgun',
    price: 500,
    description:
      'The perfect gun for close combat. Fires multiple bullets at once.',
    image: 'rare_shotgun_image_url',
    category: 'Guns'
  },
  {
    id: 24,
    name: 'Mythical Machine Gun',
    price: 800,
    description: 'A gun for waves of enemies. Fires bullets rapidly.',
    image: 'mythical_machine_gun_image_url',
    category: 'Guns'
  },
  {
    id: 25,
    name: 'Legendary Machine Gun',
    price: 1200,
    description: 'A gun to get out of trouble quickly. Fires bullets rapidly.',
    image: 'legendary_machine_gun_image_url',
    category: 'Guns'
  },
  {
    id: 26,
    name: 'Leaf Blower',
    price: 50,
    description:
      'A tool to clean your front yard... or to escape a gigantic cave. Boosts you in the opposite of your aim direction.',
    image: 'leaf_blower_image_url',
    category: 'Miscellaneous'
  },
  {
    id: 27,
    name: 'Dynamite',
    price: 75,
    description:
      'More fun than a pickaxe... Breaks a small area of rock and damages enemies.',
    image: 'dynamite_image_url',
    category: 'Miscellaneous'
  },
  {
    id: 28,
    name: 'Super Dynamite',
    price: 150,
    description:
      'The ultimate tool for total destruction. Breaks a large area of rock and damages enemies.',
    image: 'super_dynamite_image_url',
    category: 'Miscellaneous'
  },
  {
    id: 29,
    name: 'Pickaxe',
    price: 25,
    description: "Breaks rocks... That's it.",
    image: 'pickaxe_image_url',
    category: 'Miscellaneous'
  }
]
