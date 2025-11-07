import { allProjects, extractPromoted } from "../../services/project-fns";

export async function load() {
  const projects = await allProjects();
  const promoted = extractPromoted(projects);
  const teasers = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }));

  return { promoted, teasers };
}
