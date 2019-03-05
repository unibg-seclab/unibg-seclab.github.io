---
title: Netcoin
category: sweng
layout: sidebar-left
sidebar: sidebars/tesi.html
published: true
---

# Netcoin

----

Le cryptovalute come Bitcoin ed Ethereum sono ormai all’ordine del giorno,
quindi anche UniBG-Seclab vuole entrare in questo mondo coniando la propria
valuta.  Ovviamente non ci basta creare una moneta basata su Ethereum come
descritto in questa guida.

Bitcoin può essere visto come una moneta che premia chi immette potenza di
calcolo nel sistema distribuito che serve a rafforzare la sicurezza del sistema
stesso. Noi vogliamo sfruttare l’idea di proof-of-work per creare una moneta
basata sulla condivisione di connessioni di rete.  Due fenomeni sono infatti in
rapida crescita: il primo è l’incremento della velocità delle connessioni
domestiche, il secondo l’utilizzo di VPN per avere indirizzi IP di determinate
località del mondo (erano molto utilizzate ad esempio per vedere Netflix con
indirizzi IP americani prima che Netflix arrivasse in Italia).

L’idea di Netcoin è quella di creare una rete VPN distribuita, dove l’utente
Alice che condivide la propria connessione è ricompensata con una criptovaluta
pagata dall’utente Bob che utilizza la connessione di Alice come punto di uscita
della VPN per poter navigare con l’indirizzo IP di Alice, e quindi superare
problemi di censura o di blocco dei contenuti.


----

### PREREQUISITI

* Passione per lo studio dei sistemi distribuiti

* Comprensione del funzionamento di:

  * [Bitcoin](https://www.weusecoins.com/en/questions/) e proof-of-work

  * [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table)

  * Esperienza di utilizzo di OpenVPN

  * [Consigliato] Esperienza di Network Programming e crittografia


----

### PROGETTI DI TESI

* ~~**_[Magistrale]_** Creazione di un sistema distribuito basato su DHT che
  permetta di utilizzare altri nodi della rete per poter navigare sulla base del
  paese di navigazione richiesto (la rete verrà poi simulata con nodi fisici o
  con delle macchine virtuali). Integrazione con un sistema di proof-of-work che
  permetta la verifica ed il contestuale pagamento in Netcoins.~~

----

_**Progetto Bonus**: se hai letto la guida sul creare la proprio cryptocurrency
con Ethereum, sei rimasto folgorato dall’idea degli smart contracts e hai una
idea rivoluzionaria su come utilizzarli, vieni a parlarci in ufficio._
