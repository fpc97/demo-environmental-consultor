module.exports = {
  siteMetadata: {
    title: `Evelina Cejuela y Asociados`,
    description: `Servicios de Consultoria Ambiental`,
    author: `@Francisco Perez Cejuela`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    // Style things
    `gatsby-plugin-sass`,
    `gatsby-plugin-purgecss`,

    // File handling things
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
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
        icon: `src/images/gatsby-icon.png`,
        cache_busting_mode: 'none'
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },

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