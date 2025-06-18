---
title: "POSTER: Policy-driven security-aware scheduling in Kubernetes"
taxonomies:
  authors:
    - Matthew Rossi
    - Michele Beretta
    - Dario Facchinetti
    - Stefano Paraboschi
  publication-year:
    - 2025
extra:
  csunibg: 2025/ASIACCS/poster-security-aware-scheduling
  github: matthewrossi/k8s-secure-scheduling
  venue: Proceedings of the 20th ACM ASIA Conference on Computer and Communications Security (ASIACCS)
  type: inproceedings
  doi: 10.1145/3708821.3735343
  where: Hanoi, Vietnam
  when: August 25-29, 2025
  icons:
    - ion-cloud
---

Nowadays, Kubernetes is the leading platform for managing containerized
application workloads.
These are built of numerous *pods*, groups
of one or more containers that are always co-located and co-scheduled
on the same node.
Given a pod, the *scheduler* performs a critical task, i.e., it finds the
best possible node for its execution.
This process is affected by several factors, including resource
availability, hardware requirements, data processing restrictions
(e.g., GDPR and CCPA), workload sensitivity, and the presence of other
workloads.
Developers can control the scheduling process through several methods, such as
node selectors, affinity, anti-affinity, and topology spread constraints.
However, this activity is cumbersome, error prone, and can easily lead to
security incidents.

In this paper we propose an approach to constrain and validate pod scheduling
decisions without relying on complex, handwritten node selection policies.
The idea is to
combine the node filtering capabilities of Kubernetes with the use of
OPA Gatekeeper for automated policy enforcement.
We discuss how this approach overcomes the limitation associated with
existing solutions, and then describe how it is used to support corporate
governance policies in common scenarios.
Preliminary experiments confirm the applicability of our proposal.
