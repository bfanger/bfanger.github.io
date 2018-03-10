const path = require("path");
const { promisify } = require("util");
const fs = require("fs");
const matter = require("gray-matter");
const commonmark = require("commonmark");

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);

const projectsModule = async function(req, res, next) {
  try {
    let json = null;
    if (req.url === "/") {
      json = await projectsModule.allProjects();
    } else {
      json = await projectsModule.getProject(req.url.substr(1));
    }
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(json));
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    next();
  }
};
projectsModule.allProjects = async function() {
  const files = await readDir(path.resolve(__dirname, "../content/projects"));
  const projects = [];
  for (const file of files) {
    if (file.endsWith(".md")) {
      const project = await projectsModule.getProject(
        file.substr(0, file.length - 3)
      );
      projects.push(project);
    }
  }
  return projects;
};

projectsModule.getProject = async function(slug) {
  const file = await readFile(
    path.resolve(__dirname, "../content/projects/", slug + ".md")
  );
  const result = matter(file);
  const parsed = reader.parse(result.content);

  return {
    ...result.data,
    slug,
    description: writer.render(parsed)
  };
};

module.exports = projectsModule;
