import { redirect } from "@sveltejs/kit";
import { allProjects } from "$lib/project-fns";

export async function load() {
  const projects = await allProjects();
  redirect(301, `/projects/${projects[0].slug}`);
}
