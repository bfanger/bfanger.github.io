---
title: Agent Container
tags:
  - llama
  - ai
  - pi
  - docker
image: agent-container.png
alt: Agent Container
released: "2026-06"
---

Ik heb [agent-container](https://github.com/bfanger/agent-container) ingericht: een [Docker](https://www.docker.com/) container die een AI-coding agent in een sandbox draait, zodat je deze in de "yolo"-modus kunt gebruiken. Omdat de agent alleen toegang heeft tot waar je hem toegang toe geeft. De AI heeft wel internettoegang, dus nog steeds opletten met persoonsgegevens, secrets in .env, enzovoorts.
Ook is er de nodige tooling al voorgeïnstalleerd, zodat de AI (en ik) die direct kan gebruiken.

Verder bevat deze repo de llama-configuratie waarmee ik lokaal diverse AI modellen draai op mijn NVIDIA powered Gaming PC.  
Als harnas vind ik [Pi](https://pi.dev) fijn werken en mijn favoriete model is [Qwen 27b](https://qwen.ai/blog?id=qwen3.6-27b).
