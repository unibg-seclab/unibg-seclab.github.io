---
title: SeSQLite

extra:
   github: sesqlite
---

SQLite is the most widely deployed in-process library that implements a SQL
database engine. It offers high storage efficiency, fast query operation and
small memory needs. Due to the fact that a complete SQLite database is stored
in a single cross-platform disk file and SQLite does not support multiple users,
anyone who has direct access to the file can read the whole database content.

SELinux was originally developed as a Mandatory Access Control (MAC) mechanism
for Linux to demonstrate how to overcome DAC limitations. However, SELinux
provides per-file protection, thus the database file is treated as an atomic
unit, impeding the definition of a fine-grained mandatory access control (MAC)
policy for database objects.

SeSQLite is a SQLite extension that integrates SELinux access controls into
SQLite with minimal performance and storage overhead. SeSQLite implements
labeling and access control at both schema level (for tables and columns) and
row level. This permits the management of a fine-grained access policy for
database objects.

## Source Code

The source code is available on {{ <github project="sesqlite" config={config} /> }}. Star
the project on GitHub to receive updates on future releases.

SeSQLite is still in an alpha version, but the core functionalities of SQL
are provided and integrated with the Mandatory Access Control checks provided
by SELinux.

## Acknowledgements

The SeSQLite project won a Google Award in the Winter 2014 branch.

![](/images/faculty_award.png)

## Project Publications

- [Extending Mandatory Access Control Policies in Android](/publications/extending-android-mac)
- [SeSQLite: Security Enhanced SQLite](/publications/sesqlite)
- [Policy Specialization to Support Domain Isolation](/publications/policy-specialization)
- [An SELinux-based Intent manager for Android](/publications/intent-firewall)
- [AppPolicyModules: Mandatory Access Control for Third-Party Apps](/publications/app-policy-module)
