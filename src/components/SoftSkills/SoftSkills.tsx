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
} from './SoftSkillsStyles'
import { Skills } from './constants'

const SoftSkills = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Soft Skills</SectionTitle>
    <SectionText>
      I work daily with my ethical, moral and professional skills. Always seek
      to improve these qualities
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
  </Section>
)

export default SoftSkills
