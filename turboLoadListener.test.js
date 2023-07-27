import './index'

describe('when turbo:load event fires', () => {
  let element
  let body

  beforeEach(() => {
    element = document.createElement('div')
    body = document.querySelector('body')
    element.setAttribute("data-hw-animate", "fade")

    body.appendChild(element)
  })

  test('animation classes are added', () => {
    const event = new Event("turbo:load");
    document.dispatchEvent(event);

    expect(element.classList.contains('animate__animated')).toBeTruthy()
    expect(element.classList.contains('animate__fade')).toBeTruthy()
    body.innerHTML = ""
  })

  test('animation duration is added', () => {
    element.setAttribute("data-hw-animate-duration", "infinite")

    const event = new Event("turbo:load");
    document.dispatchEvent(event);

    expect(element.classList.contains('animate__infinite')).toBeTruthy()
  })
})
