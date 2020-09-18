const path = require('path')

exports.createPages = ({actions: {createPage}, graphql}) => {
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
            frontmatter {
              templateKey
              intro {
                background
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

    posts.forEach((edge) => {
      const id = edge.node.id
      const background = edge.node.frontmatter.intro ? edge.node.frontmatter.intro.background : null

      // If templateKey doesn't exist take the name of the folder containing the .md file
      const templateName = edge.node.frontmatter.templateKey ||
        edge.node.fileAbsolutePath.split('/').slice(-2, -1)[0]
      const filePath = edge.node.fields ? edge.node.fields.slug : templateName

      createPage({
        path: filePath,
        component: path.resolve(
          `src/templates/${String(templateName)}.js`
        ),
        context: {
          id,
          background
        }
      })
    })
  })
}