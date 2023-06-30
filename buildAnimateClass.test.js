const { buildAnimateClass } = require('./index')

test('builds the animation class', () => {
  expect(buildAnimateClass('fade')).toBe('animate__fade')
})
