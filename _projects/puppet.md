---
title: Puppet configuratie
employer: noprotocol
tags:
- linux
- cloud
- rackspace
image: puppet.png
alt: Puppet
released: 2013-10
---

We maakten bij NoProtocol gebruik van [Opscode Chef](https://www.chef.io/) om de servers & sites te configureren.
Maar omdat deze problemen gaf bij "recente" 12.04 ubuntu (al ruim 1 jaar oud) versies zijn we naar alternatieven gaan kijken.
Na een kort experiment met OpenPanel zijn met [Puppetlabs Puppet](https://puppet.com/) gestart.

Het grote voordeel van puppet t.o.v. andere oplossingen is de declaratieve beschrijving in de puppet files (*.pp)
Hierdoor is het mogelijk om te bekijken wat puppet zal aanpassen voordat je de server daadwerkelijk aanpast.

Om het toevoegen van nieuwe sites te vereenvoudigen heb ik een wizard gemaakt die op basis van een paar vragen een een puppet file genereerd.
Voor chef was dat een cli tool, maar voor puppet heb ik de wizard als een angular webapp geschreven.  
