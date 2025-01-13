import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import remarkEmoji from 'remark-emoji'
import { remarkAlert } from 'remark-github-blockquote-alert'
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
    svelte({
      extensions: ['.svelte'],
    }),
    icon(),
  ],

  markdown: {
    remarkPlugins: [
      [
        remarkAlert,
        { // https://github.com/jaywcjlove/remark-github-blockquote-alert
          tagName: 'blockquote',
        },
      ],
      [
        remarkEmoji,
        { // https://github.com/rhysd/remark-emoji
          accessible: true,
        },
      ],
    ],

    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
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
