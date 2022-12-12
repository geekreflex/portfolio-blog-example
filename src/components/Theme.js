import React from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"

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
  },
  radius1: "3px",
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
  },
  radius1: "3px",
}

// render selected theme schema
const Theme = ({ children }) => {
  const { theme } = useSelector((state) => state.app)

  const renderTheme = () => {
    if (theme === "light") return light
    if (theme === "dark") return dark
    return light
  }

  return <ThemeProvider theme={renderTheme()}>{children}</ThemeProvider>
}

export default Theme
