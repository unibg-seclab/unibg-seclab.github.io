---
layout: default
title: People
---

{% include person.html
   name="Stefano Paraboschi"
   image="/assets/people/parabosc.jpg"
   website="https://cs.unibg.it/parabosc"
   description="Focus on several areas in computer science: information systems and database technology (specifically on active rules, view management, data warehouses, workflow management systems), Web technology (data intensive Web sites, XML) and information security (security for databases, access control for XML and Web services, secure reputation in P2P networks, data outsourcing, privacy)." %}

{% include person.html
   name="Dario Facchinetti"
   image="/assets/people/dario.jpg"
   website="https://dariofad.github.io/"
   description="Dario Facchinetti is a post-doctoral researcher with
   Università degli Studi di Bergamo. He likes to spend time inside
   the Emacs ecosystem, programming and learning about security. He is
   interested in operating systems (Linux, Android), programming
   languages and data structures, backend programming, and applied
   cryptography." %}

{% include person.html
   name="Matthew Rossi"
   image="/assets/people/matthew.jpg"
   description="Matthew Rossi is a PhD student at Università degli Studi di Bergamo. His work
   focuses on mobile systems security, policy management and privacy in data market scenarios.
   He loves to solve problems and engage with projects that require him to learn new things." 
    website="https://matthewrossi.github.io/"
%}

{% include person.html
  name="Gianluca Oldani"
  image="/assets/people/gianluca.jpg"
  description="Gianluca Oldani is a PhD student at Università degli Studi di Bergamo since October 2020. The main focuses of his work are distributed/decentralized system, policy management and privacy in data market scenarios. He enjoys experimenting various web frameworks and solving competitive programming problems. His non-work interests are videogames and role-playing games." 
  website="https://trolloldem.github.io/"
%}
  
{% include person.html
  name="Marco Abbadini"
  image="/assets/people/marco.jpg"
  description="Marco Abbadini is a PhD student at Università degli Studi di Bergamo since October 2021. He's interested in operating systems security, cryptography and privacy. He likes programming and learning new things." 
  website="https://cs.unibg.it/abbadini"
%}

{% include person.html
   name="Michele Beretta"
   image="/assets/people/michele.jpg"
   website="https://berettamichele.com" %}

### Former members

{% include person.html
   name="Enrico Bacis"
   image="/assets/people/bacis.jpg"
   website="https://enricobacis.com"
   description="Enrico Bacis is a former post-doctoral researcher with Università degli Studi di Bergamo. His work focuses on computer security, mostly investigating the integration of security features in ( mobile | cloud | database ) systems, policy management and privacy of outsourced data. He now works as a Research Software Engineer with Google Zurich in the Applied Privacy Research team. His non-work interests range widely, from programming languages, to security CTFs, to playing drums. He loves to solve problems, learn new things and discuss them with interesting people." %}

{% include person.html
   name="Marco Rosa"
   image="/assets/people/rosa.jpg"
   website="https://cs.unibg.it/rosa"
   description="Marco Rosa has been a researcher with Università degli Studi di Bergamo since September 2015 and a PhD student since October 2016. His research interests focus on cloud security, mobile security (especially Android malwares and system security policies), and Python programming. From July 2018 to December 2018, he spent 5 months at SAP Labs France where he contributed to the implementation of a policy model regulating the usage of datasets in machine learning operations." %}

{% include person.html
   name="Simone Mutti"
   image="/assets/people/mutti.jpg"
   website="https://cs.unibg.it/mutti"
   description="Simone Mutti is a former post-doctoral researcher at Università degli Studi di Bergamo. His research interests are in the area of OS security, privacy, and data management, with particular consideration of access control in emerging scenario. From August 2014 to November 2014, he spent 3 months as a Visiting PhD in the Computer Security Group at University of California - Santa Barbara, under the supervision of professors Christopher Kruegel and Giovanni Vigna where he contributed to the implementation of a new infrastructure for the detection of Android malware." %}

### Alumni

<!-- Il codice da qui ordina automaticamente i nomi -->
<!-- Basta aggiungere il nome alla fine di tutti, SEPARATO CON ', ' -->

{% capture _alumni %}
Abbadini Marco, Adobati Marco, Allegri Riccardo, Arrigoni Marco,
Balduzzi Giorgio, Balicco Matteo, Beretta Michele, Bernasconi Davide,
Bianchetti Andrea, Bikhtancer Amine, Boffelli Jacopo, Filippo Bordogna,
Bottarelli Davide, Bravo Irene, Brembilla Andrea, Brembilla Luca,
Caglioni Brian, Calomeni Luca, Carne Federico, Carminati Ivo, Carrara Paolo,
Cattaneo Andrea, Cattaneo Stefano, Cavagna Stefano, Centurelli Valentina,
Cereda Marco, Cesani Davide, Ciocca Simone, Colombi Simone, Colombo Stefano,
Conti Lorenzo, Copler Alessandro, Coretti Michele, Cosseddu Antonio,
Dentella Michele, Ferri Samuele, Fioretti Luca, Flaccadori Gianluca,
Galiani Andrea, Gamba Davide, Gambarara Alberto, Ghisleni Stefano,
Ghislotti Luca, Giannattasio Stefano, Giovanelli Michele, Gotti Kevin,
Gozzi Laura, Gregis Daniele, Inglese Luca, Jurca Sergiu Valentin,
Lazzari Filippo, Lenuzza Benedetta, Locatelli Michele, Locatelli Nicholas,
Locatelli Sara, Lorenzi Luca, Maffeis Isaac, Maffioletti Gianluca,
Mandalari Fabio, Mariani Giada, Moraschini Alessio, Nava Giovanni,
Opreni Simone, Paganessi Andrea, Palazzi Fabio, Paramento Umberto,
Patelli Andrea, Paris Gabriele, Pedemonti Enrico, Perico Emanuele,
Piazzi Simona, Pelliccioli Diego, Previtali Andrea, Ravasio Daniele,
Rebussi Andrea, Revrena Davide, Rinaldi Daniel, Riva Mauro, Rota Michele,
Sardi Dario, Sangregorio Fabio, Strazzante Francesco, Stucchi Matteo,
Tasca Leonardo, Toure Pape Alpha, Vimercati Davide, Viganò Gianluca,
Villa Stefano, Zanchi Michele, Zambelli Matteo, Zraiba Youssef,
Bommarito Jonathan, Daidone Giuseppe, Imberti Federico
{% endcapture %}
{% assign alumni = _alumni | normalize_whitespace | split: ', ' | sort %}

<p>
We would also like to thank all the alumni who collaborated to our
projects. A special mention to:
{% for a in alumni %}
   {% if forloop.last %}
      and {{ a }}.
   {% else %}
      {{ a }},
   {% endif %}
{% endfor %}
</p>
