import path from "path"
import child_process from "child_process"
import { promisify } from "util"
import fs from "fs"
import matter from "gray-matter"
import commonmark from "commonmark"
import { imageSize } from "image-size"
import orderBy from "lodash/orderBy"
import type { Project } from "./types"

const reader = new commonmark.Parser()
const writer = new commonmark.HtmlRenderer()

const readFile = promisify(fs.readFile)
const readDir = promisify(fs.readdir)
const execFile = promisify(child_process.execFile)

let dir = path.resolve(process.cwd(), "content/projects")

export async function allProjects() {
  const files = await readDir(dir)
  const projects: Project[] = []
  for (const file of files) {
    if (file.endsWith(".md")) {
      const slug = file.substr(0, file.length - 3)
      const project = await loadProject(slug)
      projects.push(project)
    }
  }
  return orderBy(projects, ["released", "title"], ["desc", "asc"])
}
async function loadProject(slug: string) {
  const file = await readFile(path.resolve(dir, slug + ".md"))
  const result = matter(file)
  const parsed = reader.parse(result.content)
  return {
    ...result.data,
    slug,
    content: writer.render(parsed),
  } as Project
}

const destination = path.resolve(process.cwd(), "static/build/img") + "/"
if (fs.existsSync(destination) === false) {
  const buildDir = path.resolve(process.cwd(), "static/build")
  if (fs.existsSync(buildDir) === false) {
    fs.mkdirSync(buildDir)
  }
  fs.mkdirSync(destination)
}

export async function processImage(filename: string) {
  const source = path.resolve(dir, "screenshots", filename)
  const dest = path.resolve(destination, filename)

  const sourceStat = fs.statSync(source)
  let destStat
  try {
    destStat = fs.statSync(dest)
  } catch (err) {
    destStat = { mtime: new Date(0) }
  }
  if (sourceStat.mtime > destStat.mtime) {
    await execFile("convert", [
      "-resize",
      "1000x>",
      "-quality",
      "85",
      source,
      destination + filename,
    ])
    if (filename.substr(filename.length - 4) === ".png") {
      await execFile("pngquant", [
        "--ext",
        ".png",
        "--quality",
        "65-85",
        "--force",
        "--skip-if-larger",
        destination + filename,
      ]).catch((err) => {
        if (err.code === 98) {
          return // conversion results in a file larger than the original
        }
        console.warn(err)
      })
    }
  }
  const { width, height } = imageSize(source)
  return { src: "/build/img/" + filename, width, height }
}
