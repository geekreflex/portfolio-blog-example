import React from "react"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

export const wrapRootElement = ({ element }) => {
  return <React.Fragment>{element}</React.Fragment>
}
