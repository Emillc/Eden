// TODO
export default async function loadIcon(iconName: string) {
  const [iconSet, iconKey] = iconName.split(':')

  if (!iconSet || !iconKey)
    throw new Error(`Invalid icon name: ${iconName}`)

  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  switch (iconSet) {
    case 'mingcute':
      return import('@iconify-json/mingcute/icons.json').then((module) => {
        const icons = module.default.icons
        if (iconKey in icons)
          return icons[iconKey as keyof typeof icons].body
        else
          throw new Error(`Icon not found: ${iconKey}`)
      })
    case 'ri':
      return import('@iconify-json/ri/icons.json').then((module) => {
        const icons = module.default.icons
        if (iconKey in icons)
          return icons[iconKey as keyof typeof icons].body
        else
          throw new Error(`Icon not found: ${iconKey}`)
      })
    default:
      throw new Error(`Icon set not integrated: ${iconSet}`)
  }
}
