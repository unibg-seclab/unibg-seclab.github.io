---
layout: default
title: UniBG Seclab
---

# UniBG Security Lab
--------------

<div class="row">
  <div class="col-xs-8 col-xs-offset-2 col-sm-offset-0 col-sm-4 col-xl-3">
    <div id="logo" class="vivus"></div>
  </div>
  <div class="col-xs-12 col-sm-8 col-xl-9 pull-right">
    <p><i>Unibg Security Lab</i> is the Computer Security Team at Università degli Studi di Bergamo.</p>
    <p>Its work focuses on several areas in computer science such as systems security (UNIX/Linux security), mobile security (especially Android security and malware analysis), information systems, database technology (data warehouses, workflow management systems), Web, emerging technologies and information security (security for databases, access control, secure reputation in P2P networks, data outsourcing and privacy).</p>
    <p>The team is often involved in european projects, and is currently working on ensuring proper protection of private/sensitive/confidential information in data market scenarios
    with the MOSAICrOWN project. The recent work on Android security allowed the team to obtain two Google Awards. Last but not least, some of the members usually take part in CTF competitions.</p>
    <br/>
    <p><i>We are always looking for smart, hardworking thesis students. If you are interested in computer security, come talk to us!</i></p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/vivus/latest/vivus.min.js"></script>
<script>
new Vivus('logo', {
    type: 'delayed',
    file: 'assets/images/logo.svg',
    duration: 80,
    animTimingFunction: Vivus.EASE,
    onReady: function () {
      $('#logo').css('position', 'relative');
      $('#logo svg').css('visibility', 'visible');
    }
  },

  function(obj) {
    obj.el.classList.add('finished');
  }
);
</script>

---

## Source Code

The source code of our open source projects is available at: <https://github.com/unibg-seclab/> .

Star the projects on GitHub to receive updates on future releases.

---

## Acknowledgements

<div class="row">
  <div class="col-xs-12 col-sm-8">
    <h3>Google Award</h3>
    <h4>Winter 2016</h4>
    <p>The APM project won a Google Award in Winter 2016 batch.</p>
  </div>
  <div class="col-xs-12 col-sm-4">
    <img class="img-responsive center-block" src="/assets/images/faculty_award.png" />
  </div>
</div>

<div class="row">
  <div class="col-xs-12 col-sm-8">
    <h3>Google Award</h3>
    <h4>Winter 2014</h4>
    <p>The SeSQLite project won a Google Award in the Winter 2014 batch.</p>
  </div>
  <div class="col-xs-12 col-sm-4">
    <img class="img-responsive center-block" src="/assets/images/faculty_award.png" />
  </div>
</div>
