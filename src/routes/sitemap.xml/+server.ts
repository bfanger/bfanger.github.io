import { text } from "@sveltejs/kit";
import { allProjects } from "../../services/project-fns";

export const prerender = true;

export async function GET() {
  const projects = await allProjects();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bfanger.nl/</loc>
  </url>
  <url>
    <loc>https://bfanger.nl/portfolio</loc>
  </url>`;

  for (const { slug } of projects) {
    xml += `
  <url>
    <loc>https://bfanger.nl/projects/${slug}</loc>
  </url>`;
  }

  xml += `
</urlset>`;

  return text(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
