import { getProject } from "../_util";

export async function get(req, res) {
  const project = await getProject(req.params.slug);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(project));
}
