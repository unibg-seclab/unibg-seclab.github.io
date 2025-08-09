---
title: Access Control Management for Secure Cloud Storage
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
  csunibg: 2016/SECURECOMM/bdfprs-securecomm2016
  icons:
    - ion-cloud
---

With the widespread success and adoption of cloud-based
solutions, we are witnessing an ever increasing reliance on external
providers for storing and managing data. This evolution is greatly facilitated
by the availability of solutions &mdash; typically based on encryption
&mdash; ensuring the confidentiality of externally outsourced data against the
storing provider itself. Selective application of encryption (i.e., with different
keys depending on the authorizations holding on data) provides a
convenient approach to access control policy enforcement. Effective realization
of such policy-based encryption entails addressing several problems
related to key management, access control enforcement, and authorization
revocation, while ensuring efficiency of access and deployment
with current technology. We present the design and implementation of
an approach to realize policy-based encryption for enforcing access control
in OpenStack Swift. We also report experimental results evaluating
and comparing different implementation choices of our approach.
