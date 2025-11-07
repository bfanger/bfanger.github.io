import { error, json } from "@sveltejs/kit";
import {
  allProjects,
  processImage,
  type Project,
} from "../../../services/project-fns";
import { extractPromoted } from "../../../services/project-fns";

export async function GET({ params }) {
  const base = await allProjects();
  const projects = [...base, ...extractPromoted(base)];
  const index = projects.findIndex((p) => p.slug === params.project);
  if (index === -1) {
    error(404, `Geen project gevonden voor "${params.project}"`);
  }
  const data = projects[index];
  const project: Project = {
    slug: data.slug,
    title: data.title,
    released: data.released,
    content: data.content,
    canonical: "canonical" in data ? data.canonical : undefined,
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
  return json(project);
}
