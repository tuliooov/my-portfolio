import React from 'react'

import { GridContainer } from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'
import ProjectCard from './Card'

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer className="accordion">
      {projects.map((p, i) => {
        return <ProjectCard key={i} project={p} />
      })}
    </GridContainer>
  </Section>
)

export default Projects
