let lastClickedImage = null
let counter = 0

const altimage = {
  marco: 'https://media.tenor.com/zQPPt2i1yoMAAAAC/wa.gif',
  matthew: 'https://c.tenor.com/3kPGZrOLeiUAAAAC/pepe-the-frog-dancing.gif',
  dario: 'https://gifdb.com/images/high/pepe-the-frog-chicken-nuggets-meme-nu5d06wi9gfcbzzf.gif',
  michele: 'https://media.tenor.com/czUWM5TqIPgAAAAM/2omb-pray.gif',
  // Professor 'https://gifdb.com/images/high/pepe-the-frog-performing-magic-meme-zlbba8xi5ru2nr7w.gif',
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
