import { redirect } from "@sveltejs/kit";

export function load() {
  redirect(301, "https://swagger-explained.bfanger.nl/");
}
