import { slug } from 'github-slugger'

export const slugify = (input: MaybeArray<string>) => Array.isArray(input) ? input.map(i => slug(i)) : slug(input)
