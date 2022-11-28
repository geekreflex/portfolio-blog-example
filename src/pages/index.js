import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function IndexPage(props) {
  const { location } = props
  const siteTitle = "Hi, I'm Jerry Nwosu"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `software`, `javascript`, `react`, `tutorial`, `react`]} />
      <p>Welcome</p>
    </Layout>
  )
}
