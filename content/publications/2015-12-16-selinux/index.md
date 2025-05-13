---
title: Extending Mandatory Access Control Policies in Android
taxonomies:
  authors:
    - Stefano Paraboschi
    - Enrico Bacis
    - Simone Mutti
  publication-year:
    - 2015
extra:
  csunibg: 2015/ICISS/Extending_SELinux_Android
  venue: Proceedings of the 11th International Conference on Information Systems Security (ICISS)
  where: Kolkata, India
  when: December 16-20, 2015
  icons:
    - ion-social-android
---

Solutions like SELinux have recently regenerated interest toward
Mandatory Access Control (MAC) models. The role of MAC models
can be expected to increase in modern systems, which are exposed to
significant threats and manage high-value resources, due to the stronger
protection they are able to offer. Android is a significant representative
of these novel systems and the integration of MAC models is an important
recent development in its security architecture. Opportunities
indeed exist to further enrich the support offered by MAC models, increasing
their flexibility and integrating them with other components of
the system. We discuss a number of proposals that have recently been
made in this domain.

First, we illustrate the integration of SELinux and SQLite, named SeSQLite,
which permits to apply MAC permissions at a fine granularity into relational
databases, offering both a schema-level and row-level support.
Then, AppPolicyModules are presented, which let app developers specify
extensions to the system-level policy that protect the resources of
each specific app. Finally, an integration between SELinux and the interprocess
communication services is proposed, to further regulate the
cooperation among separate apps and services. All these enhancements
lead to a stronger and more detailed support of the complex security
requirements that characterize modern environments.
