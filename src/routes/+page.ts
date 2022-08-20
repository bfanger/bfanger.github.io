import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  if (typeof window === "undefined") {
    return { withIntro: true, skipped: false };
  }

  const intro = await (window as any).introPromise;
  return { withIntro: false, skipped: intro === "skip" };
};
