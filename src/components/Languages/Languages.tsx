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
} from './LanguagesStyles'
import { Languages } from './constants'

const LanguagesPage = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Languages</SectionTitle>
    <SectionText>
      Currently, I practice the study of the English language daily
    </SectionText>
    <List>
      {Languages.map((Skill) => (
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

export default LanguagesPage
