/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
                width: 100,
                height: 100,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div className="content">
              <p>
                Hello, thank for stopping by. I'm <strong>{author}</strong>, a
                software engineer from Nigeria. This is my personal blog where I
                dabble with codes and everything inbetween.
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                  Follow me on Twitter
                </a>
              </p>
              <p>I'm a software engineer</p>
            </div>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.darkPurple};
  padding: 20px;
  border-radius: 5px;

  .content {
    p {
      font-size: 14px;
    }
  }
`

export default Bio
