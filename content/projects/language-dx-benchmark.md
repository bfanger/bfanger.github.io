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

Vanwege een frustrerend trage development cyclus van een op [Umbraco](https://umbraco.com/) gebaseerde website heb ik een [Language DX Benchmark](https://github.com/bfanger/language-dx-benchmark) geschreven die diverse programmeertalen met elkaar vergelijkt.

De regels zijn simpel: Zet een JSON-string om naar een object, lees twee waarden uit het object (1 en 2), tel deze bij elkaar op en toon het resultaat (3).

Dit is een eenvoudige taak, maar in plaats van te testen hoe vaak per seconde je deze operatie kan uitvoeren, test deze DX benchmark hoelang het duurt voordat je het resultaat van een codeaanpassing kunt zien.
(DX = Developer Experience)

Deze cijfers bevestigen waarom ik onder andere JavaScript, [PHP](https://php.net) en [Go](https://golang.org/) fijn vind werken en [dotnet](https://docs.microsoft.com/nl-nl/dotnet/) juist frustrerend.
En ook waarom ik TypeScript pas sinds [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
kan aanraden.
