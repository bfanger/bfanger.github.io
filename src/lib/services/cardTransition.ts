import { fly } from "svelte/transition";
import { writable, get } from "svelte/store";

type Config = Record<string, unknown>;
const transitions = {
  left: {
    in: (node: Element, config: Config) =>
      fly(node, { x: 100, delay: 50, ...config }),
    out: (node: Element, config: Config) => fly(node, { x: -100, ...config }),
  },
  right: {
    in: (node: Element, config: Config) =>
      fly(node, { x: -100, delay: 50, ...config }),
    out: (node: Element, config: Config) => fly(node, { x: 100, ...config }),
  },
};
type Direction = keyof typeof transitions;

const { set, subscribe } = writable(transitions.left);
const cardTransition = {
  subscribe,
  set(direction: Direction): void {
    if (!transitions[direction]) {
      throw new Error("invalid direction");
    }
    set(transitions[direction]);
  },
};
export default cardTransition;
export function cardOut(node: Element, config: Config): any {
  return get(cardTransition).out(node, config);
}
export function cardIn(node: Element, config: Config): any {
  return get(cardTransition).in(node, config);
}
