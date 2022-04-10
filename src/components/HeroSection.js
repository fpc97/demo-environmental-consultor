import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import artDirection from '../utils/art-direction'
import { HeroSection as Background } from './svgr/backgrounds'
import { isNonDisplay } from '../utils'

const HeroSection = ({
  title,
  lead,
  principal,
  secundario,
  background
}) => {
  console.log('BACROUN', background)
  const formattedlead = lead ? <p className="hero-section__lead lead">{lead}</p> : null
  const formattedCol1 = principal ? <p className="hero-section__col hero-section__col--first">{principal}</p> : null
  const formattedCol2 = secundario ? <p className="hero-section__col hero-section__col--last">{secundario}</p> : null
  const formattedBackground = background && !isNonDisplay(background) ? <PreviewCompatibleImage
      className="hero-section__background"
      imageInfo={{
        image: artDirection(background)
      }}
    /> : null

  const content = formattedCol1 || formattedCol2 ?
    <div className="hero-section__content">
      {formattedCol1}
      {formattedCol2}
    </div>
    : null

  return (
    <header className="hero-section white">
      <Background className="hero-section__svg"/>
      {formattedBackground && (
        <div className="hero-section__tint">
          {formattedBackground}
        </div>
      )}
      <div className="hero-section__container container">
        <h2 className="hero-section__title">{title}</h2>
        {formattedlead}
        {content}
      </div>
    </header>
  )
}

export default HeroSection;