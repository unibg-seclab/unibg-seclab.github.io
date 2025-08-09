---
title: "EncSwift and Key Management: An Integrated Approach in an Industrial Setting"
taxonomies:
  authors:
    - Enrico Bacis
    - Marco Rosa
    - Ali Sajjad
  publication-year:
    - 2017
extra:
  csunibg: 2017/CNS/ers-cns2017
  icons:
    - ion-cloud
---

The use of cloud technology is continually expanding.
Yet, in many scenarios the adoption of an external cloud
service provider may be a worry for data confidentiality since it
leads to a partially loss of control over data. One of the solutions
for letting users put trust in a provider is the use of encryption to
protect data. EncSwift [1] is a solution that provides transparent
support for the encryption of objects stored on OpenStack based
providers, adopting Barbican, the OpenStack secret storage, as a
key manager. In this work we introduce a new key manager, BT
KMS, already adopted in industrial systems, that offers a large
set of features, and that it is designed to be flexible, transparent,
and scalable. Moreover, we analyze the possibility of integration
between the BT KMS and the EncSwift approach, and provide
an architectural overview of this new integrated system.
