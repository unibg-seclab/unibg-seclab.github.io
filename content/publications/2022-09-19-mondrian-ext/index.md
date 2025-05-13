---
title: Scalable Distributed Data Anonymization for Large Datasets
taxonomies:
  authors:
    - Sabrina De Capitani di Vimercati
    - Dario Facchinetti
    - Sara Foresti
    - Giovanni Livraga
    - Gianluca Oldani
    - Stefano Paraboschi
    - Matthew Rossi
    - Pierangela Samarati
  publication-year:
    - 2022
extra:
  csunibg: 2022/TBD/mondrian-ext
  venue: IEEE Transactions on Big Data (TBD)
  when: September 19, 22
  icons:
    - fac fa-user,down-7
  github: unibg-seclab/mondrian
---

*k*-Anonymity and ℓ-diversity are two well-known privacy metrics that guarantee protection of the respondents of a dataset
by obfuscating information that can disclose their identities and sensitive information. Existing solutions for enforcing them implicitly
assume to operate in a centralized scenario, since they require complete visibility over the dataset to be anonymized, and can therefore
have limited applicability in anonymizing large datasets. In this paper, we propose a solution that extends Mondrian (an efficient and
effective approach designed for achieving *k*-anonymity) for enforcing both *k*-anonymity and ℓ-diversity over large datasets in a
distributed manner, leveraging the parallel computation of multiple workers. Our approach efficiently distributes the computation among
the workers, without requiring visibility over the dataset in its entirety. Our data partitioning limits the need for workers to exchange
data, so that each worker can independently anonymize a portion of the dataset. We implemented our approach providing parallel
execution on a dynamically chosen number of workers. The experimental evaluation shows that our solution provides scalability, while
not affecting the quality of the resulting anonymization.
