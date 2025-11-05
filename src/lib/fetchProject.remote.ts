import { error } from "@sveltejs/kit";
import { prerender } from "$app/server";
import { z } from "zod/v4";
import type { Project } from "./project-fns";
import { allProjects, extractPromoted, processImage } from "./project-fns";

export const fetchProject = prerender(z.string(), async (slug) => {
  const base = await allProjects();
  const projects = [...base, ...extractPromoted(base)];
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) {
    error(404, `Geen project gevonden voor "${slug}"`);
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
  return project;
});
