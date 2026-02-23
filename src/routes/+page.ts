import { browser } from "$app/environment";

export async function load() {
  if (!browser) {
    return { withIntro: true, withCard: true, skipped: false };
  }

  const intro = await (window as any).introPromise;
  return { withIntro: false, withCard: false, skipped: intro === "skip" };
}
