import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PreviewCompatibleImage } from './preview-compatible-image'

import Img from 'gatsby-image'

import artDirection from '../utils/art-direction'

const backgroundSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><linearGradient id="a"x1="183"x2="583.3"y1="940.1"y2="-111.2"gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2a9640"></stop><stop offset="0.2" stopColor="#108043"></stop></linearGradient><path fill="url(#a)" d="M725 60L311 657V60z"></path><linearGradient id="b"x1="488"x2="897"y1="1018.6"y2="-55.4"gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2a9640"></stop><stop offset="0.6" stopColor="#108043"></stop></linearGradient><path fill="url(#b)" d="M1168 60l-667 961H311V657L725 60z"></path><linearGradient id="c"x1="833.6"x2="1253.1"y1="1123.3"y2="21.5"gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2a9640"></stop><stop offset="0.8" stopColor="#108043"></stop></linearGradient><path fill="url(#c)" d="M1610 60l-667 961H501l667-961z"></path></svg>

const HeroSection = ({
  title,
  lead,
  principal,
  secundario,
  background
}) => {
  const formattedlead = lead ? <p className="hero-section__lead lead">{lead}</p> : null
  const formattedCol1 = principal ? <p className="hero-section__col hero-section__col--first">{principal}</p> : null
  const formattedCol2 = secundario ? <p className="hero-section__col hero-section__col--last">{secundario}</p> : null
  const formattedBackground = background ? <Img className="hero-section__background" fluid={artDirection(background.childImageSharp)}/> : null

  const content = formattedCol1 || formattedCol2 ?
    <div className="hero-section__content">
      {formattedCol1}
      {formattedCol2}
    </div>
    : null

  return (
    <header className="hero-section white">
      {BackgroundSVGIcon}
      {formattedBackground}
      <div className="hero-section__container container">
        <h2 className="hero-section__title">{title}</h2>
        {formattedlead}
        {content}
      </div>
    </header>
  )
}

export default HeroSection;

const BackgroundSVGIcon = (<svg
  className="hero-section__svg"
  xmlns="http://www.w3.org/2000/svg"
  data-name="Layer 1"
  viewBox="0 0 1299.1 961"
>
  <defs>
    <linearGradient
      id="a"
      x1="-128"
      x2="272.3"
      y1="880.1"
      y2="-171.2"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#2a9640"></stop>
      <stop offset="0.2" stopColor="#108043"></stop>
    </linearGradient>
    <linearGradient
      id="b"
      x1="177"
      x2="586"
      y1="958.6"
      y2="-115.4"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#2a9640"></stop>
      <stop offset="0.6" stopColor="#108043"></stop>
    </linearGradient>
    <linearGradient
      id="c"
      x1="522.6"
      x2="942.1"
      y1="1063.3"
      y2="-38.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#2a9640"></stop>
      <stop offset="0.8" stopColor="#108043"></stop>
    </linearGradient>
  </defs>
  <path fill="url(#a)" d="M414 0L0 597V0h414z"></path>
  <path fill="url(#b)" d="M857 0L190 961H0V597L414 0h443z"></path>
  <path fill="url(#c)" d="M1299 0L632 961H190L857 0h442z"></path>
</svg>)