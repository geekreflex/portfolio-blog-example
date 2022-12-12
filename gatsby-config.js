module.exports = {
  siteMetadata: {
    // edit below
    title: `GeekReflex`,
    author: `Jerry Nwosu`,
    description: `GeekReflex Personal Blog`,
    siteUrl: `https://geekreflex.netlify.app/`,
    social: {
      twitter: `geekreflex`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-netlify`,

    /**
     * Search
     */
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allMarkdownRemark {
              nodes {
                id
                fields { 
                  slug
                  readingTime {
                    text
                  }
                }
                excerpt
                frontmatter {
                  title
                  description
                  date(formatString: "MMMM DD, YYYY")
                }
                rawMarkdownBody
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "body"],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            slug: node.fields.slug,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            date: node.frontmatter.date,
            read: node.fields.readingTime.text,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    { "content:encoded": edge.node.html },
                    { author: "jerrynwosu007@gmail.com" },
                  ],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: {order: DESC, fields: [frontmatter___date]},
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {slug}
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "GeekReflex | RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: "transparent",
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Monokai",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GeekReflex`,
        short_name: `GeekReflex`,
        description: `Software Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
  ],
}
