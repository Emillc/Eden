import { vitePreprocess } from '@astrojs/svelte'

export default {
  preprocess: vitePreprocess(),

  kit: {
    alias: {
      '@/*': 'src/*',
      '@': 'src',
      '@@/*': '*',
      '@@': '.',
    },
  },

  extensions: ['.svelte'],
}
