---
title: "Artifact: Scalable Distributed Data Anonymization"
taxonomies:
  authors:
    - Sabrina De Capitani di Vimercati
    - Dario Facchinetti
    - Sara Foresti
    - Gianluca Oldani
    - Stefano Paraboschi
    - Matthew Rossi
    - Pierangela Samarati
  publication-year:
    - 2021
extra:
  csunibg: 2021/PerCom/mondrian-artifact
  github: unibg-seclab/mondrian
  venue: Proceedings of 19th IEEE International Conference on Pervasive Computing and Communications (PerCom)
  where: Kassel, Germany
  when: March 22-26, 2021
  icons:
    - ion-ribbon-b
    - fac fa-user,down-7
  note: "<a href='https://cs.unibg.it/seclab-papers/2021/PerCom/best-artifact-award-certificate.pdf'><u>IEEE PerCom'21 Best Artifact Award</u></a>"
---

We describe the artifact, publicly available at [[1]](https://github.com/mosaicrown/mondrian),
that implements the proposal in [[2]](/publications/mondrian2/), and the reproduction of
the experimental results. It is an extended and distributed
version of the Mondrian anonymization algorithm. Our solution anonymizes large datasets by partitioning data among
workers in a distributed setting. It provides parallel execution
on a dynamically chosen number of workers, limiting their
interaction and data exchange.
