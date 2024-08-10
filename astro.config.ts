import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import config from './src/config'

// https://astro.build/config
export default defineConfig({
  site: config.url,
  prefetch: true,

  integrations: [
    unocss({
      injectReset: true,
    }),
    sitemap(),
    vue({
      devtools: true,
    }),
  ],
})
