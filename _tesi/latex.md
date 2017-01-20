---
title: Latex Proofreading Plugin
category: sweng
layout: sidebar-left
sidebar: sidebars/tesi.html
published: true
---

# Latex Proofreading Plugin
---------------------------

Tool per il proofreading automatico di testi. Il tool deve essere in grado di
analizzare dei file LaTeX (che possono anche includere a loro volta altri files)
e trovare dei comuni errori che si commettono durante la stesura di testi, che
non vengono però individuati dagli strumenti tradizionali come:

* Capitalizzazione di parole non consistente all’interno del testo (es. “On
  Demand” vs “On demand”)
* Utilizzo non consistente di simboli (es. “on-demand” vs “on demand”)
* Utilizzo scorretto delle liste
* Inconsistenza nei titoli delle figure e tabelle


----------------
#### PREREQUISITI

* Conoscenza e utilizzo di LaTeX


---------------------
#### PROGETTI DI TESI

Il tool dovrà essere in grado di:

* Individuare gli errori e segnalarli all’utilizzatore
* Eventualmente proporre delle correzioni quando possibile

Il tool potrà essere creato come:

* **_[Triennale]_** Tool esterno all’ambiente LaTeX
  * **_[Requisito aggiuntivo per tesi Magistrale]_** Creazione di un pacchetto
    LaTeX (che può anche invocare il tool esterno) in modo da automatizzare il
    controllo durante la compilazione.
