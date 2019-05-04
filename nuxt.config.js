/* eslint-disable import/no-commonjs */
async function routes() {
  const projectsModel = require("./api/projects");
  const projects = await projectsModel.allProjects();
  global.__bfanger_projects = projects;
  return projects.map(project => "/projects/" + project.slug);
}
module.exports = {
  head: {
    title: "BFanger.nl",
    htmlAttrs: {
      lang: "nl"
    },
    meta: [
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      },
      { charset: "utf-8" },
      { name: "theme-color", content: "#5c53e2" }
    ]
  },
  "google-analytics": {
    id: "UA-7098662-1",
    beforeFirstHit() {
      this.$vue.$ga.set("anonymizeIp", true);
    }
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
  modules: ["@nuxtjs/sitemap", "@nuxtjs/google-analytics"],
  sitemap: {
    hostname: "https://bfanger.nl",
    routes
  },
  generate: {
    subFolders: false,
    routes
  }
};
