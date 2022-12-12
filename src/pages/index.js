import React from "react"
import Hero, { Heading } from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { projects } from "../data/projects"
import { ProjectCard, ProjectsList } from "../style/DefaultStyles"

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
      <div>
        <Heading title="Projects" />
        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <div className="content">
                <h3>{project.name}</h3>
                <p>This is some description about the project.</p>
              </div>
            </ProjectCard>
          ))}
        </ProjectsList>
      </div>
    </Layout>
  )
}
