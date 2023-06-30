const { animateIn, animateCssClass } = require('./index')

describe('#animateIn', () => {
  let element

  beforeEach(() => {
    element = document.createElement('div')
  })

  test('adds the animateCssClass to the element', () => {
    animateIn(element, '')
    expect(element.classList.contains(animateCssClass)).toBeTruthy()
  })

  test('builds animation name and adds it to the element', () => {
    animateIn(element, 'fade')
    expect(element.classList.contains('animate__fade')).toBeTruthy()
  })
})
