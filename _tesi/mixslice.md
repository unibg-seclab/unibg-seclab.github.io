---
title: Mix&Slice
category: security
layout: sidebar-left
sidebar: sidebars/tesi.html
published: true
---

# Mix&Slice
-----------

Mix&Slice è un algoritmo di cifratura che usa il cifrario a blocchi AES per
cifrare i file in modo tale che ogni blocco del plaintext dipenda da tutti i
blocchi del ciphertext.  In questo modo, se anche solo un pezzo del ciphertext
viene “perso” (viene ri-cifrato con un’altra chiave, viene eliminato, ...) non è
più possibile accedere al plaintext.

<br>
<img class="img-responsive center-block"
     width="80%"
     src="https://cdn.rawgit.com/unibg-seclab/aesmix/master/doc/mixing.svg" />
<br>


-------------
### MATERIALE

* Paper originale:
  [http://spdp.di.unimi.it/papers/bdfprs-ccs2016.pdf](http://spdp.di.unimi.it/papers/bdfprs-ccs2016.pdf)

* Codice sorgente:
  [https://github.com/unibg-seclab/aesmix](https://github.com/unibg-seclab/aesmix)

* Video di presentazione:
  [https://youtu.be/rzpeuX8zWoE](https://youtu.be/rzpeuX8zWoE)

Nel paper originale, Mix&Slice veniva usato per fare access control in ambienti
cloud. Abbiamo mostrato analisi di performance a basso livello sulla cifratura
(AES vs. [AES-NI](https://it.wikipedia.org/wiki/AES-NI)), e ad alto livello
provando ad applicarlo sull’object storage Swift, con particolare riguardo ai
dynamic large objects.


--------------------
### PROGETTI DI TESI

* **_[Triennale]_** Costruzione di un file system per GNU/Linux che supporti
  Mix&Slice in modo tale da poter studiare una sua applicazione per fare [secure
  deletion](http://www.alertboot.com/blog/blogs/endpoint_security/archive/2011/04/29/disk-encryption-how-do-you-cryptographically-erase-data.aspx).

  * **_[Requisito aggiuntivo per tesi magistrale]_** Studiare ed implementare
    una modalità di padding che limiti l’espansione della risorsa. Ogni livello
    i Mix&Slice può cifrare una quantità di dati quattro volte superiore al
    livello precedente.  Quindi l’utilizzo di un padding banale in Mix&Slice
    espanderebbe i files del 100% (worst case 300%).

* **_[Triennale]_** Wrapping della libreria di Mix&Slice in Python (o Java) e
  utilizzo su cloud storage (Amazon Web Services, Google Cloud Platform, ecc.),
  costruendo un set di APIs “ad-hoc” per fare put, get, revoche, ecc. di files.

  * **_[Requisiti aggiuntivo per tesi magistrale]_** Creare una interfaccia
    grafica per permettere l’utilizzo delle API, analizzare le prestazioni.

* **_[Triennale]_** Scrivere un servizio per fare secure deletion. Questo
  servizio deve fare uso di un Amazon Dash Button, che quando premuto cifri uno
  dei frammenti di Mix&Slice e elimini la chiave. Le risorse da proteggere sono
  salvate su uno dei servizi di cloud storage (Amazon S3, Google Cloud Storage,
  ...).
