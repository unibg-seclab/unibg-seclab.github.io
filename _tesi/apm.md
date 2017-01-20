---
title: Android APM
category: security
layout: sidebar-left
sidebar: sidebars/tesi.html
published: true
---

# Android App Policy Modules
----------------------------

In [Android](https://source.android.com/index.html) è stato recentemente
introdotto il supporto Mandatory Access Control (MAC) per proteggere le app,
estendendo così la precedente protezione che contava solo sull’Android
Permission Framework e sul Discretionary Access Control (DAC).

Tuttavia, godono dei benefici del MAC solo le applicazioni di sistema
preinstallate, infatti ad ogni applicazione viene associata un’etichetta, alla
quale viene poi associata una policy di sicurezza, ma tutte le applicazioni di
terze parti vengono associate alla stessa etichetta ("*untrusted\_app*").
Pertanto, venendo eseguite entro lo stesso dominio, nel caso in cui l’utente
installasse un malware, questo, con un’escalation di privilegi, potrebbe
accedere ai dati di tutte le app di terze parti.

Questo progetto, denominato AppPolicyModule, o APM, vincitore di un Google
Research Award nel 2016, prevede di estendere il supporto MAC anche alle app di
terze parti, generando al momento dell’installazione di ogni app un’etichetta e
una policy ad-hoc.

<img class="img-responsive center-block"
     width="80%"
     src="/assets/images/android_stack.png" />


----------------
### PREREQUISITI

-   Ottima conoscenza di Java e della programmazione ad oggetti

-   Aver letto e compreso le sezioni Overview, Download and Building e
    Developing della guida sulla compilazione Android (sezione Materiale)

-   Aver provato a compilare un sistema Android seguendo i passi descritti in
    tale guida e preferibilmente averlo provato su un dispositivo per
    verificare il successo dell’operazione

-   Conoscenza (base) dei principi di funzionamento di SELinux

-   *\[opzionale\]* Esperienza di lavoro su grandi code base


-------------
### MATERIALE

-   Paper sugli APM:
    [http://cs.unibg.it/seclab-papers/2015/ASIACCS/AppPolicyModules.pdf](http://cs.unibg.it/seclab-papers/2015/ASIACCS/AppPolicyModules.pdf)

-   Compilazione Android:
    [https://source.android.com/source/index.html](https://source.android.com/source/index.html)

-   SELinux per Android:
    [https://source.android.com/security/selinux/concepts.html](https://source.android.com/security/selinux/concepts.html)


--------------------
### PROGETTI DI TESI

-   ***\[Magistrale\]*** Implementazione del paper APM nella versione corrente
    di Android, per far sì che quando un’applicazione viene installata:

    -   Il suo APM venga verificato

    -   Vengano inserite le sue regole nella policy di sistema

    -   L’applicazione venga etichettata correttamente all’avvio in modo che
        possa sfruttare appieno SELinux

-   ***\[Magistrale\]*** Mapping Android Permission Framework in SELinux

    -   In questo momento la policy SELinux di Android è poco partizionata, ad
        esempio il tipo *untrusted\_app*, assegnato a tutte le applicazioni di
        terze parti permette sempre operazioni quali l’invio/ricezione di SMS e
        chiamate, lo storage di files, l’utilizzo della posizione geografica.

    -   Per impedire alle applicazioni di effettuare operazioni non permesse,
        vengono utilizzati gli strati più alti del controllo (APF, DAC). Questo
        è un brutto esempio di defense in-depth, infatti lo strato superiore è
        più restrittivo dello strato inferiore.

    -   L’obiettivo della tesi è quello di partizionare la policy corrente di
        Android in modo da poter avere un mapping tra tipi SELinux e permessi
        ad alto livello più coeso.

    -   Vi sono due strade da seguire per poter ottenere questo risultato:

        -   *Whitebox*: Studio della policy SELinux per suddividere le varie
            parti

        -   Blackbox: Utilizzo di metodologie di Machine Learning per
            individuare parti di policy utilizzate solo da alcuni permessi
