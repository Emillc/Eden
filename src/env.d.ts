/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

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
  socialLinks: SocialLinkItem[]
}

interface SocialLinkItem {
  name: string
  url: string
}

interface PageConfig {

}
