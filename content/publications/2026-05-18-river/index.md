---
title: "RIVER: An eBPF-based Runtime Verification Platform for Cyber-Physical Systems"
taxonomies:
  authors:
    - Dario Facchinetti
    - Matthew Rossi
    - Zhenya Zhang
    - Stefano Paraboschi
    - Paolo Arcaini
  publication-year:
    - 2026
extra:
  csunibg: 2026/ICST/river
  github: dariofad/river
  icons:
    - fa-solid fa-dharmachakra
    - ion-cloud
---

Runtime verification has proven to be an effective
approach for quality assurance of cyber-physical systems (CPSs).
However, due to some technical difficulties, existing tools usually
do not support analyses that require runtime inspection of the
CPS internal states and do not allow to perform a prompt
intervention. To fill this gap, we propose RIVER, a client-
server platform that supports a wide range of novel runtime
analyses, including injection of adversarial attacks and runtime
enforcement. At the core of our approach there is the adoption of
eBPF, a widely-used technology in security research that allows
privileged programs to read and write the internal state of the
CPS model. We showcase the functionalities of RIVER over two
widely-adopted CPS models: an adaptive cruise control system
and an abstract fuel control system.
Tool available at: https://github.com/dariofad/river
Screencast available at: https://youtu.be/g-3m0E2nNgM
