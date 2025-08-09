---
title: Multi-Provider Secure Processing of Sensors Data
taxonomies:
  authors:
    - Enrico Bacis
    - Sabrina De Capitani di Vimercati
    - Dario Facchinetti
    - Sara Foresti
    - Giovanni Livraga
    - Stefano Paraboschi
    - Marco Rosa
    - Pierangela Samarati
  publication-year:
    - 2019
extra:
  csunibg: 2019/PerCom/secure-query-optimization
  github: unibg-seclab/query-opt
  icons:
    - ion-cloud
  note: <a href="https://cs.unibg.it/seclab-papers/2019/PerCom/secure-query-optimization-poster.pdf">Poster</a>
---

We describe the implementation of an approach
for supporting secure query processing over sensors data in a
multi-provider scenario. Our solution relies on the definition
of authorizations regulating access to data according to three
different visibility levels (no visibility, encrypted visibility, and
plaintext visibility). Data processing is performed by multiple
providers based on the restrictions imposed by authorizations,
which may require to adjust data visibility on the fly. We describe
the structure of the query optimizer and show how the operations
of a computation can be assigned to different cloud providers to
build an efficient, secure, and economical plan for collaborative
data processing.
