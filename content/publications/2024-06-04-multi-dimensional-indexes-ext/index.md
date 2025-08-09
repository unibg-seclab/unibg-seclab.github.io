---
title: Multi-Dimensional Flat Indexing for Encrypted Data
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
    - 2024
extra:
  csunibg: 2024/TCC/flat-index
  icons:
    - ion-cloud
  github: unibg-seclab/flat-index
---

We address the problem of indexing encrypted data outsourced to an external cloud server to support server-side execution
of multi-attribute queries. Our approach partitions the dataset in groups with the same number of tuples, and associates all tuples in a
group with the same combination of index values, so to guarantee protection against static inferences. Our indexing approach does not
require any modifications to the server-side software stack, and requires limited storage at the client for query support. The
experimental evaluation considers, for the storage of the encrypted and indexed dataset, both a relational database (PostgreSQL) and
a key-value database (Redis). We carried out extensive experiments evaluating client-storage requirements and query performance.
The experimental results confirm the efficiency of our solution. The proposal is supported by an open source implementation.
