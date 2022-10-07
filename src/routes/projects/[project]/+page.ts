/* eslint-disable import/prefer-default-export */
import type { PageLoad } from "./$types";
import type { Project } from "$lib/Project";

export const load: PageLoad = async ({ params, fetch }) => {
  const request = await fetch(`/projects/${params.project}.json`);
  const project: Project = await request.json();
  return { project };
};
