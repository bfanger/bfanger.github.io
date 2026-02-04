---
title: Buckaroo
employer: hotelbooker
released: "2008"
image: buckaroo.png
alt: Deze website
---

HotelCadeau uitgebreid met online betalingsmogelijkheden, waaronder iDEAL.
Met name iDEAL is "vervelend" omdat op het moment van bestellen de betaalstatus onbekend is.
Zodra de bezoeker naar de website van de bank gaat, krijgt hij na betaling het volgende scherm te zien: "Betaling voltooid, ga terug naar de webpagina." Als de bezoeker dan het venster sluit, wordt de success_url nooit bezocht. Daarom hebben we besloten de bestelling in de "half af" toestand op te slaan in de database vóór het betalen.
Vervolgens wordt periodiek de betaalstatus opgevraagd aan de payment provider.
Zodra de betaling succesvol blijkt, wordt de bestelling afgerond en volgt de normale afhandeling.
