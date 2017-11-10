import "./Card.scss";
const goldenRatio = 1.61803398875;
const goldenFactor = goldenRatio / (goldenRatio + 1);

export default class Card extends HTMLElement {
  constructor() {
    super();
    this.alignHorizon = this.alignHorizon.bind(this);
  }
  connectedCallback() {
    if (this.getAttribute("align") === "horizon") {
      window.addEventListener("resize", this.alignHorizon);
      window.addEventListener("load", this.alignHorizon);
      setImmediate(() => {
        for (const img of this.querySelectorAll("img")) {
          img.addEventListener("load", this.alignHorizon);
        }
        this.alignHorizon();
      });
    }
  }
  alignHorizon() {
    const bounds = this.getBoundingClientRect();
    const horizon = window.innerHeight - window.innerHeight * goldenFactor;
    const top = Math.round(horizon - bounds.height / 2);
    const left = Math.round(window.innerWidth / 2 - bounds.width / 2) - 10;
    if (top > 10 && horizon + bounds.height / 2 + 10 < window.innerHeight) {
      this.style.position = "absolute";
      this.style.top = top + "px";
      this.style.left = left + "px";
    } else {
      this.style.position = "static";
      this.style.top = 0;
    }
  }
}
customElements.define("bf-card", Card);
