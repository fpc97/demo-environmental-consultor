import React, { useState } from 'react'

import { graphql } from 'gatsby'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import Layout from '../components/Layout'
import Intro from '../components/HeroSection'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { HTMLContent } from '../components/Content'

const TrabajosRealizados = ({ data: { markdownRemark: { frontmatter, fields } } }) => {
  const payload = {...frontmatter}
  const contenidos = fields ? fields.lista_de_trabajos : null

  if (payload.lista_de_trabajos && contenidos) {
    payload.lista_de_trabajos.forEach((elem, i) => elem.contenido = contenidos[i])
  }

  return (
    <Layout title="Trabajos Realizados">
      <TrabajosRealizadosPageTemplate {...frontmatter}/>
    </Layout>
  )
}

export default TrabajosRealizados

export const TrabajosRealizadosPageTemplate = ({
  title,
  header,
  lista_de_trabajos
}) => {
  const [selected, updateSelected] = useState(null)
  const [textPos, setTextPos] = useState(null)

  let textContents

  const parseTrabajos = () => lista_de_trabajos.map((t, i) => {
    if (i === selected) {
      textContents = {title: t.title, contenido: t.contenido, portada: t.portada, i}
    }

    const handleDeploy = e => {
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
    }

    return (
      <>
        <li
          className={`trabajo${selected === i ? ' selected' : ''}`}
          key={i}
          role="button"
          onClick={handleDeploy}
          onKeyDown={handleDeploy}
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
      <Intro title={title} {...header}/>
      <main>
        <article className="trabajos-realizados">
          <div className="trabajos-realizados__container container">
            <ul className="trabajos-realizados__lista">
              { parseTrabajos() }
            </ul>
          </div>
        </article>
      </main>
    </>  
  )
}

export const TrabajosRealizadosPageQuery = () => graphql`
  query TrabajosRealizadosPage(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      ...HeaderFields
      frontmatter {
        lista_de_trabajos {
          title
          contenido
          cliente
          portada {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, height: 460, width: 400, quality: 70)
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