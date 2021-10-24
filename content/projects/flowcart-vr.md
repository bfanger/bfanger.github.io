---
title: FlowCart VR
tags:
  - babylonjs
  - sveltekit
  - vite
  - blender
  - webgl
  - vr
image: flowcart-vr.png
alt: FlowCart VR
released: "2021-07-03"
---

Omdat ik en andere [Triple](https://www.wearetriple.com/) medewerkers nu beschikken over de [Oculus Quest 2](https://www.oculus.com/quest-2/) kreeg ik inspiratie voor dit VR experiment.

[FlowCart](https://flowcart.bfanger.nl/) is een grot met deuren waarin je een Flowchart letterlijk doorloopt in VR.
De kamer(s) waaruit deze grot bestaan zijn gemaakt in [Blender](http://blender.org/) en worden vervolgens ingeladen in de [babylon.js](https://www.babylonjs.com/)
webapp.

O.b.v. een diagram in JSON worden de kamers gegenereerd, pas zodra je een antwoord kiest wordt de volgende kamer gegenereerd, toegevoegd aan de scene en gaat de deur open.

<!--
In de oorspronkelijk visie zou je in een mijnwagentje zitten en met een hendel bepalen of je links of rechts zou gaan.
Voor de v1.0 heb ik gekozen om de ingebouwde teleportatie te gebruiken voor de navigatie door de grot.
-->

De webapp is geschreven met [SvelteKit](https://kit.svelte.dev/) en maakt daardoor gebruik van [vite](https://vitejs.dev/).
Het component reloading mechanisme kon ik gebruiken om ook de 3D componenten snel te ontwikkelen.
