import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import SoftSkills from '../components/SoftSkills/SoftSkills'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
import Languages from '@/components/Languages/Languages'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Languages />
      <Technologies />
      <SoftSkills />
      <Timeline />
      <Acomplishments />
      <Projects />
    </Layout>
  )
}

export default Home
