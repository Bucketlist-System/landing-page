import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Timer from "../timer/timer"

import { Container } from "../global"

const Header = ({terms, handleChange}) => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "green-skew" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  
  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            
            <Subtitle>
              THE BUCKETLIST SYSTEM
              <br />
              FREE CHEAT SHEET & COACHING CALL
            </Subtitle>
            
            <Timer />
            
            <h1>
              Sustain Change.
              <br />
              Make Your Inner
              <br />
              Desires Reality.
            </h1>
            <h4>
              Benefits of the Bucketlist System:
            </h4>
            
            <Ul>
              <li>
                  A way to make impactful use of your current time.
              </li>
              <li>
                  Sustainable methods to clarify purpose, implement habits, and utilize reflection
              </li>
              <li>
                  Actions items to get started today.
              </li>
              
            </Ul>

          </HeaderTextGroup>
                    

          <HeaderForm method="POST" action="https://ryanmorimoto.activehosted.com/proc.php"  >
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <label><h3>Sign up now and receive a free cheat sheet and coaching call</h3></label>
            <label><h5>Don't miss your chance. Sign up for a free coaching call. Limited to 50 people per week.</h5></label>
            <div>
              <div>
                <div>
                  <HeaderInput type="text" name="fullname" placeholder="Your name" required/>
                </div>
              </div>
              <div>
                <div>
                  <HeaderInput type="text" name="email" placeholder="Email Address" required/>
                </div>
              </div>
              {/* <div>
                <HeaderConsent>
                  <HeaderCheckbox type="checkbox" />
                  <label style={{color: "666666", fontSize: "12px", margin: "1rem"}}>
                    I have read and agree to the <Link to="/">privacy policy</Link> and <Link to="/">terms of service</Link>.
                  </label>
                </HeaderConsent>
              </div> */}
              <div >
                <div>
                  <p style={{textAlign: 'center', color: "666666", fontSize: '14px', margin: '1.2em'}}>
                    By entering your email, you agree to receive marketing emails from Ryan Morimoto.
                  </p>
                </div>
              </div>
              
              <div>
                <div>
                  <HeaderButton type="submit" required>
                    SIGN UP TODAY
                  </HeaderButton>
                  
                </div>
              </div>
              
            </div>

          </HeaderForm>

          {/* <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper> */}
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  // background-color: #f8f8f8;
  color: #f8f8f8;
  padding: 1% 2%;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`

const Subtitle = styled.h5`
  font-size: 20px;
  color: ${props => props.theme.color.regular};
  letter-spacing: 0px;
`

const HeaderTextGroup = styled.div`
  margin: auto 0;
  width: 60%;
  max-width: 700px;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    margin: 0;
    }
    
  > div {
    // margin-bottom: -4.5%;

    // @media (max-width: ${props => props.theme.screen.md}) {
    //   margin: 0 16px;
    //   width: 100%;
    // }
  

  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 2rem auto;
  @media (max-width: ${props => props.theme.screen.md}) {
    flex-direction: column;
    margin: 0;
  }
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  li {
    display: flex;
  }
`

const HeaderForm = styled.form`
  display: flex;
  color: #000000;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 4px 1.5px rgba(100,100,100,0.2);

  margin: 1rem auto;
  margin-right: 0;
  padding: 3rem 2rem;
  width: 38%;
  background-color: #FFFFFF;

  @media (max-width: ${props => props.theme.screen.md}) {
    margin: 1rem auto;
    width: 100%;
  }
  
  h5 {
    font-size: 1.5rem;
    line-height: 1.3em;
  }
`


const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  margin: 1rem 0;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderConsent = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem auto;
`



const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  width: 100%;
  height: 60px;
  display: block;
  // margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
