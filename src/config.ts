export const socialLinks: SocialLink[] = [
  {
    url: 'https://github.com/chillcicada',
    name: 'GitHub',
    icon: 'i-mingcute:github-line',
  },
  {
    url: 'https://music.163.com/#/user/home?id=1403030074',
    name: 'Netease Cloud Music',
    icon: 'i-mingcute:music-line',
  },
  {
    url: 'https://qm.qq.com/q/8PV369Zlvy',
    name: 'QQ',
    icon: 'i-mingcute:qq-line',
  },
  {
    url: 'mailto:2210227279@qq.com',
    name: 'Email',
    icon: 'i-mingcute:mail-line',
  },
]

export const config: UserConfig = {
  url: 'https://chillcicada.com',
  title: 'Eden ♪',
  description: 'Welcome to here!',
  author: 'ChillCicada',

  header: {
    logoText: 'EDEN ♪',
  },

  footer: {
    text: '',
    license: {
      text: 'CC BY-NC-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    },
    socialLinks,
  },

  page: {
    updText: 'Last updated on',
  },
}

export default config
