import slugify from '@/utils/slugify'

describe('slugify', () => {
  it('should return a slug string', () => {
    const str = slugify('a:b c')
    expect(str).toEqual('ab_c')
  })

  it('should return a slug string array', () => {
    const str = slugify([
      'a:b c',
      'd:e f',
      'g_h-z',
      'A:B C',
    ])
    expect(str).toEqual([
      'ab_c',
      'de_f',
      'g_h-z',
      'ab_c',
    ])
  })
})
