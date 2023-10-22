import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

type InViewOptions =
  | Writable<boolean>
  | (IntersectionObserverInit & {
      store?: Writable<boolean>;
    });

/**
 * Svelte action to determine if an element is visible.
 * (Uses IntersectionObserver and accepts IntersectionObserver options like threshold & rootMargin)
 *
 * Usage:
 *
 * const intersecting = writable(false);
 *
 * <div use:inView={intersecting} on:inview-enter={onEnter} on:inview-leave={onLeave}>
 */
export default function inView(el: Element, options?: InViewOptions) {
  let intersecting = extractStore(options);
  let observer: IntersectionObserver;
  let unsubscribe: () => void;
  let skipOne = true;

  function attach(init: IntersectionObserverInit) {
    observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        intersecting.set(isIntersecting);
        skipOne = false;
      },
      {
        rootMargin: init.rootMargin,
      },
    );
    observer.observe(el);
    unsubscribe = intersecting.subscribe(($intersecting) => {
      if (skipOne) {
        return;
      }
      el.dispatchEvent(
        new CustomEvent($intersecting ? "inview-enter" : "inview-leave"),
      );
    });
  }

  function detach() {
    observer.disconnect();
    unsubscribe();
  }

  attach(extractInit(options));

  return {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    update(options: InViewOptions) {
      skipOne = true;
      intersecting = extractStore(options);
      detach();
      attach(extractInit(options));
    },
    destroy() {
      detach();
    },
  };
}

function extractStore(options: InViewOptions | undefined): Writable<boolean> {
  if (typeof options === "object") {
    if ((options as any).subscribe) {
      return options as Writable<boolean>;
    }
    if ((options as any).store) {
      return (options as any).store;
    }
  }
  return writable(false);
}

function extractInit(
  options: InViewOptions | undefined,
): IntersectionObserverInit {
  if (typeof options === "undefined" || (options as any).subscribe) {
    return {};
  }
  const { store, ...init } = options as any;
  return init;
}
