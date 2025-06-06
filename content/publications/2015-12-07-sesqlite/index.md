---
title: "SeSQLite: Security Enhanced SQLite"
taxonomies:
  authors:
    - Simone Mutti
    - Enrico Bacis
    - Stefano Paraboschi
  publication-year:
    - 2015
extra:
  csunibg: 2015/ACSAC/SeSQLite
  venue: Proceedings of the 31st Annual Computer Security Applications Conference (ACSAC), Los Angeles, USA
  where: Los Angeles, USA
  when: December 7-11, 2015
  icons:
    - ion-social-android
  github: unibg-seclab/sesqlite
---

SQLite is the most widely deployed in-process library that
implements a SQL database engine. It offers high storage efficiency,
fast query operation and small memory needs. Due
to the fact that a complete SQLite database is stored in a
single cross-platform disk file and SQLite does not support
multiple users, anyone who has direct access to the file can
read the whole database content. SELinux was originally
developed as a Mandatory Access Control (MAC) mechanism
for Linux to demonstrate how to overcome DAC limitations.
However, SELinux provides per-file protection, thus
the database file is treated as an atomic unit, impeding the
definition of a fine-grained mandatory access control (MAC)
policy for database objects.

We introduce SeSQLite, an SQLite extension that integrates
SELinux access controls into SQLite with minimal
performance and storage overhead. SeSQLite implements
labeling and access control at both schema level (for tables
and columns) and row level. This permits the management
of a fine-grained access policy for database objects. A prototype
has been implemented and it has been used to improve
the security of Android Content Providers.
