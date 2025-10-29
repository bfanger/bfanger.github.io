import type { Project } from "$lib/project-fns";
import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
  const request = await fetch(`/projects/${params.project}.json`);
  if (!request.ok) {
    return error(request.status, "Failed to load project");
  }
  const project: Project = await request.json();
  return { project };
}
