---
title: "Lightweight Cloud Application Sandboxing"
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
  csunibg: 2023/CLOUDCOM/dmng
  github: unibg-seclab/dmng
  venue: Proceedings of the 14th IEEE International Conference on Cloud Computing Technology and Science (CLOUDCOM)
  where: Naples, Italy
  when: December 4-6, 2023
  icons:
    - ion-cloud
---

Modern cloud applications can quickly grow to
an elaborate and intricate tangle of services. In this scenario,
paying attention to security aspects is important to mitigate the
impact of incidents. Indeed, several research works and industrial
standards recommend the integration of least privilege policies to
prevent disruptions such as file system tampering. Unfortunately,
technologies like containers virtualize file system resources with
a volume-based approach, which may be overly coarse.
In this work we address this problem proposing an approach
that restrict application access to file system resources with a
resource-based granularity. To this end, we develop a flexible and
intuitive tool that relies on instrumentation to collect, merge, and
audit the activity traces generated by any application component.
We then demonstrate how this information is used to create fine-grained
access policies, and introduce sandboxing using recent
kernel security modules, strengthening the security boundary of
the whole application. In the experimental evaluation we showcase the mitigation
capabilities associated with our approach, and the low performance footprint.
The proposal is associated with an open source implementation.
