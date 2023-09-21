import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrCertificate } from 'react-icons/gr'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  UtilityList,
  Img,
  Boxes,
  Box,
  BoxText,
  Topics,
  Card,
  BoxDescription,
} from './ProjectsStyles'
import { IProject } from './type'

interface ProjectCardProps {
  project: IProject
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <>
      <Link key={project.id} href={project.html_url} target="_blank">
        <Card>
          <Box>
            <AiFillGithub />
            <BoxText>
              {project.name.replace(/-/g, ' ')}
            </BoxText>
          </Box>
          <BoxDescription>
            {project.description}
          </BoxDescription>
          {/* <Topics>{[...project.topics].map((tag) => <div>{tag}</div>)}</Topics> */}
        </Card>
      </Link>
    </>)
}

export default ProjectCard
