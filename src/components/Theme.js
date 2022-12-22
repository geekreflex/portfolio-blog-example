import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { ThemeContext } from "../context/ThemeContext"

const accent = "#68B984"

// dark theme schema
const light = {
  colors: {
    background: "#f1f1f1",
    textColor: "#222",
    textColor_card: "#333",
    accent: accent,
    bg_secondary: "#ced4da",
    borderColor1: "#adb5bd",
    scrollbarColor: "#777",
    scrollbarThumbColor: "#bbb",
  },
  radius1: "6px",
}

// light theme schema
const dark = {
  colors: {
    background: "#212529",
    textColor: "#fff",
    textColor_card: "#fff",
    accent: accent,
    bg_secondary: "#343a40",
    borderColor1: "#495057",
    scrollbarColor: "#333",
    scrollbarThumbColor: "#666",
  },
  radius1: "6px",
}

// render selected theme schema
const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  console.log("THEME", theme)

  const renderTheme = () => {
    if (theme === "light") return light
    if (theme === "dark") return dark
    return light
  }

  return <ThemeProvider theme={renderTheme()}>{children}</ThemeProvider>
}

export default Theme
