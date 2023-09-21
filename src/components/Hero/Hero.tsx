import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  StrongTag,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, my name is Marco Túlio
        </SectionTitle>
        <SectionText>
          I'm a passionate <StrongTag>software developer</StrongTag> with a strong track record in
          creating efficient software solutions. With
          <StrongTag> aproven history</StrongTag> of delivering high-quality projects, I'm eager to take
          my skill set and my passion for software development to the next
          level. Throughout my career, <StrongTag>I've worked on a variety of challenging </StrongTag> 
          projects, from developing web and mobile applications to building
          large-scale data management systems. My expertise spans a wide range
          of technologies and languages, including ReactJS, NodeJS, Java, and
          more. I can adapt as a <StrongTag>fullstack</StrongTag>, but
          my professional background is more focused on the <StrongTag>front-end</StrongTag>.
          <br></br>
          <br></br>
          Additionally, <StrongTag>I'm well-versed in agile methodologies and DevOps
          practices</StrongTag>, enabling me to collaborate effectively in multidisciplinary
          teams and ensure timely and high-quality deliveries.
          <br></br>
          <br></br>
          With a solid set of technical skills and deep knowledge of software
          development, I'm prepared to tackle the most complex challenges in
          technology projects. <StrongTag>My ability to collaborate effectively with
          multidisciplinary teams ensures that our efforts are aligned and
          focused on delivering exceptional results</StrongTag>. My <StrongTag>dedication</StrongTag> to excellence
          is evident in my unwavering pursuit of high-quality software delivery,
          strictly adhering to industry best practices. Furthermore, my
          adaptability allows me to quickly learn new technologies and
          languages, keeping me up to date with the latest industry trends. With
          excellent <StrongTag>communication skills</StrongTag> and a proactive approach to
          problem-solving, I'm ready to face technical challenges and make a
          meaningful contribution to any team or project.
          <br></br>
          <br></br>
          If you're interested in exploring a potential collaboration or would
          like to learn more about my experience, <StrongTag>please feel free to get in
          touch</StrongTag>. I look forward to making new connections for growth and success
          in the field of software development.
        </SectionText>
        <Button href="./files/resume.pdf">My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
