import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Intro from '../components/HeroSection'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { SocialMedia } from '../components/Icon'

const Personal = ({ data: { markdownRemark: { frontmatter: {
  title,
  header,
  lista_de_personal
}}}}) => (
  <Layout title="Personal">
    <PersonalPageTemplate title={title} {...header} personal={lista_de_personal} />
  </Layout>
)

export default Personal

export const PersonalPageTemplate = ({
  title,
  header,
  personal
}) => (
  <>
    <Intro title={title} {...header} />
    <main>
      {personal && <article className="personal">
        <div className="personal__container container">
          <ul className="personal__lista">
          {personal.map((persona, i) => (
            <li key={i} className="persona">
              <h4 className="persona__nombre">{persona.nombre}</h4>
              <strong className="persona__cargo">{persona.cargo}</strong>
              <PreviewCompatibleImage
                imageInfo={{
                  image: persona.foto,
                  alt: `Foto de ${persona.nombre}`
                }}
                className="persona__foto"
                sharpType="fixed"
              />
              <p className="persona__descripcion">{persona.descripcion}</p>
              {persona.comunicacion && (
                <ul className="persona__social">
                {persona.comunicacion.map((social, i) => (
                  <li key={i} className="social-media__item">
                    <a href={social.url} className="social-media__a">
                      <span className="invisible social-media__descript">Link al perfil de {persona.nombre} en {social.site}</span>
                      <SocialMedia name={social.site} className="social-media__icon persona__icon" size="2x"/>
                    </a>
                  </li>
                ))}
                </ul>
              )}
            </li>
          ))}
          </ul>
        </div>
      </article>}
    </main>
  </>
)

export const personalPageQuery = graphql`
  query PersonalPage(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      ...HeaderFields
      frontmatter{
        lista_de_personal {
          nombre
          cargo
          descripcion
          comunicacion {
            site
            url
          }
          foto {
            childImageSharp {
              fixed(width: 160, height: 160) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`