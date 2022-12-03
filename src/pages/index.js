import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function IndexPage(props) {
  const { location } = props

  return (
    <Layout location={location}>
      <SEO
        title="Jerry Nwosu"
        keywords={[
          `blog`,
          `software`,
          `javascript`,
          `react`,
          `tutorial`,
          `react`,
        ]}
      />
      <Hero />
    </Layout>
  )
}
