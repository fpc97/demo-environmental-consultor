module.exports = {
  siteMetadata: {
    title: `Sustainable Development`,
    description: `Environmental consulting services`,
    author: `@fpece_`,
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

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
        /*icons: [
          {
            src: `src/img/192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/img/512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          }
        ],*/
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
    // 'gatsby-plugin-preload-link-crossorigin',

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