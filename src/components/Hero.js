import React from "react"
import styled from "styled-components"

export default function Hero(props) {
  return (
    <Wrapper>
      <HeroTop>
        <h1>
          optimized <br />
          solution seeker
        </h1>
        <p>
          Hello stranger! 👋, my name is Jerry Nwosu a software engineer in
          Nigeria. I make open source projects and write about code, design, and
          everything in-between.
        </p>
      </HeroTop>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const HeroTop = styled.div`
  margin-top: 100px;

  h1 {
    font-size: 4.5em;
    font-weight: 900;
  }

  p {
    width: 70%;
    line-height: 1.5;
    font-weight: 600;
  }
`
