import { allProjects } from "$lib/project-fns";

export async function load() {
  const projects = await allProjects();
  const teasers = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }));
  const topPicks = projects
    .filter((t) => t.promoted)
    .toSorted((a, b) => {
      return a.promoted! - b.promoted!;
    });
  return { teasers, topPicks };
}
