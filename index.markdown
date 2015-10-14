---
layout: default
---

# SeSQLite

SQLite is the most widely deployed in-process library that implements a SQL database engine. It offers high storage efficiency, fast query operation and small memory needs. Due to the fact that a complete SQLite database is stored in a single cross-platform disk file and SQLite does not support multiple users, anyone who has direct access to the file can read the whole database content.

SELinux was originally developed as a Mandatory Access Control (MAC) mechanism for Linux to demonstrate how to overcome DAC limitations. However, SELinux provides per-file protection, thus the database file is treated as an atomic unit, impeding the definition of a fine-grained mandatory access control (MAC) policy for database objects.

SeSQLite is a SQLite extension that integrates SELinux access controls into SQLite with minimal performance and storage overhead. SeSQLite implements labeling and access control at both schema level (for tables and columns) and row level. This permits the management of a fine-grained access policy for database objects.


## Publications
---------------

<div class="row">
  <div class="col-xs-2">
    <img class="paper" src="http://cs.unibg.it/mutti/papers/sesqlite.jpg" />
  </div>
  <div class="col-xs-10">
    <b>SeSQLite: Security Enhanced SQLite</b>
    <p>Simone Mutti, Enrico Bacis and Stefano Paraboschi</p>
    <p><i>in 31st Annual Computer Security Applications Conference (ACSAC 2015)</i> [to appear]</p>
  </div>
</div>

------

<div class="row">
  <div class="col-xs-2">
    <img class="paper" src="http://cs.unibg.it/mutti/papers/policy-specialization.jpg" />
  </div>
  <div class="col-xs-10">
    <b>Policy Specialization to Support Domain Isolation</b>
    <p>Simone Mutti, Enrico Bacis and Stefano Paraboschi</p>
    <p><i>in 8th Workshop on Automated Decision Making for Active Cyber Defense (SafeConfig 2015)</i></p>
    <p><a href="http://cs.unibg.it/mutti/papers/safeconfig_typebounds.pdf">Read the paper</a></p>
  </div>
</div>

------

<div class="row">
  <div class="col-xs-2">
    <img class="paper" src="http://cs.unibg.it/mutti/papers/selinux-intent.jpg" />
  </div>
  <div class="col-xs-10">
    <b>An SELinux-based Intent manager for Android</b>
    <p>Simone Mutti, Enrico Bacis and Stefano Paraboschi</p>
    <p><i>in Communications and Network Security (CNS), 2015 IEEE Conference, 2015</i></p>
    <p><u>Best poster award</u></p>
    <p><a href="http://cs.unibg.it/mutti/papers/cns_intent.pdf">Read the poster</a></p>
  </div>
</div>

------

<div class="row">
  <div class="col-xs-2">
    <img class="paper" src="http://cs.unibg.it/mutti/papers/apm.jpg" />
  </div>
  <div class="col-xs-10">
    <b>AppPolicyModules: Mandatory Access Control for Third-Party Apps</b>
    <p>Enrico Bacis, Simone Mutti, and Stefano Paraboschi</p>
    <p><i>in 10th ACM Symposium on Information, Computer and Communications Security (ASIACCS 2015)</i></p>
    <p><a href="http://cs.unibg.it/mutti/papers/asiaccs15.pdf">Read the paper</a></p>
  </div>
</div>

------

## Source Code

The source code will be made available shortly.

------

## Acknowledgements

The SeSQLite project won a Google Award in Winter 2013.

<center>
  <img style="margin: 0 auto;" src="/assets/images/faculty_award.png" />
</center>
