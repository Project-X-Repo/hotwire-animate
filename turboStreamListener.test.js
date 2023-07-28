import './index'
import { animateIn } from './index'

describe('when turbo:before-stream-render event fires', () => {
  let turboStream
  let element

  beforeEach(() => {
    let body = document.querySelector('body')
    let template = document.createElement('template')
    turboStream = document.createElement('turbo-stream')
    element = document.createElement('div')
    element.setAttribute("data-hw-animate-in", "fade")

    template.content.appendChild(element)
    turboStream.appendChild(template)
    body.appendChild(turboStream)
  })

  test('animation classes are added on turbo:before-stream-render event', () => {
    const event = new CustomEvent("turbo:before-stream-render", {
      bubbles: true,
      cancelable: true,
      detail: {
        target: turboStream,
      },
    })
    document.dispatchEvent(event)

    // Since animateIn() function is used in the event listener, we need to call it directly in the test.
    animateIn(element, 'fade')

    expect(element.classList.contains('animate__fade')).toBeTruthy()
  })
})
