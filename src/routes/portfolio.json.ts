import type { RequestHandler } from "@sveltejs/kit";
import type { PortfolioDto } from "$lib/services/api-types";
import { allProjects } from "./_util";

export const GET: RequestHandler = async () => {
  const teasers = (await allProjects()).map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }));
  const body: PortfolioDto = teasers;
  return { body };
};
