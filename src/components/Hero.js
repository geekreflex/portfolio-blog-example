import React from "react"
import styled from "styled-components"

export default function Hero(props) {
  return (
    <Wrapper>
      <HeroTop>
        <div>
          <h1>
            My name <br />
            is <span>Jerry</span>
          </h1>
          <p>
            I am a professional programmer with more than 10 years of experience
          </p>
        </div>
        <ImageContainer>
          <div className="abstract"></div>
        </ImageContainer>
      </HeroTop>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    font-size: 60px;

    span {
      font-weight: 900;
      text-decoration: underline;
    }
  }
`

const HeroTop = styled.div`
  display: flex;
`
const ImageContainer = styled.div`
  /* .abstract {
    background-color: orange;
    width: 300px;
    height: 90vh;
    position: absolute;
    right: 0;
    top: -200px;
    transform: rotate(45deg);
    border-radius: 0 0 150px 150px;
  } */
`
