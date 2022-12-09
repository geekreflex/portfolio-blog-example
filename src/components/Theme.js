import React from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"

const accent = "#68B984"

// dark theme schema
const light = {
  colors: {
    background: "#f1f1f1",
    textColor: "#222",
    accent: accent,
    darkPurple: "#31263E",
  },
}

// light theme schema
const dark = {
  colors: {
    background: "#05060B",
    textColor: "#fff",
    accent: accent,
    darkPurple: "#31263E",
  },
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
