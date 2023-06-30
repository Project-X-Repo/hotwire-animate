const { buildAnimateClass } = require('./index')

test('#buildAnimateClass build the animation class', () => {
  expect(buildAnimateClass('fade')).toBe('animate__fade')
})
