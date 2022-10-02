import { allProjects } from "../_util";
import type { LayoutServerLoad } from "../../../.svelte-kit/types/src/routes/scrollytelling/$types";

export const load: LayoutServerLoad = async () => {
  const projects = await allProjects();
  const teasers = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }));
  return { teasers };
};
