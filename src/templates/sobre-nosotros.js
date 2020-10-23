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
  header,
  objetivos = false,
  elegirnos = false,
  clientes = false
}) => (
  <>
    {objectHasValues(header) && <Intro {...header} title={title}/>}
    <main>
      {objectHasValues(objetivos) && <NuestrosObjetivos {...objetivos}/>}
      {objectHasValues(elegirnos) && <PorQueElegirnos {...elegirnos}/>}
      {objectHasValues(clientes) && <NuestrosClientes lista={clientes}/>}
    </main>
  </>
)

const SobreNosotrosPage = ({ data/*: { markdownRemark: { frontmatter } }*/ }) => (
  <Layout title="Sobre Nosotros">
    {console.log(data)}
    <SobreNosotrosPageTemplate {...data.markdownRemark.frontmatter}/>
  </Layout>
)

export default SobreNosotrosPage

export const sobreNosotrosPageQuery = graphql`
query SobreNosotrosPage(
  $id: String!
) {
  markdownRemark(id: { eq: $id }) {
    ...HeaderFields
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