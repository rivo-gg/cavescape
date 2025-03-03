// @ts-check
import { defineConfig } from 'astro/config'
import nodejs from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

export default defineConfig({
  output: 'server',
  adapter: nodejs({
    mode: 'standalone'
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    react()
  ]
})
