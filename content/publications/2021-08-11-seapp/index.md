---
title: "SEApp: Bringing Mandatory Access Control to Android Apps"
taxonomies:
  authors:
    - Matthew Rossi
    - Dario Facchinetti
    - Enrico Bacis
    - Marco Rosa
    - Stefano Paraboschi
  publication-year:
    - 2021
extra:
  csunibg: 2021/USENIX/seapp
  note: "<a href='https://cs.unibg.it/seclab-papers/2021/CSAW/seapp-poster.pdf'>CSAW 2021 Poster</a><br><a href='https://cs.unibg.it/seclab-papers/2022/USENIX/seapp-poster.pdf'>USENIX Security 2022 Poster</a><br><a href='https://cs.unibg.it/seclab-papers/2021/CSAW/arc-finalist-certificate.pdf'><u>CSAW 2021 Applied Research Competition Finalist A</u></a> & <a href='https://drive.google.com/file/d/1kUxstkCdRUDYZQDfT2TFn8_X568Y-3R5/view?usp=sharing'><u>B</u></a>"
  icons:
    - ion-social-android
  github: matthewrossi/seapp
---

Mandatory Access Control (MAC) has provided a great contribution
to the improvement of the security of modern operating
systems. A clear demonstration is represented by
Android, which has progressively assigned a greater role to
SELinux since its introduction in 2013. These benefits have
been mostly dedicated to the protection of system components
against the behavior of apps and no control is offered
to app developers on the use of MAC. Our solution overcomes
this limitation, giving developers the power to define
ad-hoc MAC policies for their apps, supporting the internal
compartmentalization of app components.

This is a natural evolution of the security mechanisms already
available in Android, but its realization requires to consider
that (i) the security of system components must be maintained,
(ii) the solution must be usable by developers, and
(iii) the performance impact should be limited. Our proposal
meets these three requirements. The proposal is supported by
an open-source implementation.
