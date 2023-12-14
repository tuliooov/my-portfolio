import { ProjectDocument } from "prismicio-types"

export function getPostFiltered<T>(projects: any[], tagsQueryParam: string[]) {
  let result = projects
  if (tagsQueryParam) {
    result = projects.filter((project) => tagsQueryParam.every((queryParam) => project.tags.includes(queryParam)))
  }
  return result as T
}