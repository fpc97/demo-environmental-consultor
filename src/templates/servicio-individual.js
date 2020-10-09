import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Intro from '../components/hero-section'
import SEO from '../components/seo'

import { HTMLContent } from '../components/content'

const ServicioIndividual = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title}/>
      <ServicioIndividualPageTemplate {...markdownRemark} />
    </Layout>
  )
}

export default ServicioIndividual

export const ServicioIndividualPageTemplate = ({
  frontmatter,
  html
}) => (
  <>
    <Intro title={frontmatter.title}/>
    <article className="servicio-individual">
      <div className="servicio-individual__container container">
        <HTMLContent content={html}/>
      </div>
    </article>
  </>
)

export const servicioIndividualQuery = graphql`
  query ServicioIndividualByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`