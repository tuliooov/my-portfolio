import { useState } from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { certificatesMock } from './constants'
import { Banner } from './style'
import { ICertificate } from './type'

import Link from 'next/link'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Certificates = () => {
  const [certificates] = useState<ICertificate[]>(certificatesMock)

  const slideImages = certificates.map((certificate) => ({
    url: `./certificate/${certificate.fileName}`,
    caption: certificate.name,
  }))

  return (
    <Section id="projects">
      <SectionTitle main>Certificates</SectionTitle>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <Link href={slideImage.url} key={slideImage.url}>
              <div key={index}>
                <Banner style={{ backgroundImage: `url(${slideImage.url})` }} />
              </div>
            </Link>
          ))}
        </Slide>
      </div>
      <SectionDivider style={{ marginTop: '3rem' }} />
    </Section>
  )
}

export default Certificates
