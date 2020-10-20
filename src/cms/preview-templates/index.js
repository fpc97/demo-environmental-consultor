import React from 'react'
import { IndexPageTemplate } from '../../templates/index'
import { getIntro } from '../utils'

const IndexPreview = ({ entry, getAsset }) => {
  const intro = getIntro(entry, getAsset)
  const images = entry.getIn(['data', 'slideshow'])

  return (
    <IndexPageTemplate
      intro={intro}
      images={images}
    />
  )
}

export default IndexPreview