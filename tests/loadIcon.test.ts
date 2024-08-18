import loadIcon from '@/utils/loadIcon'

describe('loadIcon', async () => {
  it('should return a icon string', async () => {
    const str = await loadIcon('mingcute:qq-line')
    expect(str).toEqual(`<g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M5.567 10.592c.075-.883.108-1.77.157-2.655a6.286 6.286 0 0 1 12.552 0c.05.91.09 1.818.184 2.724q.292.627.57 1.316c1.242 3.073 1.73 5.773 1.09 6.032c-.336.135-.914-.425-1.566-1.431a5 5 0 0 1-.067.322a6.7 6.7 0 0 1-1.899 3.27c1.028.35 1.912.827 1.912 1.33c0 .509-2.48.503-4.238.5c-.549-.002-1.012-.008-1.382-.058a6.7 6.7 0 0 1-1.76 0c-.37.05-.832.056-1.382.057c-1.758.004-4.238.01-4.238-.499c0-.503.884-.98 1.912-1.33a6.7 6.7 0 0 1-1.899-3.27a7 7 0 0 1-.077-.316c-.65 1.002-1.227 1.56-1.561 1.425c-.64-.259-.153-2.96 1.089-6.032c.195-.483.398-.948.603-1.385M7.72 8.048a4.286 4.286 0 0 1 8.558 0L16.443 11h.002c0 1.079.526 1.973.992 2.906a1.146 1.146 0 0 0-.769 1.15A4.68 4.68 0 0 1 12 20c-2.682 0-4.817-2.262-4.668-4.944c.033-.602-.375-1-.745-1.142c-.047-.018.969-1.903.969-2.914h.001l.164-2.952Z"/></g>`)
  })
})
