
'use client'

import { useSearchParams } from 'next/navigation'

import { Project } from "@/components/ProjectCard";
import React from "react";
import { getPostFiltered } from "@/utils";
import { TagsFilter } from "@/components/ProjectCard/TagsFilter";
import { ProjectDocument } from "prismicio-types";


interface PageProps {
  projects: ProjectDocument<string>[]
}

export default function ListProjects({ projects }: PageProps) {

  const searchParams = useSearchParams()
  const tagsParam = searchParams.getAll('tags')

  console.log(tagsParam)
  const tags: string[] = [];
  projects.forEach((objeto) => {
    objeto.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  const projectsFiltered = getPostFiltered<ProjectDocument<string>[]>(projects, tagsParam)
  return (
    <>
      <TagsFilter tags={tags} isFilter={true} tagsSelected={tagsParam} baseUrl='/projects?&tags=ForWork' />
      {projectsFiltered.length === 0 && <p>We didn`t found anythink projects.</p>}
      {projectsFiltered.map((project) => (
        <Project key={project.id} project={project} />
      ))}

    </>
  );
}
