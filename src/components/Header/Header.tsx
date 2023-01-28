import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: 'white' }}
      >
        <img
          src="/profile.jpeg"
          height={40}
          width={40}
          style={{ borderRadius: '100%' }}
        />{' '}
        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
          Marco Túlio
        </span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/tuliooov">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/marcotuliovaleriano/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_marcovaleriano/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://wa.me/5537988031061/">
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
