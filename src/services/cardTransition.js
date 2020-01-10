import { fly } from "svelte/transition"
import { writable } from "svelte/store"

const transitions = {
  left: {
    in: node => fly(node, { x: 100, delay: 50 }),
    out: node => fly(node, { x: -100 })
  },
  right: {
    in: node => fly(node, { x: -100, delay: 50 }),
    out: node => fly(node, { x: 100 })
  }
}
const { set, subscribe } = writable(transitions.left)
export default {
  subscribe,
  set(direction) {
    if (!transitions[direction]) {
      throw new Error("invalid direction")
    }
    set(transitions[direction])
  }
}
