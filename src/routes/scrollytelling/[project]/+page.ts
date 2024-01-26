import type { Project } from "$lib/Project";

export async function load({ params, fetch }) {
  const request = await fetch(`/projects/${params.project}.json`);
  const project: Project = await request.json();
  return { project };
}
