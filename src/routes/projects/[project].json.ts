/* eslint-disable import/prefer-default-export */
import type { RequestHandler } from "@sveltejs/kit";
import type { Project } from "../types";
import { allProjects, processImage } from "../_util";

export const get: RequestHandler = async ({ params }) => {
  const projects = await allProjects();
  const index = projects.findIndex((p) => p.slug === params.project);
  if (index === -1) {
    return {
      status: 404,
      body: { message: `Geen project gevonden voor "${params.project}"` },
    };
  }
  const meta = projects[index];
  const project: Partial<Project> = {
    slug: meta.slug,
    title: meta.title,
    released: meta.released,
    content: meta.content,
  };
  if (index !== 0) {
    project.before = projects[index - 1].slug;
  }
  if (index < projects.length - 1) {
    project.after = projects[index + 1].slug;
  }
  if (meta.image) {
    project.image = await processImage(meta.image);
  }
  return { body: project };
};
