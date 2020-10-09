import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

import MapaArgentina from '../components/mapa-argentina'
import Especializamos from '../components/especializamos'
import Intro from '../components/hero-section'

const ServiciosPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Servicios"/>
      <ServiciosPageTemplate {...content} />
    </Layout>
  )
}

export default ServiciosPage

export const ServiciosPageTemplate = ({
  title,
  intro,
  provincias,
  noAnim = false
}) => (
  <main>
    {intro && <Intro {...intro} title={title}/>}
    {provincias && <MapaArgentina provincias={provincias} noAnim={noAnim}/>}
    <Especializamos />
  </main>
)

export const serviciosPageQuery = graphql`
  query ServiciosPage(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      ...IntroFields
      frontmatter {
        provincias
      }
      id
    }
  }
`