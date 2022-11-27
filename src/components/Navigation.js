import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Navigation = () => {
  return (
    <Wrapper>
      <Link to="/blog">Blog</Link>
      <h3>This is Navigation</h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid red;
`
