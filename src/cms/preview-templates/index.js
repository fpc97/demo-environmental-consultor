import React from 'react'
import { IndexPageTemplate } from '../../templates/index'

const IndexPreview = ({ entry }) => {
  const phrase = entry.getIn(['data', 'phrase'])
  const images = entry.getIn(['data', 'slideshow'])

  return (
    <IndexPageTemplate
      phrase={phrase}
      images={images}
    />
  )
}

export default IndexPreview