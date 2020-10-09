import React from 'react'
import { ServiciosPageTemplate } from '../../templates/servicios'
import { getIntro } from '../utils'

const ServiciosPreview = ({ entry, getAsset }) => {
  const intro = getIntro(entry, getAsset)

  const title = entry.getIn(['data', 'title'])

  const entryProvincias = entry.getIn(['data', 'provincias'])
  const provincias = entryProvincias ? entryProvincias.toJS() : []

  return (
    <ServiciosPageTemplate
      title={title}
      intro={intro}
      provincias={provincias}
      noAnim
    />
  )
}

export default ServiciosPreview