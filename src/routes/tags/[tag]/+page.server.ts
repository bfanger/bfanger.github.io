import { error } from "@sveltejs/kit";
import { allProjects } from "../../../services/project-fns";

export async function load({ params }) {
  const projects = await allProjects();
  const tagCount: Record<string, number> = {};
  const projectsWithTag = [];
  for (const project of projects) {
    if (project.tags.includes(params.tag)) {
      projectsWithTag.push({
        slug: project.slug,
        title: project.title,
      });
    }
    for (const tag of project.tags) {
      tagCount[tag] = (tagCount[tag] ?? 0) + 1;
    }
  }
  if (projectsWithTag.length === 0) {
    error(404);
  }
  const popularTags = Object.entries(tagCount)
    .filter(([, count]) => count > 3)
    .toSorted((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
  return {
    tag: params.tag,
    projects: projectsWithTag,
    popularTags,
  };
}
