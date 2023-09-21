import React, { useEffect, useState } from 'react'

import { Boxes, GridContainer } from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
// import { projects } from '../../constants/constants'
import ProjectCard from './Card'
import { IProject } from './type'

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([])
  console.log("🚀 ~ file: Projects.tsx:15 ~ Projects ~ projects:", projects)

  const fetchGithubProfile = async () => {
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      }),
    };

    fetch('https://api.github.com/users/tuliooov/repos?sort=created', requestOptions)
      .then(response => response.json())
      .then(data => {
        setProjects(data as IProject[])
      })
      .catch(error => {
        console.error(error);
      });

  }

  useEffect(() => {
    fetchGithubProfile()
  }, [])

  return (
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
        <Boxes>
          {projects.map((p, i) => {
            return <ProjectCard key={i} project={p} />
          })}
        </Boxes>
      <SectionDivider />
    </Section>
  )
}

export default Projects
