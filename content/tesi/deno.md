---
title: 'Deno: esplorazione del framework "secure by default"'

extra:
  unavailable: true
  category: Security
---

[Deno](https://deno.land/) è un runtime JavaScript nato
 con l'obiettivo di migliorare alcune delle mancanze 
presenti in [node.js](https://deno.land/) e, allo stesso tempo, 
offrire un ambiente più moderno ed efficiente. 

Deno si propone quindi come:
- 'secure by default': un applicativo creato tramite Deno di 
default non ha alcun accesso a file, rete, variabili d'ambiente. 
Tutti i permessi devono essere esplicitamente dati dal 
programmatore, oppure richiesti durante l'esecuzione del 
programma.
- con supporto nativo a TypeScript.
- con un ricco repertorio di tool a supporto dello sviluppatore.
- non necessita di un package manager 
(come ad esempio [npm](https://www.npmjs.com/) per node.js)
per la gestione di moduli di terze parti. 

Il sistema di permessi di Deno può essere quindi usato per 
componentizzare il codice anche dal punto di vista della 
security, rendendolo più robusto nel caso di bug o 
attacchi che sfruttano vulnerabilità all'interno del 
codice di terze parti.

L'applicativo può essere componentizzati in vari modi, tenendo in conto 
che:
- di default, i permessi dati all'avvio si estendono all'intera applicazione.
- i permessi valgono solo per il codice JavaScript, quindi sono esclusi dalla 
protezione eventuali binari eseguiti o codice scritto in altri linguaggi di 
programmazione.
- risulta possibile definire permessi più stretti per una determinata porzione 
di codice mediante il costrutto [Worker](https://deno.land/manual/runtime/workers).

----

### PREREQUISITI

* Buona conoscenza di JavaScript e familiarità con Deno e\o node.js

* Aver letto e compreso come funzionano i permessi all'interno di Deno

* Aver provato a scrivere un piccolo applicativo tramite Deno

----

### MATERIALE

* Documentazione di Deno:
  [https://deno.land/manual](https://deno.land/manual)

* Repository github di Deno:
  [https://github.com/denoland/deno](https://github.com/denoland/deno)

----

### PROGETTI DI TESI

* **_[Triennale]_** Creare un applicativo web in grado di sfruttare 
  le capacità di Deno, evidenziando eventuali vantaggi rispetto a node.js
  sia in termini di performance, che in termini di security.

* **_[Triennale]_** I bug non sono le uniche fonti di vulnerabilità 
  all'interno di un applicativo node.js. Oltre al trattamento non 
  corretto di input da parte dell'utente, una delle vulnerabilità 
  più diffuse negli applicativi node.js è la 
  [prototype pollution](https://learn.snyk.io/lessons/prototype-pollution/javascript/).
  L'obiettivo della tesi consiste nell'individuazione di alcune vulnerabilità presenti 
  in moduli o applicativi node.js e dimostrare come questi possano essere corretti in 
  eventuale porting in Deno.

* **_[Triennale]_** Esplorazione dei limiti relativi a Deno 
  in termini di security quando si [invocano binari esterni](https://deno.land/manual@v1.17.0/examples/subprocess) 
  a JavaScript o si esegue [codice scritto in altri linguaggi](https://deno.land/manual@v1.17.0/runtime/ffi_api) 
  di programmazione. Una volta comprese le motivazioni per cui 
  Deno non può estendere la sua protezione a questi casi, 
  individuare  applicativi o moduli di terze parti che utilizzino 
  queste funzionalità di Deno sulle 
  quali non è possibile applicare il controllo dei permessi ed 
  evidenziare le vulnerabilità che potrebbero essere sfruttate.
