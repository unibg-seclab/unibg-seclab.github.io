---
title: "Cage4Deno: A Fine-Grained Sandbox for Deno Subprocesses"
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
  csunibg: 2023/ASIACCS/paper/cage4deno
  github: unibg-seclab/Cage4Deno
  venue: Proceedings of the 18th ACM ASIA Conference on Computer and Communications Security (ASIACCS)
  where: Melbourne, Australia
  when: July 10-14, 2023
  icons:
    - fac fa-deno
---

Deno is a runtime for JavaScript and TypeScript that is receiving
great interest by developers, and is increasingly used for the construction
of back-ends of web applications. A primary goal of Deno
is to provide a secure and isolated environment for the execution of
JavaScript programs. It also supports the execution of subprocesses,
unfortunately without providing security guarantees.

In this work we propose Cage4Deno, a set of modifications to
Deno enabling the creation of fine-grained sandboxes for the execution
of subprocesses. The design of Cage4Deno satisfies the
compatibility, transparency, flexibility, usability, security, and performance
needs of a modern sandbox. The realization of these
requirements partially stems from the use of Landlock and eBPF,
two robust and efficient security technologies. Significant attention
has been paid to the design of a flexible and compact policy model
consisting of RWX permissions, which can be automatically created,
and deny rules to declare exceptions. The sandbox effectiveness
is demonstrated by successfully blocking a number of exploits for
recent CVEs, while runtime experiments prove its efficiency. The
proposal is associated with an open-source implementation.
