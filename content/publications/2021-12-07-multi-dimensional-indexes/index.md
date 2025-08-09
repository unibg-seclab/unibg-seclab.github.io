---
title: Multi-Dimensional Indexes for Point and Range Queries on Outsourced Encrypted Data
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
  csunibg: 2021/GLOBECOM/multi-dimensional-indexes
  icons:
    - ion-cloud
---

We present an approach for indexing encrypted data
stored at external providers to enable provider-side evaluation of
queries. Our approach supports the evaluation of point and range
conditions on multiple attributes. Protection against inferences
from indexes is guaranteed by clustering tuples in boxes that are
then mapped to the same index values, so to ensure collisions for
individual attributes as well as their combinations. Our spatial-based
algorithm partitions tuples to produce such a clustering
in a way to ensure efficient query execution. Query translation
and processing require the client to store a compact map. The
experiments, evaluating query performance and client-storage
requirements, confirm the efficiency enjoyed by our solution.
