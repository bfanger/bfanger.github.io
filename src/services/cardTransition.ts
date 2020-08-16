import { fly } from "svelte/transition"
import { writable } from "svelte/store"

const transitions = {
  left: {
    in: (node: Element, config: object) => fly(node, { x: 100, delay: 50, ...config }),
    out: (node: Element, config: object) => fly(node, { x: -100, ...config }),
  },
  right: {
    in: (node: Element, config: object) => fly(node, { x: -100, delay: 50, ...config }),
    out: (node: Element, config: object) => fly(node, { x: 100, ...config }),
  },
}
type Direction = keyof typeof transitions

const { set, subscribe } = writable(transitions.left)
export default {
  subscribe,
  set(direction: Direction) {
    if (!transitions[direction]) {
      throw new Error("invalid direction")
    }
    set(transitions[direction])
  },
}
