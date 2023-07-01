import path from "path";
import childProcess from "child_process";
import { promisify } from "util";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { imageSize } from "image-size";
import { orderBy } from "lodash-es";
import type { Project } from "$lib/Project";

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

  const content = marked.parse(result.content, {
    mangle: false,
    headerIds: false,
  });
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
    ["desc", "asc"]
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
  alt?: string
): Promise<ProcessedImage> {
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
    await execFile("convert", [
      "-resize",
      "1000x>",
      "-quality",
      "85",
      source,
      destination + filename,
    ]).catch((err:any) => {
      // eslint-disable-next-line no-console
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
      ]).catch((err:any) => {
        if (err.code === 98) {
          return; // conversion results in a file larger than the original
        }
        console.warn(err.message); // eslint-disable-line no-console
      });
    }
  }
  const { width, height } = imageSize(source);
  if (!width || !height) {
    throw new Error("imageSize failed");
  }
  return { src: `/build/img/${filename}`, alt, width, height };
}
