import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import MapaArgentina from '../components/MapaArgentina'
import Especializamos from '../components/Especializamos'
import Intro from '../components/HeroSection'

const ServiciosPage = ({
  data: {
    markdownRemark: { frontmatter },
    servicios,
    defaultImage
  }
}) => (
  <Layout title="Services">
    <ServiciosPageTemplate {...frontmatter} defaultImage={defaultImage} servicios={servicios} />
  </Layout>
)

export default ServiciosPage

export const ServiciosPageTemplate = ({
  title,
  header,
  provincias,
  noAnim = false,
  servicios = [],
  defaultImage
}) => (
  <>
    {header && <Intro {...header} title={title}/>}
    <main>
      {provincias && <MapaArgentina provincias={provincias} noAnim={noAnim}/>}
      {servicios.edges && servicios.edges.length && <Especializamos servicios={servicios} defaultImage={defaultImage}/>}
    </main>
  </>
)

export const serviciosPageQuery = graphql`
  query ServiciosPage(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      ...HeaderFields
      frontmatter {
        provincias
      }
      id
    }
    servicios: allMarkdownRemark(sort: {fields: id}, filter: {frontmatter: {templateKey: {eq: "servicio-individual"}}}) {
      edges {
        node {
          ...HeaderFields
          fields {
            slug
          }
        }
      }
    }
    ...DefaultImage
  }
`