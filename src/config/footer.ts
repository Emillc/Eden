import socialLinks from './socialLinks'

const footer: FooterConfig = {
  text: '',
  license: {
    text: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
  socialLinks,
  beiai: '',
} as const

export default footer
