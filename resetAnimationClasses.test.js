const { resetAnimationClasses } = require('./index')

test("removes 'animate_' class", () => {
  const element = document.createElement('div')
  element.setAttribute('class', 'animate__test')
  expect(element.classList.contains('animate__test')).toBe(true)

  resetAnimationClasses(element)
  expect(element.classList.contains('animate__test')).toBe(false)
})

test("removes all 'animate_' classes", () => {
  const element = document.createElement('div')
  element.setAttribute('class', 'animate__test animate__another-test')

  resetAnimationClasses(element)
  expect(element.classList.contains('animate__test')).toBe(false)
  expect(element.classList.contains('animate__another-test')).toBe(false)
})

test("removes all 'animate_' classes except 'animate__animated'", () => {
  const element = document.createElement('div')
  element.setAttribute('class', 'animate__animated animate__test')

  resetAnimationClasses(element)
  expect(element.classList.contains('animate__test')).toBe(false)
  expect(element.classList.contains('animate__animated')).toBe(true)
})
