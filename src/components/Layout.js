import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { Navigation } from "./Navigation"

import '../style/style.css'

export default function Layout(props){
    const {  children } = props

    return (
      <Wrapper>
        <Navigation />
        <main>{children}</main>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`

