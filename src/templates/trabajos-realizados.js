import React, { useState } from 'react'

import { graphql } from 'gatsby'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/hero-section'
import PreviewCompatibleImage from '../components/preview-compatible-image'
import { HTMLContent } from '../components/content'

const TrabajosRealizados = ({ data }) => {
  console.log(data)

  const payload = {...data.markdownRemark.frontmatter}
  const contenidos = data.markdownRemark.fields ? data.markdownRemark.fields.lista_de_trabajos : null

  if (payload.lista_de_trabajos && contenidos) payload.lista_de_trabajos.forEach((elem, i) => {
    elem.contenido = contenidos[i]
  })

  return (
    <Layout>
      <SEO title="Trabajos Realizados"/>
      <TrabajosRealizadosPageTemplate
        {...data.markdownRemark.frontmatter}
      />
    </Layout>
  )
}

export default TrabajosRealizados

export const TrabajosRealizadosPageTemplate = ({
  title,
  intro,
  lista_de_trabajos
}) => {
  const [selected, updateSelected] = useState(null)
  const [textPos, setTextPos] = useState(null)

  let textContents

  const parseTrabajos = () => lista_de_trabajos.map((t, i) => {
    if (i === selected) {
      textContents = {title: t.title, contenido: t.contenido, portada: t.portada, i}
    }

    return (
      <>
        <li className={`trabajo${selected === i ? ' selected' : ''}`}
          key={i}
          onClick={e => {
            const current = e.currentTarget
            let next = current,
              position = i

            while (
              !(next.nextSibling === null) &&
              !(next.nextSibling.getBoundingClientRect().top > current.getBoundingClientRect().bottom)
            ) {
              next = next.nextSibling
              if (next.classList.contains('trabajo')) position++
            }

            updateSelected(selected !== i ? i : null)
            setTextPos(position)
          }}
        >
          <PreviewCompatibleImage
            className="trabajo__portada"
            imageInfo={{
              image: t.portada,
              alt: ''
            }}
          />
          <div className="trabajo__meta">
            <h3 className="trabajo__titulo trabajo__titulo--portada">{t.title}</h3>
            <p className="trabajo__cliente">{t.cliente}</p>
          </div>
        </li>
        {(selected !== null && textPos === i) && (
        <li className="extracto" key={textPos}>
          <SlideDown className="extracto__container">
            <PreviewCompatibleImage
              className="extracto__portada"
              imageInfo={{
                image: textContents.portada,
                alt: ''
              }}
            />
            <div className="extracto__texto">
              <h3 className="extracto__titulo">{textContents.title}</h3>
              {<HTMLContent content={textContents.contenido}/>}
            </div>
          </SlideDown>
        </li>
        )}
      </>
    )
  })
  
  return(
    <>
      <Intro title={title} {...intro}/>
      <article className="trabajos-realizados">
        <div className="trabajos-realizados__container container">
          <ul className="trabajos-realizados__lista">
            { parseTrabajos() }
          </ul>
        </div>
      </article>
    </>  
  )
}

export const TrabajosRealizadosPageQuery = () => graphql`
  query TrabajosRealizadosPage(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      ...IntroFields
      frontmatter {
        lista_de_trabajos {
          title
          contenido
          cliente
          portada {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 460, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      fields {
        lista_de_trabajos
      }
    }
  }
`