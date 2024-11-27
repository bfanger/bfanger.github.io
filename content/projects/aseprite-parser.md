---
title: Aseprite parser
type: library
tags:
  - aseprite
  - excalibur.js
image: aseprite-parser.png
released: 2024-06
---

Mijn zoon en ik vinden het leuk om een eigen games te maken, Charlie bedenkt het concept en maakt de art en levels.
Tenzij we [PICO-8](https://www.lexaloffle.com/pico-8.php) gebruiken, is het altijd tijdrovend om deze assets in een game te krijgen.

Een fijne grafische editor is [https://www.aseprite.org/](Aseprite), maar de json export werkt wel voor animaties, maar niet voor levels.

Dus heb ik een parser geschreven die het binaire Aseprite bestandformaat kan lezen, hierdoor heb ik toegang tot alle data.
Daarnaast ook een renderer die deze data weer om kan zetten naar [Excalibur.js](https://excaliburjs.com/) game objects.

Hierdoor kun je in Aseprite een bestand bewerken, en zodra je deze opslaat, dan livereload de game met de nieuwe art en levels 👌.
