import { allProjects } from "../_util";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const projects = await allProjects();
  const teasers = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }));
  return { teasers };
};
