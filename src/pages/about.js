import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function About(props) {
  const { location } = props
  return (
    <Layout location={location} title={"About"}>
      <Link to="/">Hello</Link>
      <h1>This is about page</h1>
    </Layout>
  )
}
