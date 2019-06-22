/**
 * Preload an image
 * @param {String} src
 */
export default function preload(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onabort = reject;
    img.onerror = reject;
    img.src = src;
    if (img.complete) {
      resolve(img);
    }
  });
}
