import "core-js"
import "regenerator-runtime/runtime"
import * as sapper from "@sapper/app"

const win: any = window
function start() {
  sapper.start({ target: document.querySelector("svelte-app") })
}
if (location.pathname !== "/" || win.introEnded === true) {
  start()
} else {
  import("./components/AsyncAvatar")
  // Wait for intro to complete
  win.introEnded = () => {
    start()
    win.introEnded = true
  }
}
if (process.env.NODE_ENV === "production") {
  require("./services/gtm")
}
