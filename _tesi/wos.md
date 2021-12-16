---
title: Produzione Scientifica
category: sweng
layout: sidebar-left
sidebar: sidebars/tesi.html
published: true
---

# Produzione Scientifica

----

Esistono diverse raccolte online che permettono di verificare gli indici
bibliometrici per valutare la produzione accademica. Alcuni tra i più famosi
sono: [Google Scholar](https://scholar.google.it/),
[Scopus](https://www.scopus.com), [Web of
Science](https://login.webofknowledge.com).  L’analisi automatica della
produzione scientifica può spingere la meritocrazia e migliorare la produttività
di un gruppo di persone.  Esistono già diversi tool che permettono di effettuare
analisi per singole persone, ma pochi destinati alla visione complessiva della
produzione di un gruppo di persone quale può essere un gruppo di ricerca, un
dipartimento o una intera università.

----

### PREREQUISITI

* Esperienza di uso di API REST o SOAP

* Prova di utilizzo delle API offerte da Elsevier per la raccolta Scopus:

  [https://dev.elsevier.com/index.html](https://dev.elsevier.com/index.html)

* _[Consigliato]_ Esperienza di costruzione di interfacce grafiche (dashboard)

----

### MATERIALE

* Python API for Accessing Scopus databases with their REST API:
  [https://github.com/jkitchin/scopus](https://github.com/jkitchin/scopus)

* SOAP Client for querying the Web of Science database:
  [https://github.com/enricobacis/wos](https://github.com/enricobacis/wos)

----

### PROGETTO DI TESI

* ~~**_[Triennale]_** Il tool che si vuole sviluppare prevede di gestire diverse
  funzionalità tramite una interfaccia grafica che permetta di:

  * Gestione del gruppo di persone in maniera persistente tramite un database
    (consigliato SQLite), con aggiunta tramite csv (o json) o in maniera
    manuale.

  * Query delle raccolte bibliometriche tramite API per ottenere gli indici
    bibliometrici delle persone.

  * Salvataggio dei risultati della ricerca per permettere il confronto
    (grafico) tra due stati temporali salvati, in modo da valutare l’andamento
    delle metriche.

  * **_[Requisito aggiuntivo per tesi Magistrale]_** Ogni raccolta prevede
    l’identificazione dell’autore tramite un identificativo. Serve automatizzare
    la procedura in modo da recuperare e salvare automaticamente nel database
    l’identificativo partendo dalle informazioni presenti, in caso di omonimia
    cercare di identificare automaticamente l’elemento corretto o mostrare
    all’utente le informazioni in modo da permettere la selezione manuale.~~
