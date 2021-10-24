---
title: Svelte SSR go
employer: open source
tags:
  - svelte
  - golang
  - ssr
  - esbuild
image: svelte-ssr-go.png
alt: Svelte SSR go
released: "2021-07-24"
---

[Svelte SSR Go](https://github.com/bfanger/svelte-ssr-go) is een proof-of-concept om [Svelte](https://svelte.dev/) componenten serverside te renderen (SSR) via een andere servertaal dan node of deno.

<!-- De meeste programmeertalen (en zelfs [databases](https://plv8.github.io/)) hebben wel een manier om een javascript engine zoals [v8](https://v8.dev/) te gebruiken. -->

Voor het poc heb ik [Go](https://golang.org/) als servertaal gebruikt, deze heeft [v8go](https://github.com/rogchap/v8go) als embedded javascript runtime.
Voor het omzetten van de svelte bestanden wordt [esbuild](https://esbuild.github.io/) met de [esbuild-svelte](https://github.com/EMH333/esbuild-svelte) plugin gebruikt.
Met deze opzet kan je van svelte component bundelen naar een javascript en css bestand.

Het was een interessant en geslaagd experiment, maar zou adviseren waar mogelijk [SvelteKit](https://kit.svelte.dev/) op een node server te draaien.

<!-- Het werkt, inclusief livereload, maar maast dat je geen browers api's kunt gebruiken (window is undefined) heb je ook geen toegang tot [Node.js](https://nodejs.org/en/) api's. -->

<!-- Gerelateerd project: [bfanger/enhanced-v8go](https://github.com/bfanger/enhanced-v8go) -->
