function temporaryBtnChange(btn, text) {
  const originalText = btn.innerText;
  btn.innerText = text;
  setTimeout(() => {btn.innerText = originalText}, 1000);
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

function setupCopyButton() {
  document.querySelectorAll('pre > code').forEach(el => {
    const btn = document.createElement('span');
    btn.className = 'copy-button';
    btn.onclick = () => {
      navigator.clipboard.writeText(el.innerText)
      temporaryBtnChange(btn, 'Copied!')
    };
    btn.innerText = 'Copy'
    el.parentNode.append(btn);
  })
}

