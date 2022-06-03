---
title: eslint-plugin-only-warn
employer: open source
released: 2016-10
image: eslint.png
alt: eslint-plugin-only-warn
tags:
  - eslint
  - vscode
---

In mijn optiek zet je [ESLint](https://eslint.org/) regels aan (en dan een houd je je eraan) of je zet de regel uit.  
(En soms ben je het eens met de regel in het algemeen, maar heb je een uitzonderlijke situatie en dan plaats je een ignore comment)

Daarom zie ik het nut niet in om voor elke regel te bepalen of het een errors of een warning is.  
De [eslint-plugin-only-warn](https://www.npmjs.com/package/eslint-plugin-only-warn) is een plugin voor die alle linting errors omgezet naar warnings.

ESLint "fouten" zijn over het algemeen schoonheidsfoutjes en door deze plugin kun je een bestaande eslint config gebruiken, maar zijn de kringeljes in vscode de "juiste" kleur en is rood voorbehouden voor de code die echt stuk is.
