import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Intro from '../components/HeroSection'

import { HTMLContent } from '../components/Content'

const ServicioIndividual = ({ data: { markdownRemark } }) => (
  <Layout title={markdownRemark.frontmatter.title}>
    <ServicioIndividualPageTemplate {...markdownRemark} title={markdownRemark.frontmatter.title}/>
  </Layout>
)

export default ServicioIndividual

export const ServicioIndividualPageTemplate = ({
  frontmatter,
  html
}) => (
  <>
    <Intro title={frontmatter.title}/>
    <main className="servicio-individual">
      <div className="servicio-individual__container container">
        <HTMLContent content={html}/>
      </div>
    </main>
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