---
title: "I Told You Tomorrow: Practical Time-Locked Secrets using Smart Contracts"
taxonomies:
  authors:
    - Enrico Bacis
    - Dario Facchinetti
    - Marco Guarnieri
    - Marco Rosa
    - Matthew Rossi
    - Stefano Paraboschi
  publication-year:
    - 2021
extra:
  csunibg: 2021/ARES/ityt
  venue: Proceedings of the 16th International Conference on Availability, Reliability and Security (ARES)
  where: Virtual
  when: August 17-20, 2021
  icons:
    - ion-android-lock
  github: unibg-seclab/ityt
---

A Time-Lock enables the release of a secret at a future point in
time. Many approaches implement Time-Locks as cryptographic
puzzles, binding the recovery of the secret to the solution of the
puzzle. Since the time required to find the puzzle’s solution may
vary due to a multitude of factors, including the computational
effort spent, these solutions may not suit all scenarios.

To overcome this limitation, we propose I Told You Tomorrow
(ITYT), a novel way of implementing time-locked secrets based on
smart contracts. ITYT relies on the blockchain to measure the elapse
of time, and it combines threshold cryptography with economic
incentives and penalties to replace cryptographic puzzles.

We implement a prototype of ITYT on top of the Ethereum
blockchain. The prototype leverages secure Multi-Party Computation
to avoid any single point of trust. We also analyze resiliency
to attacks with the help of economic game theory, in the context
of rational adversaries. The experiments demonstrate the low cost
and limited resource consumption associated with our approach.
