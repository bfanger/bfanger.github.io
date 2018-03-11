/* eslint-disable import/no-commonjs */
const projectsModel = require("./api/projects");
module.exports = {
  head: {
    title: "BFanger.nl",
    meta: [
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }
    ]
  },
  serverMiddleware: [{ path: "/api/projects", handler: "~/api/projects.js" }],
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: "url-loader"
      });
    }
  },
  generate: {
    subFolders: false,
    async routes() {
      const projects = await projectsModel.allProjects();
      return projects.map(project => "/projects/" + project.slug);
    }
  }
};
