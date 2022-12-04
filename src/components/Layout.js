import React from "react"
import styled from "styled-components"

import { Navigation } from "./Navigation"
import Theme from "./Theme"
import { GlobalStyle } from "../style/GlobalStyle"

export default function Layout(props) {
  const { children } = props

  return (
    <React.Fragment>
      <Theme>
        <GlobalStyle />
        <Wrapper>
          <Navigation />
          <main>{children}</main>
        </Wrapper>
      </Theme>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`
