import React from 'react'
import { IndexPageTemplate } from '../../templates/index'

const IndexPreview = ({ entry }) => {
  const intro = entry.getIn(['data', 'intro-phrase'])
  const images = entry.getIn(['data', 'slideshow'])

  console.log(intro)

  return (
    <IndexPageTemplate
      introText={intro}
      images={images}
    />
  )
}

export default IndexPreview