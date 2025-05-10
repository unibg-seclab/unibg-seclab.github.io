---
title: An SELinux-based Intent manager for Android
taxonomies:
  authors:
    - Simone Mutti
    - Enrico Bacis
    - Stefano Paraboschi
  publication-year:
    - 2015
extra:
  csunibg: 2015/CNS/Intent_Firewall
  venue: Proceedings of the 3rd IEEE Conference on Communications and Network Security (CNS), Florence, Italy, September 28-30, 2015
  where: Florence, Italy
  when: September 28-30, 2015
  icons:
    - ion-ribbon-b
    - ion-social-android
  note: <a href="https://cs.unibg.it/seclab-papers/2015/CNS/Intent_Firewall_poster.pdf">Poster</a><br/><u>IEEE CNS15 Best Poster Award</u>
---

The support for Mandatory Access Control offered
by SELinux has become a significant component of the security
design of the Android operating system, offering robust protection
and the ability to support system-level policies enforced by all the
elements of the system. A well-known security-sensitive aspect of
Android that currently SELinux does not cover is the abuse of
intents, which represent the Android approach to inter-process
communication. We propose SEIntentFirewall, an SELinux intent
manager that provides fine-grained access control over Intent
objects, permitting to cover within MAC policies the use of
intents.
