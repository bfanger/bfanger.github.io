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

[Multiplayer Dice Game](https://multiplayer-dice-game.herokuapp.com) ([github](https://github.com/bfanger/multiplayer-dice-game)) is een online multiplayer dobbel spel.

Voor het realtime multiplayer aspect van de game wordt [socket.io](https://socket.io/) gebruikt, om de livereload workflow te kunnen behouden worden de gespeelde spellen in [redis](https://redis.io/) opgeslagen en worden de zetten via pub/sub verstuurd naar de andere spelers.

Bijzonder is dat ipv events wordt de gehele gamestate verstuurd. de client vergelijkt deze state dan met eventuele vorige state en berekend welke events er waren.
