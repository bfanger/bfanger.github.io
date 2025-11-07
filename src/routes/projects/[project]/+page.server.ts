import { singleProject } from "../../../services/project-fns";

export async function load({ params }) {
  return { project: await singleProject(params.project) };
}
