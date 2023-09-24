if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=G-LX0P9XGG72`;
  document.head.appendChild(s);

  gtm(["js", new Date()]);
  gtm(["config", "G-LX0P9XGG72"]);
}

export default function gtm(data) {
  window.dataLayer.push(data);
}
