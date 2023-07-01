const { animateOut, animateCssClass } = require('./index')

describe('#animateOut', () => {
  let element

  beforeEach(() => {
    element = document.createElement('div')
    jest.spyOn(console, 'log');
  })

  test('adds the animateCssClass to the element', () => {
    animateOut(element, '', () => console.log('animation ended'))
    expect(element.classList.contains(animateCssClass)).toBeTruthy()
  })

  test('callback is triggered when the animationend event fires', () => {
    animateOut(element, '', () => console.log('animation ended'))

    const event = new Event("animationend");
    element.dispatchEvent(event);

    expect(console.log).toHaveBeenCalledWith('animation ended')
  })
})
