---
title: Virtuele Poppenkast
tags:
  - three.js
  - r3f
  - ai

image: poppenkast.png
alt: Poppenkast 3D
released: "2026-02-23"
---

Op [poppenkast.bfanger.nl](https://poppenkast.bfanger.nl) kun met je handen voor de webcam een sokpop besturen.

Dit leuke hobbyproject heb ik gebruikt om me te verdiepen in het gebruik van AI. Maar in plaats van dat de AI een creatieve activiteit vervangt, is het juist aan de bezoeker om met zijn eigen creativiteit een verhaaltje te bedenken of na te spelen.

Het idee ontstond na het bekijken van de [Google WebAI Talk](https://youtu.be/HAjotVloAvI?si=i8qlXh0lmOj0WN4l&t=641), waarin de [MediaPipe Hand Landmarker task](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker) werd gedemonstreerd.

Qua techniek wordt er gebruikgemaakt van [Three.js](https://threejs.org/) via [r3f](https://r3f.docs.pmnd.rs/) (React-Three-Fiber), wat in combinatie met [Theatre.js Studio](https://www.theatrejs.com/) een fijne develop en design omgeving geeft.
Het 3D modelleren, de retopologie en rigging heb ik in [Blender](https://blender.org/) gedaan, met behulp van een sculpt die ik via een image-to-3D AI-model met [ComfyUI](https://www.comfy.org/) had gegenereerd.
