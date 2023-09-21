import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxText } from './AcomplishmentsStyles'
import { GrCertificate, GrWorkshop, GrMap } from 'react-icons/gr'
import Link from 'next/link'

const data = [
  {
    text: 'I graduated from my IT technical course',
    Component: GrCertificate,
    href: 'https://www.google.com/search?rlz=1C5GCEM_enBR1025BR1027&sxsrf=AJOqlzUg4aEbYkgLy0NxJBOEwIXlD61kGA:1674879300118&q=escola+santo+tom%C3%A1s+de+aquino+divinopolis&spell=1&sa=X&ved=2ahUKEwj9mebNs-n8AhXHOrkGHZkpAVIQBSgAegQICRAB&biw=1440&bih=694&dpr=2',
  },
  {
    text: 'Working at a brilliant Brazilian bank',
    Component: GrWorkshop,
    href: 'https://www.bancointer.com.br/',
  },
  {
    text: 'I specialized in ReactJS',
    Component: GrCertificate,
    href: 'https://www.rocketseat.com.br/',
  },
  {
    text: "I graduated in English from a school in Canada",
    Component: GrMap,
    href: 'https://www.bayswater.ac/destination/calgary',
  },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((Card, index) => (
        <Link key={index} href={Card.href}>
          <Box>
            <picture>
              <Card.Component size="2rem" />
            </picture>
            <BoxText>{Card.text}</BoxText>
          </Box>
        </Link>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
)

export default Acomplishments
