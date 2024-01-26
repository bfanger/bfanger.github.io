import type { Project } from "$lib/project-fns";

export async function load({ params, fetch }) {
  const request = await fetch(`/projects/${params.project}.json`);
  const project: Project = await request.json();
  return { project };
}
