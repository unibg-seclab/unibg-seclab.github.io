---
title: "Blackbird: A Scalable and Resource-Efficient Framework for Distributed Network Monitoring"
taxonomies:
  authors:
    - Elisa Arnoldi
    - Gabriele Merli
    - Marco Abbadini
    - Michele Beretta
    - Dario Facchinetti
    - Matthew Rossi
    - Stefano Paraboschi
  publication-year:
    - 2026
extra:
  csunibg: 2026/ICDCS/blackbird
  github: Merluz/blackbirdSentinel
  icons:
    - fa-solid fa-network-wired
    - ion-cloud
---

Modern large-scale network infrastructures require monitoring solutions that
ensure operational resilience while imposing minimal overhead. However, existing
centralized and static multi-agent approaches often suffer from single points of
failure and can generate significant traffic congestion.

This paper introduces Blackbird, a distributed framework designed to provide a
continuous, real-time view of the entire network. Blackbird transforms selected
network hosts into self-organizing agents capable of autonomously performing
network scans. Within this architecture, a subset of agents act as *aggregators*,
responsible for scheduling scans to mitigate burstiness and coordinating the
activity of workers. *Workers*, in turn, perform measurements and disseminate
the collected data across the system. Preliminary experimental evaluation
shows that Blackbird achieves robust horizontal scalability and strong fault
tolerance under node failures. Moreover, it maintains a low CPU and memory
footprint, which is especially important for resource-constrained edge devices,
while preventing network saturation and enabling real-time inspection from any
participating node.
