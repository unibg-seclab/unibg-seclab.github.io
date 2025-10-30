---
title: Secure Kubernetes Workload Deployment with Automated Enforcement of Cluster-Defined Policies
taxonomies:
  authors:
    - Matthew Rossi
    - Michele Beretta
    - Dario Facchinetti
    - Stefano Paraboschi
  publication-year:
    - 2025
extra:
  csunibg: 2025/CLOUDCOM/secure-scheduling
  github: matthewrossi/k8s-secure-scheduling
  icons:
    - fa-solid fa-dharmachakra
    - ion-cloud
---

Scheduling pods on separate physical nodes is a crucial strategy to isolate
workloads with incompatible security requirements. In Kubernetes, this is
enforced using metadata such as node selectors, affinity rules, and topology
spread constraints, all manually defined by developers at resource creation.
The aforementioned process is complex and prone to errors, frequently resulting
in misconfigurations that expose systems to data breaches and regulatory
violations.

This paper proposes an approach to constrain scheduling using policies defined
once at the cluster level and automatically evaluated by Kubernetes during each
workload deployment. The advantages are
(i) automatic rejection of uncompliant resource creation requests,
(ii) streamlined support for executing multi-tenant workloads,
and
(iii) secure scheduling and deployment of workloads based on security requirements.
To implement this solution, we integrate the native Kubernetes
node-filtering capabilities with OPA Gatekeeper for policy
enforcement. We demonstrate how this approach reliably enforces common
corporate governance policies and analyze its performance advantage over
isolation achieved solely through sandboxing. The experimental
evaluation confirms the effectiveness of our proposal and the minimal
overhead.
