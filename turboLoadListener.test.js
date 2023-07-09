import './index'

describe('turbo:load', () => {
  let element
  let body

  beforeEach(() => {
    element = document.createElement('div')
    body = document.querySelector('body')
    element.setAttribute("data-hw-animate", "fade")

    body.appendChild(element)
  })

  test('animation classes are added on turbo:load event', () => {
    const event = new Event("turbo:load");
    document.dispatchEvent(event);

    expect(element.classList.contains('animate__animated')).toBeTruthy()
    expect(element.classList.contains('animate__fade')).toBeTruthy()
    body.innerHTML = ""
  })

  test('animation duration is added on turbo:load event', () => {
    element.setAttribute("data-hw-animate-duration", "infinite")

    const event = new Event("turbo:load");
    document.dispatchEvent(event);

    expect(element.classList.contains('animate__infinite')).toBeTruthy()
  })
})
