---
title: Mapping tra Android Permissions e SELinux
category: security
layout: sidebar-left
sidebar: sidebars/tesi.html
published: true
---

# Mapping tra Android Permissions e SELinux

----

In [Android](https://source.android.com/index.html) è stato introdotto ormai
da tempo il supporto a Mandatory Access Control (MAC) per proteggere le app,
estendendo così la precedente protezione che contava solo su Android
Permissions (AP) e Discretionary Access Control (DAC).

Per poter usufruire delle sue proprietà di sicurezza addizionali ogni risorsa
di Android è associata ad un'etichetta.

Idealmente ogni etichetta associata ad un processo dovrebbe possedere il set
minimo di permessi necessari al corretto funzionamento del processo (principio
del privilegio minimo).

Tuttavia, in Android, tutte le app di terze parti sono associate alla
medesima etichetta *untrusted_app*, alla quale di conseguenza vengono associati
tutti i privilegi di cui un'app può necessitare.
Un'app normalmente necessita solo di un sottoset di quei privilegi, ma
nonostante questo viene associata ad una etichetta molto più permissiva che
permette a tutte le app operazioni quali l’invio/ricezione di SMS e chiamate,
lo storage di files, l’utilizzo della posizione geografica...

Per impedire alle applicazioni di effettuare operazioni non permesse,
subentrano gli strati più alti del controllo: AP e DAC.

Questo è un brutto esempio di defense in-depth, in quanto lo strato superiore
risulta più restrittivo di quello inferiore e per altro viola anche il
principio del privilegio minimo.

<img class="img-responsive center-block"
     src="/assets/images/android_stack_new.png" />

----

### PREREQUISITI

* Ottima conoscenza di Kotlin / Java e della programmazione ad oggetti

* Conoscenza (base) dei principi di funzionamento di SELinux

* *\[opzionale\]* Esperienza di lavoro su grandi code base

----

### MATERIALE

* The Android Platform Security Model:
  [https://arxiv.org/pdf/1904.05572.pdf](https://arxiv.org/pdf/1904.05572.pdf)

* Android Permissions:
  [https://developer.android.com/guide/topics/permissions/overview](https://developer.android.com/guide/topics/permissions/overview)

* SELinux per Android:
  [https://source.android.com/security/selinux/concepts.html](https://source.android.com/security/selinux/concepts.html)

----

### PROGETTI DI TESI

* **_[Triennale]_** Mapping tra Android Permissions e SELinux (Blackbox)

  L’obiettivo della tesi è quello di identificare il mapping tra Android
  Permissions e i tipi SELinux sottostanti così da capire quali permessi
  SELinux sono necessari per il corretto funzionamento di ogni app.

  La strada da seguire per conseguire questo risultato consisterebbe nella
  realizzazione di una o più applicazioni giocattolo che interagiscono con
  servizi di sistema protetti da Android Permissions allo scopo di
  identificare i permessi SELinux sottostanti necessari al loro corretto
  funzionamento.

  **_[Requisito aggiuntivo per tesi Magistrale]_** uno tra:

  * Automatizzare il processo al fine di favorire la copertura di tutti gli
    Android Permissions disponibili.

  * Sfruttando la conoscenza del mapping tra Android Permissions e SELinux
    (identificato precedentemente), e il contenuto del manifest di un'app
    realizzare un tool che crei la sua SELinux policy minimale.

* **_[Magistrale]_** Mapping tra Android Permissions e SELinux (Whitebox)

  L’obiettivo della tesi è quello di identificare il mapping tra Android
  Permissions e i tipi SELinux sottostanti così da capire quali permessi
  SELinux sono necessari per il corretto funzionamento di ogni app.

  La strada da seguire per conseguire questo risultato consisterebbe nella
  realizzazione di un tool di analisi statica di Android Open Source
  Project allo scopo di identificare i servizi di sistema che necessitano
  di Android Permissions per essere accessibili alle applicazioni di terze
  parti.
  Una volta identificati questi servizi risalire a quali sono i permessi
  SELinux dell'app che ne permettono l'accesso sempre mediante analisi
  statica.
