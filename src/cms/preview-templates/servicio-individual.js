import React from 'react'
import { ServicioIndividualPageTemplate } from '../../templates/servicio-individual'
import marked from 'marked'

const ServiciosPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title'])
  const html = marked(entry.getIn(['data', 'body']))

  return (
    <ServicioIndividualPageTemplate
      title={title}
      html={html}
    />
  )
}

export default ServiciosPreview