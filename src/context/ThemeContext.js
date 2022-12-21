import React, { useState, createContext } from "react"

export const ThemeContext = createContext("dark")

export const ThemeProvider = ({ children }) => {
  // use state to store the theme
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // provide the theme context with the theme and toggleTheme functions
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
