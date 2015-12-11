---
layout: default
---

{% include ribbon.html url="https://github.com/unibg-seclab/sesqlite" text="Fork me on GitHub" %}

# SeSQLite

SQLite is the most widely deployed in-process library that implements a SQL database engine. It offers high storage efficiency, fast query operation and small memory needs. Due to the fact that a complete SQLite database is stored in a single cross-platform disk file and SQLite does not support multiple users, anyone who has direct access to the file can read the whole database content.

SELinux was originally developed as a Mandatory Access Control (MAC) mechanism for Linux to demonstrate how to overcome DAC limitations. However, SELinux provides per-file protection, thus the database file is treated as an atomic unit, impeding the definition of a fine-grained mandatory access control (MAC) policy for database objects.

SeSQLite is a SQLite extension that integrates SELinux access controls into SQLite with minimal performance and storage overhead. SeSQLite implements labeling and access control at both schema level (for tables and columns) and row level. This permits the management of a fine-grained access policy for database objects.


## Publications
---------------

{% include paper.html title="SeSQLite: Security Enhanced SQLite" image="http://cs.unibg.it/mutti/papers/sesqlite.jpg" authors="Simone Mutti, Enrico Bacis and Stefano Paraboschi" venue="in 31st Annual Computer Security Applications Conference (ACSAC 2015) [to appear]" url="http://cs.unibg.it/mutti/papers/sesqlite.pdf" %}

{% include paper.html title="Policy Specialization to Support Domain Isolation" image="http://cs.unibg.it/mutti/papers/policy-specialization.jpg" authors="Simone Mutti, Enrico Bacis and Stefano Paraboschi" venue="in 8th Workshop on Automated Decision Making for Active Cyber Defense (SafeConfig 2015)" url="http://cs.unibg.it/mutti/papers/safeconfig_typebounds.pdf" %}

{% include paper.html title="An SELinux-based Intent manager for Android" image="http://cs.unibg.it/mutti/papers/selinux-intent.jpg" authors="Simone Mutti, Enrico Bacis and Stefano Paraboschi" venue="in Communications and Network Security (CNS), 2015 IEEE Conference, 2015" url="http://cs.unibg.it/mutti/papers/cns_intent.pdf" note="IEEE CNS'15 Best Poster Award" %}

{% include paper.html title="AppPolicyModules: Mandatory Access Control for Third-Party Apps" image="http://cs.unibg.it/mutti/papers/apm.jpg" authors="Enrico Bacis, Simone Mutti and Stefano Paraboschi" venue="in 10th ACM Symposium on Information, Computer and Communications Security (ASIACCS 2015)" url="http://cs.unibg.it/mutti/papers/asiaccs15.pdf" %}

## Source Code

The source code is available at: <https://github.com/unibg-seclab/sesqlite> . Star the project on GitHub to receive updates on future releases.

SeSQLite is still in an alpha version, but the core functionalities of SQL are provided and integrated with the Mandatory Access Control checks provided by SELinux.

------

## Acknowledgements

The SeSQLite project won a Google Award.

<center>
  <img style="margin: 0 auto;" src="/assets/images/faculty_award.png" />
</center>
