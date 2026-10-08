import {
  allProjects,
  extractPromoted,
  processImage,
} from "../../services/project-fns";

export type Teaser = Awaited<ReturnType<typeof load>>["teasers"][number];

export async function load() {
  const projects = await allProjects();
  const promoted = extractPromoted(projects);

  const teasers = await Promise.all(
    projects.map(async (project) => {
      const image = await processImage(project.image);
      return {
        slug: project.slug,
        title: project.title,
        released: project.released,
        thumbnail: image?.thumbnail,
        aspect: `${image.width}/${image.height}`,
      };
    }),
  );

  return { promoted, teasers };
}
