function formatBib(id, authors, venue, title, year) {
  if (venue.includes('Proceedings')) {
    return `@inproceedings{${id},
  author = {${authors}},
  title = {${title}},
  booktitle = {${venue}},
  year = {${year}},
}`
  } else {
    return `@article{${id},
  author = {${authors}},
  title = {${title}},
  volume = {${venue}},
  year = {${year}},
}`
  }
}

function copyBib(element, id, authors, venue, title, year) {
  navigator.clipboard.writeText(formatBib(id, authors, venue, title, year))
  element.innerText = 'Copied!'
  setTimeout(() => {element.innerText = 'Cite'}, 1000)
}
