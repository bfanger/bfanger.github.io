/* eslint-disable import/no-commonjs */
async function routes() {
  const projectsModel = require("./api/projects");
  const projects = await projectsModel.allProjects();
  return projects.map(project => "/projects/" + project.slug);
}
module.exports = {
  head: {
    title: "BFanger.nl",
    meta: [
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      },
      { name: "theme-color", content: "#5c53e2" }
    ]
  },
  loading: false,
  serverMiddleware: [{ path: "/api/projects", handler: "~/api/projects.js" }],
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: "url-loader"
      });
    }
  },
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://bfanger.nl",
    generate: true,
    routes
  },
  generate: {
    subFolders: false,
    routes
  }
};
