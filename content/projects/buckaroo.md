---
title: Buckaroo
employer: hotelbooker
released: "2008"
image: buckaroo.png
alt: Deze website
---

HotelCadeau uitgebreidt met online betalingsmogelijkheden, waaronder iDEAL.
Met name iDEAL is "vervelend" omdat op het moment van bestellen de betaalstatus onbekend is.
Zodra de bezoeker naar de de website van de bank gaat, krijgt hij na betaling het volgende scherm te zien: "Betaling voltooid, Ga terug naar de webpagina" Als de bezoeker dan het venster sluit, wordt de success_url nooit bezocht. Daarom hebben we besloten de bestelling in de "half af" toestand op te slaan in de database vóór het betalen.
Vervolgens wordt periodiek betaalstatus opgevraagd aan de payment provider.
Zodra de betaling succesvol blijkt, wordt de de bestelling afgerond en volgt de normale afhandeling.
