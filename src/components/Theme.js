import React from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"

// dark theme schema
const light = {
  colors: {
    background: "orange",
  },
}

// light theme schema
const dark = {
  colors: {
    background: "#444",
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
