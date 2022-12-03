import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  theme: "light",
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      const theme = state.theme
      if (theme === "light") {
        state.theme = "dark"
      } else {
        state.theme = "light"
      }
    },
  },
})

export const { toggleTheme } = appSlice.actions
export default appSlice.reducer
