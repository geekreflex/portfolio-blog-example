// import React, { useState, createContext, useEffect } from "react"

// export const ThemeContext = createContext("dark")

// export const ThemeProvider = ({ children }) => {
//   // use state to store the theme
//   const [theme, setTheme] = useState("dark")

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme")
//     if (storedTheme) {
//       setTheme(storedTheme)
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("theme", theme)
//   }, [theme])

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark")
//   }

//   // provide the theme context with the theme and toggleTheme functions
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
} from "react"

// Create the theme context with the default theme
export const ThemeContext = createContext("dark")

// Create a component that will provide the theme context
export const ThemeProvider = ({ children }) => {
  // Use state to store the theme
  const [theme, setTheme] = useState("dark")

  // Load the theme from local storage when the component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  // Save the theme to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  // Use the useMemo hook to memoize the toggleTheme function
  const toggleTheme = useMemo(() => {
    return () => {
      setTheme(theme === "dark" ? "light" : "dark")
    }
  }, [theme])

  // Use the useCallback hook to create a memoized version of the setTheme function
  const memoizedSetTheme = useCallback((newTheme) => {
    setTheme(newTheme)
  }, [])

  // Provide the theme context with the theme and toggleTheme functions
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: memoizedSetTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
