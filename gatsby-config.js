module.exports = {
  siteMetadata: {
    title: `Evelina Cejuela y Asociados`,
    description: `Servicios de Consultoria Ambiental`,
    author: `@fpece_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    // Style things
    `gatsby-plugin-sass`,
    `gatsby-plugin-purgecss`,

    // File handling things
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },

    // Cache things
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#003575`,
        theme_color: `#003575`,
        display: `minimal-ui`,
        icon: `src/img/favicon.png`,
        cache_busting_mode: 'none'
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },
    'gatsby-plugin-preload-link-crossorigin',

    // Netlify things
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    `gatsby-plugin-netlify` // Always last
  ],
}