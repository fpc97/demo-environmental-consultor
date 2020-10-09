import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Intro from '../components/hero-section'
import NuestrosObjetivos from '../components/objetivos'
import PorQueElegirnos from '../components/elegirnos'
import NuestrosClientes from '../components/clientes'

import { objectHasValues } from '../utils'

export const SobreNosotrosPageTemplate = ({
  title,
  intro: introContent,
  objetivos = false,
  elegirnos = false,
  clientes = false
}) => {
  introContent.title = title

  return (
    <>
      {objectHasValues(introContent) && <Intro {...introContent}/>}
      {objectHasValues(objetivos) && <NuestrosObjetivos {...objetivos}/>}
      {objectHasValues(elegirnos) && <PorQueElegirnos {...elegirnos}/>}
      {objectHasValues(clientes) && <NuestrosClientes lista={clientes}/>}
    </>
  )
}

const SobreNosotrosPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter
  
  return (
    <Layout>
      <SEO title="Sobre Nosotros"/>
      <SobreNosotrosPageTemplate {...content}/>
    </Layout>
  )
}

export default SobreNosotrosPage

export const sobreNosotrosPageQuery = graphql`
query SobreNosotrosPage(
  $id: String!
) {
  markdownRemark(id: { eq: $id }) {
    ...IntroFields
    frontmatter {
      elegirnos {
        lead
        items {
          descripcion
          icono
          titulo
        }
        principal
      }
      clientes {
        nombre
        logo {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      objetivos {
        lead
        principal
        items {
          descripcion
          titulo
        }
      }
    }
    id
  }
}
`