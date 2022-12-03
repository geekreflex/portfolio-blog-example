import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { toggleTheme } from "../features/appSlice"

export const Navigation = () => {
  const navLinks = [{ label: "Blog", to: "/blog" }]
  const dispatch = useDispatch()

  const onTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <Wrapper>
      <Link to="/">
        <h3>GeekReflex</h3>
      </Link>
      <LinkList>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.label}
          </Link>
        ))}
        <div>
          <button onClick={onTheme}>toggle theme</button>
        </div>
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
