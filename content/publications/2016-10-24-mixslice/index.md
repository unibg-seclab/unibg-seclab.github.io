---
title: "Mix&Slice: Efficient Access Revocation in the Cloud"
taxonomies:
  authors:
    - Enrico Bacis
    - Sabrina De Capitani di Vimercati
    - Sara Foresti
    - Stefano Paraboschi
    - Marco Rosa
    - Pierangela Samarati
  publication-year:
    - 2016
extra:
  csunibg: 2016/CCS/bdfprs-ccs2016
  icons:
    - ion-cloud
  github: unibg-seclab/aesmix
  note: <a href="https://cs.unibg.it/seclab-papers/2017/CSAW/bdfprs-csaw2017-poster.pdf">Poster</a><br/><u>CSAW 2017 Applied Research Competition Finalist</u>
---

We present an approach to enforce access revocation on resources
stored at external cloud providers. The approach
relies on a resource transformation that provides strong mutual
inter-dependency in its encrypted representation. To
revoke access on a resource, it is then sufficient to update a
small portion of it, with the guarantee that the resource as
a whole (and any portion of it) will become unintelligible to
those from whom access is revoked. The extensive experimental
evaluation on a variety of configurations confirmed
the effectiveness and efficiency of our solution, which showed
excellent performance and compatibility with several implementation strategies.
