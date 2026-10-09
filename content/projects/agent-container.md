---
title: Agent Container
tags:
  - llama
  - ai
  - pi-agent
  - opencode
  - claud-code
  - docker
image: agent-container.png
alt: Agent Container
released: "2026-06"
---

[Agent-Container](https://github.com/bfanger/agent-container) is een [Docker](https://www.docker.com/) container waarin een AI-coding agent beperkt toegang heeft tot je systeem, hierdoor kan de agent in de "yolo"-modus draaien. De agent heeft immers alleen toegang tot de bestanden waar je hem toegang toe hebt gegeven. De AI heeft wel internettoegang, dus nog steeds opletten met persoonsgegevens, secrets in .env, enzovoorts.
Ook is er de nodige tooling voorgeïnstalleerd, zodat de LLM (en ik) deze direct kunnen gebruiken.

Daarnaast bevat deze repo de llama-configuratie waarmee ik lokaal diverse AI modellen draai op mijn NVIDIA powered PC.  
Als harnas vind ik [Pi](https://pi.dev) fijn werken en mijn favoriete model is [Qwen 27b](https://qwen.ai/blog?id=qwen3.6-27b).
