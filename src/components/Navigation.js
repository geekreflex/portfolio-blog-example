import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Navigation = () => {
  const navLinks = [{ label: "Blog", to: "/blog" }]

  return (
    <Wrapper>
      <Link to="/">
        <h3>GeekReflex</h3>
      </Link>
      <LinkList>
        {navLinks.map((link) => (
          <Link to={link.to}>{link.label}</Link>
        ))}
      </LinkList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  height: 50px;
  align-items: center;

  * {
    margin: 0;
    padding: 0;
  }
`
const LinkList = styled.div`
  display: flex;
  a {
    margin-left: 10px;
    text-decoration: none !important;
  }
`
