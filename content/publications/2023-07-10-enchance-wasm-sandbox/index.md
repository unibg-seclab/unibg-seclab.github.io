---
title: "POSTER: Leveraging eBPF to enhance sandboxing of WebAssembly runtimes"
taxonomies:
  authors:
    - Marco Abbadini
    - Michele Beretta
    - Dario Facchinetti
    - Gianluca Oldani
    - Matthew Rossi
    - Stefano Paraboschi
  publication-year:
    - 2023
extra:
  csunibg: 2023/ASIACCS/poster/enhance-wasm-sandbox
  venue: Proceedings of the 18th ACM ASIA Conference on Computer and Communications Security (ASIACCS)
  where: Melbourne, Australia
  when: July 10-14, 2023
  note: "<a href='https://cs.unibg.it/seclab-papers/2022/USENIX/wasi-poster.pdf'>USENIX Security 2022 Poster</a>"
  icons:
    - fac fa-wa
    - fac fa-si
---

WebAssembly is a binary instruction format designed as a portable
compilation target enabling the deployment of untrusted code in
a safe and efficient manner. While it was originally designed to
be run inside web browsers, modern runtimes like Wasmtime and
WasmEdge can execute WebAssembly directly on various systems.
In order to access system resources with a universal hostcall interface,
a standardization effort named WebAssembly System Interface
(WASI) is currently undergoing. With specific regard to the file system,
runtimes must prevent hostcalls to access arbitrary locations,
thus they introduce security checks to only permit access to a predefined
list of directories. This approach not only suffers from poor
granularity, it is also error-prone and has led to several security
issues. In this work we replace the security checks in hostcall wrappers
with eBPF programs, enabling the introduction of fine-grained
per-module policies. Preliminary experiments confirm that our
approach introduces limited overhead to existing runtimes.
