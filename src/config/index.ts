import colophon from './colophon'
import header from './header'
import footer from './footer'
import common from './common'

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
export { common, header, footer, colophon }
export { default as socialLinks } from './socialLinks'
