let lastClickedImage = null
let counter = 0

const altimage = {
  marco: 'https://www.icegif.com/wp-content/uploads/2023/01/icegif-798.gif',
  matthew: 'https://c.tenor.com/3kPGZrOLeiUAAAAC/pepe-the-frog-dancing.gif',
  dario: 'https://media.tenor.com/sa6Aj3TC4MgAAAAC/pepepunch-smile.gif',
  michele: 'https://gifdb.com/images/high/pepe-the-frog-performing-magic-meme-zlbba8xi5ru2nr7w.gif',
}

function multiClick(element) {
  if (element.src !== lastClickedImage) {
    counter = 0
    lastClickedImage = element.src
  }

  counter++
  if (counter === 10) {
    for (key in altimage) {
      if (element.src.includes(key)) {
        element.src = altimage[key]
        break
      }
    }
    counter = 0
  }
}
