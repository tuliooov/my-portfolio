import React from 'react'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'
import { Skills, OtherSkills } from './Skills'

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Hard Skills</SectionTitle>
    <SectionText>
      I`ve worked with multiple technologies as a developer to develop &
      maintain my projects.
    </SectionText>
    <List>
      {Skills.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <List columns={12} onlyIcon>
      {OtherSkills.map((Skill) => (
        <ListItem key={Skill.slug} title={Skill.title}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
        </ListItem>
      ))}
    </List>
  </Section>
)

export default Technologies
