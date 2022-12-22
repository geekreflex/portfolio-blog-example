import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { Heading } from "../style/DefaultStyles"

export default function About(props) {
  const { location } = props
  return (
    <Layout location={location} title={"About"}>
      <Heading>About Me</Heading>
      <AboutMain>
        <Content>
          <p>
            Hi, my name is Jerry Nwosu and I'm a software engineer with a
            passion for building user-friendly and reliable web applications. I
            have experience working with a variety of technologies, including
            ReactJS and NextJS for front-end development and Node.js with
            Express and MongoDB for backend development. In addition to my
            skills in these frameworks, I also have experience writing code in
            Python and Go, which allows me to tackle a wide range of projects
            and challenges.
          </p>

          <p>
            In addition to writing code, I also enjoy staying up to date with
            the latest industry trends and contributing to open source projects.
            When I'm not busy organizing my meticulously curated Spotify
            playlist (or trying to convince my friends that the 90s were
            actually the best decade for music), you can find me scouring GitHub
            for the next opportunity to give back to the developer community.
          </p>

          <p>
            I'm excited to bring my skills and experience to your team and help
            create innovative and impactful software solutions. Thank you for
            considering me!
          </p>
        </Content>
        <ImgSection></ImgSection>
      </AboutMain>
    </Layout>
  )
}

const AboutMain = styled.div`
  display: flex;
  gap: 30px;
`
const Content = styled.div`
  width: 65%;
  p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 30px;
  }
`
const ImgSection = styled.div`
  width: 35%;
  height: 450px;
  background-color: #333;
`
