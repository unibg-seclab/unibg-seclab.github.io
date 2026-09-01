---
title: "SysComb: Fine-Grained Transparent System Call Filtering for Attack Surface Reduction"
taxonomies:
  authors:
    - Matthew Rossi
    - Marco Abbadini
    - Michele Beretta
    - Dario Facchinetti
    - Stefano Paraboschi
  publication-year:
    - 2026
extra:
  csunibg: 2026/arXiv/syscomb
  #github: unibg-seclab/syscalls
  icons:
    - fa-brands fa-linux
    - ion-funnel
---

Restricting the system calls available to applications shrinks the kernel's
attack surface and greatly mitigates the impact of compromised programs. Recent
approaches showcase techniques to generate system call filters, however, all
existing solutions require either kernel or application modifications to
activate them at runtime. This is intrusive, error-prone, and often impractical,
especially when the code is maintained by external parties. This paper presents
SysComb, a novel eBPF-based solution to enforce temporally-specialized system
call filters based on the application state, without requiring any modification
to the application or the kernel code, and thus addressing the above
limitations. Moreover, SysComb lets the developer choose between two distinct
enforcement strategies: seccomp-like, ensuring no new privileges are gained
after a state transition is performed, and least-privilege, which applies to
each state the most restrictive filter. We evaluated SysComb using widely used
software, showcasing accurate state-aware system call filtering and an overhead
comparable to built-in kernel solutions, demonstrating the practicality of our
approach.
