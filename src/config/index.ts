import colophon from './colophon'
import common from './common'
import footer from './footer'
import header from './header'

const config: UserConfig = {
  ...common,

  header,

  footer,

  page: {
    updText: 'Last updated on',
  },

  colophon,
} as const

export default config
export { colophon, common, footer, header }
export { default as socialLinks } from './socialLinks'
