---
title: "Open Policy Agent: esplorazione e sviluppo di policy per cluster Kubernetes"

extra:
  category: Security
---

# Open Policy Agent: esplorazione e sviluppo di policy per cluster Kubernetes

---

[Open Policy Agent (OPA)](https://www.openpolicyagent.org/) è un framework e
general-purpose policy-engine che consente di definire delle policy per gestire
il deployment e l'interazione tra i componenti di un ambiente Cloud (e.g., Pods
in Kubernetes).

OPA fornice una serie di tool e un linguaggio per la definizione di policy
([Rego](https://www.openpolicyagent.org/docs/latest/#rego)) che permette,
ad esempio, di definire regole per *user-level access authorization* e
configurazione dell'infrastruttura Cloud.

In ambito cloud, considerando in particolare Kubernetes come orchestrator di
container, OPA è implementato come un [Kubernetes Admission Controller](https://
kubernetes.io/docs/reference/access-authn-authz/admission-controllers/) mettendo
a disposizione il framework [Gatekeeper](https://open-policy-agent.github.io/
gatekeeper/website/docs/).

![opa](opa.png)

OPA è facilmente integrabile con molti servizi e fornisce un modo centralizzato
per gestire policy tra molte applicazioni e ambienti di sviluppo/deployment.

---

### PREREQUISITI

- [Consigliato] Aver familiarità con un orchestrator di container (e.g.,
  [Kubernetes](https://kubernetes.io/it/docs/concepts/overview/what-is-
  kubernetes/))
- [Consigliato] Aver familiarità con i container (e.g., [Docker](https://www.docker.com/))
- [Consigliato] Aver familiarità nello sviluppo di applicazioni Cloud
- [Obbligatorio] Aver familiarità con ambienti Unix

---

### MATERIALE

- [OPA Gatekeeper: Policy and Governance for Kubernetes](https://kubernetes.io/blog/2019/08/06/opa-gatekeeper-policy-and-governance-for-kubernetes/)
- [Github OPA Gatekeeper](https://github.com/open-policy-agent/gatekeeper)
- [OPA: Get started](https://www.openpolicyagent.org/docs/v0.11.0/get-started/)

---

### PROGETTI DI TESI

- ~~**[Triennale]** Sviluppare una applicazione Cloud che utilizzi Kubernetes come
  ambiente di deployment e che faccia utilizzo di Open Policy Agent per definire
  delle policy di configurazione/autorizzazione. La tesi dovrà mostrare quali sono
  i vantaggi e svantaggi di OPA e come è stato utilizzato nel progetto scelto.~~
  - ~~**[Magistrale]** Il lavoro deve comprendere oltre che una parte di utilizzo
    di Gatekeeper e dei template che sono a disposizione anche una parte di
    implementazione di policy OPA utilizzando il linguaggio Rego. Il progetto deve
    essere corredato di una estensiva valutazione sperimentale.~~
