const path = require("path")

module.exports = {
  // pathPrefix: `/`,
  trailingSlash: "always",
  siteMetadata: {
    title: `Amesto Fortytwo Blog`,
    name: `Fortytwo`,
    description:"The answer is meaningless - unless you understand the question.",
    siteUrl: `https://blog.amestofortytwo.com`,
    siteSlogan: `The answer is meaningless - unless you understand the question.`,
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
        name: "analytics",
        url: "https://plausible.io/blog.amestofortytwo.com/",
        group: "site",
        internal: false,
      },
      {
        name: "Amestofortytwo.com",
        url: "https://www.amestofortytwo.com",
        group: "home",
        internal: false,
      },
      {
        name: "Merchandise shop",
        url: "https://fortytwoshop.no",
        group: "home",
        internal: false,
      },
      {
        name: "Meetup",
        url: "https://www.meetup.com/amesto-fortytwo/",
        group: "home",
        internal: false,
      },
      {
        name: "Our culture",
        url: "https://github.com/amestofortytwo/culture",
        group: "home",
        internal: false,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/company/amesto-fortytwo",
        group: "connect",
        internal: false,
      },
      {
        name: "twitter",
        url: "https://twitter.com/AmestoFortytwo",
        group: "connect",
        internal: false,
      },
      {
        name: "fortytwo web",
        url: "https://www.amestofortytwo.com",
        group: "connect",
        internal: false,
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
                      "content:encoded": `<![CDATA[<p>${node.excerpt}<p>]]>`,
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
                  filter: {
                    internal: {
                      contentFilePath: { regex: "/content/posts/" }
                    }
                  }
                  sort: {
                    frontmatter: {
                      date: DESC
                    }
                  }
                ) {
                  nodes {
                    excerpt
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
            title: "Fortytwo RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `@pitayan/gatsby-theme-pitayan`,
      options: {
        siteAssets: "src/assets",
        postsPerPage: 15,
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
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `blog.amestofortytwo.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/42_favicon_512.png',
      },
    },
  ],
}
