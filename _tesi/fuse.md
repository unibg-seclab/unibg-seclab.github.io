---
title: Mix&Slice virtual filesystem
category: security
layout: sidebar-left
sidebar: sidebars/tesi.html
published: true
---

# Mix&Slice virtual filesystem

----

Filesystem in Userspace (FUSE) è una interfaccia software per sistemi operativi
*nix che permette ad utenti non privilegiati di creare i propri file system
senza modificare il codice del kernel.
Questo è fattibile grazie all'esecuzione del codice del file system nello
spazio utente mentre il modulo FUSE si occupa di fare da "ponte" all'effettiva
interfaccia del kernel.

FUSE è particolarmente utile per scrivere file system virtuali.
A differenza dei file system tradizionali, i file system virtuali non si
occupano direttamente di memorizzare i dati sul dispositivo di archiviazione,
al contrario questi forniscono una vista del contenuto memorizzato su un file
system già esistente.

<img class="img-responsive center-block"
     width="50%"
     src="/assets/images/fuse.png" />

FreyaFS è un filesystem virtuale cifrato per GNU/Linux realizzato sfruttando
FUSE. L'algoritmo di cifratura utilizzato per l'archiviazione sicura dei dati
è Mix&Slice, una all-or-nothing-transform basata sull'uso di AES come building
block.
Una volta fornita la master password in fase di montaggio del file system,
il filesystem realizzato si occupa di gestire la creazione, la lettura, la
modifica e l’eliminazione di file e cartelle gestendo tutte le attività di
cifratura e decifratura dei dati in modo trasparente all'utente.

----

### PREREQUISITI

* Passione per lo studio del funzionamento dei file system

* Aver letto e compreso il funzionamento di FUSE

* Aver provato ad installare e utilizzare un file system virtuale

----

### MATERIALE

* "FreyaFS - a Mix&Slice virtual filesystem" GitHub repository:
  [https://github.com/mosaicrown/freya-fs](https://github.com/mosaicrown/freya-fs)

* Mix&Slice encryption scheme:
  [http://spdp.di.unimi.it/papers/bdfprs-ccs2016.pdf](http://spdp.di.unimi.it/papers/bdfprs-ccs2016.pdf)

* Library implementing Mix&Slice encryption scheme:
  [https://github.com/unibg-seclab/aesmix](https://github.com/unibg-seclab/aesmix)

----

### PROGETTI DI TESI

* **_[Triennale]_** Estendere FreyaFS con l'obiettivo di nascondere
completamente la struttura interna del file system ad un attaccante non in
possesso della master password necessaria al mount del filesystem.

* **_[Triennale]_** Migliorare il supporto al multithreading di FreyaFS con
l'aggiunta di lock in lettura e scrittura al fine di migliorne le performance e
responsività. È necessario adottare tecniche per prevenire situazioni di
starvation o deadlock.

* **_[Magistrale]_** Migliorare le performance di update e rimozione dei file
di FreyaFS sfruttando informazioni addizionali quali la suddivisione dei file
in macro-blocchi adottata da Mix&Slice.
Successivamente sfruttare le proprietà di Mix&Slice con l'obiettivo di
realizzare un plausible deniable file system mediante la rotazione di blocchi
in ramfs.

----

_**Progetto Bonus**: se hai letto il funzionamento di FUSE e sei rimasto
folgorato dall’idea di poter realizzare uno tuo file system virtuale con le
funzionalità che hai sempre sognato, vieni a parlarci in ufficio._
