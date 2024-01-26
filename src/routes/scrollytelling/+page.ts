import { redirect } from "@sveltejs/kit";
import { allProjects } from "../_util";

export async function load() {
  const projects = await allProjects();
  redirect(301, `/scrollytelling/${projects[0].slug}`);
}
