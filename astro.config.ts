import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import remarkCollapse from 'remark-collapse'
import remarkToc from 'remark-toc'
import unocss from 'unocss/astro'
import config from './src/config/common'

// https://astro.build/config
export default defineConfig({
  site: config.url,
  prefetch: true,

  integrations: [
    unocss({
      injectReset: true,
    }),
    sitemap(),
    svelte(),
    icon(),
  ],

  markdown: {
    syntaxHighlight: 'shiki', // ensure enable shiki

    remarkPlugins: [
      [
        remarkToc,
        { // https://github.com/remarkjs/remark-toc?tab=readme-ov-file#options
          heading: '目录',
          maxDepth: 3,
        },
      ],
      [
        remarkCollapse,
        { // https://github.com/Rokt33r/remark-collapse?tab=readme-ov-file#api
          test: 'TOC',
        },
      ],
    ],

    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
      wrap: true,
    },
  },

  scopedStyleStrategy: 'where',

  vite: {
    css: {
      // ! lightningcss will cause a crash in build mode
      transformer: import.meta.env.DEV ? 'postcss' : 'lightningcss',
    },
    cacheDir: '.vite',
  },
})
