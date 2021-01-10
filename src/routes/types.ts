export type Project = {
  slug: string
  title: string
  image: {
    src: string
    width: number
    height: number
    alt?: string
  }
  content: string
  released: string
  after?: string
  before?: string
}
export type Portfolio = {
  [year: string]: Project[]
}
