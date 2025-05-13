function temporaryBtnChange(element, text) {
  const originalText = element.innerText;
  element.innerText = text;
  setTimeout(() => {element.innerText = originalText}, 1000);
}

function copyBib(element, permalink) {
  fetch(`${permalink}/citation.bib`)
    .then((response) => {
      if (response.ok) {
        return response.text()
      }
    })
    .then(data => {
      navigator.clipboard.writeText(data)
      temporaryBtnChange(element, 'Copied!')
    })
    .catch(() => {
      temporaryBtnChange(element, 'Something failed :(')
    })
}
