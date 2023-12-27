import { redirect } from "@sveltejs/kit";

export const load = () => {
  redirect(301, "https://swagger-explained.bfanger.nl/");
};
