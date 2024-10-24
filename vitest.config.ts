import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    alias: {
      '@': resolve(__dirname, './src'),
      '@@': resolve(__dirname, './src/components'),
    },
    exclude: [
      '.direnv/**',
      'node_modules/**',
    ],
  },
})
