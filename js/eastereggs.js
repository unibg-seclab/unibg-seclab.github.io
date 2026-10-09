let lastClickedImage = null
let counter = 0

const hasAlternate = ['marco', 'matthew', 'dario', 'michele']

function multiClick(element) {
  if (element.src !== lastClickedImage) {
    counter = 0
    lastClickedImage = element.src
  }

  counter++
  if (counter === 10) {
    for (person of hasAlternate) {
      if (element.src.includes(person)) {
        element.src = element.src.replaceAll('image.jpg', 'alternate.gif')
        break
      }
    }
    counter = 0
  }
}
