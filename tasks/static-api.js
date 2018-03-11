#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const projectsModule = require("../api/projects");

const outputDir = path.join(__dirname, "../dist/api/");

const writeFile = promisify(fs.writeFile);

async function main() {
  const info = fs.existsSync(outputDir);
  if (info === false) {
    fs.mkdirSync(outputDir);
    fs.mkdirSync(outputDir + "/projects");
  }

  projectsModule.allProjects().then(projects => {
    writeFile(outputDir + "/projects.json", JSON.stringify(projects));
    for (const project of projects) {
      writeFile(
        outputDir + "/projects/" + project.slug + ".json",
        JSON.stringify(project)
      );
    }
  });
}
main();
