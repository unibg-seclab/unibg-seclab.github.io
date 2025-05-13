---
title: Scalable Distributed Data Anonymization
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
  csunibg: 2021/PerCom/mondrian
  github: unibg-seclab/mondrian
  venue: Proceedings of 19th IEEE International Conference on Pervasive Computing and Communications (PerCom)
  where: Kassel, Germany
  when: March 22-26, 2021
  icons:
    - fac fa-user,down-7
---

We present an approach for enabling a distributed
anonymization process over large collections of sensor data. Our
approach anonymizes large datasets (which might not fit in main
memory) using an arbitrary number of workers within the Spark
framework. We describe how to parallelize the anonymization
process through a proper partitioning of the dataset. Our
experimental evaluation shows that the proposed approach is
scalable and do not affect the quality of the anonymized dataset.
