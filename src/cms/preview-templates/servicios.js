import React from 'react'
import { ServiciosPageTemplate } from '../../templates/servicios'
import { getIntro } from '../utils'

const ServiciosPreview = ({ entry, getAsset }) => {
  const header = getIntro(entry, getAsset)

  const title = entry.getIn(['data', 'title'])

  const entryProvincias = entry.getIn(['data', 'provincias'])
  const provincias = entryProvincias ? entryProvincias.toJS() : []

  return (
    <ServiciosPageTemplate
      title={title}
      header={header}
      provincias={provincias}
      noAnim
    />
  )
}

export default ServiciosPreview