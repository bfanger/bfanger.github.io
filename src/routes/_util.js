import path from "path";
import { promisify } from "util";
import fs from "fs";
import matter from "gray-matter";
import commonmark from "commonmark";
import sizeOf from "image-size";
import orderBy from "lodash/orderBy";
// import imagemin from "imagemin";
// import imageminJpegoptim from "imagemin-jpegoptim";
// import imageminPngquant from "imagemin-pngquant";

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);
let projectOrder = null;

let dir = path.resolve(process.cwd(), "content/projects");

export async function allProjects() {
  const files = await readDir(dir);
  const projects = [];
  projectOrder = {};
  for (const file of files) {
    if (file.endsWith(".md")) {
      const project = await getProject(file.substr(0, file.length - 3));
      projects.push(project);
    }
  }
  const sortedProjects = orderBy(
    projects,
    ["released", "title"],
    ["desc", "asc"]
  );
  for (const i in sortedProjects) {
    const project = sortedProjects[i];
    if (i === "0") {
      delete sortedProjects[i].previous;
      projectOrder[project.slug] = {};
    } else {
      const previous = sortedProjects[i - 1];
      project.previous = previous.slug;
      previous.next = project.slug;
      projectOrder[previous.slug].next = project.slug;
      projectOrder[project.slug] = { previous: previous.slug };
    }
  }
  return sortedProjects;
}

export async function getProject(slug) {
  const file = await readFile(path.resolve(dir, slug + ".md"));
  const result = matter(file);
  const parsed = reader.parse(result.content);
  let image = null;
  if (result.data.image) {
    image = await processImage(result.data.image);
  }
  if (projectOrder === null) {
    await allProjects(); // determine the ordering
  }
  const { next, previous } = projectOrder[slug] || {};
  return {
    ...result.data,
    slug,
    image,
    description: writer.render(parsed),
    previous,
    next
  };
}

const destination = path.resolve(process.cwd(), "static/build/img");
if (fs.existsSync(destination) === false) {
  fs.mkdirSync(destination);
}

async function processImage(filename) {
  const source = path.resolve(dir, "screenshots", filename);
  const dest = path.resolve(destination, filename);

  const sourceStat = fs.statSync(source);
  let destStat;
  try {
    destStat = fs.statSync(dest);
  } catch (err) {
    destStat = { mtime: new Date(0) };
  }
  if (sourceStat.mtime > destStat.mtime) {
    // await imagemin([source], {
    //   destination,
    //   plugins: [
    //     imageminJpegoptim({ max: 85 }),
    //     imageminPngquant({ quality: [0.65, 0.85] })
    //   ]
    // });
    fs.copyFile(source, dest, err => err && console.warn(err));
  }
  const { width, height } = sizeOf(source);
  return { src: "/build/img/" + filename, width, height };
}
