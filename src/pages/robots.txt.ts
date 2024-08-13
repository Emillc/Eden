import type { APIRoute } from 'astro'
import config from '@config'

const { url } = config

const robots = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', url).href}
`.trim()

export const GET: APIRoute = () => new Response(robots, {
  headers: { 'Content-Type': 'text/plain' },
})
