const { animateOut, animateCssClass } = require('./index')

describe('#animateOut', () => {
  let element

  beforeEach(() => {
    element = document.createElement('div')
  })

  test('adds the animateCssClass to the element', () => {
    animateOut(element, '', () => {})
    expect(element.classList.contains(animateCssClass)).toBeTruthy()
  })

  test('callback is triggered when the animationend event fires', () => {
    animateOut(element, '', () => element.textContent = "fired")
    const event = new Event("animationend");
    element.dispatchEvent(event);

    expect(element.textContent).toBe('fired')
  })
})
