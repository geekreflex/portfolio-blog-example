import React from "react"
import Layout from "../components/Layout"
import { ProjectCard, ProjectsList } from "../style/DefaultStyles"
import { projects } from "../data/projects"

export default function Projects(props) {
  const { location } = props
  return (
    <Layout location={location} title={"Projects"}>
      <ProjectsList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <div className="content">
              <h3>{project.name}</h3>
              <p>This is a short description.</p>
            </div>
          </ProjectCard>
        ))}
      </ProjectsList>
    </Layout>
  )
}
