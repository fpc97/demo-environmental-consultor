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
              intro {
                background {
                  relativePath
                }
              }
            }
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
      const background = edge.node.frontmatter.intro ?
        edge.node.frontmatter.intro.background :
        null
      const backgroundRelativePath = background ? background.relativePath : null

      // If templateKey doesn't exist take the name of the folder containing the .md file
      const templateName = edge.node.frontmatter.templateKey ||
        edge.node.fileAbsolutePath.split('/').slice(-2, -1)[0]
      const filePath = edge.node.fields ? edge.node.fields.slug : templateName

      const isIndex = templateName === 'index'

      createPage({
        path: isIndex ? '/' : filePath,
        component: path.resolve(
          `src/templates/${String(templateName)}.js`
        ),
        context: {
          id,
          background: backgroundRelativePath
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

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