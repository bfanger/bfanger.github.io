---
title: "Zapp missie: 360° Game"
employer: noprotocol
released: 2016-08
type: game
tags:
  - threejs
  - 3d
  - webgl
  - panorama
  - hugin
  - 360fly
  - svg
  - react
  - animations
image: zappmissie-360-game.png
---

Zapp missie: 360° Game is een spel van [zapp.nl](https://zapp.nl) waarin je in een kamer naar objecten moet zoeken. Dit is een panorama/vr-ervaring waarbij je met behulp van je telefoon om je heen kunt kijken in de andere kamer. De panorama-afbeelding wordt met WebGL op een bol geprojecteerd en de camera wordt aangestuurd door de gyroscoop.
Om de afbeeldingen vanuit de [360fly](https://360fly.com/) camera om te zetten in equirectangulair formaat, recht te zetten en de blinde hoek op te vullen, maakten we gebruik van de [Hugin - Panorama photo stitcher](http://hugin.sourceforge.net/).
Voor de UI-elementen worden dynamisch SVG-afbeeldingen gegenereerd met behulp van ReactJS. Het was nog een hele uitdaging om alle lijnen mooi strak binnen hele pixels te houden.
