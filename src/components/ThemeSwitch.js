import { Icon } from "@iconify/react"
import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { toggleTheme } from "../features/appSlice"

export function ThemeSwitch() {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.app)

  const onTheme = () => {
    dispatch(toggleTheme())
  }

  const renderTheme = () => {
    if (theme === "light") return "pepicons:sun"
    return "ri:moon-line"
  }

  return (
    <Wrapepr>
      <button onClick={onTheme}>
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
  }
`
