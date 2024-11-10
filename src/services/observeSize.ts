import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

type ResizedOptions =
  | Writable<ResizeObserverSize>
  | (ResizeObserverOptions & {
      store?: Writable<ResizeObserverSize>;
    });

/**
 * Svelte action to determine if the element size
 * (Uses ResizeObserver and accepts ResizeObserver options like box)
 *
 * Usage:
 *
 * const store = writable({ width: 0, height: 0});
 *
 * <div use:observeSize={store} on:observe-size={onResize}>
 */
export default function observeSize(el: Element, options?: ResizedOptions) {
  let size = extractStore(options);
  let observer: ResizeObserver;
  let unsubscribe: () => void;
  let skipOne = true;

  function attach({ box }: ResizeObserverOptions) {
    observer = new ResizeObserver(([entry]) => {
      let sizes: ResizeObserverSize | readonly ResizeObserverSize[];
      if (box === "border-box") {
        sizes = entry.borderBoxSize;
      } else if (box === "device-pixel-content-box") {
        sizes = entry.devicePixelContentBoxSize;
      } else {
        sizes = entry.contentBoxSize;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      size.set(Array.isArray(sizes) ? sizes[0] : sizes);
      skipOne = false;
    });
    observer.observe(el, { box });
    unsubscribe = size.subscribe(($store) => {
      if (skipOne) {
        return;
      }
      el.dispatchEvent(new CustomEvent("has-resized", { detail: $store }));
    });
  }

  function detach() {
    observer.disconnect();
    unsubscribe();
  }

  attach(extractResizeOptions(options));

  return {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    update(options: ResizedOptions) {
      skipOne = true;
      size = extractStore(options);
      detach();
      attach(extractResizeOptions(options));
    },
    destroy() {
      detach();
    },
  };
}

function extractStore(
  options: ResizedOptions | undefined,
): Writable<ResizeObserverSize> {
  if (typeof options === "object") {
    if ((options as any).subscribe) {
      return options as Writable<ResizeObserverSize>;
    }
    if ((options as any).store) {
      return (options as any).store as Writable<ResizeObserverSize>;
    }
  }
  return writable({ inlineSize: 0, blockSize: 0 });
}

function extractResizeOptions(
  options: ResizedOptions | undefined,
): ResizeObserverOptions {
  if (typeof options === "undefined" || (options as any).subscribe) {
    return {};
  }
  const { store, ...init } = options as any;
  return init as ResizeObserverOptions;
}
