import styled from 'styled-components'

export const Banner = styled.div`
  display: flex;
  alignitems: center;
  justifycontent: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 450px;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 300px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 200px;
  }
`
