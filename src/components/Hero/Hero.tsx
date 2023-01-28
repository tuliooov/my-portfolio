import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
  StrongTag,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          {/* Hello, this is Marco Tulio. I'm a React developer who also works with Java and Node. */}
          I am currently <StrongTag>twenty-five years old</StrongTag> and live
          in the city of Divinópolis in the state of Minas Gerais. I work as a{' '}
          <StrongTag>full stack developer at Banco Inter</StrongTag>. I am
          communicative, competitive, optimistic and helpful. In addition, I
          have learned to work as a team. My motto is{' '}
          <StrongTag>Run until you fly</StrongTag>.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault()
            window.location.href = '/files/resume.pdf'
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
