---
title: Multiplayer Dice Game
employer: open source
tags:
  - redis
  - sveltekit
  - node
  - socket.io
image: dice-game.png
alt: Game
released: "2021-10-02"
---

[Multiplayer Dice Game](https://github.com/bfanger/multiplayer-dice-game) is een online multiplayer dobbelspel.

Voor het realtime multiplayer aspect van de game wordt [socket.io](https://socket.io/) gebruikt, en worden de gespeelde spellen in [redis](https://redis.io/) opgeslagen en worden de zetten via pub/sub verstuurd naar de andere spelers.

Bijzonder is dat in plaats van events de gehele gamestate wordt verstuurd. De client vergelijkt deze state dan met eventuele vorige state en berekent welke events er waren.
