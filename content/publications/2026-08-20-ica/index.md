---
title: Dynamic Delegation in Outsourced ICA Processes
taxonomies:
  authors:
    - Sabrina De Capitani di Vimercati
    - Sara Foresti
    - Stefano Paraboschi
    - Matthew Rossi
    - Pierangela Samarati
  publication-year:
    - 2026
extra:
  csunibg: 2026/COSE/ica
  icons:
    - ion-arrow-swap
    - ion-cloud
  github: unibg-seclab/ica
---

We consider the problem of enforcing corporate governance control relying on
cloud-based services. Extending previous work, we focus, in particular, on the
support for delegation of director privileges, enabling their dynamic and
temporary assignment to a vice-director. Like previous work, our control relies
on encrypted tags, which are extended to address the challenges introduced by
dynamic delegation which operates on a time dimension orthogonal to the
corporate governance control process. Our solution enables delegation while
ensuring a vice-director to enjoy the director privileges only when delegation
is active, or on operations for which the vice-director has already started the
director phase, and not to operate as director for operations the vice-director
has processed as employee (separation of duties). Our tag construction ensures
integrity of the dynamic delegation control and protection against tag
tampering. Our implementation of the proposed framework, which relies on
FoundationDB for persistent encrypted workflow state and OpenBao for key
management, demonstrates its viability and integration with current
technological solutions. The high throughput obtained in our experimental
evaluation confirms the applicability of the approach and the limited impact of
delegation.
