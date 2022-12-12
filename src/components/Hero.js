import React from "react"
import styled from "styled-components"

export default function Hero() {
  return (
    <Wrapper>
      <h1>
        optimized <br />
        solution seeker
      </h1>
      <p>
        Hello stranger! 👋, my name is Jerry Nwosu a software engineer in
        Nigeria. I make open source projects and write about code, design, and
        everything in-between.
      </p>
    </Wrapper>
  )
}

export const Heading = ({ title }) => {
  return <Wrap>{title}</Wrap>
}

const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;

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

const Wrap = styled.h1`
  font-size: 40px;
`
