import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Intro from '../components/HeroSection'

import { HTMLContent } from '../components/Content'

const ServicioIndividual = ({ pageContext: { html, title } }) => (
  <Layout title={title}>
    <ServicioIndividualPageTemplate html={html} title={title}/>
  </Layout>
)

export default ServicioIndividual

export const ServicioIndividualPageTemplate = ({
  title,
  html
}) => (
  <>
    <Intro title={title}/>
    <main className="servicio-individual">
      <div className="servicio-individual__container container">
        <HTMLContent content={html}/>
      </div>
    </main>
  </>
)
/*
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
`*/