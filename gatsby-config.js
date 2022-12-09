const path = require("path")

module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `Amesto Fortytwo Blog`,
    name: `Fortytwo`,
    description:"The answer is meaningsless - unless you understand the question.",
    siteUrl: `https://amestofortytwo.github.io/blog`,
    siteSlogan: `The answer is meaningsless - unless you understand the question.`,
    siteLinks: [
      {
        name: "sitemap",
        url: "/sitemap/sitemap-index.xml",
        group: "site",
        internal: true,
      },
      {
        name: "rss",
        url: "/rss.xml",
        group: "site",
        internal: true,
      },
      {
        name: "About Fortytwo",
        url: "https://www.amestofortytwo.com",
        group: "home",
        internal: true,
      },
      {
        name: "email",
        url: "mailto: hello@amestofortytwo.com",
        group: "connect",
        internal: false,
      },
    ],
    siteCookieConsent: {
      title: '',
      description: '',
      readMore: '',
    },
    siteSubscription: {
      title: '',
      description: '',
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
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
            serialize: ({
              query: {
                site: {
                  siteMetadata: { siteUrl },
                },
                allMdx,
              },
            }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  url: siteUrl + node.fields.slug,
                  guid: siteUrl + node.fields.slug,
                  custom_elements: [
                    {
                      "content:encoded": node.html,
                    },
                    {
                      tags: node.frontmatter.categories.join(","),
                    },
                    {
                      featuredImage: siteUrl + node.frontmatter.hero.publicURL,
                    },
                  ],
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: { fileAbsolutePath: { regex: "/content/posts/" } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  nodes {
                    html
                    mdxAST
                    fields {
                      slug
                    }
                    frontmatter {
                      hero {
                        publicURL
                      }
                      categories
                      date
                      title
                      description
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            match: "^/posts/",
            title: "Amesto Fortytwo RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `@pitayan/gatsby-theme-pitayan`,
      options: {
        siteAssets: "src/assets",
        postsPerPage: 6,
        mailChimpEndpoint:
          "https://pitayanblog.us14.list-manage.com/subscribe/post?u=234bf6777b76872feb7d92a68&amp;id=27fad95f3b",
        mailChimpTimeout: 3500,
        applyGatsbyRemarkPlugins: defaultPlugins => [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: ["oembed"],
              providers: {
                exclude: ["Redit"],
              },
            },
          },
          `gatsby-remark-responsive-iframe`,
          ...defaultPlugins,
        ],
      },
    },
  ],
}
