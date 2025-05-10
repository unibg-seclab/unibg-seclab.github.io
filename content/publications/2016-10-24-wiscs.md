---
title: Managing Data Sharing in OpenStack Swift with Over-Encryption
taxonomies:
  authors:
    - Enrico Bacis
    - Sabrina De Capitani di Vimercati
    - Sara Foresti
    - Daniele Guttadoro
    - Stefano Paraboschi
    - Marco Rosa
    - Pierangela Samarati
    - Alessandro Saullo
  publication-year:
    - 2016
extra:
  csunibg: 2016/WISCS/bdfgprss-wiscs2016
  venue: Proceedings of the 3rd ACM Workshop on Information Sharing and Collaborative Security (WISCS)
  where: Vienna, Austria
  when: October 24, 2016
  icons:
    - ion-cloud
  github: unibg-seclab/encSwift
---

The sharing of large amounts of data is greatly facilitated
by the adoption of cloud storage solutions. In many scenarios,
this adoption could be hampered by possible concerns
about data confidentiality, as cloud providers are not
trusted to know the content of the data they store. Especially
when the data are organized in objects, the application
of an encryption layer is an interesting solution to this problem,
because it o↵ers strong confidentiality guarantees with
a limited performance overhead. In a data sharing scenario,
the management of access privileges then requires an adequate
support for key derivation and for managing policy
evolution.

We present a solution that provides transparent support
for the encryption of objects stored on Swift. Our system
o↵ers an ecient management of the updates to the access
control policy, including revocation of authorizations from
some of the sharing users. We explore several alternatives
for the architecture, associated with distinct levels of transparency
for the applications, and integrate di↵erent options
for the management of policy updates. Our implementation
and experiments demonstrate the easy integration of
the approach with existing cloud storage solutions.
