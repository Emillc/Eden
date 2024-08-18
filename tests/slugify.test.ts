import slugify from '@/utils/slugify'

describe('slugify', () => {
  it('should return a slug string', () => {
    const str = slugify('a:b c')
    expect(str).toEqual('ab-c')
  })

  it('should return a slug string array', () => {
    const str = slugify(['a:b c', 'd:e f'])
    expect(str).toEqual(['ab-c', 'de-f'])
  })
})
