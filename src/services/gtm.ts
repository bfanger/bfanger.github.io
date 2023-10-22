if (typeof window !== "undefined") {
  const win = window as any;
  win.dataLayer = win.dataLayer || [];

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-LX0P9XGG72";
  document.head.appendChild(s);

  gtm(["js", new Date()]);
  gtm(["config", "G-LX0P9XGG72"]);
}
type GtmEvent =
  | {
      event: "VirtualPageview";
      virtualPageUrl: string;
      virtualPageTitle: string;
    }
  | [string, string | Date];
export default function gtm(data: GtmEvent) {
  (window as any).dataLayer.push(data);
}
