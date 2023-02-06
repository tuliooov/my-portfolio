import React, { useRef, useState } from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'

interface ProjectCardProps {
  project: {
    title: string
    date: string
    description: string
    image: string
    tags: string[]
    source: string
    visit: string
    id: number
  }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [active, setActive] = useState(false)
  const contentEl = useRef()
  const onToggle = () => setActive(!active)

  return (
    <BlogCard className={`accordion_item ${active ? 'active' : ''}`}>
      <Img src={project.image} onClick={onToggle} />
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="answer">
          <HeaderThree title={project.title}>{project.title}</HeaderThree>
          <Hr />
          <CardInfo className="card-info">{project.description}</CardInfo>
          <div>
            <TitleContent>Tech Stack</TitleContent>
            <Hr />
            <TagList>
              {project.tags.map((t, i) => {
                return <Tag key={i}>{t}</Tag>
              })}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>Live Preview</ExternalLinks>
            <ExternalLinks href={project.source}>Source Code</ExternalLinks>
          </UtilityList>
        </div>
      </div>
    </BlogCard>
  )
}

export default ProjectCard
