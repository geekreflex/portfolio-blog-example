import React from "react"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import { Provider } from "react-redux"
import { store } from "./src/app/store"

export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <Provider store={store}>{element}</Provider>
    </React.Fragment>
  )
}
