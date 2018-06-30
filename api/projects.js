const path = require("path");
const { promisify } = require("util");
const fs = require("fs");
const matter = require("gray-matter");
const commonmark = require("commonmark");
const sizeOf = require("image-size");

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);

async function projects(req, res, next) {
  try {
    if (req.url.match(/.json$/) === null) {
      throw new Error('Missing ".json" suffix');
    }
    let json = null;
    if (req.url === "/.json") {
      json = await allProjects();
    } else {
      json = await getProject(req.url.substr(1, req.url.length - 6));
    }
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(json));
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    next();
  }
}
async function allProjects() {
  const files = await readDir(path.resolve(__dirname, "../content/projects"));
  const projects = [];
  for (const file of files) {
    if (file.endsWith(".md")) {
      const project = await getProject(file.substr(0, file.length - 3));
      projects.push(project);
    }
  }
  return projects;
}

async function getProject(slug) {
  const file = await readFile(
    path.resolve(__dirname, "../content/projects/", slug + ".md")
  );
  const result = matter(file);
  const parsed = reader.parse(result.content);
  let image = null;
  if (result.data.image) {
    const filename = result.data.image;
    const { width, height } = sizeOf(
      path.resolve(__dirname, "../content/projects/screenshots/", filename)
    );
    image = { src: "/build/img/" + filename, width, height };
  }

  return {
    ...result.data,
    slug,
    image,
    description: writer.render(parsed)
  };
}

projects.allProjects = allProjects;
projects.getProjects = getProject;
module.exports = projects;
