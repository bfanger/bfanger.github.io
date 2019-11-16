import * as sapper from "@sapper/app";
function start() {
  sapper.start({ target: document.querySelector("svelte-app") });
}
if (location.pathname !== "/" || window.introEnded === true) {
  import("./components/Avatar.svelte")
  start();
} else {
  // Wait for intro to complete
  window.introEnded = () => {
    start();
    window.introEnded = true;
  };
}
