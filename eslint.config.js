// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  unocss: true,
  svelte: true,
  ignores: [
    'pnpm-lock.yaml',
    'docker-compose.yml',
  ],
})
