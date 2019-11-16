import { allProjects, processImage } from "../_util";

export async function get(req, res, next) {
  const projects = await allProjects();
  const index = projects.findIndex(p => p.slug === req.params.project)
  if (index === -1) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: `Not found`
    }));
    return
  }
  const meta = projects[index]
  const project = {
    slug: meta.slug,
    title: meta.title,
    released: meta.released,
    content: meta.content,
  }
  if (index !== 0) {
    project.before = projects[index - 1].slug
  }
  if (index < projects.length - 1) {
    project.after = projects[index + 1].slug
  }
  if (meta.image) {
    project.image = await processImage(meta.image)
  }
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(project));
}
