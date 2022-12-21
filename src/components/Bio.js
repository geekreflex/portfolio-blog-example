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
import { Icon } from "@iconify/react"

function Bio() {
  const socials = [
    {
      name: "Twitter",
      icon: "carbon:logo-twitter",
      url: "https://twitter.com/geekreflex",
    },
    {
      name: "Github",
      icon: "carbon:logo-github",
      url: "https://github.com/geekreflex",
    },
    {
      name: "LinkedIn",
      icon: "carbon:logo-linkedin",
      url: "https://linkedin.com/in/jaynwosu",
    },
  ]

  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata
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
              <h3>Jerry Nwosu</h3>
              <p>I'm a software engineer</p>
              <div className="socials">
                {socials.map((social) => (
                  <a title={social.name} target="_blank" href={social.url}>
                    <Icon icon={social.icon} />
                  </a>
                ))}
              </div>
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
  background-color: ${(props) => props.theme.colors.bg_secondary};
  padding: 20px;
  border-radius: 5px;

  .content {
    h3 {
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }

    .socials {
      display: flex;
      gap: 10px;

      a {
        font-size: 28px;
        color: ${(props) => props.theme.colors.textColor};
      }
    }
  }
`

export default Bio
