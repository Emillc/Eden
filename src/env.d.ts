/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'remark-collapse'

type MaybeArray<T> = T | T[]

interface UserConfig {
  url: string
  title: string
  description: string
  author: string

  header: HeaderConfig
  footer: FooterConfig

  page: PageConfig
}

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
}

interface SocialLink {
  name: string
  url: string
  icon?: string
}

interface PageConfig {

}
