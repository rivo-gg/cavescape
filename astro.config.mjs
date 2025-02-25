// @ts-check
import { defineConfig } from 'astro/config'
import nodejs from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    react()
  ]
})