import { prerender } from "$app/server";
import { z } from "zod/v4";
import { singleProject } from "./project-fns";

export const fetchProject = prerender(z.string(), (slug) =>
  singleProject(slug),
);
