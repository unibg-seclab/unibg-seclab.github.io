---
title: "NatiSand: Native Code Sandboxing for JavaScript Runtimes"
taxonomies:
  authors:
    - Marco Abbadini
    - Dario Facchinetti
    - Gianluca Oldani
    - Matthew Rossi
    - Stefano Paraboschi
  publication-year:
    - 2023
extra:
  csunibg: 2023/RAID/natisand
  github: unibg-seclab/natisand
  venue: Proceedings of the 26th International Symposium on Research in Attacks, Intrusions and Defenses (RAID)
  where: Hong Kong, China
  when: October 16-18, 2023
  note: "<a href='https://cs.unibg.it/seclab-papers/2023/CSAW/natisand-poster.pdf'>CSAW 2023 Poster</a>"
  icons:
    - fa-brands fa-js
---

Modern runtimes render JavaScript code in a secure and isolated
environment, but when they execute binary programs and shared
libraries, no isolation guarantees are provided. This is an important
limitation, and it affects many popular runtimes including Node.js,
Deno, and Bun.

In this paper we propose NatiSand, a component for JavaScript
runtimes that leverages Landlock, eBPF, and Seccomp to control the
filesystem, Inter-Process Communication (IPC), and network resources
available to binary programs and shared libraries. NatiSand
does not require changes to the application code and offers to the
user an easy interface. To demonstrate the effectiveness and efficiency
of our approach we implemented NatiSand and integrated
it into Deno, a modern, security-oriented JavaScript runtime. We
reproduced a number of vulnerabilities affecting third-party code,
showing how they are mitigated by NatiSand. We also conducted
an extensive experimental evaluation to assess the performance,
proving that our approach is competitive with state of the art code
sandboxing solutions. The implementation is available open source.
