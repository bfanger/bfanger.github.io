---
title: Hotelspecials v3
employer: hotelbooker
released: 2006-06
image: hotelspecials_v3.png
alt: HotelSpecials website versie 2
---

Ook deze keer kreeg de [Hotelspecials.nl](https://www.hotelspecials.nl) een facelift, maar dat spreekt eigenlijk voor zich.
De versienummers worden vaak bepaald door de look & feel van een applicatie.
Voor deze release is de zoekengine herschreven.
De oude "Zoek beschikbare hotels" engine was erg traag en veroorzaakte veel database-locks door het veelvuldig gebruik van "SELECT DISTINCT ..." Niet alleen werd de de engine een stuk sneller, het werd een stuk eenvoudiger om nieuwe zoekkriteria toe tevoegen.
Hierdoor werd het mogelijk om een drilldown meganisme in te bouwen.
Deze keer werd de backend met rust gelaten.
