---
title: IPFS e Storage Distribuiti
category: security
layout: sidebar-left
sidebar: sidebars/tesi.html
published: true
---

# IPFS e Storage Distribuiti
----------------------------

Per storage distribuito si intende una rete in cui i dati vengono
salvati su diversi nodi, che appartengono allo stesso sistema di
storage. Caratteristiche fondamentali dei sistemi distribuiti sono che
tutti i nodi siano “pari”, ovvero non ne esista uno più importante di
altri, e che l’informazione sia replicata, in modo tale da essere sempre
disponibile.

[IPFS](https://ipfs.io/) (InterPlanetary File System) è uno storage
distribuito che si pone come obiettivo quello di costruire un file
system globale e p2p. In IPFS quando un file viene aggiunto alla rete,
questo diventa accessibile a tutti i nodi tramite il proprio hash.
Infatti, l’hash di un file è univoco per quel file, pertanto il file può
essere scaricato da tutti semplicemente conoscendo l’hash.

<br>
<img class="img-responsive center-block"
     width="60%"
     src="/assets/images/ipfs.png" />
<br>

-----------------
#### PREREQUISITI

-   Passione per lo studio dei sistemi distribuiti

-   Comprensione del funzionamento di:

-   [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent)

-   [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree)

-   [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table)


--------------
#### MATERIALE

-   Sito web di IPFS: [https://ipfs.io](https://ipfs.io)

-   Whitepaper di IPFS:
    [http://www.cryptocoin20.com/whitepaper/pdf/ipfs.pdf](http://www.cryptocoin20.com/whitepaper/pdf/ipfs.pdf)


---------------------
#### PROGETTI DI TESI

-   ***\[Triennale\]*** Gestire l’upload di un video in IPFS in chunks,
    e riprodurlo in streaming con una chromecast con il video player
    [https://github.com/mafintosh/playback](https://github.com/mafintosh/playback).
    Scrivere una guida dei passi svolti descrivendo anche l’esperienza
    utente della riproduzione del video (la qualità è paragonabile
    a YouTube?)

-   ***\[Triennale\]*** Costruzione di un sito (o un’applicazione) web
    su IPFS dove il DNS sia risolto da IPNS. Mostrare poi come
    funziona la replicazione dei documenti su IPFS e la gestione del
    dominio di IPNS

-   ***\[Magistrale\]*** Studio ed integrazione di un meccanismo di
    rimozione di contenuti (basato magari su [Mix&Slice](#mixslice),
    o [Ethereum smart contracts](https://www.ethereum.org/greeter))
    dal servizio IPFS

-   *\[Avvertenza\]* Questa tesi tratta argomenti che sono all’apice
    dello stato dell’arte, quindi può essere molto interessante,
    tuttavia IPFS è anche chiamato *persistent web*, quindi questa
    tesi è una tesi di ricerca *difficile.*

-   ***\[Magistrale\]*** IPFS non è l’unico file system distribuito,
    altri sono [Storj](https://storj.io),
    [FileCoin](http://filecoin.io), [Ethereum
    Swarm](https://github.com/ethersphere/swarm). Integrare un
    meccanismo di Secure Deletion distribuito (es.
    [Mix&Slice](#mixslice)) su uno di questi sistemi (altro tema
    molto interessante ma *difficile*).
