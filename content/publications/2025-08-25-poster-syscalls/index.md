---
title: "POSTER: Transparent Temporally-Specialized System Call Filters"
taxonomies:
  authors:
    - Matthew Rossi
    - Michele Beretta
    - Dario Facchinetti
    - Stefano Paraboschi
  publication-year:
    - 2025
extra:
  csunibg: 2025/ASIACCS/poster-syscalls
  #github: unibg-seclab/syscalls
  icons:
    - fa-brands fa-linux
---

Reducing the attack surface of the OS kernel is an effective technique to
enhance the security of application workloads.
In Linux systems, developers can restrict the set of available
system calls by using seccomp.
Although being widely adopted in browsers,
container runtimes, and sandboxing tools, this approach presents some challenges:
(i) applying precise filters often requires significant application
    modifications, which can impede developer productivity,
and
(ii) the transparent enforcement of filters is bound to use a single, static
     list with every syscall the application might ever need, resulting
     in overly permissive and less effective security boundaries.

In this paper, we propose an automated method to generate temporally-specialized
seccomp filters tailored to the current application state.
This significantly enhances the effectiveness of filters, and overcomes the
major limitations associated with a single, static filter.
We implement our solution by leveraging the eBPF subsystem in the Linux kernel.
Specifically, we use in-kernel eBPF programs to monitor the application state
and dynamically enable or disable specialized seccomp filters in response to
state transitions.
We discuss how this approach addresses the limitations of state-of-the-art
solutions.
Finally, we validate the feasibility of our proposal and show that it introduces
a limited overhead.
