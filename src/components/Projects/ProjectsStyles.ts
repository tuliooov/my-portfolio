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
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #ff6b6b;
  font-size: 1.8rem;
  font-weight: 500;
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
