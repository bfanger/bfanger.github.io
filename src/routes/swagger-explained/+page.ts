import { redirect } from "@sveltejs/kit";

export async function load() {
  redirect(301, "https://swagger-explained.bfanger.nl/");
}
