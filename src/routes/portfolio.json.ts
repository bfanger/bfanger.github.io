import { allProjects } from "./_util"
import groupBy from "lodash/groupBy"
import type { Response, Request } from "express"

export async function get(_: Request, res: Response): Promise<void> {
  const projects = await allProjects()
  const info = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    released: project.released,
  }))
  const grouped = groupBy(info, (project) => {
    const match = project.released.toString().match(/^[0-9]+/)
    if (match === null) {
      console.warn("Project[" + project.slug + "].released is invalid")
      return 2000
    }
    const year = parseInt(match[0], 10)
    return year
  })
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(grouped))
}
