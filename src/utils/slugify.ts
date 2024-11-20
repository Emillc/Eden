import { regex } from 'github-slugger/regex'

const slug = (input: string) => input.toLowerCase().replace(regex, '').replace(/ /g, '_')

const slugify = (input: MaybeArray<string>) => Array.isArray(input) ? input.map(i => slug(i)) : slug(input)

export default slugify
