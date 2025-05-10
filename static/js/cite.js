function alertBib(id, authors, venue, title, year) {
  if (venue.includes('Proceedings')) {
    alert(`
      @inproceedings{${id},
        author = {${authors}},
        title = {${title}},
        booktitle = {${venue}},
        year = {${year}},
      }  
    `)
  } else {
    alert(`
      @article{${id},
        author = {${authors}},
        title = {${title}},
        volume = {${venue}},
        year = {${year}},
      }  
    `)
  }
}
