import { slug } from 'github-slugger'

const slugify = (input: MaybeArray<string>) => Array.isArray(input) ? input.map(i => slug(i)) : slug(input)

export default slugify
