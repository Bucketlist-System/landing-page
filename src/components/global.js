import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 820px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 1060px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1400px;
    padding: 2% 1%;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;
  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.white.dark
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`
