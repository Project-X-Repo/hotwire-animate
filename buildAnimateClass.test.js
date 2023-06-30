const { buildAnimateClass } = require('./index')

test('#buildAnimateClass builds the animation class', () => {
  expect(buildAnimateClass('fade')).toBe('animate__fade')
})
