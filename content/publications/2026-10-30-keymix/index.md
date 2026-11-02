---
title: "Keymix: Protecting Large Resources From Key Exfiltration"
taxonomies:
  authors:
    - Marco Abbadini
    - Michele Beretta
    - Sabrina De Capitani di Vimercati
    - Dario Facchinetti
    - Sara Foresti
    - Stefano Paraboschi
    - Matthew Rossi
    - Pierangela Samarati
  publication-year:
    - 2026
extra:
  csunibg: 2026/NSS/keymix
  github: unibg-seclab/keymix
  award: false
  icons:
    - fa-solid fa-database fa-sm
    - fa-solid fa-key fa-sm
---

When transmitted over public networks, high-value resources must be
protected against unauthorized access.
Although traditional encryption schemes provide confidentiality in
transit, they offer no guarantees if the encryption key is
exfiltrated through side-channel attacks or other
means. Leakage-resilient schemes aim to remain secure
under partial key leakage; however, existing constructions require
strong assumptions on leakage timing or restrict the adversary to
inaccessible memory regions, rendering them impractical for real
deployments.
In this paper, we introduce _Keymix_, a novel encryption scheme
designed to protect large resources in the presence of key
exfiltration. Keymix supports encryption with a configurable
big-key _K_ (up to GiBs in size), ensuring that a plaintext _R_ (with _|R| &ge; |K|_)
cannot be fully recovered unless the _K_ is fully exfiltrated,
even when the adversary possesses the complete ciphertext. Unlike
prior work, security depends solely on the exfiltrated portion of _K_,
without assumptions on leakage timing or inaccessible memory regions.

We implement Keymix using AES and achieve a throughput of 1.6 GiB/s
on commodity hardware. Moreover, we demonstrate its practicality
through integration with modern cloud infrastructure inside a Kubernetes
cluster, where it transparently applies exfiltration-resistant encryption to
storage blocks during service restore and backup.
