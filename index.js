export const animateCssClass = 'animate__animated'

// On page load
document.addEventListener('turbo:load', () => {
  Array.from(document.querySelectorAll('[data-hw-animate]')).forEach((element) => {
    element.classList.add(animateCssClass, buildAnimateClass(element.dataset.hwAnimate))
    if (element.dataset.hwAnimateDuration) {
      element.classList.add(buildAnimateClass(element.dataset.hwAnimateDuration))
    }
  })
})

// On template render
document.addEventListener('turbo:before-stream-render', (event) => {
  // Animate in
  if (event.target.firstElementChild instanceof HTMLTemplateElement) {
    const element = event.target.templateElement.content.firstElementChild
    const animationName = element.dataset.hwAnimateIn

    if (animationName) {
      animateIn(element, animationName)
    }
  }

  // Animate out
  const elementToRemove = document.getElementById(event.target.target)
  if (elementToRemove) {
    const exitAnimation = elementToRemove.dataset.hwAnimateOut
    if (exitAnimation) {
      event.preventDefault()
      let callback = () => event.target.performAction()
      animateOut(elementToRemove, exitAnimation, callback)
    }
  }
})

export function animateIn(element, animationName) {
  element.classList.add(animateCssClass, buildAnimateClass(animationName))
}

export function animateOut(element, animationName, callback) {
  resetAnimationClasses(element)
  element.classList.add(animateCssClass, buildAnimateClass(animationName))

  element.addEventListener('animationend', function () {
    callback()
  })
}

export function resetAnimationClasses(element) {
  // remove all classes that begin with 'animate__' that aren't 'animate__animated'
  const classList = Array.from(element.classList)
  const newClassList = classList.filter((e) => e === 'animate__animated' || !e.startsWith('animate__'))
  element.classList = newClassList.join(' ')
}

export function buildAnimateClass(animationName) {
  return `animate__${animationName}`
}

// Animate.css class name format
// animate__animated animate__[name]
