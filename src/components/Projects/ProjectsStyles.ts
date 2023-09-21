import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`

export const GridContainer = styled.ul`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-top: 3rem;
  padding-bottom: 3rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 3rem;
  align-items: start;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 1.5rem;
  }
`
export const BlogCard = styled.li`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`
export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #ff6b6b;
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #a3a3a3;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  margin-top: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #c74545;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #c73131;
  }
`

export const TagList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
  }
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  row-gap: 1.5rem;
  padding: 3rem;
`

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  list-style-type: circle;
  text-align: left;
`


export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
  grid-template-columns: repeat(1, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
  grid-template-columns: repeat(1, 1fr);
    /* grid-template-columns: repeat(2, 1fr); */
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Card = styled.div`
  background: #272727;
  border-radius: 12px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  svg {
    path {
      fill: #ffc500;
    }
  }

  transition: transform 0.2s;
  transition: opacity 0.1s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    /* height: 210px; */
  }

  @media ${(props) => props.theme.breakpoints.md} {
    /* height: 135px; */
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    /* height: 110px; */
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`

export const Topics = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(50px, 80px));
  gap: 1rem;
  > div {
    padding: 2px 8px;
    text-align: center;
    background: #1c1c1c;
    border-radius: 12px;
  }
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 14px;
  }
`

export const BoxDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 14px;
  }
`
