import React from "react"
import styled from "styled-components"

export default function Hero(props) {
  return (
    <Wrapper>
      <HeroTop>
        <div>
          <h1>
            Hy! My name <br />
            is <span>Jerry</span>
          </h1>
          <p>
            I am a professional programmer with more than 10 years of experience
          </p>
        </div>
        <ImageContainer></ImageContainer>
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
const ImageContainer = styled.div``
