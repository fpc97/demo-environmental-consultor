import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import Intro from '../components/HeroSection'
import NuestrosObjetivos from '../components/Objetivos'
import PorQueElegirnos from '../components/Elegirnos'
import NuestrosClientes from '../components/Clientes'

import { objectHasValues } from '../utils'

export const SobreNosotrosPageTemplate = ({
  title,
  intro: introContent,
  objetivos = false,
  elegirnos = false,
  clientes = false
}) => (
  <>
    {objectHasValues(introContent) && <Intro {...introContent} title={title}/>}
    <main>
      {objectHasValues(objetivos) && <NuestrosObjetivos {...objetivos}/>}
      {objectHasValues(elegirnos) && <PorQueElegirnos {...elegirnos}/>}
      {objectHasValues(clientes) && <NuestrosClientes lista={clientes}/>}
    </main>
  </>
)

const SobreNosotrosPage = ({ data: { markdownRemark: { frontmatter } } }) => (
  <Layout title="Sobre Nosotros">
    <SobreNosotrosPageTemplate {...frontmatter}/>
  </Layout>
)

export default SobreNosotrosPage

export const sobreNosotrosPageQuery = graphql`
query SobreNosotrosPage(
  $id: String!
) {
  markdownRemark(id: { eq: $id }) {
    ...IntroFields
    frontmatter {
      objetivos {
        lead
        principal
        items {
          titulo
          descripcion
          icono
        }
      }
      elegirnos {
        lead
        items {
          titulo
          descripcion
          icono
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
    }
    id
  }
}
`