import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ThemeSwitch } from "./ThemeSwitch"

export const Navigation = () => {
  const navLinks = [
    { label: "Blog", to: "/blog" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
  ]

  return (
    <Wrapper>
      <LeftWrap>
        <Link to="/">
          <h3>GeekReflex</h3>
        </Link>
      </LeftWrap>
      <RightWrap>
        <LinkList>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to}>
              {link.label}
            </Link>
          ))}
        </LinkList>
        <ThemeSwitch />
      </RightWrap>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  height: 100px;
  align-items: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor};
  }
`

const LeftWrap = styled.div``
const RightWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const LinkList = styled.div`
  display: flex;
  gap: 30px;
  a {
    margin-left: 10px;
    text-decoration: none !important;
    font-weight: 600;
  }
`
