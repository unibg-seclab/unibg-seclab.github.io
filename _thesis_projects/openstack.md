---
title: Openstack Swift
category: security
layout: sidebar-left
published: true
---

I lavori su [OpenStack](https://www.openstack.org) rappresentano parte del
lavoro del Seclab nell’ambito del progetto europeo
[EscudoCloud](http://www.escudocloud.eu). Openstack è l’infrastruttura di
riferimento per cloud private e [Swift](http://swift.openstack.org) è il suo
object storage.

La proposta UniBG per la security di OpenStack Swift, denominata **EncSwift**,
prevedeva di proteggere risorse salvate su Swift da un server
“honest-but-curious”, ovvero che non ha un comportamento malevolo, ma che non
rispetta la privacy dei dati che contiene.

EncSwift prevedeva un duplice contributo nell’ambito della security in cloud:

-   Proteggere la confidenzialità dei dati con uno stato di cifratura
    client-side prima di caricarli su un server. Dato che i file sono condivisi
    tra più utenti è stato anche progettato un sistema di key management per lo
    scambio di chiavi in modo sicuro.

-   Nel caso di update della policy con revoca dell’accesso a uno o più utenti,
    gestire la revoca con un secondo strato di cifratura applicato server-side,
    la cui chiave è nota solo al server e agli utenti che possono accedere al
    file dopo l’update della policy.


#### PREREQUISITI

-   OpenStack è scritto in Python, quindi è necessaria la conoscenza del
    linguaggio Python. Un paio di siti utili per impararlo sono:

    -   [https://learnxinyminutes.com/docs/python/](https://learnxinyminutes.com/docs/python/)

    -   [https://learnpythonthehardway.org/book/](https://learnpythonthehardway.org/book/)

    -   [https://www.tutorialspoint.com/python/](https://www.tutorialspoint.com/python/)

-   I lavori su Swift richiedono un “tempo di setup”, in quanto OpenStack è un
    sistema molto esteso, e quindi abbastanza complesso all’inizio, se non si
    hanno esperienze su questo dominio.

    -   Vagrant per la gestione di macchine virtuali:
        [https://www.vagrantup.com](https://www.vagrantup.com)

    -   Devstack per installare OpenStack:
        [http://docs.openstack.org/developer/devstack/](http://docs.openstack.org/developer/devstack/)

    -   Il codice al seguente repository permette di avviare una macchina
        virtuale con una istanza di OpenStack funzionante.
        [https://github.com/unibg-seclab/devstack-vagrant](https://github.com/unibg-seclab/devstack-vagrant)
        Si consiglia caldamente di seguire i passi elencati in questo
        repository per provare OpenStack con mano.

-   Comprensione del funzionamento dei middleware di OpenStack Swift

    -   [http://docs.openstack.org/developer/swift/development\_middleware.html](http://docs.openstack.org/developer/swift/development_middleware.html)

    -   Joe Arnold - OpenStack Swift: Using, Administering, and Developing -
        O’Reilly \[Capitolo 8: Developing Swift Middleware\] (**consigliato**)


#### MATERIALE

-   [Joe Arnold - OpenStack Swift: Using, Administering, and
    Developing](http://shop.oreilly.com/product/0636920033288.do) - O’Reilly

-   Deliverable di EncSwift per il progetto europeo EscudoCloud:
    [http://www.escudocloud.eu/public-del/D2.2.pdf](http://www.escudocloud.eu/public-del/D2.2.pdf)

-   Paper derivato da EncSwift:
    [http://spdp.di.unimi.it/papers/bdfgprss-wiscs2016.pdf](http://spdp.di.unimi.it/papers/bdfgprss-wiscs2016.pdf)

-   Paper sull’access control in cloud, seguendo un approccio simile a quello
    di EncSwift:
    [http://spdp.di.unimi.it/papers/bdfprs-securecomm2016.pdf](http://spdp.di.unimi.it/papers/bdfprs-securecomm2016.pdf)

-   Codice del nostro Swift customizzato con la modalità on-the-fly (vedi
    papers):
    [https://github.com/unibg-seclab/swift/tree/onthefly\_overenc](https://github.com/unibg-seclab/swift/tree/onthefly_overenc)
    (attenzione al branch!)

-   Codice EncSwift per EscudoCloud:
    [https://github.com/escudocloud/encSwift](https://github.com/escudocloud/encSwift)


#### PROGETTI DI TESI

-   ~~***\[Triennale\]*** Costruire una soluzione dove anche i nomi degli
    oggetti vengono cifrati~~

-   ***\[Requisito aggiuntivo per tesi magistrale\]*** Integrazione con il
    codice di IBM per le cifrature server-side da usare nel middleware
    Over-Encryption:
    [http://specs.openstack.org/openstack/swift-specs/specs/in\_progress/at\_rest\_encryption.html](http://specs.openstack.org/openstack/swift-specs/specs/in_progress/at_rest_encryption.html)

-   ***\[Triennale\]*** Integrazione con l’infrastruttura cloud di British
    Telecom
