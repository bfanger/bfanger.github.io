import childProcess from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import matter from "gray-matter";
import { imageSizeFromFile } from "image-size/fromFile";
import { orderBy } from "lodash-es";
import { marked } from "marked";

export type Project = {
  slug: string;
  title: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  content: string;
  released: string;
  after?: string;
  before?: string;
};

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);
const execFile = promisify(childProcess.execFile);

const hasPngquant = execFile("which pngquant")
  .then(() => true)
  .catch(() => false);

const dir = path.resolve(process.cwd(), "content/projects");
type RawProject = Project & { image: string; alt: string };

async function loadProject(slug: string) {
  const file = await readFile(path.resolve(dir, `${slug}.md`));

  const result = matter(file);

  const content = marked.parse(result.content, { async: false, gfm: true });
  return {
    ...result.data,
    slug,
    content,
  } as RawProject;
}

export async function allProjects(): Promise<RawProject[]> {
  const files = await readDir(dir);
  const projectPromises = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.substr(0, file.length - 3);
      return loadProject(slug);
    });
  return orderBy(
    await Promise.all(projectPromises),
    ["released", "title"],
    ["desc", "asc"],
  );
}
const destination = `${path.resolve(process.cwd(), "static/build/img")}/`;
if (fs.existsSync(destination) === false) {
  const buildDir = path.resolve(process.cwd(), "static/build");
  if (fs.existsSync(buildDir) === false) {
    fs.mkdirSync(buildDir);
  }
  fs.mkdirSync(destination);
}

type ProcessedImage = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};
export async function processImage(
  filename: string,
  alt?: string,
): Promise<ProcessedImage> {
  const source = path.resolve(dir, "screenshots", filename);
  const dest = path.resolve(destination, filename);

  const sourceStat = fs.statSync(source);
  let destStat;
  try {
    destStat = fs.statSync(dest);
  } catch {
    destStat = { mtime: new Date(0) };
  }
  if (sourceStat.mtime > destStat.mtime) {
    await execFile("magick", [
      "convert",
      "-resize",
      "1000x>",
      "-quality",
      "85",
      source,
      destination + filename,
    ]).catch((err: any) => {
      console.warn(err);
      return copyFile(source, destination + filename);
    });

    if (
      filename.substr(filename.length - 4) === ".png" &&
      (await hasPngquant)
    ) {
      await execFile("pngquant", [
        "--ext",
        ".png",
        "--quality",
        "65-85",
        "--force",
        "--skip-if-larger",
        destination + filename,
      ]).catch((err: any) => {
        if (err.code === 98) {
          return; // conversion results in a file larger than the original
        }
        console.warn(err.message);
      });
    }
  }
  const { width, height } = await imageSizeFromFile(source);
  if (!width || !height) {
    throw new Error("imageSize failed");
  }
  return { src: `/build/img/${filename}`, alt, width, height };
}
