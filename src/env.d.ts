/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'remark-collapse'

type MaybeArray<T> = T | T[]

interface UserConfig {
  url: string
  title: string
  description: string
  author: string
  email?: string
  locale?: string

  header: HeaderConfig
  footer: FooterConfig
  page: PageConfig
  colophon?: ColophonItem[]
}

type CommonConfig = Pick<UserConfig, 'url' | 'title' | 'description' | 'author' | 'email' | 'locale'>

interface HeaderConfig {
  logoText: string
}

interface FooterConfig {
  text: string
  license: {
    text: string
    url: string
  }
  socialLinks: SocialLink[]
  beiai?: string
}

interface SocialLink {
  name: string
  url: string
  icon?: string
}

interface ColophonItem {
  name: string
  url: string
  license: string
  author: string
  usage?: string
}

interface PageConfig {

}
