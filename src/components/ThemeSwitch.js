import { Icon } from "@iconify/react"
import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"

export function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const renderTheme = () => {
    if (theme === "light") return "ri:moon-line"
    return "pepicons:sun"
  }

  return (
    <Wrapepr>
      <button onClick={toggleTheme}>
        <Icon icon={renderTheme()} fontSize="24" />
      </button>
    </Wrapepr>
  )
}

const Wrapepr = styled.div`
  display: flex;

  button {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: ${(props) => props.theme.colors.textColor};
  }
`
