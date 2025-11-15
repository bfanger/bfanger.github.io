/**
 *
 * Similar to "new AbortController();", but supports destructuring.
 *
 * Usage:
 *   const { signal, abort } = abortSignal();
 */
export default function abortSignal() {
  const abortController = new AbortController();
  return {
    signal: abortController.signal,
    abort: () => abortController.abort(),
  };
}
