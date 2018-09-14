/* global process */
let endpoint = "/api/";

let fetch;
if (process.server) {
  fetch = require("node-fetch");
  endpoint = "http://localhost:8080/api/";
} else {
  fetch = window.fetch;
}
async function get(path) {
  if (process.server && global.__bfanger_projects) {
    if (path === "projects") {
      return global.__bfanger_projects;
    }
    const match = path.match(/^projects\/([^/]+)$/);
    if (match && global.__bfanger_projects) {
      const project = global.__bfanger_projects.find(
        project => project.slug === match[1]
      );
      if (project) {
        return project;
      }
    }
    throw new Error("'" + path + "' not available");
  }
  const response = await fetch(endpoint + path + ".json");
  return response.json();
}

export default { get };
