import childProcess from "node:child_process";
import fs from "node:fs";
import { readFile, readdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import matter from "gray-matter";
import sharp from "sharp";
import { marked } from "marked";
import * as v from "valibot";

export type Project = {
  slug: string;
  title: string;
  canonical?: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  content: string;
  tags: string[];
  released: string;
  promoted?: number;
  after?: string;
  before?: string;
};

const execFile = promisify(childProcess.execFile);

const hasPngquant = execFile("which pngquant")
  .then(() => true)
  .catch(() => false);

const dir = path.resolve(process.cwd(), "content/projects");
export type RawProject = Project & { image: string; alt: string };
const frontmatterSchema = v.object({
  title: v.string(),
  tags: v.array(v.string()),
});

async function loadProject(slug: string) {
  const file = await readFile(path.resolve(dir, `${slug}.md`));

  const result = matter(file);
  const valid = v.safeParse(frontmatterSchema, result.data);
  if (!valid.success) {
    console.warn(
      `Project ${slug} has incomplete metadata`,
      valid.issues.map((issue) => issue.message),
    );
  }

  const content = marked.parse(result.content, { async: false, gfm: true });
  return {
    ...result.data,
    slug,
    content,
  } as RawProject;
}

export async function allProjects(): Promise<RawProject[]> {
  const files = await readdir(dir);
  const projectPromises = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.substr(0, file.length - 3);
      return loadProject(slug);
    });
  const projects = await Promise.all(projectPromises);
  return projects.sort(
    (a, b) =>
      b.released.localeCompare(a.released) || a.title.localeCompare(b.title),
  );
}

export function extractPromoted(projects: RawProject[]) {
  const topPicks = projects
    .filter((t) => t.promoted)
    .toSorted((a, b) => {
      return a.promoted! - b.promoted!;
    })
    .map((p) => ({
      ...p,
      canonical: p.slug,
      slug: `top${p.promoted}`,
      released: "",
    }));
  return topPicks;
}
const destination = `${path.resolve(process.cwd(), "static/build/img")}/`;
if (fs.existsSync(destination) === false) {
  const buildDir = path.resolve(process.cwd(), "static/build");
  if (fs.existsSync(buildDir) === false) {
    fs.mkdirSync(buildDir);
  }
  fs.mkdirSync(destination);
}
const thumbnailsDir = `${path.resolve(process.cwd(), "static/build/thumbnails")}/`;
if (fs.existsSync(thumbnailsDir) === false) {
  fs.mkdirSync(thumbnailsDir);
}

type ProcessedImage = {
  src: string;
  thumbnail: string;
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
  const thumbnail = `${path.basename(filename, path.extname(filename))}.jpg`;

  const sourceStat = fs.statSync(source);
  let destStat;
  try {
    destStat = fs.statSync(dest);
  } catch {
    destStat = { mtime: new Date(0) };
  }
  if (sourceStat.mtime > destStat.mtime) {
    await execFile("magick", [
      source,
      "-resize",
      "1000x>",
      "-quality",
      "85",
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

    await execFile("magick", [
      source,
      "-background",
      "#3f3a42",
      "-flatten",
      "-resize",
      "x160",
      "-quality",
      "75",
      thumbnailsDir + thumbnail,
    ]).catch((err: any) => {
      console.warn(err);
    });
  }
  const { width, height } = await sharp(source).metadata();
  if (!width || !height) {
    throw new Error("sharp metadata failed");
  }
  return {
    src: `/build/img/${filename}`,
    thumbnail: `/build/thumbnails/${thumbnail}`,
    alt,
    width,
    height,
  };
}
