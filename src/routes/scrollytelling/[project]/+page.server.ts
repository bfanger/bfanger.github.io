import { error } from "@sveltejs/kit";
import { allProjects, processImage } from "../../_util";
import type { PageServerLoad } from "./$types";
import type { Project } from "$lib/Project";

export const load: PageServerLoad = async ({ params }) => {
  const projects = await allProjects();
  const index = projects.findIndex((p) => p.slug === params.project);
  if (index === -1) {
    throw error(404, `Geen project gevonden voor "${params.project}"`);
  }
  const data = projects[index];
  const project: Project = {
    slug: data.slug,
    title: data.title,
    released: data.released,
    content: data.content,
  };
  if (index !== 0) {
    project.before = projects[index - 1].slug;
  }
  if (index < projects.length - 1) {
    project.after = projects[index + 1].slug;
  }
  if (data.image) {
    project.image = await processImage(data.image);
  }
  return { project };
};
