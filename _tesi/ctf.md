---
title: Security CTF Tools
category: security
layout: sidebar-left
sidebar: sidebars/tesi.html
published: false
---

# Security CTF Tools

----

### PREREQUISITI

Conoscere il mondo delle Capture the Flag, ed aver partecipato ad almeno una
ctf, non necessariamente col nostro team.

_Nel caso fossi interessato a partecipare a una ctf e sei alla ricerca di un
team, mandaci una mail._

---

### PROGETTI DI TESI

#### Tool di Difesa

-   ~~***[Triennale]*** Sviluppare un analizzatore di traffico di rete che monitori
    le porte di una macchina.~~
    -   ~~L'analizzatore deve catturare il traffico per un certo
        intervallo di tempo, e presentare un interfaccia grafica che permetta di
        selezionare la porta da controllare e le informazioni.~~
    -   ~~Effettuare clustering dei pacchetti per cercare di disinguere tra admin
        bot, exploit e spam.~~
    -   ~~Materiale: [awesome-pcaptools](https://github.com/caesar0301/awesome-pcaptools)~~

-   ***[Triennale]*** Implementare un firewall che interrompa le connessioni in
    entrata in base a delle regole.
    -   Le regole possono essere delle espressioni regolari.
    -   Valutare il throughput (le regex possono essere molto pesanti da
        valutare).
    -   Materiale: [awesome-pcaptools](https://github.com/caesar0301/awesome-pcaptools)

-   ***[Magistrale]*** Sviluppare uno script di binary hardening, ovvero
        che inietti nei file binari i più elementari sistemi di protezione
        (canaries, NX, ...).
    -   Materiale: [patcherex](https://github.com/shellphish/patcherex),
        [angr](http://angr.io/)
    -   *Questa tesi richiede una conoscenza approfondita di C e assembly.*

-   ***[Triennale]*** Sviluppare un tool di system hardening che cambi il nome
        dei binari comunemente utilizzati in un sistema (cat, ls, nc, ecc.).
    -   Il tool deve funzionare anche per fare intrusion detection (verificare
        che qualcuno sta cercando di utilizzare uno di quei comandi).
    -   Spesso le vulnbox hanno servizi isolati, ad esempio tramite docker. Il
        tool deve funzionare anche in questo caso.

-   ~~***[Triennale]*** Svilupare un automatic service gitter. Il tool deve creare
    automaticamente repositories su git per ogni servizio dato con la vulnbox.
    In questo modo si può verificare i file cambiati in seguito a nostre patch
    (o patch iniettate da altri), ed eventualmente fare rollback ripristinando
    il servizio originale.~~
    -   ~~Spesso le vulnbox hanno servizi isolati, ad esempio tramite docker. Il
        tool deve funzionare anche in questo caso.~~


#### Tool di Attacco

-   ~~***[Triennale]*** Implementare un exploit runner. Il tool deve presentare
    delle API che possano essere usate come un template di attacco in tutte (o
    quasi tutte) le ctf.
    Tale tool deve definire il tempo tra i round, il range di
    indirizzi IP da attaccare, la porta da attaccare, ecc.~~

-   ~~***[Triennale]*** Implementare un flag submitter. Il tool deve prevedere
    delle API a cui vengono mandate le flag, e un'applicazione web che si
    preoccupa di sottomettere solo le flag che non sono già state inviate, e
    verifica poi il risultato.~~
    -   ~~Il flag submitter deve presentare degli avvisi nel caso in cui non si
        stanno inviando più flag (e quindi l'exploit runner potrebbe aver
        smesso di funzionare), o se tutte le flag recenti sono state marcate
        come non valide o già inviate.~~
    -   ~~Costruire una classifica interna su chi è riuscito a fare più punti
        con gli attacchi, e presentarla con un'interfaccia.~~

----

_**Progetto Bonus**: se sei un appassionato del mondo delle CTF e hai qualche
idea riguardante la realizzazione di tool a supporto dell'identificazione di
vulnerabilità sia in ambito binary che web, vieni a parlarcene. Siamo sempre
aperti a nuove idee e progetti interessanti._
