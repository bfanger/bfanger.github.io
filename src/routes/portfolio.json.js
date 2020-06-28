import { allProjects } from "./_util"
import groupBy from "lodash/groupBy"

export async function get(_, res) {
  const projects = await allProjects()
  const info = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }))
  const grouped = groupBy(info, (project) => {
    const match = project.released.toString().match(/^[0-9]+/)
    const year = parseInt(match[0], 10)
    return year
  })
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(grouped))
}
