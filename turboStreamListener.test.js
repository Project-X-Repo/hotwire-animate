import './index'

describe('when turbo:before-stream-render event fires', () => {
  let turboStream
  let template
  let element
  let body

  beforeEach(() => {
    body = document.querySelector('body')
    turboStream = document.createElement('turbo-stream')
    template = document.createElement('template')
    element = document.createElement('div')
    element.setAttribute("data-hw-animate-in", "fade")

    template.content.appendChild(element)
    turboStream.appendChild(template)
    body.appendChild(turboStream)
  })

  test('animation classes are added on turbo:load event', () => {
    const event = new MouseEvent("turbo:before-stream-render", {
        relatedTarget: turboStream
    })
    document.dispatchEvent(event)

    expect(element.classList.contains('animate__fade')).toBeTruthy()
  })
})
