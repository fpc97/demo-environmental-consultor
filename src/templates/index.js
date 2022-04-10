import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'

import Title from '../components/Title'

import SlideShow from '../components/BackgroundSlideshow'

import { Index as Background } from '../components/svgr/shapes'

import { objectDeepSearch } from '../utils'

const MainButton = ({ txt }) => (
  <Link className="btn slide-btn" to="/sobre-nosotros">
    <span className="slide-btn__content slide-btn__content--first">{txt}</span>
    <span className="slide-btn__slider">
      <span className="slide-btn__content slide-btn__content--last">{txt}</span>
    </span>
  </Link>
)

export const IndexPageTemplate = ({ images, phrase }) => (
  <div>
    <div className="home-background">
      <div className="home-background__slideshow">
        <SlideShow images={images}/>
      </div>
      <div className="home-background__blue">
        <div className="home-background__plain">&nbsp;</div>
        <div className="home-background__gradient">&nbsp;</div>
      </div>
      <Background className="home-background__svg"/>
    </div>
    
    <header className="header white">
      <Title bottomBar/>
      <h2 className="header__h2"><span className="header__h2--first">BIOLOGIA</span> <br/><span className="header__h2--last">DIGITAL</span></h2>
      <div className="header__bottom-flex">
        <p className="header__intro">{phrase}</p>
        <MainButton txt="Saber Más →"/>
      </div>
    </header>
  </div>
)

export default ({ data }) => {
  const slideshow = objectDeepSearch(data, ['markdownRemark', 'frontmatter', 'slideshow'])
  const phrase = objectDeepSearch(data, ['markdownRemark', 'frontmatter', 'phrase'])

  return (
    <Layout
      noTitle
      noFooter
      transparentMobile
      blueNav
      title="Principal"
      description="Evelina Cejuela y Asociados. Servicios de Consultoria Ambiental"
    >
      <IndexPageTemplate images={slideshow} phrase={phrase}/>
    </Layout>
  )
}

export const IndexPageQuery = graphql`
  fragment ArtDirection on ImageSharp {
    sm: gatsbyImageData(layout: FULL_WIDTH, height: 512, width: 512, quality: 45)
    md: gatsbyImageData(layout: FULL_WIDTH, height: 960, width: 960, quality: 45)
    lg: gatsbyImageData(layout: FULL_WIDTH, height: 1920, width: 1080, quality: 45)
  }

  fragment DefaultImage on Query {
    defaultImage: file(relativePath: {eq: "default-bat.jpg"}) {
      childImageSharp {
        ...ArtDirection
      }
    }
  }

  fragment HeaderFields on MarkdownRemark {
    frontmatter {
      title
      header {
        principal
        secundario
        lead
        background {
          childImageSharp {
            ...ArtDirection
          }
        }
      }
    }
  }

  query IndexPage(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        phrase
        slideshow {
          childImageSharp {
            ...ArtDirection
          }
        }
      }
    }
    ...DefaultImage
  }
`