import { ProjectDocument } from "prismicio-types"

export function getPostFiltered<T>(projects: any[], tagsQueryParam?: string | string[]) {
  let result = projects
  if (tagsQueryParam) {
    if (Array.isArray(tagsQueryParam)) {
      result = projects.filter((project) => tagsQueryParam.every((queryParam) => project.tags.includes(queryParam)))
    } else {
      result = projects.filter((project) => project.tags.includes(tagsQueryParam))
    }  
  }
  return result as T
}