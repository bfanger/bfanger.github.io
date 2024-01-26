import { allProjects } from "../_util";

export async function load() {
  const projects = await allProjects();
  const teasers = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }));
  return { teasers };
}
