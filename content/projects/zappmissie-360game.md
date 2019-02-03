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

[Zapp missie: 360° Game](http://360game.kro-ncrv.nl) is een spel van [zapp.nl](http://zapp.nl) waarin je in een kamer naar objecten moet zoeken, dit is een panorama/vr ervaring waarbij je behulp telefoon om je heen kunt kijken in de andere kamer. De panorama afbeelding wordt met webgl op een bol geprojecteerd en de camera wordt aangestuurd door de gyroscoop.
Om te afbeeldingen vanuit de [360fly](https://360fly.com/) camera om te zetten in equirectangular formaat, recht te zetten en de blinde hoek op te vullen maakten we gebruik van de [Hugin - Panorama photo stitcher](http://hugin.sourceforge.net/).
Voor de UI elementen worden dynamisch svg afbeeldingen gegeneerd met behulp van ReactJS, het was nog een hele uitdaging was om alle lijnen mooi strak binnen hele pixels te houden.
