import { error } from "@sveltejs/kit";
import type { Project } from "../../../services/project-fns";

export async function load({ params, fetch }) {
  const request = await fetch(`/projects/${params.project}.json`);
  if (!request.ok) {
    if (request.status === 404) {
      error(404, `Geen project gevonden voor "${params.project}"`);
    }
    error(request.status, "Failed to load project");
  }
  const project: Project = await request.json();
  return { project };
}
