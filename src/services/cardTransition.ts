import { fly } from "svelte/transition"
import { writable, get } from "svelte/store"

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
const cardTransition = {
  subscribe,
  set(direction: Direction) {
    if (!transitions[direction]) {
      throw new Error("invalid direction")
    }
    set(transitions[direction])
  },
}
export default cardTransition
export function cardOut(node: Element, config: object) {
  return get(cardTransition).out(node, config)
}
export function cardIn(node: Element, config: object) {
  return get(cardTransition).in(node, config)
}