import { fetchProject } from "$lib/fetchProject.remote";

export async function load({ params }) {
  return { project: await fetchProject(params.project) };
}
