---
title: Beurtbalkje
employer: open source
tags:
  - golang
  - npm
image: beurtbalkje.png
alt: Beurtbalkje
released: "2021-08-04"
---

Voor een project maakte ik gebruik van "dotnet watch", het duurt lang voordat de server na een code aanpassing weer gestart is (meerdere seconden).
De browser geeft in de tussentijd een "Connection refused" foutmelding.
Om deze foutmelding te voorkomen heb ik [beurtbalkje](https://www.npmjs.com/package/beurtbalkje) geschreven. Beurtbalkje een proxy server in [go](https://golang.org/).

De proxy geeft al het verkeer door, maar zodra de server wegvalt komen nieuwe verbindingen in een wachtrij \*1, en zodra de doelserver weer reageert worden deze verbindingen doorgelust.

Deze proxy heb ik ook nog gebruikt om vanuit een virtual machine guest een proxy op te zetten naar de host, hierdoor werkt localhost:8080 ook in de VM.

\*1: Door "Wachtrij" moest ik denken aan de lopende band bij de supermarkt en daar komt de naam vandaan.
