---
title: "DockerPolicyModules: Mandatory Access Control for Docker Containers"
taxonomies:
  authors:
    - Enrico Bacis
    - Simone Mutti
    - Steven Capelli
    - Stefano Paraboschi
  publication-year:
    - 2015
extra:
  csunibg: 2015/CNS/Docker
  venue: Proceedings of the 3rd IEEE Conference on Communications and Network Security (CNS)
  where: Florence, Italy
  when: September 28-30, 2015
  note: <a href="https://cs.unibg.it/seclab-papers/2015/CNS/Docker_poster.pdf">Poster</a>
---

The wide adoption of Docker and the ability to
retrieve images from different sources impose strict security
constraints. Docker leverages Linux kernel security facilities,
such as namespaces, cgroups and Mandatory Access Control, to
guarantee an effective isolation of containers. In order to increase
Docker security and flexibility, we propose an extension to the
Dockerfile format to let image maintainers ship a specific SELinux
policy for the processes that run in a Docker image, enhancing
the security of containers.
