const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const remark = require('remark');
const remarkHTML = require('remark-html');

exports.createPages = ({ actions: { createPage }, graphql }) => {
  createPage({
    path: '/identity-mails/invite/',
    component: path.resolve(
      `src/templates/identity-email.js`
    )
  })

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              header {
                lead
                background {
                  childImageSharp {
                    sm: gatsbyImageData(layout: FULL_WIDTH, height: 512, width: 512, quality: 45)
                    md: gatsbyImageData(layout: FULL_WIDTH, height: 960, width: 960, quality: 45)
                    lg: gatsbyImageData(layout: FULL_WIDTH, height: 1920, width: 1080, quality: 45)
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id

      // If templateKey doesn't exist take the name of the folder containing the .md file
      const templateName = edge.node.frontmatter.templateKey ||
        edge.node.fileAbsolutePath.split('/').slice(-2, -1)[0]
      const filePath = edge.node.fields ? edge.node.fields.slug : templateName

      const isIndex = templateName === 'index'

      // Specifics for servicio-individual
      const html = edge.node.html
      const header = edge.node.frontmatter ? edge.node.frontmatter.header : false
      const title = edge.node.frontmatter ? edge.node.frontmatter.title : false

      createPage({
        path: isIndex ? '/' : filePath,
        component: path.resolve(
          `src/templates/${String(templateName)}.js`
        ),
        context: {
          id,
          ...(templateName === 'servicio-individual' ? { html, title, header } : {})
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node)
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  const trabajos = node.frontmatter ? node.frontmatter['lista-de-trabajos'] : false

  if (trabajos) {
    const value = trabajos.map(el => 
      remark()
        .use(remarkHTML)
        .processSync(el.contenido)
        .toString()
    )

    createNodeField({
      name: `lista-de-trabajos`,
      node,
      value
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = [
    `type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }`,
    `type Frontmatter {
      slideshow: [File]! @fileByRelativePath
    }`
  ]

  createTypes(typeDefs)
}