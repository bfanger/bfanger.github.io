import { browser } from "$app/environment";

const screenSize = new (class {
  width = $state(1);
  height = $state(1);
})();
export default screenSize;

if (browser) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "0";
  div.style.height = "100svh";
  div.style.visibility = "hidden";
  document.body.appendChild(div);

  function sync() {
    screenSize.width = Math.round(window.innerWidth);
    screenSize.height = Math.round(div.getBoundingClientRect().height);
  }
  sync();
  window.addEventListener("resize", sync);
}
