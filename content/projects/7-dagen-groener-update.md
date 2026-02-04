---
title: NPO 7 dagen groener - Update
tags:
  - ionic
  - angular
  - rxjs
  - greensock
  - ios
  - android
  - cordova
type: hybrid app
employer: noprotocol
released: 2016-09
image: 7-dagen-groener-update.png
---

Een update van de bestaande NPO 7 dagen groener iOS & Android app.

Nieuwe features:

- Challenges zijn ingedeeld in 3 moeilijkheidsgraden
- Het aantal categorieën is teruggebracht van 6 naar 3
- Challenges per week zijn beperkt tot 1 categorie
- Je besparing wordt uitgedrukt in een tot de verbeelding sprekende eenheid, x vuilniszakken afval, 1 zwembad water, enz.

Tijdens deze update heb ik diverse functionaliteit herschreven naar [RxJS](https://reactivex.io/).
Hierdoor heb ik de data (die afhankelijk is van de voortgang van de week) kunnen modelleren als streams, waardoor het eenvoudiger werd om in de componenten de juiste up-to-date waarde te tonen.
