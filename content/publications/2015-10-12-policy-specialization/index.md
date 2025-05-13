---
title: Policy Specialization to Support Domain Isolation
taxonomies:
  authors:
    - Simone Mutti
    - Enrico Bacis
    - Stefano Paraboschi
  publication-year:
    - 2015
extra:
  csunibg: 2015/SAFECONFIG/Policy_Specialization
  venue: Proceedings of the 8th Workshop on Automated Decision Making for Active Cyber Defense (SafeConfig)
  where: Denver, USA
  when: October 12, 2015
---

The exponential growth of modern information systems has
introduced several new challenges in the management of security
requirements. Nowadays, the technological scenario
has evolved and the introduction of MAC models provides
a better isolation among software components and reduces
the damages that the malicious or defective ones can cause
to the systems. On one hand it is important to confine applications
and limit the privileges that they can request. On
the other hand we want to let applications benefit from the
flexibility given by MAC models, such as SELinux.

In this paper we show how the constructs already available
in SELinux and the specialization of security domains can
be leveraged to define boundaries where the applications are
confined but still able to introduce sophisticated security
patterns, such as application isolation and the least privilege
principle. After defining the proposed model, we describe
how it can be integrated into real systems through the use
of examples on Android and Apache Web Server.
