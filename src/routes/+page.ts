import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  if (typeof window === "undefined") {
    return { withIntro: true, withCard: true, skipped: false };
  }

  const intro = await (window as any).introPromise;
  return { withIntro: false, withCard: false, skipped: intro === "skip" };
};
