/* eslint-disable import/prefer-default-export */
import groupBy from "lodash-es/groupBy";
import type { RequestHandler } from "@sveltejs/kit";
import { allProjects } from "./_util";

export const get: RequestHandler = async () => {
  const projects = await allProjects();
  const info = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }));
  const grouped = groupBy(info, (project) => {
    const match = project.released.toString().match(/^[0-9]+/);
    if (match === null) {
      console.warn(`Project[${project.slug}].released is invalid`); // eslint-disable-line no-console
      return 2000;
    }
    const year = parseInt(match[0], 10);
    return year;
  });
  return {
    body: grouped,
  };
};
