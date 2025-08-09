---
title: "Supporting Data Owner Control in IPFS Networks"
taxonomies:
  authors:
    - Marco Abbadini
    - Michele Beretta
    - Sabrina De Capitani di Vimercati
    - Dario Facchinetti
    - Sara Foresti
    - Gianluca Oldani
    - Stefano Paraboschi
    - Pierangela Samarati
    - Matthew Rossi
  publication-year:
    - 2024
extra:
  csunibg: 2024/ICC/ipfs
  github: unibg-seclab/ipfs-owner-control
  icons:
    - ion-cloud
---

Decentralized storage architectures are emerging as valid complementary
solutions to cloud-based storage services.
InterPlanetary File System (IPFS) is one of the most well-known distributed
file storage protocols with wide adoption, good performance, and a variety of
applications built over it.
However, IPFS does not natively support data confidentiality and its
decentralized nature limits the ability of data owners to maintain control on
their resources and to force their deletion.

We propose Mix-IPFS, an approach that allows data owners to maintain control
on their resources uploaded to IPFS, guaranteeing their confidentiality and
supporting secure deletion. Mix-IPFS is based on AONT encryption, which has the
nice property of preventing decryption if the whole ciphertext is not available.
Data owners can permanently delete a resource by making a small portion of its
encrypted representation unavailable.
Our solution uses a virtual file system to guarantee transparency to data owners
(i.e., they can operate on plaintext resources).
The experimental evaluation shows that the overhead of our approach is
negligible (less than 2% for both upload and access operations).
