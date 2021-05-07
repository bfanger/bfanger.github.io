---
title: Focus Engine
employer: triple
released: 2020-10
image: focus-engine.png
alt: Focus Engine
tags:
  - math
  - 2d
  - netflix
---

Voor de besturing van SmartTV apps met de afstandsbediening hebben we voor mauna een Focus Engine geschreven.

De voorloper was [js-spatial-navigation](https://github.com/luke-chang/js-spatial-navigation), een library voor keyboard besturing, deze miste belangrijke features en voelde meer aan als een jQuery plugin.

De nieuwe focus engine is opgezet als een reeks herbruikbare [Svelte](https://svelte.dev/) componenten en verzorgt de focus automatisch voor zover dat kan. Waar nodig kun je het focus gedrag overschrijven of de elementen handmatig focus geven.

<!--
De engine werkt goed met DOM elementen, maar de api is zo opgezet dat ook webgl applicaties er gebruik van kunnen maken.
-->

Leuk feitje, ik heb tijdens het schrijven de [stelling van Pythagoras](https://nl.wikipedia.org/wiki/Stelling_van_Pythagoras) gebruikt.
