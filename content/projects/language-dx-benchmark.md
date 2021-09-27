---
title: Language DX Benchmark
employer: open source
tags:
  - benchmark
  - javascript
  - typescript
  - golang
  - rustlang
  - csharp
  - dotnet
image: language-dx-benchmark.png
alt: Vrumona Bonustool
released: "2021-08-02"
---

Vanwege een frustrerend trage development cyclus van een op [Umbraco](https://umbraco.com/) gebaseerde website heb ik een [language dx benchmark](https://github.com/bfanger/language-dx-benchmark) geschreven die diverse programeertalen met elkaar vergelijkt.

Deze regels zijn simpel: Zet een json string om naar een object, lees twee waarden uit het object (1 en 2), tel deze bij elkaar op en toon het resultaat (3).

Dit is een eenvoudige taak, maar ik test niet hoe vaak per seconde je deze operatie per seconde kan uitvoeren, de DX benchmark test hoelang het duurt voordat je het resultaat van een code (aanpassing) kan zien.
(DX = Developer Experience)

Deze cijfers bevestigd waarom ik onder andere Javascript, [PHP](https://php.net) & [Go](https://golang.org/) fijn vind werken en [dotnet](https://docs.microsoft.com/nl-nl/dotnet/) juist frustrerend.
En ook waarom ik typescript pas sinds [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
kan aanraden.
