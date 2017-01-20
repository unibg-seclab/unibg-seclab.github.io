---
title: Secure query optimization and distribution
category: security
layout: sidebar-left
published: true
---
L’ottimizzazione delle queries è un argomento di ricerca molto vasto e
complesso. Gli [ottimizzatori di
query](https://en.wikipedia.org/wiki/Query_optimization) per database sono
sistemi tanto affascinanti quanto complessi. In questo scenario si innesta la
rapida espansione di cloud pubbliche. Esistono sistemi per l’esecuzione di
query in ambienti distribuiti ed iniziano a nascere i primi sistemi per
l’esecuzione in ambienti multi-tenant (composti da diverse cloud).

Ogni cloud pubblica ha un costo e livello di affidabilità/sicurezza.  Secondo
alcune legislazioni ad esempio, non è possibile inviare dati sensibili verso
determinati paesi, altre invece pretendono che i dati siano cifrati prima di
essere inviati. L’idea di base di questo progetto consiste nel modificare un
ottimizzatore di queries in modo da tener conto di questi requisiti, e
ottimizzare il piano su più cloud in maniera da minimizzare il costo finale di
computazione. La modalità più semplice è utilizzare una ottimizzazione a due
fasi, quindi ottimizzare la query con un classico motore di ottimizzazione ed
in seguito aggiungere le informazioni sulla distribuzione. Tuttavia questo può
portare a piani di esecuzioni sub-ottimali, l’ottimo sta nel modificare
direttamente un ottimizzatore per tener conto delle informazioni sulla
sicurezza ed i costi associati. Uno degli ottimizzatori che può essere
utilizzato è
[ORCA](https://pivotal.io/big-data/white-paper/orca-a-modular-query-optimizer-architecture-for-big-data),
un ottimizzatore modulare per il database Greenplum.


#### PREREQUISITI
-   Esperienza con linguaggio di programmazione C / C++
-   Aver provato l’ottimizzatore di queries di PostgreSQL
-   e l’ottimizzatore a due fasi a cui si fa riferimento nella sezione
    Materiale.
-   *\[Consigliato\]* Esperienza di lavoro in sistemi complessi e distribuiti
-   *\[Consigliato\]* Esperienza di dialogo con le community dei progetti Open
    Source


#### MATERIALE

-   ORCA:
    [http://15721.courses.cs.cmu.edu/spring2016/papers/p337-soliman.pdf](http://15721.courses.cs.cmu.edu/spring2016/papers/p337-soliman.pdf)

-   Codice Sorgente ORCA Optimizer:
    [https://github.com/greenplum-db/gporca](https://github.com/greenplum-db/gporca)

-   Presentazione:
    [https://archive.fosdem.org/2016/schedule/event/hpc\_bigdata\_orca/](https://archive.fosdem.org/2016/schedule/event/hpc_bigdata_orca/)

-   Deep dive into Spark SQL’s Query Optimizer:
    [https://spark-summit.org/2016/events/deep-dive-into-catalyst-apache-spark-20s-optimizer/](https://spark-summit.org/2016/events/deep-dive-into-catalyst-apache-spark-20s-optimizer/)

-   Ottimizzatore bifase di query PostgreSQL:
    [https://github.com/enricobacis/pg-distopt](https://github.com/enricobacis/pg-distopt)


#### PROGETTI DI TESI

-   ***\[Magistrale\]*** Realizzazione di un ottimizzatore monofase di query
    distribuito che tenga conto dei requisiti di sicurezza descritti nel
    progetto.

-   ***\[Magistrale\]*** Effettiva distribuzione della query ottimizzata su una
    piattaforma di calcolo distribuito modificata ad hoc per poter eseguire
    parti di queries.
