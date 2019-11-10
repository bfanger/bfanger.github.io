import * as sapper from "@sapper/app";
function start() {
  sapper.start({ target: document.querySelector("svelte-app") });
}
if (location.pathname !== "/" || window.introEnded === true) {
  start();
} else {
  // Wait for intro to complete
  window.introEnded = () => {
    start();
    window.introEnded = true;
  };
}
